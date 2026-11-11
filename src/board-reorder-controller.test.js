import assert from 'node:assert/strict';
import test from 'node:test';

import { findBoardReorderReferenceId } from './board-reorder-controller.js';

const items = [
  { id: 'one', rect: { left: 0, top: 0, width: 100, height: 60 } },
  { id: 'two', rect: { left: 120, top: 0, width: 100, height: 60 } },
  { id: 'three', rect: { left: 0, top: 80, width: 100, height: 60 } },
  { id: 'four', rect: { left: 120, top: 80, width: 100, height: 60 } },
];

test('finds insertion points across a wrapped board grid', () => {
  assert.equal(findBoardReorderReferenceId(items, { x: 10, y: 20 }), 'one');
  assert.equal(findBoardReorderReferenceId(items, { x: 90, y: 20 }), 'two');
  assert.equal(findBoardReorderReferenceId(items, { x: 230, y: 20 }), 'three');
  assert.equal(findBoardReorderReferenceId(items, { x: 10, y: 100 }), 'three');
  assert.equal(findBoardReorderReferenceId(items, { x: 230, y: 100 }), null);
});

test('returns null for an empty grid', () => {
  assert.equal(findBoardReorderReferenceId([], { x: 0, y: 0 }), null);
});
