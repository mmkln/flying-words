import { rectanglesOverlap } from './board-rectangle-collision.js';

function fitsWithinBounds(rectangle, bounds) {
  return Boolean(bounds)
    && rectangle.x >= bounds.left
    && rectangle.y >= bounds.top
    && rectangle.x + rectangle.width <= bounds.right
    && rectangle.y + rectangle.height <= bounds.bottom;
}

function isCollisionFree(candidate, obstacles, gap) {
  return obstacles.every(
    (obstacle) => !rectanglesOverlap(candidate, obstacle, gap),
  );
}

function clockwiseAngleFromRight(column, row) {
  const angle = Math.atan2(row, column);
  return angle < 0 ? angle + Math.PI * 2 : angle;
}

function getRingCandidates(source, geometry, ring) {
  const stepX = geometry.cardWidth + geometry.gap;
  const stepY = geometry.cardHeight + geometry.gap;
  const candidates = [];

  for (let column = -ring; column <= ring; column += 1) {
    for (let row = -ring; row <= ring; row += 1) {
      if (Math.max(Math.abs(column), Math.abs(row)) !== ring) continue;

      candidates.push({
        x: source.x + column * stepX,
        y: source.y + row * stepY,
        width: geometry.cardWidth,
        height: geometry.cardHeight,
        column,
        row,
      });
    }
  }

  return candidates
    .sort((first, second) => (
      first.column ** 2 + first.row ** 2
      - second.column ** 2 - second.row ** 2
      || clockwiseAngleFromRight(first.column, first.row)
        - clockwiseAngleFromRight(second.column, second.row)
    ))
    .map(({ column, row, ...candidate }) => candidate);
}

function getVisibleRingLimit(source, geometry, visibleBounds) {
  if (!visibleBounds) return 0;

  const stepX = geometry.cardWidth + geometry.gap;
  const stepY = geometry.cardHeight + geometry.gap;
  return Math.max(
    Math.ceil(Math.max(
      Math.abs(source.x - visibleBounds.left),
      Math.abs(visibleBounds.right - source.x),
    ) / stepX),
    Math.ceil(Math.max(
      Math.abs(source.y - visibleBounds.top),
      Math.abs(visibleBounds.bottom - source.y),
    ) / stepY),
  ) + 1;
}

function getFallbackRingLimit(source, obstacles, geometry, minimum) {
  const stepX = geometry.cardWidth + geometry.gap;
  const stepY = geometry.cardHeight + geometry.gap;

  return obstacles.reduce((limit, obstacle) => Math.max(
    limit,
    Math.ceil(Math.abs(obstacle.x - source.x) / stepX),
    Math.ceil(Math.abs(obstacle.y - source.y) / stepY),
  ), minimum) + 2;
}

function findNearestExpansionPosition({
  source,
  obstacles,
  geometry,
  visibleBounds,
}) {
  const visibleRingLimit = getVisibleRingLimit(source, geometry, visibleBounds);

  // A connected thought should remain in the user's current context whenever
  // a legal slot exists there, even if the Board contains distant cards.
  for (let ring = 1; ring <= visibleRingLimit; ring += 1) {
    const position = getRingCandidates(source, geometry, ring)
      .filter((candidate) => fitsWithinBounds(candidate, visibleBounds))
      .find((candidate) => isCollisionFree(candidate, obstacles, geometry.gap));

    if (position) return position;
  }

  // If the viewport is genuinely full, continue the same deterministic local
  // search. Never escape to the globally rightmost card on the Board.
  const fallbackRingLimit = getFallbackRingLimit(
    source,
    obstacles,
    geometry,
    visibleRingLimit,
  );
  for (let ring = 1; ring <= fallbackRingLimit; ring += 1) {
    const position = getRingCandidates(source, geometry, ring)
      .find((candidate) => isCollisionFree(candidate, obstacles, geometry.gap));

    if (position) return position;
  }

  return null;
}

export function getMissingBoardConnections(sourceId, connectionIndex, boardIds) {
  return connectionIndex.getNeighbours(sourceId)
    .filter(({ thoughtId }) => !boardIds.has(thoughtId));
}

export function getMissingBoardConnectionIds(sourceId, connectionIndex, boardIds) {
  return getMissingBoardConnections(sourceId, connectionIndex, boardIds)
    .map(({ thoughtId }) => thoughtId);
}

export function planBoardConnectionExpansion({
  source,
  missingIds,
  obstacles,
  geometry,
  visibleBounds,
}) {
  const occupied = [...obstacles];
  const placements = [];

  missingIds.forEach((id) => {
    const position = findNearestExpansionPosition({
      source,
      obstacles: occupied,
      geometry,
      visibleBounds,
    });
    if (!position) return;

    const placement = {
      id,
      x: Math.round(position.x),
      y: Math.round(position.y),
    };

    placements.push(placement);
    occupied.push({
      ...placement,
      width: geometry.cardWidth,
      height: geometry.cardHeight,
    });
  });

  return placements;
}
