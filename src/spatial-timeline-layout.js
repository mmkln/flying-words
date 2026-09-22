import { buildSpatialClusterPlan } from './spatial-clusters.js';
import { SpatialLayoutMode } from './spatial-layout-mode.js';

const DAY = 24 * 60 * 60 * 1000;
const TIMELINE_BUCKET_CANDIDATES = [DAY, 7 * DAY, 30 * DAY, 90 * DAY, 365 * DAY];
const TARGET_BUCKET_COUNT = 24;
const TIMELINE_BUCKET_GAP = 260;
const TIMELINE_STRENGTH = Object.freeze({ x: 0.2, y: 0.035, z: 0.035 });
const TIMELINE_PHYSICS = Object.freeze({
  internalLinkStrength: 0.08,
  externalLinkStrength: 0.025,
  externalLinkDistance: 340,
});

function validNodes(sourceNodes) {
  const byId = new Map();
  (Array.isArray(sourceNodes) ? sourceNodes : []).forEach((node) => {
    if (typeof node?.id === 'string' && node.id && !byId.has(node.id)) {
      byId.set(node.id, node);
    }
  });
  return [...byId.values()].sort((first, second) => first.id.localeCompare(second.id));
}

function normalizedTimestamp(node) {
  return Number.isFinite(node?.createdAt) && node.createdAt > 0
    ? node.createdAt
    : null;
}

function canonicalPair(firstId, secondId) {
  return firstId < secondId
    ? `${firstId}\u0000${secondId}`
    : `${secondId}\u0000${firstId}`;
}

function chooseBucketSize(range) {
  const matching = TIMELINE_BUCKET_CANDIDATES.find(
    (candidate) => Math.ceil(range / candidate) <= TARGET_BUCKET_COUNT,
  );
  if (matching) return matching;
  return Math.max(DAY, Math.ceil(range / TARGET_BUCKET_COUNT / DAY) * DAY);
}

export function timelineLayoutPlanKey(sourceNodes = [], sourceLinks = []) {
  const nodes = validNodes(sourceNodes);
  const knownIds = new Set(nodes.map(({ id }) => id));
  const links = [...new Set(
    (Array.isArray(sourceLinks) ? sourceLinks : [])
      .filter(({ sourceId, targetId } = {}) => (
        sourceId !== targetId
        && knownIds.has(sourceId)
        && knownIds.has(targetId)
      ))
      .map(({ sourceId, targetId }) => canonicalPair(sourceId, targetId)),
  )].sort();
  return `timeline|${nodes
    .map((node) => `${node.id}:${normalizedTimestamp(node) ?? 'unknown'}`)
    .join(',')}|${links.join(',')}`;
}

export function buildTimelineLayoutPlan(sourceNodes = [], sourceLinks = []) {
  const nodes = validNodes(sourceNodes);
  const timestamps = nodes.map(normalizedTimestamp).filter(Number.isFinite);
  const minCreatedAt = timestamps.length ? Math.min(...timestamps) : null;
  const maxCreatedAt = timestamps.length ? Math.max(...timestamps) : null;
  const bucketSize = timestamps.length
    ? chooseBucketSize(Math.max(0, maxCreatedAt - minCreatedAt))
    : DAY;
  const maxBucket = timestamps.length
    ? Math.floor((maxCreatedAt - minCreatedAt) / bucketSize)
    : 0;
  const originBucket = maxBucket / 2;
  const unknownX = -(originBucket + 1.5) * TIMELINE_BUCKET_GAP;
  const communityPlan = buildSpatialClusterPlan(
    nodes,
    sourceLinks,
    SpatialLayoutMode.CONSTELLATIONS,
  );
  const nodeLayoutById = new Map();
  const bucketByNodeId = new Map();

  nodes.forEach((node) => {
    const timestamp = normalizedTimestamp(node);
    const bucket = timestamp === null
      ? null
      : Math.floor((timestamp - minCreatedAt) / bucketSize);
    const communityLayout = communityPlan.nodeLayoutById.get(node.id);
    const communityAnchor = communityLayout?.clusterAnchor || { y: 0, z: 0 };
    nodeLayoutById.set(node.id, {
      groupId: communityLayout?.clusterId || 'timeline:unlinked',
      layoutAnchor: {
        x: bucket === null
          ? unknownX
          : (bucket - originBucket) * TIMELINE_BUCKET_GAP,
        y: communityAnchor.y,
        z: communityAnchor.z,
      },
      layoutStrength: { ...TIMELINE_STRENGTH },
    });
    bucketByNodeId.set(node.id, bucket);
  });

  return {
    groups: communityPlan.clusters,
    nodeLayoutById,
    physics: { ...TIMELINE_PHYSICS },
    strategyState: {
      minCreatedAt,
      bucketSize,
      maxBucket,
      originBucket,
      unknownX,
      bucketByNodeId,
    },
  };
}

export function extendTimelineLayoutPlan(previousPlan, { node, anchorNodeId } = {}) {
  const state = previousPlan?.strategyState;
  if (!state || typeof node?.id !== 'string' || !node.id) return null;

  const timestamp = normalizedTimestamp(node);
  const bucket = timestamp === null || state.minCreatedAt === null
    ? null
    : Math.floor((timestamp - state.minCreatedAt) / state.bucketSize);
  const anchorLayout = previousPlan.nodeLayoutById.get(anchorNodeId);
  const nodeLayoutById = new Map(previousPlan.nodeLayoutById);
  nodeLayoutById.set(node.id, {
    groupId: anchorLayout?.groupId || 'timeline:unlinked',
    layoutAnchor: {
      x: bucket === null
        ? state.unknownX
        : (bucket - state.originBucket) * TIMELINE_BUCKET_GAP,
      y: anchorLayout?.layoutAnchor.y || 0,
      z: anchorLayout?.layoutAnchor.z || 0,
    },
    layoutStrength: { ...TIMELINE_STRENGTH },
  });
  const bucketByNodeId = new Map(state.bucketByNodeId || []);
  bucketByNodeId.set(node.id, bucket);

  return {
    ...previousPlan,
    nodeLayoutById,
    strategyState: {
      ...state,
      maxBucket: bucket === null ? state.maxBucket : Math.max(state.maxBucket, bucket),
      bucketByNodeId,
    },
  };
}

export { TIMELINE_BUCKET_GAP };
