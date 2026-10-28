function finitePoint(point) {
  return Boolean(point)
    && Number.isFinite(point.x)
    && Number.isFinite(point.y);
}

export function toggleBoardSelection(selectedIds, thoughtId) {
  const next = new Set(selectedIds || []);
  if (next.has(thoughtId)) next.delete(thoughtId);
  else next.add(thoughtId);
  return next;
}

export function boardSelectionRectangle(start, end) {
  if (!finitePoint(start) || !finitePoint(end)) return null;
  return {
    left: Math.min(start.x, end.x),
    top: Math.min(start.y, end.y),
    right: Math.max(start.x, end.x),
    bottom: Math.max(start.y, end.y),
  };
}

export function boardCardIntersectsRectangle(card, rectangle) {
  if (!card || !rectangle) return false;
  return (
    card.x < rectangle.right
    && card.x + card.width > rectangle.left
    && card.y < rectangle.bottom
    && card.y + card.height > rectangle.top
  );
}

export function selectBoardCardsInRectangle(cards, rectangle) {
  return new Set(
    cards
      .filter((card) => boardCardIntersectsRectangle(card, rectangle))
      .map(({ id }) => id),
  );
}

export function captureBoardSelectionOrigins(cards, selectedIds) {
  const selected = new Set(selectedIds || []);
  return new Map(
    cards
      .filter((card) => selected.has(card.id))
      .map(({ id, x, y }) => [id, { x, y }]),
  );
}

export function translateBoardSelectionOrigins(origins, delta) {
  if (!finitePoint(delta)) return [];
  return [...(origins || new Map())].map(([id, origin]) => ({
    id,
    x: origin.x + delta.x,
    y: origin.y + delta.y,
  }));
}
