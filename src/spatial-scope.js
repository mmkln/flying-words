import {
  buildUndirectedAdjacency,
  collectNeighbourhoodIds,
} from './graph-neighbourhood.js';

export const SpatialScopeMode = Object.freeze({
  ALL: 'all',
  CONTEXT: 'context',
});

export const DEFAULT_SPATIAL_CONTEXT_DEPTH = 2;

function graphNodes(graph) {
  return Array.isArray(graph?.nodes) ? graph.nodes : [];
}

function graphLinks(graph) {
  return Array.isArray(graph?.links) ? graph.links : [];
}

export function createAllSpatialScope() {
  return { mode: SpatialScopeMode.ALL };
}

export function createContextSpatialScope(
  graph,
  rootId,
  depth = DEFAULT_SPATIAL_CONTEXT_DEPTH,
) {
  const rootExists = graphNodes(graph).some(({ id }) => id === rootId);
  if (!rootExists) return createAllSpatialScope();

  return {
    mode: SpatialScopeMode.CONTEXT,
    rootId,
    depth: Number.isFinite(depth) ? Math.max(0, Math.floor(depth)) : 0,
  };
}

export function getSpatialScopeIds(graph, scope) {
  const nodes = graphNodes(graph);
  const nodeIds = nodes.map(({ id }) => id);
  if (scope?.mode !== SpatialScopeMode.CONTEXT) return new Set(nodeIds);

  const adjacency = buildUndirectedAdjacency(nodeIds, graphLinks(graph));
  return collectNeighbourhoodIds(adjacency, scope.rootId, scope.depth);
}

export function applySpatialScope(graph, scope) {
  const nodes = graphNodes(graph);
  const links = graphLinks(graph);
  if (scope?.mode !== SpatialScopeMode.CONTEXT) {
    return { ...graph, nodes, links };
  }

  const visibleIds = getSpatialScopeIds(graph, scope);
  if (!visibleIds.has(scope.rootId)) return { ...graph, nodes, links };

  return {
    ...graph,
    nodes: nodes.filter(({ id }) => visibleIds.has(id)),
    links: links.filter(({ sourceId, targetId }) => (
      visibleIds.has(sourceId) && visibleIds.has(targetId)
    )),
  };
}
