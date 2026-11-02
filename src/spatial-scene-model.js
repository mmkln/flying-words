export const SpatialSceneLevel = Object.freeze({
  OVERVIEW: 'overview',
  CLUSTER: 'cluster',
  DETAIL: 'detail',
});

const CLUSTER_LABEL_LIMIT = 42;

function endpointId(endpoint, fallbackId) {
  return typeof endpoint === 'object' && endpoint ? endpoint.id : fallbackId;
}
function firstParagraph(value) {
  return String(value || '').trim().split(/\n+/)[0].trim();
}

function truncateLabel(value, limit = CLUSTER_LABEL_LIMIT) {
  const text = firstParagraph(value);
  if (text.length <= limit) return text;
  return `${text.slice(0, Math.max(1, limit - 1)).trimEnd()}…`;
}

function visualClusterRadius(nodeCount) {
  return Math.min(62, 18 + Math.sqrt(Math.max(1, nodeCount)) * 4.2);
}

function normalizeSceneState(state) {
  if (state?.level === SpatialSceneLevel.CLUSTER && state.clusterId) {
    return { level: SpatialSceneLevel.CLUSTER, clusterId: state.clusterId };
  }
  if (state?.level === SpatialSceneLevel.DETAIL) {
    return { level: SpatialSceneLevel.DETAIL };
  }
  return { level: SpatialSceneLevel.OVERVIEW };
}

export function createSpatialOverviewScene() {
  return { level: SpatialSceneLevel.OVERVIEW };
}

export function createSpatialClusterScene(clusterId) {
  return clusterId
    ? { level: SpatialSceneLevel.CLUSTER, clusterId }
    : createSpatialOverviewScene();
}

export function createSpatialDetailScene() {
  return { level: SpatialSceneLevel.DETAIL };
}

function createClusterPresentation(cluster, nodeById, links) {
  const memberIds = new Set(cluster.nodeIds);
  const degree = new Map(cluster.nodeIds.map((id) => [id, 0]));

  links.forEach((link) => {
    const sourceId = endpointId(link.source, link.sourceId);
    const targetId = endpointId(link.target, link.targetId);
    if (!memberIds.has(sourceId) || !memberIds.has(targetId)) return;
    degree.set(sourceId, (degree.get(sourceId) || 0) + 1);
    degree.set(targetId, (degree.get(targetId) || 0) + 1);
  });

  const representativeId = [...degree]
    .sort((first, second) => second[1] - first[1] || first[0].localeCompare(second[0]))
    [0]?.[0] || cluster.nodeIds[0] || null;
  const representative = nodeById.get(representativeId);
  const label = cluster.id === 'cluster:unlinked'
    ? 'Unlinked thoughts'
    : truncateLabel(representative?.text) || 'Thought cluster';

  return {
    id: cluster.id,
    label,
    count: cluster.nodeIds.length,
    representativeId,
    nodeIds: cluster.nodeIds,
    x: cluster.anchor?.x || 0,
    y: cluster.anchor?.y || 0,
    z: cluster.anchor?.z || 0,
    radius: visualClusterRadius(cluster.nodeIds.length),
    opacity: 1,
  };
}

function clusterPresentations(clusterPlan, nodeById, links) {
  return (clusterPlan?.clusters || []).map((cluster) => (
    createClusterPresentation(cluster, nodeById, links)
  ));
}

function detailScene(nodes, links) {
  return {
    state: createSpatialDetailScene(),
    thoughtIds: new Set(nodes.map(({ id }) => id)),
    thoughtLinks: links,
    clusters: [],
    clusterAnchors: [],
    clusterLinks: [],
    summary: null,
  };
}

/**
 * Creates a visual projection of the current graph without changing semantic
 * nodes, links, or the force layout. Cluster proxies exist only in this model.
 */
export function buildSpatialScene({
  nodes = [],
  links = [],
  clusterPlan = null,
  sceneState = createSpatialOverviewScene(),
  forcedThoughtIds = [],
} = {}) {
  const normalizedState = normalizeSceneState(sceneState);
  if (
    normalizedState.level === SpatialSceneLevel.DETAIL
    || !clusterPlan?.clusters?.length
  ) return detailScene(nodes, links);

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const presentations = clusterPresentations(clusterPlan, nodeById, links);
  const presentationById = new Map(
    presentations.map((cluster) => [cluster.id, cluster]),
  );

  if (normalizedState.level === SpatialSceneLevel.OVERVIEW) {
    return {
      state: createSpatialOverviewScene(),
      thoughtIds: new Set(),
      thoughtLinks: [],
      clusters: presentations,
      clusterAnchors: presentations,
      clusterLinks: clusterPlan.interClusterLinks || [],
      summary: null,
    };
  }

  const selectedCluster = presentationById.get(normalizedState.clusterId);
  if (!selectedCluster) {
    return {
      state: createSpatialOverviewScene(),
      thoughtIds: new Set(),
      thoughtLinks: [],
      clusters: presentations,
      clusterAnchors: presentations,
      clusterLinks: clusterPlan.interClusterLinks || [],
      summary: null,
    };
  }

  const thoughtIds = new Set([
    ...selectedCluster.nodeIds,
    ...forcedThoughtIds.filter((id) => nodeById.has(id)),
  ]);
  const connectedClusterIds = new Set();
  const clusterLinks = (clusterPlan.interClusterLinks || []).filter((link) => {
    const connected = (
      link.source === selectedCluster.id
      || link.target === selectedCluster.id
    );
    if (!connected) return false;
    connectedClusterIds.add(
      link.source === selectedCluster.id ? link.target : link.source,
    );
    return true;
  });

  const neighbourClusters = presentations
    .filter((cluster) => connectedClusterIds.has(cluster.id));

  return {
    state: createSpatialClusterScene(selectedCluster.id),
    thoughtIds,
    thoughtLinks: links.filter((link) => {
      const sourceId = endpointId(link.source, link.sourceId);
      const targetId = endpointId(link.target, link.targetId);
      return thoughtIds.has(sourceId) && thoughtIds.has(targetId);
    }),
    clusters: neighbourClusters.map((cluster) => ({ ...cluster, opacity: 0.2 })),
    clusterAnchors: [selectedCluster, ...neighbourClusters],
    clusterLinks,
    summary: {
      label: selectedCluster.label,
      count: selectedCluster.count,
    },
  };
}

