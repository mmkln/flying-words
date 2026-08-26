import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  forceZ,
} from 'd3-force-3d';

import {
  buildSpatialClusterPlan,
  extendSpatialClusterPlan,
  spatialClusterPlanKey,
} from './spatial-clusters.js';
import { normalizeSpatialLayoutMode } from './spatial-layout-mode.js';
import {
  SpatialGraphTransitionKind,
  normalizeSpatialGraphTransition,
} from './spatial-graph-transition.js';

const LINK_DISTANCE = Object.freeze({
  tight: 72,
  normal: 118,
  loose: 190,
});

const CROSS_CLUSTER_DISTANCE = 460;
const LINKED_NODE_ENTRY_OFFSET = Object.freeze({ x: 72, y: -36, z: 48 });
const LINKED_NODE_ALPHA = 0.22;
const DEFAULT_LAYOUT_ALPHA = 0.9;

function finitePosition(value) {
  return Boolean(
    value
    && Number.isFinite(value.x)
    && Number.isFinite(value.y)
    && Number.isFinite(value.z),
  );
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function seedSpatialPosition(id, index = 0) {
  const first = hashString(`${id}:x`) / 0xffffffff;
  const second = hashString(`${id}:y`) / 0xffffffff;
  const radius = 42 + Math.sqrt(index + 1) * 18;
  const longitude = first * Math.PI * 2;
  const latitude = Math.acos(2 * second - 1);

  return {
    x: Math.sin(latitude) * Math.cos(longitude) * radius,
    y: Math.cos(latitude) * radius,
    z: Math.sin(latitude) * Math.sin(longitude) * radius,
  };
}

export function createSpatialGraphLayout({
  onTick = () => {},
  onStable = () => {},
} = {}) {
  let nodes = [];
  let links = [];
  let clusterPlan = null;
  let clusterPlanKey = null;
  let activeTransition = null;
  const transientConstraintIds = new Set();
  let disposed = false;

  const linkForce = forceLink([])
    .id((node) => node.id)
    .distance((link) => (
      link.internal
        ? LINK_DISTANCE[link.spacing] || LINK_DISTANCE.normal
        : CROSS_CLUSTER_DISTANCE
    ))
    .strength((link) => (link.internal ? 0.56 : 0.1));

  const simulation = forceSimulation([], 3)
    .force('links', linkForce)
    .force('charge', forceManyBody().strength(-58).distanceMax(620))
    .force('collision', forceCollide().radius((node) => node.radius + 8).strength(0.86))
    .force('cluster-x', forceX((node) => node.clusterAnchor.x).strength(0.026))
    .force('cluster-y', forceY((node) => node.clusterAnchor.y).strength(0.026))
    .force('cluster-z', forceZ((node) => node.clusterAnchor.z).strength(0.026))
    .alphaDecay(0.035)
    .velocityDecay(0.42)
    .on('tick', () => onTick(nodes, links))
    .on('end', () => {
      const transition = completeTransition();
      onStable(nodes, { transition });
    });

  function releaseTransientConstraints() {
    transientConstraintIds.forEach((nodeId) => {
      const node = nodes.find((candidate) => candidate.id === nodeId);
      if (!node || node.pinned) return;
      node.fx = null;
      node.fy = null;
      node.fz = null;
      node.vx = 0;
      node.vy = 0;
      node.vz = 0;
    });
    transientConstraintIds.clear();
  }

  function completeTransition() {
    const completedTransition = activeTransition;
    releaseTransientConstraints();
    activeTransition = null;
    return completedTransition;
  }

  function setGraph(graph = {}, options = {}) {
    if (disposed) return;
    completeTransition();

    const previousById = new Map(nodes.map((node) => [node.id, node]));
    const sourceNodes = Array.isArray(graph.nodes) ? graph.nodes : [];
    const sourceLinks = Array.isArray(graph.links) ? graph.links : [];
    const sourceNodeIds = new Set(sourceNodes.map((node) => node.id));
    const layoutMode = normalizeSpatialLayoutMode(graph.layoutMode);
    const requestedTransition = normalizeSpatialGraphTransition(options.transition);
    const insertedNode = sourceNodes.find((node) => node.id === requestedTransition.nodeId);
    const anchorNode = previousById.get(requestedTransition.anchorId);
    const keepsExistingNodes = [...previousById.keys()]
      .every((nodeId) => sourceNodeIds.has(nodeId));
    const containsNewLink = sourceLinks.some(({ sourceId, targetId }) => (
      (
        sourceId === requestedTransition.anchorId
        && targetId === requestedTransition.nodeId
      )
      || (
        targetId === requestedTransition.anchorId
        && sourceId === requestedTransition.nodeId
      )
    ));
    const validLinkedInsertion = (
      requestedTransition.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE
      && insertedNode
      && anchorNode
      && !previousById.has(insertedNode.id)
      && sourceNodes.length === previousById.size + 1
      && keepsExistingNodes
      && containsNewLink
    );
    activeTransition = validLinkedInsertion
      ? requestedTransition
      : {
          kind: requestedTransition.kind === SpatialGraphTransitionKind.REBUILD
            ? SpatialGraphTransitionKind.REBUILD
            : SpatialGraphTransitionKind.RECONCILE,
        };

    const nextClusterPlanKey = spatialClusterPlanKey(sourceNodes, sourceLinks, layoutMode);
    if (
      activeTransition.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE
      && clusterPlan
    ) {
      const extendedPlan = extendSpatialClusterPlan(clusterPlan, {
        node: insertedNode,
        anchorNodeId: activeTransition.anchorId,
        mode: layoutMode,
      });
      if (extendedPlan) {
        clusterPlan = extendedPlan;
        clusterPlanKey = nextClusterPlanKey;
      } else {
        activeTransition = { kind: SpatialGraphTransitionKind.RECONCILE };
      }
    }
    if (
      activeTransition.kind === SpatialGraphTransitionKind.REBUILD
      || nextClusterPlanKey !== clusterPlanKey
    ) {
      clusterPlan = buildSpatialClusterPlan(sourceNodes, sourceLinks, layoutMode);
      clusterPlanKey = nextClusterPlanKey;
    }

    nodes = sourceNodes.map((source, index) => {
      const previous = previousById.get(source.id);
      const clusterLayout = clusterPlan.nodeLayoutById.get(source.id);
      const pinnedPosition = finitePosition(source.pinnedPosition)
        ? source.pinnedPosition
        : null;
      const insertionPosition = (
        activeTransition.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE
        && source.id === activeTransition.nodeId
        && anchorNode
      )
        ? {
            x: anchorNode.x + LINKED_NODE_ENTRY_OFFSET.x,
            y: anchorNode.y + LINKED_NODE_ENTRY_OFFSET.y,
            z: anchorNode.z + LINKED_NODE_ENTRY_OFFSET.z,
          }
        : null;
      const preservedPosition = (
        activeTransition.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE
        && finitePosition(previous)
      )
        ? previous
        : null;
      const initial = pinnedPosition
        || insertionPosition
        || preservedPosition
        || (finitePosition(source) ? source : null)
        || (finitePosition(previous) ? previous : null)
        || seedSpatialPosition(source.id, index);
      const pinned = pinnedPosition?.pinned === true;

      return {
        ...source,
        clusterId: clusterLayout?.clusterId || 'cluster:unlinked',
        clusterAnchor: clusterLayout?.clusterAnchor || { x: 0, y: 0, z: 0 },
        x: initial.x,
        y: initial.y,
        z: initial.z,
        vx: Number.isFinite(previous?.vx) ? previous.vx : 0,
        vy: Number.isFinite(previous?.vy) ? previous.vy : 0,
        vz: Number.isFinite(previous?.vz) ? previous.vz : 0,
        pinned,
        fx: pinned ? initial.x : null,
        fy: pinned ? initial.y : null,
        fz: pinned ? initial.z : null,
      };
    });

    if (activeTransition.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE) {
      nodes.forEach((node) => {
        if (
          node.id === activeTransition.nodeId
          || node.pinned
          || !previousById.has(node.id)
        ) return;
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
        transientConstraintIds.add(node.id);
      });
    }

    const knownIds = new Set(nodes.map((node) => node.id));
    const nodeById = new Map(nodes.map((node) => [node.id, node]));
    links = sourceLinks
      .filter((link) => (
        knownIds.has(link.sourceId)
        && knownIds.has(link.targetId)
        && link.sourceId !== link.targetId
      ))
      .map((link) => ({
        ...link,
        internal: (
          nodeById.get(link.sourceId).clusterId
          === nodeById.get(link.targetId).clusterId
        ),
        source: link.sourceId,
        target: link.targetId,
      }));

    simulation.nodes(nodes);
    linkForce.links(links);
    if (!nodes.length) {
      simulation.stop();
      onTick(nodes, links);
      const transition = completeTransition();
      onStable(nodes, { transition });
      return;
    }

    const alpha = activeTransition.kind === SpatialGraphTransitionKind.INSERT_LINKED_NODE
      ? LINKED_NODE_ALPHA
      : DEFAULT_LAYOUT_ALPHA;
    simulation.alpha(alpha).alphaTarget(0).restart();
  }

  function getNode(nodeId) {
    return nodes.find((node) => node.id === nodeId) || null;
  }

  function beginDrag(nodeId) {
    const node = getNode(nodeId);
    if (!node || disposed) return null;

    node.fx = node.x;
    node.fy = node.y;
    node.fz = node.z;
    simulation.alphaTarget(0.16).restart();
    return node;
  }

  function dragNode(nodeId, position) {
    const node = getNode(nodeId);
    if (!node || !finitePosition(position)) return null;

    node.fx = position.x;
    node.fy = position.y;
    node.fz = position.z;
    node.x = position.x;
    node.y = position.y;
    node.z = position.z;
    onTick(nodes, links);
    return node;
  }

  function endDrag(nodeId, { pinned } = {}) {
    const node = getNode(nodeId);
    if (!node || disposed) return null;

    node.pinned = pinned ?? node.pinned;
    if (node.pinned) {
      node.fx = node.x;
      node.fy = node.y;
      node.fz = node.z;
    } else {
      node.fx = null;
      node.fy = null;
      node.fz = null;
    }

    simulation.alphaTarget(0).alpha(0.24).restart();
    return node;
  }

  function setPinned(nodeId, pinned) {
    const node = getNode(nodeId);
    if (!node || disposed) return null;
    node.pinned = Boolean(pinned);
    if (node.pinned) {
      node.fx = node.x;
      node.fy = node.y;
      node.fz = node.z;
    } else {
      node.fx = null;
      node.fy = null;
      node.fz = null;
    }
    simulation.alpha(0.28).restart();
    return node;
  }

  function reheat(alpha = 0.32) {
    if (!disposed && nodes.length) simulation.alpha(alpha).restart();
  }

  function stop() {
    simulation.stop();
    completeTransition();
  }

  function dispose() {
    disposed = true;
    simulation.stop();
    completeTransition();
    simulation.on('tick', null).on('end', null);
    nodes = [];
    links = [];
  }

  return {
    beginDrag,
    dispose,
    dragNode,
    endDrag,
    getLinks: () => links,
    getNode,
    getNodes: () => nodes,
    reheat,
    setGraph,
    setPinned,
    stop,
  };
}
