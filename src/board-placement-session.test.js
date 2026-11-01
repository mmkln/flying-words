import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BoardPlacementOperation,
  BoardPlacementTargetKind,
  createBoardPlacementSession,
  planBoardPlacementCommit,
  resolveBoardPlacementTarget,
  restoreBoardPlacementCanvas,
  setBoardPlacementTarget,
  updateBoardPlacementDraft,
} from './board-placement-session.js';

function thought(id, placements) {
  return {
    id,
    meta: {
      knowledge: { kind: 'thought' },
      canvas: { version: 2, placements },
    },
  };
}

test('placing preserves the source Board and unrelated metadata', () => {
  const thoughts = [thought('a', { source: { x: 10, y: 20 } })];
  let session = createBoardPlacementSession({
    operation: BoardPlacementOperation.PLACE,
    sourceBoardId: 'source',
    selectedIds: ['a'],
    thoughts,
  });
  session = setBoardPlacementTarget(session, {
    kind: BoardPlacementTargetKind.EXISTING,
    boardId: 'target',
  }, thoughts);
  session = updateBoardPlacementDraft(session, [{ id: 'a', x: 300, y: 400 }]);

  const [change] = planBoardPlacementCommit(session, thoughts);
  assert.deepEqual(change.nextMeta.canvas.placements, {
    source: { x: 10, y: 20 },
    target: { x: 300, y: 400 },
  });
  assert.deepEqual(change.nextMeta.knowledge, { kind: 'thought' });
});

test('moving removes only the source placement', () => {
  const thoughts = [thought('a', {
    source: { x: 10, y: 20 },
    other: { x: 90, y: 100 },
  })];
  let session = createBoardPlacementSession({
    operation: BoardPlacementOperation.MOVE,
    sourceBoardId: 'source',
    selectedIds: ['a'],
    thoughts,
  });
  session = setBoardPlacementTarget(session, {
    kind: BoardPlacementTargetKind.EXISTING,
    boardId: 'target',
  }, thoughts);
  session = updateBoardPlacementDraft(session, [{ id: 'a', x: 300, y: 400 }]);

  const [change] = planBoardPlacementCommit(session, thoughts);
  assert.deepEqual(change.nextMeta.canvas.placements, {
    other: { x: 90, y: 100 },
    target: { x: 300, y: 400 },
  });
});

test('an existing target placement is never overwritten', () => {
  const thoughts = [thought('a', {
    source: { x: 10, y: 20 },
    target: { x: 700, y: 800 },
  })];
  let session = createBoardPlacementSession({
    operation: BoardPlacementOperation.MOVE,
    sourceBoardId: 'source',
    selectedIds: ['a'],
    thoughts,
  });
  session = setBoardPlacementTarget(session, {
    kind: BoardPlacementTargetKind.EXISTING,
    boardId: 'target',
  }, thoughts);
  session = updateBoardPlacementDraft(session, [{ id: 'a', x: 300, y: 400 }]);

  assert.deepEqual(session.draftPositions, []);
  const [change] = planBoardPlacementCommit(session, thoughts);
  assert.deepEqual(change.nextMeta.canvas.placements, {
    target: { x: 700, y: 800 },
  });
});

test('placing on a partially populated target adds only missing cards', () => {
  const thoughts = [
    thought('a', {
      source: { x: 10, y: 20 },
      target: { x: 700, y: 800 },
    }),
    thought('b', { source: { x: 40, y: 50 } }),
  ];
  let session = createBoardPlacementSession({
    operation: BoardPlacementOperation.PLACE,
    sourceBoardId: 'source',
    selectedIds: ['a', 'b'],
    thoughts,
  });
  session = setBoardPlacementTarget(session, {
    kind: BoardPlacementTargetKind.EXISTING,
    boardId: 'target',
  }, thoughts);
  session = updateBoardPlacementDraft(session, [
    { id: 'a', x: 1, y: 2 },
    { id: 'b', x: 300, y: 400 },
  ]);

  assert.deepEqual(session.preexistingTargetIds, ['a']);
  assert.deepEqual(session.draftPositions, [{ id: 'b', x: 300, y: 400 }]);
  const changes = planBoardPlacementCommit(session, thoughts);
  assert.equal(changes.length, 1);
  assert.equal(changes[0].thoughtId, 'b');
  assert.deepEqual(changes[0].nextMeta.canvas.placements, {
    source: { x: 40, y: 50 },
    target: { x: 300, y: 400 },
  });
});

test('moving to an existing target removes every selected source placement', () => {
  const thoughts = [
    thought('a', {
      source: { x: 10, y: 20 },
      target: { x: 700, y: 800 },
    }),
    thought('b', { source: { x: 40, y: 50 } }),
  ];
  let session = createBoardPlacementSession({
    operation: BoardPlacementOperation.MOVE,
    sourceBoardId: 'source',
    selectedIds: ['a', 'b'],
    thoughts,
  });
  session = setBoardPlacementTarget(session, {
    kind: BoardPlacementTargetKind.EXISTING,
    boardId: 'target',
  }, thoughts);
  session = updateBoardPlacementDraft(session, [{ id: 'b', x: 300, y: 400 }]);

  const changes = planBoardPlacementCommit(session, thoughts);
  assert.equal(changes.length, 2);
  assert.deepEqual(changes[0].nextMeta.canvas.placements, {
    target: { x: 700, y: 800 },
  });
  assert.deepEqual(changes[1].nextMeta.canvas.placements, {
    target: { x: 300, y: 400 },
  });
});

test('a new target remains local until it is resolved with a persisted Board id', () => {
  const thoughts = [thought('a', { source: { x: 10, y: 20 } })];
  let session = createBoardPlacementSession({
    operation: BoardPlacementOperation.PLACE,
    sourceBoardId: 'source',
    selectedIds: ['a'],
    thoughts,
  });
  session = setBoardPlacementTarget(session, {
    kind: BoardPlacementTargetKind.NEW,
    title: 'Research',
  }, thoughts);
  session = updateBoardPlacementDraft(session, [{ id: 'a', x: 300, y: 400 }]);

  assert.deepEqual(planBoardPlacementCommit(session, thoughts), []);
  const resolved = resolveBoardPlacementTarget(session, 'persisted-board');
  assert.deepEqual(resolved.draftPositions, session.draftPositions);
  assert.deepEqual(resolved.target, {
    kind: BoardPlacementTargetKind.EXISTING,
    boardId: 'persisted-board',
  });
  const [change] = planBoardPlacementCommit(resolved, thoughts);
  assert.deepEqual(change.nextMeta.canvas.placements, {
    source: { x: 10, y: 20 },
    'persisted-board': { x: 300, y: 400 },
  });
});

test('restoring a placement snapshot preserves current non-canvas metadata', () => {
  const next = restoreBoardPlacementCanvas(
    { knowledge: { kind: 'question' }, canvas: { version: 2, placements: {} } },
    { version: 2, placements: { source: { x: 1, y: 2 } } },
  );
  assert.deepEqual(next, {
    knowledge: { kind: 'question' },
    canvas: { version: 2, placements: { source: { x: 1, y: 2 } } },
  });
});

