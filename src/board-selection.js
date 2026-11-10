function finitePoint(point) {
  return Boolean(point)
    && Number.isFinite(point.x)
    && Number.isFinite(point.y);
}

export const BoardSelectionGesturePhase = Object.freeze({
  PENDING: 'pending',
  MARQUEE: 'marquee',
});

export const BoardSelectionGestureIntent = Object.freeze({
  QUICK: 'quick',
  TOOL: 'tool',
});

export const BoardSelectionTool = Object.freeze({
  DEFAULT: 'default',
  SELECT: 'select',
});

export function createBoardSelectionSession({
  tool = BoardSelectionTool.DEFAULT,
} = {}) {
  return {
    selectedIds: new Set(),
    tool,
  };
}

export function ensureBoardSelectionSession(
  session,
  { tool = BoardSelectionTool.DEFAULT } = {},
) {
  if (!session) return createBoardSelectionSession({ tool });
  if (
    session.tool === BoardSelectionTool.SELECT
    || tool === BoardSelectionTool.DEFAULT
  ) return session;

  return {
    ...session,
    tool,
  };
}

export function setBoardSelectionTool(session, tool) {
  if (!session) return createBoardSelectionSession({ tool });
  return {
    ...session,
    tool,
  };
}

export function toggleBoardSelectionSessionId(session, thoughtId) {
  if (!session || !thoughtId) return session;
  return {
    ...session,
    selectedIds: toggleBoardSelection(session.selectedIds, thoughtId),
  };
}

export function removeBoardSelectionSessionId(session, thoughtId) {
  if (!session?.selectedIds.has(thoughtId)) return session;

  const selectedIds = new Set(session.selectedIds);
  selectedIds.delete(thoughtId);
  return {
    ...session,
    selectedIds,
  };
}

export function clearBoardSelectionSession(session) {
  if (!session) return null;
  return {
    ...session,
    selectedIds: new Set(),
  };
}

export function setBoardSelectionSessionIds(session, selectedIds) {
  if (!session) return session;
  return {
    ...session,
    selectedIds: new Set(selectedIds || []),
  };
}

export function boardSelectionUsesTool(session) {
  return session?.tool === BoardSelectionTool.SELECT;
}

export function resolveBoardSelectionGestureIntent({
  button,
  pointerType,
  toolActive,
  cardId,
  spacePressed,
  toggleModifier,
}) {
  if (button === 0 && toolActive && !cardId && !spacePressed) {
    return BoardSelectionGestureIntent.TOOL;
  }
  if (
    button === 0
    && pointerType === 'mouse'
    && toggleModifier
    && cardId
  ) {
    return BoardSelectionGestureIntent.QUICK;
  }
  if (button === 2 && pointerType === 'mouse') {
    return BoardSelectionGestureIntent.QUICK;
  }
  return null;
}

export function boardSelectionGestureCanBecomeMarquee(gesture) {
  return Boolean(
    gesture
    && !(
      gesture.intent === BoardSelectionGestureIntent.QUICK
      && gesture.cardId
    ),
  );
}

export function createBoardSelectionGesture({
  pointerId,
  intent,
  startClient,
  startWorld,
  cardId = null,
  additive = false,
}) {
  if (
    !Number.isInteger(pointerId)
    || !Object.values(BoardSelectionGestureIntent).includes(intent)
    || !finitePoint(startClient)
    || !finitePoint(startWorld)
  ) {
    return null;
  }

  return {
    pointerId,
    intent,
    phase: intent === BoardSelectionGestureIntent.TOOL
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
