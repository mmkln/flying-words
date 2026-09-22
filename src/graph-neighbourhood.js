function normalizeNodeIds(nodeIds) {
  return [...new Set(
    (Array.isArray(nodeIds) ? nodeIds : [])
      .filter((id) => typeof id === 'string' && id),
  )];
}

export function buildUndirectedAdjacency(nodeIds, links) {
  const normalizedIds = normalizeNodeIds(nodeIds);
  const knownIds = new Set(normalizedIds);
  const adjacency = new Map(normalizedIds.map((id) => [id, new Set()]));

  (Array.isArray(links) ? links : []).forEach(({ sourceId, targetId } = {}) => {
    if (
      sourceId === targetId
      || !knownIds.has(sourceId)
      || !knownIds.has(targetId)
    ) return;

    adjacency.get(sourceId).add(targetId);
    adjacency.get(targetId).add(sourceId);
  });

  return adjacency;
}

export function collectNeighbourhoodIds(adjacency, rootId, maxDepth = 2) {
  if (!(adjacency instanceof Map) || !adjacency.has(rootId)) return new Set();

  const depthLimit = Number.isFinite(maxDepth)
    ? Math.max(0, Math.floor(maxDepth))
    : 0;
  const visibleIds = new Set([rootId]);
  const queue = [{ id: rootId, depth: 0 }];

  for (let index = 0; index < queue.length; index += 1) {
    const { id, depth } = queue[index];
    if (depth >= depthLimit) continue;

    adjacency.get(id)?.forEach((neighbourId) => {
      if (visibleIds.has(neighbourId)) return;
      visibleIds.add(neighbourId);
      queue.push({ id: neighbourId, depth: depth + 1 });
    });
  }

  return visibleIds;
}

export function collectHiddenNeighbourIds(adjacency, thoughtId, visibleIds) {
  if (!(adjacency instanceof Map) || !adjacency.has(thoughtId)) return new Set();

  const visible = visibleIds instanceof Set
    ? visibleIds
    : new Set(visibleIds || []);
  return new Set(
    [...adjacency.get(thoughtId)].filter((id) => !visible.has(id)),
  );
}
