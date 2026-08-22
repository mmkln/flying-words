import {
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
} from 'd3-force-3d';

import {
  createRectangleCollisionForce,
  rectanglesOverlap,
  separateRectangles,
} from './board-rectangle-collision.js';

const CONNECTION_DISTANCE_OFFSET = Object.freeze({
  tight: 58,
  normal: 118,
  loose: 218,
});
const COMPONENT_GAP = 190;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let state = seed || 1;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function canonicalPair(firstId, secondId) {
  return firstId < secondId
    ? `${firstId}\u0000${secondId}`
    : `${secondId}\u0000${firstId}`;
}

function normalizedLinks(links, knownIds, kind) {
  const unique = new Map();

  links.forEach((link) => {
    const sourceId = kind === 'magnet' ? link.parentId : link.sourceId;
    const targetId = kind === 'magnet' ? link.childId : link.targetId;
    if (
      !knownIds.has(sourceId)
      || !knownIds.has(targetId)
      || sourceId === targetId
    ) return;

    const key = canonicalPair(sourceId, targetId);
    const candidate = {
      sourceId,
      targetId,
      spacing: link.spacing || 'normal',
      kind,
    };
    if (!unique.has(key)) unique.set(key, candidate);
  });

  return [...unique.values()].sort((first, second) => (
    canonicalPair(first.sourceId, first.targetId)
      .localeCompare(canonicalPair(second.sourceId, second.targetId))
  ));
}

export function buildBoardGraphComponents(cards, connections = [], magnetRelations = []) {
  const orderedIds = cards.map(({ id }) => id).sort();
  const knownIds = new Set(orderedIds);
  const semanticLinks = normalizedLinks(connections, knownIds, 'connection');
  const magneticLinks = normalizedLinks(magnetRelations, knownIds, 'magnet');
  const neighbors = new Map(orderedIds.map((id) => [id, new Set()]));

  [...semanticLinks, ...magneticLinks].forEach(({ sourceId, targetId }) => {
    neighbors.get(sourceId).add(targetId);
    neighbors.get(targetId).add(sourceId);
  });

  const visited = new Set();
  const connected = [];
  const isolatedIds = [];

  orderedIds.forEach((id) => {
    if (visited.has(id)) return;
    if (!neighbors.get(id).size) {
      visited.add(id);
      isolatedIds.push(id);
      return;
    }

    const memberIds = [];
    const stack = [id];
    while (stack.length) {
      const currentId = stack.pop();
      if (visited.has(currentId)) continue;
      visited.add(currentId);
      memberIds.push(currentId);
      neighbors.get(currentId).forEach((neighborId) => stack.push(neighborId));
    }
    memberIds.sort();
    connected.push({
      id: memberIds[0],
      memberIds,
      isolatedCloud: false,
    });
  });

  if (isolatedIds.length) {
    connected.push({
      id: `isolated:${isolatedIds[0]}`,
      memberIds: isolatedIds,
      isolatedCloud: true,
    });
  }

  return {
    components: connected,
    semanticLinks,
    magneticLinks,
  };
}

function linkForForce(link) {
  return {
    ...link,
    source: link.sourceId,
    target: link.targetId,
  };
}

function componentBounds(nodes) {
  const minX = Math.min(...nodes.map((node) => node.x - node.width / 2));
  const maxX = Math.max(...nodes.map((node) => node.x + node.width / 2));
  const minY = Math.min(...nodes.map((node) => node.y - node.height / 2));
  const maxY = Math.max(...nodes.map((node) => node.y + node.height / 2));
  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

function simulateComponent(component, cardsById, semanticLinks, magneticLinks, geometry) {
  const memberIds = new Set(component.memberIds);
  const sourceCards = component.memberIds.map((id) => cardsById.get(id));
  const currentCentre = {
    x: sourceCards.reduce((sum, card) => sum + card.x + card.width / 2, 0) / sourceCards.length,
    y: sourceCards.reduce((sum, card) => sum + card.y + card.height / 2, 0) / sourceCards.length,
  };
  const random = seededRandom(hashString(component.id));
  const nodes = sourceCards.map((card, index) => {
    const centredX = card.x + card.width / 2 - currentCentre.x;
    const centredY = card.y + card.height / 2 - currentCentre.y;
    const needsJitter = Math.abs(centredX) < 0.001 && Math.abs(centredY) < 0.001;
    const angle = random() * Math.PI * 2;
    const radius = needsJitter ? 20 + Math.sqrt(index + 1) * 18 : 0;
    return {
      id: card.id,
      width: card.width,
      height: card.height,
      x: centredX + Math.cos(angle) * radius,
      y: centredY + Math.sin(angle) * radius,
      vx: 0,
      vy: 0,
    };
  });
  const componentSemanticLinks = semanticLinks
    .filter(({ sourceId, targetId }) => memberIds.has(sourceId) && memberIds.has(targetId))
    .map(linkForForce);
  const semanticPairs = new Set(componentSemanticLinks.map((link) => (
    canonicalPair(link.sourceId, link.targetId)
  )));
  const componentMagneticLinks = magneticLinks
    .filter(({ sourceId, targetId }) => (
      memberIds.has(sourceId)
      && memberIds.has(targetId)
      && !semanticPairs.has(canonicalPair(sourceId, targetId))
    ))
    .map(linkForForce);
  const connectionForce = forceLink(componentSemanticLinks)
    .id((node) => node.id)
    .distance((link) => (
      geometry.cardWidth + (CONNECTION_DISTANCE_OFFSET[link.spacing] || CONNECTION_DISTANCE_OFFSET.normal)
    ))
    .strength(0.76)
    .iterations(2);
  const magnetForce = forceLink(componentMagneticLinks)
    .id((node) => node.id)
    .distance(geometry.cardWidth + geometry.gap * 2.4)
    .strength(0.34)
    .iterations(1);
  const isolatedCloud = component.isolatedCloud && component.memberIds.length > 1;
  const simulation = forceSimulation(nodes, 2)
    .randomSource(random)
    .force('connections', connectionForce)
    .force('magnets', magnetForce)
    .force('charge', forceManyBody()
      .strength(isolatedCloud ? -760 : -430)
      .distanceMax(900))
    .force('x', forceX(0).strength(isolatedCloud ? 0.035 : 0.018))
    .force('y', forceY(0).strength(isolatedCloud ? 0.035 : 0.018))
    .force('collision', createRectangleCollisionForce({
      gap: geometry.gap + 2,
      strength: 0.94,
      iterations: 2,
    }))
    .velocityDecay(0.42)
    .stop();

  for (let tick = 0; tick < 320; tick += 1) simulation.tick();
  simulation.stop();
  separateRectangles(nodes, geometry.gap + 2);

  const bounds = componentBounds(nodes);
  nodes.forEach((node) => {
    node.x -= (bounds.minX + bounds.maxX) / 2;
    node.y -= (bounds.minY + bounds.maxY) / 2;
  });

  return {
    ...component,
    nodes,
    bounds: componentBounds(nodes),
  };
}

function boundsOverlap(first, second, gap = COMPONENT_GAP) {
  return !(
    first.right + gap <= second.left
    || second.right + gap <= first.left
    || first.bottom + gap <= second.top
    || second.bottom + gap <= first.top
  );
}

function packComponents(components, geometry) {
  const ordered = [...components].sort((first, second) => (
    second.memberIds.length - first.memberIds.length
    || first.id.localeCompare(second.id)
  ));
  const placedBounds = [];
  const spiralStep = Math.max(geometry.cardWidth, geometry.cardHeight) * 0.64;

  ordered.forEach((component, componentIndex) => {
    let placement = null;

    for (let step = 0; step < 6000; step += 1) {
      const radius = step === 0 ? 0 : spiralStep * Math.sqrt(step);
      const angle = step * GOLDEN_ANGLE + componentIndex * 0.37;
      const centreX = Math.cos(angle) * radius;
      const centreY = Math.sin(angle) * radius;
      const candidate = {
        left: centreX - component.bounds.width / 2,
        right: centreX + component.bounds.width / 2,
        top: centreY - component.bounds.height / 2,
        bottom: centreY + component.bounds.height / 2,
      };

      if (placedBounds.every((placed) => !boundsOverlap(candidate, placed))) {
        placement = { x: centreX, y: centreY };
        placedBounds.push(candidate);
        break;
      }
    }

    if (!placement) {
      placement = {
        x: componentIndex * (component.bounds.width + COMPONENT_GAP),
        y: 0,
      };
    }

    component.nodes.forEach((node) => {
      node.x += placement.x;
      node.y += placement.y;
    });
  });

  return ordered.flatMap(({ nodes }) => nodes);
}

function currentBoardCentre(cards) {
  return {
    x: cards.reduce((sum, card) => sum + card.x + card.width / 2, 0) / cards.length,
    y: cards.reduce((sum, card) => sum + card.y + card.height / 2, 0) / cards.length,
  };
}

export function calculateBoardGraphLayout({
  cards = [],
  connections = [],
  magnetRelations = [],
  geometry,
} = {}) {
  if (!cards.length) return [];

  const resolvedGeometry = {
    cardWidth: geometry?.cardWidth || 280,
    cardHeight: geometry?.cardHeight || 96,
    gap: geometry?.gap || 24,
  };
  const normalizedCards = cards
    .filter((card) => (
      typeof card?.id === 'string'
      && Number.isFinite(card.x)
      && Number.isFinite(card.y)
    ))
    .map((card) => ({
      id: card.id,
      x: card.x,
      y: card.y,
      width: Number.isFinite(card.width) ? card.width : resolvedGeometry.cardWidth,
      height: Number.isFinite(card.height) ? card.height : resolvedGeometry.cardHeight,
    }))
    .sort((first, second) => first.id.localeCompare(second.id));
  if (!normalizedCards.length) return [];

  const graph = buildBoardGraphComponents(
    normalizedCards,
    connections,
    magnetRelations,
  );
  const cardsById = new Map(normalizedCards.map((card) => [card.id, card]));
  const simulated = graph.components.map((component) => simulateComponent(
    component,
    cardsById,
    graph.semanticLinks,
    graph.magneticLinks,
    resolvedGeometry,
  ));
  const nodes = packComponents(simulated, resolvedGeometry);
  const originalCentre = currentBoardCentre(normalizedCards);
  const newCentre = {
    x: nodes.reduce((sum, node) => sum + node.x, 0) / nodes.length,
    y: nodes.reduce((sum, node) => sum + node.y, 0) / nodes.length,
  };
  const translateX = originalCentre.x - newCentre.x;
  const translateY = originalCentre.y - newCentre.y;
  const positions = nodes.map((node) => ({
    id: node.id,
    x: Math.round(node.x + translateX - node.width / 2),
    y: Math.round(node.y + translateY - node.height / 2),
    width: node.width,
    height: node.height,
  }));

  // Integer persistence can erase a sub-pixel gap, so make one final exact
  // pass using the same rectangle contract as the backend.
  for (let pass = 0; pass < 120; pass += 1) {
    let moved = false;
    for (let firstIndex = 0; firstIndex < positions.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < positions.length; secondIndex += 1) {
        const first = positions[firstIndex];
        const second = positions[secondIndex];
        if (!rectanglesOverlap(first, second, resolvedGeometry.gap)) continue;
        moved = true;
        const overlapX = Math.min(
          first.x + first.width + resolvedGeometry.gap - second.x,
          second.x + second.width + resolvedGeometry.gap - first.x,
        );
        const overlapY = Math.min(
          first.y + first.height + resolvedGeometry.gap - second.y,
          second.y + second.height + resolvedGeometry.gap - first.y,
        );
        if (overlapX < overlapY) {
          const direction = second.x >= first.x ? 1 : -1;
          second.x += direction * Math.max(1, Math.ceil(overlapX));
        } else {
          const direction = second.y >= first.y ? 1 : -1;
          second.y += direction * Math.max(1, Math.ceil(overlapY));
        }
      }
    }
    if (!moved) break;
  }

  return positions
    .map(({ id, x, y }) => ({ id, x, y }))
    .sort((first, second) => first.id.localeCompare(second.id));
}
