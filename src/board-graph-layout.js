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
  const tickCount = Math.max(
    100,
    Math.min(320, Math.round(64_000 / nodes.length)),
  );
  const collisionIterations = nodes.length > 300 ? 1 : 2;
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
      iterations: collisionIterations,
    }))
    .alphaDecay(1 - 0.001 ** (1 / tickCount))
    .velocityDecay(0.42)
    .stop();

  for (let tick = 0; tick < tickCount; tick += 1) simulation.tick();
  simulation.stop();
  separateRectangles(
    nodes,
    geometry.gap + 2,
    nodes.length > 300 ? 18 : nodes.length > 120 ? 56 : 120,
  );

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

function placeWithoutOverlaps(positions, links, gap) {
  const degree = new Map(positions.map(({ id }) => [id, 0]));
  links.forEach(({ sourceId, targetId }) => {
    degree.set(sourceId, (degree.get(sourceId) || 0) + 1);
    degree.set(targetId, (degree.get(targetId) || 0) + 1);
  });
  const desiredCentre = {
    x: positions.reduce((sum, position) => sum + position.x, 0) / positions.length,
    y: positions.reduce((sum, position) => sum + position.y, 0) / positions.length,
  };
  const ordered = [...positions].sort((first, second) => (
    (degree.get(second.id) || 0) - (degree.get(first.id) || 0)
    || first.id.localeCompare(second.id)
  ));
  const placed = [];

  ordered.forEach((position, positionIndex) => {
    const isFree = (candidate) => placed.every(
      (other) => !rectanglesOverlap(candidate, other, gap),
    );
    let resolved = { ...position };

    if (!isFree(resolved)) {
      const stepX = Math.max(1, Math.round((position.width + gap) / 2));
      const stepY = Math.max(1, Math.round((position.height + gap) / 2));
      const offsetRotation = hashString(position.id);
      resolved = null;

      for (let ring = 1; ring <= positions.length * 3 + 12 && !resolved; ring += 1) {
        const offsets = [];
        for (let column = -ring; column <= ring; column += 1) {
          offsets.push({ column, row: -ring });
          offsets.push({ column, row: ring });
        }
        for (let row = -ring + 1; row < ring; row += 1) {
          offsets.push({ column: -ring, row });
          offsets.push({ column: ring, row });
        }

        const rotation = offsetRotation % offsets.length;
        for (let index = 0; index < offsets.length; index += 1) {
          const offset = offsets[(index + rotation) % offsets.length];
          const candidate = {
            ...position,
            x: position.x + offset.column * stepX,
            y: position.y + offset.row * stepY,
          };
          if (isFree(candidate)) {
            resolved = candidate;
            break;
          }
        }
      }

      if (!resolved) {
        resolved = { ...position };
        do {
          resolved.x += (position.width + gap) * (positions.length + positionIndex + 1);
        } while (!isFree(resolved));
      }
    }

    placed.push(resolved);
  });

  const resolvedCentre = {
    x: placed.reduce((sum, position) => sum + position.x, 0) / placed.length,
    y: placed.reduce((sum, position) => sum + position.y, 0) / placed.length,
  };
  const translateX = Math.round(desiredCentre.x - resolvedCentre.x);
  const translateY = Math.round(desiredCentre.y - resolvedCentre.y);
  return placed.map((position) => ({
    ...position,
    x: position.x + translateX,
    y: position.y + translateY,
  }));
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

  const collisionFreePositions = placeWithoutOverlaps(
    positions,
    [...graph.semanticLinks, ...graph.magneticLinks],
    resolvedGeometry.gap,
  );

  return collisionFreePositions
    .map(({ id, x, y }) => ({ id, x, y }))
    .sort((first, second) => first.id.localeCompare(second.id));
}
