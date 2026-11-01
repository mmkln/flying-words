import {
  getCanvasPlacement,
  withCanvasPlacement,
  withoutCanvasPlacement,
} from './canvas-placements.js';

export const BoardPlacementOperation = Object.freeze({
  PLACE: 'place',
  MOVE: 'move',
});

export const BoardPlacementTargetKind = Object.freeze({
  EXISTING: 'existing',
  NEW: 'new',
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
    target: null,
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

export function setBoardPlacementTarget(session, target, thoughts) {
  if (!session || !target || typeof target !== 'object') return session;

  const existingTarget = target.kind === BoardPlacementTargetKind.EXISTING;
  const newTarget = target.kind === BoardPlacementTargetKind.NEW;
  if (!existingTarget && !newTarget) return session;

  if (existingTarget) {
    if (typeof target.boardId !== 'string' || !target.boardId) return session;
    if (target.boardId === session.sourceBoardId) return session;
  }

  if (newTarget && (typeof target.title !== 'string' || !target.title.trim())) {
    return session;
  }

  const byId = thoughtMap(thoughts);
  const preexistingTargetIds = existingTarget
    ? session.thoughtIds.filter((thoughtId) => (
      Boolean(getCanvasPlacement(byId.get(thoughtId), target.boardId))
    ))
    : [];

  return {
    ...session,
    step: 'placing',
    target: existingTarget
      ? {
        kind: BoardPlacementTargetKind.EXISTING,
        boardId: target.boardId,
      }
      : {
        kind: BoardPlacementTargetKind.NEW,
        title: target.title.trim(),
      },
    preexistingTargetIds,
    draftPositions: [],
  };
}

export function resolveBoardPlacementTarget(session, boardId) {
  if (
    session?.target?.kind !== BoardPlacementTargetKind.NEW
    || typeof boardId !== 'string'
    || !boardId
  ) return session;

  return {
    ...session,
    target: {
      kind: BoardPlacementTargetKind.EXISTING,
      boardId,
    },
  };
}

export function updateBoardPlacementDraft(session, positions) {
  if (!session || session.step !== 'placing' || !session.target) return session;
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
  const targetBoardId = session?.target?.kind === BoardPlacementTargetKind.EXISTING
    ? session.target.boardId
    : null;
  if (
    !targetBoardId
    || targetBoardId === session.sourceBoardId
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
      getCanvasPlacement(thought, targetBoardId),
    );
    if (draft && !targetAlreadyExists) {
      nextMeta = withCanvasPlacement(nextMeta, targetBoardId, draft);
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

