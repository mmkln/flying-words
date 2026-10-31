import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BoardPlacementOperation,
  createBoardPlacementSession,
  planBoardPlacementCommit,
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
  session = setBoardPlacementTarget(session, 'target', thoughts);
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
  session = setBoardPlacementTarget(session, 'target', thoughts);
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
  session = setBoardPlacementTarget(session, 'target', thoughts);
  session = updateBoardPlacementDraft(session, [{ id: 'a', x: 300, y: 400 }]);

  assert.deepEqual(session.draftPositions, []);
  const [change] = planBoardPlacementCommit(session, thoughts);
  assert.deepEqual(change.nextMeta.canvas.placements, {
    target: { x: 700, y: 800 },
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

