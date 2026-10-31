import {
  getCanvasPlacement,
  withCanvasPlacement,
  withoutCanvasPlacement,
} from './canvas-placements.js';

export const BoardPlacementOperation = Object.freeze({
  PLACE: 'place',
  MOVE: 'move',
});

function cloneCanvas(canvas) {
  if (!canvas || typeof canvas !== 'object') return null;
  return JSON.parse(JSON.stringify(canvas));
}

function thoughtMap(thoughts) {
  return thoughts instanceof Map
    ? thoughts
    : new Map((thoughts || []).map((thought) => [thought.id, thought]));
}

function restoreCanvas(meta, canvas) {
  const nextMeta = { ...(meta || {}) };
  if (canvas) nextMeta.canvas = cloneCanvas(canvas);
  else delete nextMeta.canvas;
  return nextMeta;
}

export function createBoardPlacementSession({
  operation,
  sourceBoardId,
  selectedIds,
  thoughts,
}) {
  if (!Object.values(BoardPlacementOperation).includes(operation)) return null;
  if (typeof sourceBoardId !== 'string' || !sourceBoardId) return null;

  const byId = thoughtMap(thoughts);
  const thoughtIds = [...new Set(selectedIds || [])].filter((thoughtId) => {
    const thought = byId.get(thoughtId);
    return Boolean(thought && getCanvasPlacement(thought, sourceBoardId));
  });
  if (!thoughtIds.length) return null;

  return {
    operation,
    step: 'choosing-board',
    sourceBoardId,
    targetBoardId: null,
    thoughtIds,
    preexistingTargetIds: [],
    previousCanvasByThoughtId: Object.fromEntries(
      thoughtIds.map((thoughtId) => [
        thoughtId,
        cloneCanvas(byId.get(thoughtId)?.meta?.canvas),
      ]),
    ),
    sourcePositions: thoughtIds.map((thoughtId) => ({
      id: thoughtId,
      ...getCanvasPlacement(byId.get(thoughtId), sourceBoardId),
    })),
    draftPositions: [],
  };
}

export function setBoardPlacementTarget(session, targetBoardId, thoughts) {
  if (!session || typeof targetBoardId !== 'string' || !targetBoardId) return session;
  if (targetBoardId === session.sourceBoardId) return session;

  const byId = thoughtMap(thoughts);
  const preexistingTargetIds = session.thoughtIds.filter((thoughtId) => (
    Boolean(getCanvasPlacement(byId.get(thoughtId), targetBoardId))
  ));

  return {
    ...session,
    step: 'placing',
    targetBoardId,
    preexistingTargetIds,
    draftPositions: [],
  };
}

export function updateBoardPlacementDraft(session, positions) {
  if (!session?.targetBoardId) return session;
  const allowed = new Set(
    session.thoughtIds.filter((thoughtId) => !session.preexistingTargetIds.includes(thoughtId)),
  );
  const draftPositions = (positions || [])
    .filter(({ id, x, y }) => (
      allowed.has(id) && Number.isFinite(x) && Number.isFinite(y)
    ))
    .map(({ id, x, y }) => ({ id, x, y }));

  return { ...session, draftPositions };
}

export function planBoardPlacementCommit(session, thoughts) {
  if (
    !session?.targetBoardId
    || session.targetBoardId === session.sourceBoardId
  ) return [];

  const byId = thoughtMap(thoughts);
  const drafts = new Map(
    (session.draftPositions || []).map(({ id, x, y }) => [id, { x, y }]),
  );

  return session.thoughtIds.flatMap((thoughtId) => {
    const thought = byId.get(thoughtId);
    if (!thought) return [];

    let nextMeta = thought.meta || {};
    if (session.operation === BoardPlacementOperation.MOVE) {
      nextMeta = withoutCanvasPlacement(nextMeta, session.sourceBoardId);
    }

    const draft = drafts.get(thoughtId);
    const targetAlreadyExists = Boolean(
      getCanvasPlacement(thought, session.targetBoardId),
    );
    if (draft && !targetAlreadyExists) {
      nextMeta = withCanvasPlacement(nextMeta, session.targetBoardId, draft);
    }

    const previousCanvas = session.previousCanvasByThoughtId[thoughtId] || null;
    const nextCanvas = nextMeta.canvas || null;
    if (JSON.stringify(previousCanvas) === JSON.stringify(nextCanvas)) return [];

    return [{
      thoughtId,
      previousCanvas: cloneCanvas(previousCanvas),
      nextMeta,
    }];
  });
}

export function restoreBoardPlacementCanvas(meta, canvas) {
  return restoreCanvas(meta, canvas);
}

