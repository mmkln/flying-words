const HIERARCHY_LAYER_GAP = 220;
const HIERARCHY_NODE_GAP = 170;
const HIERARCHY_COMPONENT_GAP = 900;
const CYCLE_RADIUS = 58;

const HIERARCHY_STRENGTH = Object.freeze({ x: 0.055, y: 0.18, z: 0.055 });
const HIERARCHY_PHYSICS = Object.freeze({
  internalLinkStrength: 0.2,
  externalLinkStrength: 0.07,
  externalLinkDistance: 220,
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

function validLinks(sourceLinks, knownIds) {
  const seen = new Set();
  return (Array.isArray(sourceLinks) ? sourceLinks : [])
    .filter(({ sourceId, targetId } = {}) => (
      sourceId !== targetId
      && knownIds.has(sourceId)
      && knownIds.has(targetId)
    ))
    .filter(({ sourceId, targetId }) => {
      const key = `${sourceId}\u0000${targetId}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((first, second) => (
      first.sourceId.localeCompare(second.sourceId)
      || first.targetId.localeCompare(second.targetId)
    ));
}

function createAdjacency(nodeIds, links, reverse = false) {
  const adjacency = new Map(nodeIds.map((id) => [id, new Set()]));
  links.forEach(({ sourceId, targetId }) => {
    adjacency.get(reverse ? targetId : sourceId).add(reverse ? sourceId : targetId);
  });
  return new Map([...adjacency].map(([id, neighbours]) => [
    id,
    [...neighbours].sort(),
  ]));
}

// Iterative Kosaraju avoids overflowing the call stack on large knowledge graphs.
function findStronglyConnectedComponents(nodeIds, outgoing, incoming) {
  const visited = new Set();
  const finishingOrder = [];

  nodeIds.forEach((rootId) => {
    if (visited.has(rootId)) return;
    visited.add(rootId);
    const stack = [{ id: rootId, nextIndex: 0 }];

    while (stack.length) {
      const frame = stack[stack.length - 1];
      const neighbours = outgoing.get(frame.id) || [];
      if (frame.nextIndex < neighbours.length) {
        const neighbourId = neighbours[frame.nextIndex];
        frame.nextIndex += 1;
        if (visited.has(neighbourId)) continue;
        visited.add(neighbourId);
        stack.push({ id: neighbourId, nextIndex: 0 });
        continue;
      }
      finishingOrder.push(frame.id);
      stack.pop();
    }
  });

  const assigned = new Set();
  const components = [];
  finishingOrder.reverse().forEach((rootId) => {
    if (assigned.has(rootId)) return;
    assigned.add(rootId);
    const members = [];
    const stack = [rootId];
    while (stack.length) {
      const nodeId = stack.pop();
      members.push(nodeId);
      (incoming.get(nodeId) || []).forEach((neighbourId) => {
        if (assigned.has(neighbourId)) return;
        assigned.add(neighbourId);
        stack.push(neighbourId);
      });
    }
    members.sort();
    components.push({ id: `hierarchy:${members[0]}`, nodeIds: members });
  });

  return components.sort((first, second) => first.id.localeCompare(second.id));
}

function orderLayers(componentIds, outgoing, incoming, rankByComponentId) {
  const layers = new Map();
  componentIds.forEach((componentId) => {
    const rank = rankByComponentId.get(componentId) || 0;
    const ids = layers.get(rank) || [];
    ids.push(componentId);
    layers.set(rank, ids);
  });
  layers.forEach((ids) => ids.sort());

  const ranks = [...layers.keys()].sort((first, second) => first - second);
  for (let pass = 0; pass < 4; pass += 1) {
    const position = new Map();
    ranks.forEach((rank) => {
      layers.get(rank).forEach((id, index) => position.set(id, index));
    });

    const sweep = pass % 2 === 0 ? ranks : [...ranks].reverse();
    sweep.forEach((rank) => {
      const ids = layers.get(rank);
      const neighboursFor = pass % 2 === 0 ? incoming : outgoing;
      ids.sort((first, second) => {
        const barycenter = (id) => {
          const positions = [...(neighboursFor.get(id) || [])]
            .map((neighbourId) => position.get(neighbourId))
            .filter(Number.isFinite);
          if (!positions.length) return position.get(id) || 0;
          return positions.reduce((total, value) => total + value, 0) / positions.length;
        };
        return barycenter(first) - barycenter(second) || first.localeCompare(second);
      });
    });
  }

  return layers;
}

function hashUnit(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 0xffffffff;
}

export function hierarchyLayoutPlanKey(sourceNodes = [], sourceLinks = []) {
  const nodes = validNodes(sourceNodes);
  const knownIds = new Set(nodes.map(({ id }) => id));
  const links = validLinks(sourceLinks, knownIds);
  return `hierarchy|${nodes.map(({ id }) => id).join(',')}|${links
    .map(({ sourceId, targetId }) => `${sourceId}>${targetId}`)
    .join(',')}`;
}

export function buildHierarchyLayoutPlan(sourceNodes = [], sourceLinks = []) {
  const nodes = validNodes(sourceNodes);
  const nodeIds = nodes.map(({ id }) => id);
  const knownIds = new Set(nodeIds);
  const links = validLinks(sourceLinks, knownIds);
  const outgoingByNodeId = createAdjacency(nodeIds, links);
  const incomingByNodeId = createAdjacency(nodeIds, links, true);
  const components = findStronglyConnectedComponents(
    nodeIds,
    outgoingByNodeId,
    incomingByNodeId,
  );
  const componentById = new Map(components.map((component) => [component.id, component]));
  const componentByNodeId = new Map();
  components.forEach((component) => {
    component.nodeIds.forEach((nodeId) => componentByNodeId.set(nodeId, component));
  });

  const outgoing = new Map(components.map(({ id }) => [id, new Set()]));
  const incoming = new Map(components.map(({ id }) => [id, new Set()]));
  links.forEach(({ sourceId, targetId }) => {
    const sourceComponentId = componentByNodeId.get(sourceId).id;
    const targetComponentId = componentByNodeId.get(targetId).id;
    if (sourceComponentId === targetComponentId) return;
    outgoing.get(sourceComponentId).add(targetComponentId);
    incoming.get(targetComponentId).add(sourceComponentId);
  });

  const isolatedNodeIds = nodeIds.filter((nodeId) => (
    !(outgoingByNodeId.get(nodeId)?.length)
    && !(incomingByNodeId.get(nodeId)?.length)
  ));
  const isolatedComponentIds = new Set(
    isolatedNodeIds.map((nodeId) => componentByNodeId.get(nodeId).id),
  );
  const connectedComponentIds = components
    .map(({ id }) => id)
    .filter((id) => !isolatedComponentIds.has(id));

  const weakAdjacency = new Map(connectedComponentIds.map((id) => [id, new Set()]));
  connectedComponentIds.forEach((sourceId) => {
    outgoing.get(sourceId).forEach((targetId) => {
      weakAdjacency.get(sourceId).add(targetId);
      weakAdjacency.get(targetId).add(sourceId);
    });
  });
  const visitedComponents = new Set();
  const weakGroups = [];
  connectedComponentIds.sort().forEach((rootId) => {
    if (visitedComponents.has(rootId)) return;
    visitedComponents.add(rootId);
    const componentIds = [];
    const queue = [rootId];
    for (let index = 0; index < queue.length; index += 1) {
      const componentId = queue[index];
      componentIds.push(componentId);
      [...weakAdjacency.get(componentId)].sort().forEach((neighbourId) => {
        if (visitedComponents.has(neighbourId)) return;
        visitedComponents.add(neighbourId);
        queue.push(neighbourId);
      });
    }
    componentIds.sort();
    weakGroups.push({ id: `graph:${componentIds[0]}`, componentIds });
  });

  const nodeLayoutById = new Map();
  const rankByNodeId = new Map();
  const groupByNodeId = new Map();
  const gridColumns = Math.max(1, Math.ceil(Math.sqrt(weakGroups.length || 1)));

  weakGroups.forEach((weakGroup, weakIndex) => {
    const weakIds = new Set(weakGroup.componentIds);
    const indegree = new Map(weakGroup.componentIds.map((id) => [
      id,
      [...incoming.get(id)].filter((parentId) => weakIds.has(parentId)).length,
    ]));
    const rankByComponentId = new Map(weakGroup.componentIds.map((id) => [id, 0]));
    const queue = weakGroup.componentIds.filter((id) => indegree.get(id) === 0).sort();
    for (let index = 0; index < queue.length; index += 1) {
      const sourceId = queue[index];
      [...outgoing.get(sourceId)].sort().forEach((targetId) => {
        if (!weakIds.has(targetId)) return;
        rankByComponentId.set(
          targetId,
          Math.max(rankByComponentId.get(targetId), rankByComponentId.get(sourceId) + 1),
        );
        indegree.set(targetId, indegree.get(targetId) - 1);
        if (indegree.get(targetId) === 0) queue.push(targetId);
      });
    }

    const layers = orderLayers(
      weakGroup.componentIds,
      outgoing,
      incoming,
      rankByComponentId,
    );
    const originX = (weakIndex % gridColumns) * HIERARCHY_COMPONENT_GAP;
    const originZ = Math.floor(weakIndex / gridColumns) * HIERARCHY_COMPONENT_GAP;

    layers.forEach((componentIds, rank) => {
      componentIds.forEach((componentId, componentIndex) => {
        const component = componentById.get(componentId);
        const baseX = originX + (
          componentIndex - (componentIds.length - 1) / 2
        ) * HIERARCHY_NODE_GAP;
        const baseY = rank === 0 ? 0 : -rank * HIERARCHY_LAYER_GAP;
        component.nodeIds.forEach((nodeId, memberIndex) => {
          const angle = component.nodeIds.length > 1
            ? memberIndex / component.nodeIds.length * Math.PI * 2
            : 0;
          const radius = component.nodeIds.length > 1 ? CYCLE_RADIUS : 0;
          nodeLayoutById.set(nodeId, {
            groupId: component.id,
            layoutAnchor: {
              x: baseX + Math.cos(angle) * radius,
              y: baseY,
              z: originZ + Math.sin(angle) * radius,
            },
            layoutStrength: { ...HIERARCHY_STRENGTH },
          });
          rankByNodeId.set(nodeId, rank);
          groupByNodeId.set(nodeId, component.id);
        });
      });
    });
  });

  if (isolatedNodeIds.length) {
    const columns = Math.max(1, Math.ceil(Math.sqrt(isolatedNodeIds.length)));
    const rowOffset = Math.ceil(weakGroups.length / gridColumns);
    const originZ = weakGroups.length ? rowOffset * HIERARCHY_COMPONENT_GAP : 0;
    isolatedNodeIds.forEach((nodeId, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);
      nodeLayoutById.set(nodeId, {
        groupId: 'hierarchy:unlinked',
        layoutAnchor: {
          x: (column - (columns - 1) / 2) * 105,
          y: 0,
          z: originZ + row * 105,
        },
        layoutStrength: { ...HIERARCHY_STRENGTH },
      });
      rankByNodeId.set(nodeId, 0);
      groupByNodeId.set(nodeId, 'hierarchy:unlinked');
    });
  }

  return {
    groups: [
      ...components
        .filter(({ id }) => !isolatedComponentIds.has(id))
        .map(({ id, nodeIds: memberIds }) => ({ id, nodeIds: memberIds })),
      ...(isolatedNodeIds.length
        ? [{ id: 'hierarchy:unlinked', nodeIds: isolatedNodeIds }]
        : []),
    ],
    nodeLayoutById,
    physics: { ...HIERARCHY_PHYSICS },
    strategyState: { rankByNodeId, groupByNodeId },
  };
}

export function extendHierarchyLayoutPlan(previousPlan, { node, anchorNodeId } = {}) {
  const anchorLayout = previousPlan?.nodeLayoutById?.get(anchorNodeId);
  if (!anchorLayout || typeof node?.id !== 'string' || !node.id) return null;

  const angle = hashUnit(`${anchorNodeId}:${node.id}`) * Math.PI * 2;
  const rank = (previousPlan.strategyState?.rankByNodeId?.get(anchorNodeId) || 0) + 1;
  const groupId = `hierarchy:${node.id}`;
  const nodeLayoutById = new Map(previousPlan.nodeLayoutById);
  nodeLayoutById.set(node.id, {
    groupId,
    layoutAnchor: {
      x: anchorLayout.layoutAnchor.x + Math.cos(angle) * 70,
      y: anchorLayout.layoutAnchor.y - HIERARCHY_LAYER_GAP,
      z: anchorLayout.layoutAnchor.z + Math.sin(angle) * 70,
    },
    layoutStrength: { ...HIERARCHY_STRENGTH },
  });
  const rankByNodeId = new Map(previousPlan.strategyState?.rankByNodeId || []);
  rankByNodeId.set(node.id, rank);
  const groupByNodeId = new Map(previousPlan.strategyState?.groupByNodeId || []);
  groupByNodeId.set(node.id, groupId);

  return {
    ...previousPlan,
    groups: [...(previousPlan.groups || []), { id: groupId, nodeIds: [node.id] }],
    nodeLayoutById,
    strategyState: { ...previousPlan.strategyState, rankByNodeId, groupByNodeId },
  };
}

export { HIERARCHY_LAYER_GAP };
