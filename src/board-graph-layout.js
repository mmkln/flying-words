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

// The server validates the minimum Board clearance, while Arrange deliberately
// uses a roomier one. Manual placement keeps its own, smaller clearance.
export const AUTO_LAYOUT_GAP = 192;

const CONNECTION_DISTANCE_OFFSET = Object.freeze({
  tight: 90,
  normal: 175,
  loose: 300,
});
const MAGNET_DISTANCE_OFFSET = 76;
const COMPONENT_GAP = 320;
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

function buildStructuralTargets(component, nodes, semanticLinks, geometry) {
  const memberIds = new Set(component.memberIds);
  const componentLinks = semanticLinks.filter(({ sourceId, targetId }) => (
    memberIds.has(sourceId) && memberIds.has(targetId)
  ));
  const fallbackTargets = new Map(nodes.map((node) => [node.id, {
    x: node.initialX,
    y: node.initialY,
  }]));

  // A magnet-only cloud has no semantic structure to impose. Its current
  // composition is the best stable seed, while its magnet forces keep it
  // coherent.
  if (!componentLinks.length) return fallbackTargets;

  const degree = new Map(nodes.map((node) => [node.id, 0]));
  const outgoing = new Map(nodes.map((node) => [node.id, []]));
  const undirected = new Map(nodes.map((node) => [node.id, []]));
  componentLinks.forEach(({ sourceId, targetId }) => {
    degree.set(sourceId, (degree.get(sourceId) || 0) + 1);
    degree.set(targetId, (degree.get(targetId) || 0) + 1);
    outgoing.get(sourceId).push(targetId);
    undirected.get(sourceId).push(targetId);
    undirected.get(targetId).push(sourceId);
  });
  outgoing.forEach((ids) => ids.sort());
  undirected.forEach((ids) => ids.sort());

  const fixedIds = nodes
    .filter((node) => node.fixed)
    .map((node) => node.id)
    .sort();
  const rootIds = fixedIds.length ? fixedIds : [
    [...nodes].sort((first, second) => (
      (degree.get(second.id) || 0) - (degree.get(first.id) || 0)
      || first.id.localeCompare(second.id)
    ))[0].id,
  ];
  const levels = new Map(rootIds.map((id) => [id, 0]));

  // Semantic direction decides the preferred outward order. An undirected
  // pass then reaches inbound links and cycles without forcing a left-to-right
  // hierarchy.
  const visit = (initialIds, neighborsFor) => {
    const queue = [...initialIds];
    while (queue.length) {
      const sourceId = queue.shift();
      const level = levels.get(sourceId);
      neighborsFor(sourceId).forEach((targetId) => {
        if (levels.has(targetId)) return;
        levels.set(targetId, level + 1);
        queue.push(targetId);
      });
    }
  };
  visit(rootIds, (id) => outgoing.get(id) || []);
  visit([...levels.keys()], (id) => undirected.get(id) || []);

  const rootCentre = rootIds.reduce((centre, id) => {
    const node = nodes.find((item) => item.id === id);
    return {
      x: centre.x + (node?.initialX || 0),
      y: centre.y + (node?.initialY || 0),
    };
  }, { x: 0, y: 0 });
  rootCentre.x /= rootIds.length;
  rootCentre.y /= rootIds.length;

  const idsByLevel = new Map();
  levels.forEach((level, id) => {
    const ids = idsByLevel.get(level) || [];
    ids.push(id);
    idsByLevel.set(level, ids);
  });
  const ringStep = Math.max(
    geometry.cardWidth + geometry.gap + 160,
    geometry.cardHeight + geometry.gap + 220,
  );
  const targets = new Map();

  idsByLevel.forEach((ids, level) => {
    ids.sort((first, second) => (
      hashString(`${component.id}:${first}`) - hashString(`${component.id}:${second}`)
      || first.localeCompare(second)
    ));
    if (level === 0) {
      ids.forEach((id) => targets.set(id, { ...rootCentre }));
      return;
    }

    const phase = (hashString(`${component.id}:${level}`) / 0xffffffff) * Math.PI * 2;
    ids.forEach((id, index) => {
      const angle = phase + index / ids.length * Math.PI * 2;
      targets.set(id, {
        x: rootCentre.x + Math.cos(angle) * level * ringStep,
        y: rootCentre.y + Math.sin(angle) * level * ringStep,
      });
    });
  });

  return new Map(nodes.map((node) => [node.id, targets.get(node.id) || fallbackTargets.get(node.id)]));
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
      initialX: centredX,
      initialY: centredY,
      initialWorldX: card.x + card.width / 2,
      initialWorldY: card.y + card.height / 2,
      fixed: card.fixed === true,
      fx: card.fixed ? centredX : undefined,
      fy: card.fixed ? centredY : undefined,
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
  const structuralTargets = buildStructuralTargets(
    component,
    nodes,
    semanticLinks,
    geometry,
  );
  const connectionForce = forceLink(componentSemanticLinks)
    .id((node) => node.id)
    .distance((link) => (
      geometry.cardWidth + (CONNECTION_DISTANCE_OFFSET[link.spacing] || CONNECTION_DISTANCE_OFFSET.normal)
    ))
    .strength(0.76)
    .iterations(2);
  const magnetForce = forceLink(componentMagneticLinks)
    .id((node) => node.id)
    .distance(geometry.cardWidth + MAGNET_DISTANCE_OFFSET)
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
    .force('structureX', forceX((node) => structuralTargets.get(node.id).x)
      .strength((node) => (node.fixed ? 0 : isolatedCloud ? 0.01 : 0.055)))
    .force('structureY', forceY((node) => structuralTargets.get(node.id).y)
      .strength((node) => (node.fixed ? 0 : isolatedCloud ? 0.01 : 0.055)))
    .force('stabilityX', forceX((node) => node.initialX)
      .strength((node) => (node.fixed ? 0 : 0.075)))
    .force('stabilityY', forceY((node) => node.initialY)
      .strength((node) => (node.fixed ? 0 : 0.075)))
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
  const anchored = ordered.filter((component) => component.nodes.some((node) => node.fixed));
  const movable = ordered.filter((component) => !component.nodes.some((node) => node.fixed));
  const packingCentre = anchored.length
    ? anchored.reduce((centre, component) => {
      const anchor = component.nodes
        .filter((node) => node.fixed)
        .sort((first, second) => first.id.localeCompare(second.id))[0];
      return {
        x: centre.x + anchor.initialWorldX,
        y: centre.y + anchor.initialWorldY,
      };
    }, { x: 0, y: 0 })
    : { x: 0, y: 0 };

  if (anchored.length) {
    packingCentre.x /= anchored.length;
    packingCentre.y /= anchored.length;
  }

  const boundsAt = (component, placement) => ({
    left: placement.x + component.bounds.minX,
    right: placement.x + component.bounds.maxX,
    top: placement.y + component.bounds.minY,
    bottom: placement.y + component.bounds.maxY,
  });
  const applyPlacement = (component, placement) => {
    component.nodes.forEach((node) => {
      node.x += placement.x;
      node.y += placement.y;
    });
  };

  // An anchor is an explicit user decision. Its component is translated from
  // the anchor's local simulation coordinate back to its original Board world
  // position before any unanchored components are packed around it.
  anchored.forEach((component) => {
    const anchor = component.nodes
      .filter((node) => node.fixed)
      .sort((first, second) => first.id.localeCompare(second.id))[0];
    const placement = {
      x: anchor.initialWorldX - anchor.x,
      y: anchor.initialWorldY - anchor.y,
    };
    placedBounds.push(boundsAt(component, placement));
    applyPlacement(component, placement);
  });

  movable.forEach((component, componentIndex) => {
    let placement = null;

    for (let step = 0; step < 6000; step += 1) {
      const radius = step === 0 ? 0 : spiralStep * Math.sqrt(step);
      const angle = step * GOLDEN_ANGLE + componentIndex * 0.37;
      const centreX = packingCentre.x + Math.cos(angle) * radius;
      const centreY = packingCentre.y + Math.sin(angle) * radius;
      const candidate = boundsAt(component, { x: centreX, y: centreY });

      if (placedBounds.every((placed) => !boundsOverlap(candidate, placed))) {
        placement = { x: centreX, y: centreY };
        placedBounds.push(candidate);
        break;
      }
    }

    if (!placement) {
      placement = {
        x: packingCentre.x + componentIndex * (component.bounds.width + COMPONENT_GAP),
        y: packingCentre.y,
      };
    }

    applyPlacement(component, placement);
  });

  return ordered.flatMap(({ nodes }) => nodes);
}

function currentBoardCentre(cards) {
  return {
    x: cards.reduce((sum, card) => sum + card.x + card.width / 2, 0) / cards.length,
    y: cards.reduce((sum, card) => sum + card.y + card.height / 2, 0) / cards.length,
  };
}

function cardCentre(position) {
  return {
    x: position.x + position.width / 2,
    y: position.y + position.height / 2,
  };
}

function distanceBetween(first, second) {
  const firstCentre = cardCentre(first);
  const secondCentre = cardCentre(second);
  return Math.hypot(firstCentre.x - secondCentre.x, firstCentre.y - secondCentre.y);
}

function segmentsCross(firstStart, firstEnd, secondStart, secondEnd) {
  const turn = (start, end, point) => (
    (end.x - start.x) * (point.y - start.y)
    - (end.y - start.y) * (point.x - start.x)
  );
  const firstStartTurn = turn(firstStart, firstEnd, secondStart);
  const firstEndTurn = turn(firstStart, firstEnd, secondEnd);
  const secondStartTurn = turn(secondStart, secondEnd, firstStart);
  const secondEndTurn = turn(secondStart, secondEnd, firstEnd);

  return (
    firstStartTurn * firstEndTurn < 0
    && secondStartTurn * secondEndTurn < 0
  );
}

function connectionCrossingCount(candidate, position, placedById, links) {
  const semanticLinks = links.filter(({ kind }) => kind === 'connection');
  const ownLinks = semanticLinks.filter(({ sourceId, targetId }) => (
    sourceId === position.id || targetId === position.id
  ));
  let crossings = 0;

  ownLinks.forEach((ownLink) => {
    const neighborId = ownLink.sourceId === position.id
      ? ownLink.targetId
      : ownLink.sourceId;
    const neighbor = placedById.get(neighborId);
    if (!neighbor) return;

    semanticLinks.forEach((otherLink) => {
      if (
        otherLink.sourceId === ownLink.sourceId
        || otherLink.sourceId === ownLink.targetId
        || otherLink.targetId === ownLink.sourceId
        || otherLink.targetId === ownLink.targetId
      ) return;

      const source = placedById.get(otherLink.sourceId);
      const target = placedById.get(otherLink.targetId);
      if (!source || !target) return;

      if (segmentsCross(
        cardCentre(candidate),
        cardCentre(neighbor),
        cardCentre(source),
        cardCentre(target),
      )) crossings += 1;
    });
  });

  return crossings;
}

function candidateScore(candidate, position, placedById, desiredById, links) {
  const graphDistance = Math.hypot(candidate.x - position.x, candidate.y - position.y);
  const stabilityDistance = Math.hypot(
    candidate.x - position.preferredX,
    candidate.y - position.preferredY,
  );
  let linkDistanceError = 0;

  links.forEach(({ sourceId, targetId }) => {
    if (sourceId !== position.id && targetId !== position.id) return;
    const neighborId = sourceId === position.id ? targetId : sourceId;
    const desiredNeighbor = desiredById.get(neighborId);
    const placedNeighbor = placedById.get(neighborId) || desiredNeighbor;
    if (!desiredNeighbor || !placedNeighbor) return;

    const desiredDistance = distanceBetween(position, desiredNeighbor);
    linkDistanceError += Math.abs(distanceBetween(candidate, placedNeighbor) - desiredDistance);
  });

  return (
    graphDistance
    + stabilityDistance * 0.08
    + linkDistanceError * 0.72
    + connectionCrossingCount(candidate, position, placedById, links) * 9_000
  );
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
    Number(second.fixed) - Number(first.fixed)
    || (degree.get(second.id) || 0) - (degree.get(first.id) || 0)
    || first.id.localeCompare(second.id)
  ));
  const placed = [];
  const placedById = new Map();
  const desiredById = new Map(positions.map((position) => [position.id, position]));

  ordered.forEach((position, positionIndex) => {
    if (position.fixed) {
      // Two anchors may deliberately sit closer than the automatic gap. Keep
      // both untouched; only movable cards have to make room around them.
      placed.push({ ...position });
      placedById.set(position.id, placed.at(-1));
      return;
    }

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
        let bestCandidate = null;
        let bestScore = Infinity;
        for (let index = 0; index < offsets.length; index += 1) {
          const offset = offsets[(index + rotation) % offsets.length];
          const candidate = {
            ...position,
            x: position.x + offset.column * stepX,
            y: position.y + offset.row * stepY,
          };
          if (!isFree(candidate)) continue;

          const score = candidateScore(
            candidate,
            position,
            placedById,
            desiredById,
            links,
          );
          if (score < bestScore) {
            bestCandidate = candidate;
            bestScore = score;
          }
        }

        if (bestCandidate) resolved = bestCandidate;
      }

      if (!resolved) {
        resolved = { ...position };
        do {
          resolved.x += (position.width + gap) * (positions.length + positionIndex + 1);
        } while (!isFree(resolved));
      }
    }

    placed.push(resolved);
    placedById.set(position.id, resolved);
  });

  const resolvedCentre = {
    x: placed.reduce((sum, position) => sum + position.x, 0) / placed.length,
    y: placed.reduce((sum, position) => sum + position.y, 0) / placed.length,
  };
  const hasFixedPosition = positions.some((position) => position.fixed);
  const translateX = hasFixedPosition ? 0 : Math.round(desiredCentre.x - resolvedCentre.x);
  const translateY = hasFixedPosition ? 0 : Math.round(desiredCentre.y - resolvedCentre.y);
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
  const layoutGeometry = {
    ...resolvedGeometry,
    gap: AUTO_LAYOUT_GAP,
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
      fixed: card.fixed === true,
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
    layoutGeometry,
  ));
  const nodes = packComponents(simulated, layoutGeometry);
  const originalCentre = currentBoardCentre(normalizedCards);
  const newCentre = {
    x: nodes.reduce((sum, node) => sum + node.x, 0) / nodes.length,
    y: nodes.reduce((sum, node) => sum + node.y, 0) / nodes.length,
  };
  const hasFixedCard = nodes.some((node) => node.fixed);
  const translateX = hasFixedCard ? 0 : originalCentre.x - newCentre.x;
  const translateY = hasFixedCard ? 0 : originalCentre.y - newCentre.y;
  const positions = nodes.map((node) => ({
    id: node.id,
    x: Math.round(node.x + translateX - node.width / 2),
    y: Math.round(node.y + translateY - node.height / 2),
    width: node.width,
    height: node.height,
    fixed: node.fixed,
    preferredX: node.initialWorldX - node.width / 2,
    preferredY: node.initialWorldY - node.height / 2,
  }));

  const collisionFreePositions = placeWithoutOverlaps(
    positions,
    [...graph.semanticLinks, ...graph.magneticLinks],
    layoutGeometry.gap,
  );

  return collisionFreePositions
    .map(({ id, x, y }) => ({ id, x, y }))
    .sort((first, second) => first.id.localeCompare(second.id));
}
