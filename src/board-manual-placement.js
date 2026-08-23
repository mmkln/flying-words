import { rectanglesOverlap } from './board-rectangle-collision.js';

const MAX_POSITION_CANDIDATES = 96;

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

function positionKey({ x, y }) {
  return `${x}:${y}`;
}

function distanceSquared(first, second) {
  const dx = first.x - second.x;
  const dy = first.y - second.y;
  return dx * dx + dy * dy;
}

function collidingRectangles(candidate, obstacles, gap) {
  return obstacles.filter((obstacle) => rectanglesOverlap(candidate, obstacle, gap));
}

function addCandidate(queue, seen, candidate) {
  const key = positionKey(candidate);
  if (seen.has(key)) return;

  seen.add(key);
  queue.push(candidate);
}

/**
 * Projects a manually dragged Board card to the closest practical legal
 * position. Unlike automatic layout, it never moves the surrounding cards.
 *
 * Coordinates describe the card's top-left corner in stable Board world
 * space, so the configured gap stays visually correct at every zoom level.
 */
export function resolveManualBoardPosition({
  candidate,
  obstacles = [],
  gap = 8,
} = {}) {
  if (!isFiniteRectangle(candidate)) return candidate;

  const legalObstacles = obstacles.filter(isFiniteRectangle);
  const desired = { ...candidate };
  const queue = [desired];
  const seen = new Set([positionKey(desired)]);

  for (let processed = 0; queue.length > 0 && processed < MAX_POSITION_CANDIDATES; processed += 1) {
    queue.sort((first, second) => distanceSquared(first, desired) - distanceSquared(second, desired));
    const next = queue.shift();
    const collisions = collidingRectangles(next, legalObstacles, gap);

    if (collisions.length === 0) return next;

    collisions.forEach((obstacle) => {
      addCandidate(queue, seen, {
        ...desired,
        x: obstacle.x - gap - desired.width,
        y: next.y,
      });
      addCandidate(queue, seen, {
        ...desired,
        x: obstacle.x + obstacle.width + gap,
        y: next.y,
      });
      addCandidate(queue, seen, {
        ...desired,
        x: next.x,
        y: obstacle.y - gap - desired.height,
      });
      addCandidate(queue, seen, {
        ...desired,
        x: next.x,
        y: obstacle.y + obstacle.height + gap,
      });
    });
  }

  // The Board is unbounded, so this deterministic escape hatch is always
  // valid even if a dense legacy layout exhausts the local search budget.
  const rightmost = legalObstacles.reduce(
    (edge, obstacle) => Math.max(edge, obstacle.x + obstacle.width),
    desired.x - gap - desired.width,
  );

  return {
    ...desired,
    x: rightmost + gap,
  };
}
