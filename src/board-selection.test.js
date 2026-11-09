import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BoardSelectionGestureIntent,
  BoardSelectionGesturePhase,
  BoardSelectionTool,
  activateBoardSelectionGesture,
  boardSelectionUsesTool,
  boardSelectionRectangle,
  boardSelectionGesturePassedThreshold,
  boardSelectionGestureCanBecomeMarquee,
  captureBoardSelectionOrigins,
  clearBoardSelectionSession,
  createBoardSelectionGesture,
  createBoardSelectionSession,
  ensureBoardSelectionSession,
  removeBoardSelectionSessionId,
  resolveBoardSelectionGestureIntent,
  selectBoardCardsInRectangle,
  setBoardSelectionSessionIds,
  setBoardSelectionTool,
  toggleBoardSelection,
  toggleBoardSelectionSessionId,
  translateBoardSelectionOrigins,
} from './board-selection.js';

test('toggles Board selection without mutating the previous Set', () => {
  const selected = new Set(['first']);
  const added = toggleBoardSelection(selected, 'second');
  const removed = toggleBoardSelection(added, 'first');

  assert.deepEqual([...selected], ['first']);
  assert.deepEqual([...added], ['first', 'second']);
  assert.deepEqual([...removed], ['second']);
});

test('normalizes a marquee dragged in any direction', () => {
  assert.deepEqual(
    boardSelectionRectangle({ x: 160, y: 120 }, { x: 20, y: 40 }),
    { left: 20, top: 40, right: 160, bottom: 120 },
  );
});

test('selects only cards touched by the marquee', () => {
  const selected = selectBoardCardsInRectangle([
    { id: 'inside', x: 20, y: 20, width: 80, height: 40 },
    { id: 'edge', x: 95, y: 50, width: 80, height: 40 },
    { id: 'outside', x: 220, y: 20, width: 80, height: 40 },
  ], { left: 0, top: 0, right: 120, bottom: 80 });

  assert.deepEqual([...selected], ['inside', 'edge']);
});

test('moves every selected card by the same delta', () => {
  const origins = captureBoardSelectionOrigins([
    { id: 'a', x: 10, y: 20 },
    { id: 'b', x: 90, y: 75 },
    { id: 'c', x: 400, y: 300 },
  ], new Set(['a', 'b']));

  const positions = translateBoardSelectionOrigins(origins, { x: 35, y: -10 });

  assert.deepEqual(positions, [
    { id: 'a', x: 45, y: 10 },
    { id: 'b', x: 125, y: 65 },
  ]);
  assert.equal(positions[1].x - positions[0].x, 80);
  assert.equal(positions[1].y - positions[0].y, 55);
});

test('keeps a secondary-pointer gesture pending until it passes the drag threshold', () => {
  const gesture = createBoardSelectionGesture({
    pointerId: 4,
    intent: BoardSelectionGestureIntent.QUICK,
    startClient: { x: 100, y: 80 },
    startWorld: { x: 240, y: 160 },
    cardId: 'thought-1',
  });

  assert.equal(gesture.phase, BoardSelectionGesturePhase.PENDING);
  assert.equal(
    boardSelectionGesturePassedThreshold(gesture, { x: 104, y: 83 }, 6),
    false,
  );
  assert.equal(
    boardSelectionGesturePassedThreshold(gesture, { x: 106, y: 80 }, 6),
    true,
  );
});

test('activates a replacing marquee without mutating the previous selection', () => {
  const selected = new Set(['first', 'second']);
  const gesture = createBoardSelectionGesture({
    pointerId: 7,
    intent: BoardSelectionGestureIntent.QUICK,
    startClient: { x: 20, y: 40 },
    startWorld: { x: 50, y: 100 },
  });
  const activated = activateBoardSelectionGesture(gesture, selected);

  assert.equal(activated.gesture.phase, BoardSelectionGesturePhase.MARQUEE);
  assert.deepEqual([...activated.gesture.previousIds], ['first', 'second']);
  assert.deepEqual([...activated.gesture.baseIds], []);
  assert.deepEqual([...activated.selectedIds], []);
  assert.deepEqual([...selected], ['first', 'second']);
});

test('activates an additive marquee with a copy of the current selection', () => {
  const selected = new Set(['first']);
  const gesture = createBoardSelectionGesture({
    pointerId: 8,
    intent: BoardSelectionGestureIntent.TOOL,
    startClient: { x: 10, y: 20 },
    startWorld: { x: 30, y: 60 },
    additive: true,
  });
  const activated = activateBoardSelectionGesture(gesture, selected);

  assert.equal(gesture.phase, BoardSelectionGesturePhase.MARQUEE);
  assert.deepEqual([...activated.gesture.baseIds], ['first']);
  assert.deepEqual([...activated.selectedIds], ['first']);
  assert.notEqual(activated.gesture.baseIds, activated.selectedIds);
});

test('creates quick and explicit Board selection sessions independently from selected ids', () => {
  const quick = createBoardSelectionSession();
  const explicit = createBoardSelectionSession({ tool: BoardSelectionTool.SELECT });

  assert.equal(boardSelectionUsesTool(quick), false);
  assert.equal(boardSelectionUsesTool(explicit), true);
  assert.deepEqual([...quick.selectedIds], []);
  assert.deepEqual([...explicit.selectedIds], []);
});

test('a quick gesture never disables an existing explicit Select tool', () => {
  const explicit = createBoardSelectionSession({ tool: BoardSelectionTool.SELECT });
  const afterQuick = ensureBoardSelectionSession(explicit, {
    tool: BoardSelectionTool.DEFAULT,
  });

  assert.equal(afterQuick, explicit);
  assert.equal(boardSelectionUsesTool(afterQuick), true);
});

test('switches the Select tool without losing or mutating selected ids', () => {
  const session = toggleBoardSelectionSessionId(
    createBoardSelectionSession(),
    'thought-1',
  );
  const explicit = setBoardSelectionTool(session, BoardSelectionTool.SELECT);
  const quick = setBoardSelectionTool(explicit, BoardSelectionTool.DEFAULT);

  assert.equal(boardSelectionUsesTool(session), false);
  assert.equal(boardSelectionUsesTool(explicit), true);
  assert.equal(boardSelectionUsesTool(quick), false);
  assert.deepEqual([...session.selectedIds], ['thought-1']);
  assert.deepEqual([...explicit.selectedIds], ['thought-1']);
  assert.deepEqual([...quick.selectedIds], ['thought-1']);
  assert.notEqual(session, explicit);
  assert.notEqual(explicit, quick);
});

test('clears a Board selection session without changing its active tool', () => {
  const selected = toggleBoardSelectionSessionId(
    createBoardSelectionSession({ tool: BoardSelectionTool.SELECT }),
    'thought-1',
  );
  const cleared = clearBoardSelectionSession(selected);

  assert.equal(boardSelectionUsesTool(cleared), true);
  assert.deepEqual([...cleared.selectedIds], []);
  assert.deepEqual([...selected.selectedIds], ['thought-1']);
});

test('removes one selected id without mutating the session', () => {
  const first = toggleBoardSelectionSessionId(
    createBoardSelectionSession(),
    'thought-1',
  );
  const selected = toggleBoardSelectionSessionId(first, 'thought-2');
  const next = removeBoardSelectionSessionId(selected, 'thought-1');

  assert.deepEqual([...next.selectedIds], ['thought-2']);
  assert.deepEqual([...selected.selectedIds], ['thought-1', 'thought-2']);
  assert.equal(removeBoardSelectionSessionId(next, 'missing'), next);
});

test('replaces selected ids without mutating the session or source set', () => {
  const session = createBoardSelectionSession();
  const sourceIds = new Set(['thought-1']);
  const next = setBoardSelectionSessionIds(session, sourceIds);

  sourceIds.add('thought-2');
  assert.deepEqual([...next.selectedIds], ['thought-1']);
  assert.deepEqual([...session.selectedIds], []);
});

test('routes pointer gestures without turning quick selection into the Select tool', () => {
  assert.equal(resolveBoardSelectionGestureIntent({
    button: 2,
    pointerType: 'mouse',
    toolActive: false,
    cardId: 'thought-1',
    spacePressed: false,
  }), BoardSelectionGestureIntent.QUICK);
  assert.equal(resolveBoardSelectionGestureIntent({
    button: 0,
    pointerType: 'mouse',
    toolActive: true,
    cardId: null,
    spacePressed: false,
  }), BoardSelectionGestureIntent.TOOL);
  assert.equal(resolveBoardSelectionGestureIntent({
    button: 0,
    pointerType: 'mouse',
    toolActive: false,
    cardId: null,
    spacePressed: false,
  }), null);
});

test('quick drag from a card cannot turn into a marquee', () => {
  const cardGesture = createBoardSelectionGesture({
    pointerId: 1,
    intent: BoardSelectionGestureIntent.QUICK,
    startClient: { x: 0, y: 0 },
    startWorld: { x: 0, y: 0 },
    cardId: 'thought-1',
  });
  const backgroundGesture = createBoardSelectionGesture({
    pointerId: 2,
    intent: BoardSelectionGestureIntent.QUICK,
    startClient: { x: 0, y: 0 },
    startWorld: { x: 0, y: 0 },
  });

  assert.equal(boardSelectionGestureCanBecomeMarquee(cardGesture), false);
  assert.equal(boardSelectionGestureCanBecomeMarquee(backgroundGesture), true);
});
