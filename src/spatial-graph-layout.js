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
  spatialClusterPlanKey,
} from './spatial-clusters.js';
import { normalizeSpatialLayoutMode } from './spatial-layout-mode.js';

const LINK_DISTANCE = Object.freeze({
  tight: 72,
  normal: 118,
  loose: 190,
});

const CROSS_CLUSTER_DISTANCE = 460;

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
    .on('end', () => onStable(nodes));

  function setGraph(graph = {}) {
    if (disposed) return;
    const previousById = new Map(nodes.map((node) => [node.id, node]));
    const sourceNodes = Array.isArray(graph.nodes) ? graph.nodes : [];
    const sourceLinks = Array.isArray(graph.links) ? graph.links : [];
    const layoutMode = normalizeSpatialLayoutMode(graph.layoutMode);
    const nextClusterPlanKey = spatialClusterPlanKey(sourceNodes, sourceLinks, layoutMode);
    if (nextClusterPlanKey !== clusterPlanKey) {
      clusterPlan = buildSpatialClusterPlan(sourceNodes, sourceLinks, layoutMode);
      clusterPlanKey = nextClusterPlanKey;
    }

    nodes = sourceNodes.map((source, index) => {
      const previous = previousById.get(source.id);
      const clusterLayout = clusterPlan.nodeLayoutById.get(source.id);
      const pinnedPosition = finitePosition(source.pinnedPosition)
        ? source.pinnedPosition
        : null;
      const initial = pinnedPosition
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
      onStable(nodes);
      return;
    }

    simulation.alpha(0.9).alphaTarget(0).restart();
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
  }

  function dispose() {
    disposed = true;
    simulation.stop();
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
