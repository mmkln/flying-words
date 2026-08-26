import { rectanglesOverlap } from './board-rectangle-collision.js';
import { resolveManualBoardPosition } from './board-manual-placement.js';

function isFiniteRectangle(rectangle) {
  return (
    rectangle
    && Number.isFinite(rectangle.x)
    && Number.isFinite(rectangle.y)
    && Number.isFinite(rectangle.width)
    && Number.isFinite(rectangle.height)
    && rectangle.width > 0
    && rectangle.height > 0
  );
}

function compareByDistanceFrom(candidate, first, second) {
  const candidateCenterX = candidate.x + candidate.width / 2;
  const candidateCenterY = candidate.y + candidate.height / 2;
  const firstX = first.x + first.width / 2 - candidateCenterX;
  const firstY = first.y + first.height / 2 - candidateCenterY;
  const secondX = second.x + second.width / 2 - candidateCenterX;
  const secondY = second.y + second.height / 2 - candidateCenterY;

  return firstX * firstX + firstY * firstY - (secondX * secondX + secondY * secondY)
    || String(first.id).localeCompare(String(second.id));
}

function pushedAwayFrom(candidate, obstacle, gap) {
  const candidateCenterX = candidate.x + candidate.width / 2;
  const candidateCenterY = candidate.y + candidate.height / 2;
  const obstacleCenterX = obstacle.x + obstacle.width / 2;
  const obstacleCenterY = obstacle.y + obstacle.height / 2;
  const deltaX = obstacleCenterX - candidateCenterX;
  const deltaY = obstacleCenterY - candidateCenterY;

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    const moveRight = deltaX > 0 || (deltaX === 0 && String(obstacle.id) > String(candidate.id));
    return {
      ...obstacle,
      x: moveRight
        ? candidate.x + candidate.width + gap
        : candidate.x - obstacle.width - gap,
    };
  }

  return {
    ...obstacle,
    y: deltaY > 0
      ? candidate.y + candidate.height + gap
      : candidate.y - obstacle.height - gap,
  };
}

/**
 * Keeps a new Board card in the requested visible position. Only cards that
 * physically block that position move, and each is projected to the nearest
 * legal Board position instead of allowing an overlap.
 */
export function planBoardInsertion({
  candidate,
  obstacles = [],
  gap = 8,
} = {}) {
  if (!isFiniteRectangle(candidate)) return { position: candidate, moved: [] };

  const plannedById = new Map(
    obstacles
      .filter(isFiniteRectangle)
      .map((obstacle) => [obstacle.id, { ...obstacle }]),
  );
  const collidingIds = [...plannedById.values()]
    .filter((obstacle) => rectanglesOverlap(candidate, obstacle, gap))
    .sort((first, second) => compareByDistanceFrom(candidate, first, second))
    .map((obstacle) => obstacle.id);
  const moved = [];

  collidingIds.forEach((id) => {
    const obstacle = plannedById.get(id);
    if (!obstacle || !rectanglesOverlap(candidate, obstacle, gap)) return;

    const resolved = resolveManualBoardPosition({
      candidate: pushedAwayFrom(candidate, obstacle, gap),
      obstacles: [candidate, ...plannedById.values()].filter((item) => item.id !== id),
      gap,
    });
    plannedById.set(id, resolved);
    moved.push({ id, x: resolved.x, y: resolved.y });
  });

  return { position: candidate, moved };
}
