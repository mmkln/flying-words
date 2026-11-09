function finitePoint(point) {
  return Boolean(point)
    && Number.isFinite(point.x)
    && Number.isFinite(point.y);
}

export const BoardSelectionGesturePhase = Object.freeze({
  PENDING: 'pending',
  MARQUEE: 'marquee',
});

export function createBoardSelectionGesture({
  pointerId,
  button,
  startClient,
  startWorld,
  cardId = null,
  additive = false,
  immediate = false,
}) {
  if (
    !Number.isInteger(pointerId)
    || !finitePoint(startClient)
    || !finitePoint(startWorld)
  ) {
    return null;
  }

  return {
    pointerId,
    button,
    phase: immediate
      ? BoardSelectionGesturePhase.MARQUEE
      : BoardSelectionGesturePhase.PENDING,
    startClient: { ...startClient },
    startWorld: { ...startWorld },
    cardId,
    additive: Boolean(additive),
    previousIds: null,
    baseIds: null,
  };
}

export function boardSelectionGesturePassedThreshold(
  gesture,
  point,
  threshold,
) {
  if (!gesture || !finitePoint(gesture.startClient) || !finitePoint(point)) return false;
  if (!Number.isFinite(threshold) || threshold < 0) return false;

  return Math.hypot(
    point.x - gesture.startClient.x,
    point.y - gesture.startClient.y,
  ) >= threshold;
}

export function activateBoardSelectionGesture(gesture, selectedIds) {
  if (!gesture) return null;

  const previousIds = new Set(selectedIds || []);
  const baseIds = gesture.additive ? new Set(previousIds) : new Set();

  return {
    gesture: {
      ...gesture,
      phase: BoardSelectionGesturePhase.MARQUEE,
      previousIds,
      baseIds,
    },
    selectedIds: new Set(baseIds),
  };
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
