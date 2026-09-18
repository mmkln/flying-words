import { resolveCollisionFreeBoardPosition } from './board-manual-placement.js';

export function getMissingBoardConnectionIds(sourceId, connectionIndex, boardIds) {
  return connectionIndex.getNeighbours(sourceId)
    .map(({ thoughtId }) => thoughtId)
    .filter((thoughtId) => !boardIds.has(thoughtId));
}

export function planBoardConnectionExpansion({
  source,
  missingIds,
  obstacles,
  geometry,
}) {
  const occupied = [...obstacles];
  const placements = [];

  missingIds.forEach((id) => {
    const candidate = {
      id,
      x: source.x + geometry.cardWidth + geometry.gap,
      y: source.y,
      width: geometry.cardWidth,
      height: geometry.cardHeight,
    };
    const resolved = resolveCollisionFreeBoardPosition({
      candidate,
      obstacles: occupied,
      gap: geometry.gap,
    });
    const placement = {
      id,
      x: Math.round(resolved.x),
      y: Math.round(resolved.y),
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
