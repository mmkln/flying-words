import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
} from 'd3-force-3d';
import { UndirectedGraph } from 'graphology';
import louvain from 'graphology-communities-louvain';

import {
  SpatialLayoutMode,
  normalizeSpatialLayoutMode,
} from './spatial-layout-mode.js';

const CLUSTER_GAP = 180;
const CLUSTER_RESOLUTION = 1.12;
const CLUSTER_LAYOUT_TICKS = 220;

const KNOWLEDGE_LAYER_Z = Object.freeze({
  question: -360,
  thought: -120,
  observation: -120,
  hypothesis: 120,
  excerpt: 180,
  quote: 260,
  link: 320,
  research_result: 380,
});

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createSeededRandom(seed) {
  let state = hashString(seed) || 1;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function finiteNode(node) {
  return Boolean(node && typeof node.id === 'string' && node.id);
}

function canonicalPair(firstId, secondId) {
  return firstId < secondId
    ? `${firstId}:${secondId}`
    : `${secondId}:${firstId}`;
}

function clusterRadius(nodeCount) {
  return 120 + Math.sqrt(Math.max(1, nodeCount)) * 42;
}

function seedClusterPosition(clusterId, index, clusterCount) {
  const first = hashString(`${clusterId}:longitude`) / 0xffffffff;
  const second = hashString(`${clusterId}:latitude`) / 0xffffffff;
  const radius = 360 + Math.sqrt(clusterCount + 1) * 180 + Math.sqrt(index + 1) * 54;
  const longitude = first * Math.PI * 2;
  const latitude = Math.acos(2 * second - 1);

  return {
    x: Math.sin(latitude) * Math.cos(longitude) * radius,
    y: Math.cos(latitude) * radius,
    z: Math.sin(latitude) * Math.sin(longitude) * radius,
  };
}

function separationDirection(firstId, secondId) {
  const first = hashString(`${firstId}:${secondId}:x`) / 0xffffffff;
  const second = hashString(`${firstId}:${secondId}:y`) / 0xffffffff;
  const longitude = first * Math.PI * 2;
  const latitude = Math.acos(2 * second - 1);
  return {
    x: Math.sin(latitude) * Math.cos(longitude),
    y: Math.cos(latitude),
    z: Math.sin(latitude) * Math.sin(longitude),
  };
}

function separateClusterAnchors(anchors) {
  for (let pass = 0; pass < 16; pass += 1) {
    let moved = false;

    for (let firstIndex = 0; firstIndex < anchors.length; firstIndex += 1) {
      const first = anchors[firstIndex];
      for (let secondIndex = firstIndex + 1; secondIndex < anchors.length; secondIndex += 1) {
        const second = anchors[secondIndex];
        let dx = second.x - first.x;
        let dy = second.y - first.y;
        let dz = second.z - first.z;
        let distance = Math.hypot(dx, dy, dz);
        const minimumDistance = first.radius + second.radius + CLUSTER_GAP;

        if (distance >= minimumDistance) continue;
        if (distance < 0.001) {
          const direction = separationDirection(first.id, second.id);
          dx = direction.x;
          dy = direction.y;
          dz = direction.z;
          distance = 1;
        }

        const shift = (minimumDistance - distance) / 2;
        const ratio = shift / distance;
        first.x -= dx * ratio;
        first.y -= dy * ratio;
        first.z -= dz * ratio;
        second.x += dx * ratio;
        second.y += dy * ratio;
        second.z += dz * ratio;
        moved = true;
      }
    }

    if (!moved) break;
  }

  const centre = anchors.reduce(
    (total, anchor) => ({
      x: total.x + anchor.x,
      y: total.y + anchor.y,
      z: total.z + anchor.z,
    }),
    { x: 0, y: 0, z: 0 },
  );
  const count = Math.max(1, anchors.length);
  anchors.forEach((anchor) => {
    anchor.x -= centre.x / count;
    anchor.y -= centre.y / count;
    anchor.z -= centre.z / count;
  });
}

function layoutClusterAnchors(clusters, interClusterLinks) {
  const anchors = clusters.map((cluster, index) => ({
    id: cluster.id,
    radius: cluster.radius,
    ...seedClusterPosition(cluster.id, index, clusters.length),
  }));
  if (anchors.length < 2) return anchors;

  const anchorById = new Map(anchors.map((anchor) => [anchor.id, anchor]));
  const links = interClusterLinks.map((link) => ({ ...link }));
  const linkForce = forceLink(links)
    .id((anchor) => anchor.id)
    .distance((link) => (
      link.source.radius + link.target.radius + CLUSTER_GAP * 1.7
    ))
    .strength((link) => Math.min(0.18, 0.06 + link.weight * 0.025));

  const simulation = forceSimulation(anchors, 3)
    .randomSource(createSeededRandom(clusters.map(({ id }) => id).join('|')))
    .force('links', linkForce)
    .force('charge', forceManyBody().strength(-1_150).distanceMax(5_000))
    .force('collision', forceCollide()
      .radius((anchor) => anchor.radius + CLUSTER_GAP)
      .strength(1)
      .iterations(2))
    .force('center', forceCenter(0, 0, 0).strength(0.1))
    .velocityDecay(0.48)
    .stop();

  simulation.tick(CLUSTER_LAYOUT_TICKS);
  separateClusterAnchors(anchors);
  return clusters.map(({ id }) => anchorById.get(id));
}

function buildGraph(nodeIds, links) {
  const graph = new UndirectedGraph();
  nodeIds.forEach((id) => graph.addNode(id));

  const deduplicated = new Set();
  links.forEach(({ sourceId, targetId }) => {
    if (sourceId === targetId) return;
    const key = canonicalPair(sourceId, targetId);
    if (deduplicated.has(key)) return;
    deduplicated.add(key);
    graph.addEdge(sourceId, targetId, { weight: 1 });
  });

  return graph;
}

function buildClusterMembers(graph, nodeIds) {
  const isolatedIds = nodeIds.filter((id) => graph.degree(id) === 0);
  const communities = louvain(graph, {
    randomWalk: false,
    resolution: CLUSTER_RESOLUTION,
  });
  const membersByCommunity = new Map();

  nodeIds.forEach((id) => {
    if (graph.degree(id) === 0) return;
    const community = String(communities[id]);
    const members = membersByCommunity.get(community) || [];
    members.push(id);
    membersByCommunity.set(community, members);
  });

  const clusters = [...membersByCommunity.values()]
    .map((nodeIdsInCluster) => nodeIdsInCluster.sort())
    .map((nodeIdsInCluster) => ({
      id: `cluster:${nodeIdsInCluster[0]}`,
      nodeIds: nodeIdsInCluster,
    }));

  if (isolatedIds.length) {
    clusters.push({ id: 'cluster:unlinked', nodeIds: isolatedIds.sort() });
  }

  return clusters.sort((first, second) => first.id.localeCompare(second.id));
}

function createInterClusterLinks(links, clusterByNodeId) {
  const byPair = new Map();
  links.forEach(({ sourceId, targetId }) => {
    const sourceClusterId = clusterByNodeId.get(sourceId)?.id;
    const targetClusterId = clusterByNodeId.get(targetId)?.id;
    if (!sourceClusterId || !targetClusterId || sourceClusterId === targetClusterId) return;

    const key = canonicalPair(sourceClusterId, targetClusterId);
    const existing = byPair.get(key);
    if (existing) {
      existing.weight += 1;
      return;
    }
    byPair.set(key, {
      source: sourceClusterId,
      target: targetClusterId,
      weight: 1,
    });
  });

  return [...byPair.values()];
}

function nodeLayoutAnchor(node, cluster, mode) {
  if (mode !== SpatialLayoutMode.KNOWLEDGE_LAYERS) return { ...cluster.anchor };
  return {
    x: cluster.anchor.x,
    y: cluster.anchor.y,
    z: KNOWLEDGE_LAYER_Z[node.kind] || 0,
  };
}

/**
 * Ignores transient physics coordinates so a text edit does not rerun Louvain.
 * Kind remains part of the key because it changes the Knowledge layers depth.
 */
export function spatialClusterPlanKey(
  sourceNodes = [],
  sourceLinks = [],
  layoutMode = SpatialLayoutMode.CONSTELLATIONS,
) {
  const mode = normalizeSpatialLayoutMode(layoutMode);
  const nodesById = new Map(
    sourceNodes
      .filter(finiteNode)
      .map(({ id, kind }) => [id, kind || 'thought']),
  );
  const nodeEntries = [...nodesById.entries()]
    .map(([id, kind]) => `${id}:${kind}`)
    .sort();
  const knownIds = new Set(nodesById.keys());
  const links = sourceLinks
    .filter(({ sourceId, targetId }) => (
      typeof sourceId === 'string'
      && typeof targetId === 'string'
      && sourceId !== targetId
      && knownIds.has(sourceId)
      && knownIds.has(targetId)
    ))
    .map(({ sourceId, targetId }) => canonicalPair(sourceId, targetId))
    .sort();

  return `${mode}|${nodeEntries.join(',')}|${links.join(',')}`;
}

/**
 * Derives visual-only group anchors from the current graph. None of these
 * fields are persisted: semantic links stay the single source of truth.
 */
export function buildSpatialClusterPlan(
  sourceNodes = [],
  sourceLinks = [],
  layoutMode = SpatialLayoutMode.CONSTELLATIONS,
) {
  const mode = normalizeSpatialLayoutMode(layoutMode);
  const nodes = sourceNodes.filter(finiteNode);
  const nodeIds = [...new Set(nodes.map(({ id }) => id))].sort();
  const knownIds = new Set(nodeIds);
  const links = sourceLinks.filter(({ sourceId, targetId }) => (
    typeof sourceId === 'string'
    && typeof targetId === 'string'
    && sourceId !== targetId
    && knownIds.has(sourceId)
    && knownIds.has(targetId)
  ));

  if (!nodeIds.length) {
    return {
      clusters: [],
      clusterByNodeId: new Map(),
      interClusterLinks: [],
      nodeLayoutById: new Map(),
    };
  }

  const graph = buildGraph(nodeIds, links);
  const clusters = buildClusterMembers(graph, nodeIds)
    .map((cluster) => ({
      ...cluster,
      radius: clusterRadius(cluster.nodeIds.length),
    }));
  const clusterByNodeId = new Map();
  clusters.forEach((cluster) => {
    cluster.nodeIds.forEach((nodeId) => clusterByNodeId.set(nodeId, cluster));
  });
  const interClusterLinks = createInterClusterLinks(links, clusterByNodeId);
  const anchors = layoutClusterAnchors(clusters, interClusterLinks);
  const anchorById = new Map(anchors.map((anchor) => [anchor.id, anchor]));
  clusters.forEach((cluster) => {
    cluster.anchor = anchorById.get(cluster.id) || { x: 0, y: 0, z: 0 };
  });

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const nodeLayoutById = new Map(nodeIds.map((nodeId) => {
    const cluster = clusterByNodeId.get(nodeId);
    const node = nodeById.get(nodeId);
    return [nodeId, {
      clusterId: cluster.id,
      clusterAnchor: nodeLayoutAnchor(node, cluster, mode),
    }];
  }));

  return {
    clusters,
    clusterByNodeId,
    interClusterLinks,
    nodeLayoutById,
  };
}

export function extendSpatialClusterPlan(
  previousPlan,
  {
    node,
    anchorNodeId,
    mode = SpatialLayoutMode.CONSTELLATIONS,
  } = {},
) {
  const anchorCluster = previousPlan?.clusterByNodeId?.get(anchorNodeId);
  const anchorLayout = previousPlan?.nodeLayoutById?.get(anchorNodeId);
  if (!anchorCluster || !anchorLayout || !finiteNode(node)) return null;

  const normalizedMode = normalizeSpatialLayoutMode(mode);
  if (anchorCluster.id === 'cluster:unlinked') {
    const remainingNodeIds = anchorCluster.nodeIds
      .filter((nodeId) => nodeId !== anchorNodeId);
    const linkedNodeIds = [anchorNodeId, node.id].sort();
    const linkedCluster = {
      ...anchorCluster,
      id: `cluster:${linkedNodeIds[0]}`,
      nodeIds: linkedNodeIds,
      radius: clusterRadius(linkedNodeIds.length),
      anchor: { ...anchorCluster.anchor },
    };
    const remainingCluster = remainingNodeIds.length
      ? {
          ...anchorCluster,
          nodeIds: remainingNodeIds,
          radius: clusterRadius(remainingNodeIds.length),
        }
      : null;
    const clusters = previousPlan.clusters
      .filter((cluster) => cluster.id !== anchorCluster.id)
      .concat(remainingCluster ? [remainingCluster, linkedCluster] : [linkedCluster])
      .sort((first, second) => first.id.localeCompare(second.id));
    const clusterByNodeId = new Map(previousPlan.clusterByNodeId);
    remainingNodeIds.forEach((nodeId) => clusterByNodeId.set(nodeId, remainingCluster));
    linkedNodeIds.forEach((nodeId) => clusterByNodeId.set(nodeId, linkedCluster));
    const nodeLayoutById = new Map(previousPlan.nodeLayoutById);
    nodeLayoutById.set(anchorNodeId, {
      ...anchorLayout,
      clusterId: linkedCluster.id,
    });
    nodeLayoutById.set(node.id, {
      clusterId: linkedCluster.id,
      clusterAnchor: nodeLayoutAnchor(node, linkedCluster, normalizedMode),
    });

    return {
      ...previousPlan,
      clusters,
      clusterByNodeId,
      nodeLayoutById,
    };
  }

  const nodeIds = [...new Set([...anchorCluster.nodeIds, node.id])].sort();
  const nextCluster = {
    ...anchorCluster,
    nodeIds,
    radius: clusterRadius(nodeIds.length),
  };
  const clusters = previousPlan.clusters.map((cluster) => (
    cluster.id === nextCluster.id ? nextCluster : cluster
  ));
  const clusterByNodeId = new Map(previousPlan.clusterByNodeId);
  nodeIds.forEach((nodeId) => clusterByNodeId.set(nodeId, nextCluster));
  const nodeLayoutById = new Map(previousPlan.nodeLayoutById);
  nodeLayoutById.set(node.id, {
    clusterId: nextCluster.id,
    clusterAnchor: nodeLayoutAnchor(
      node,
      nextCluster,
      normalizedMode,
    ),
  });

  return {
    ...previousPlan,
    clusters,
    clusterByNodeId,
    nodeLayoutById,
  };
}

export { KNOWLEDGE_LAYER_Z };
