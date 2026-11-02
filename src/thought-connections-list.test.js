import test from 'node:test';
import assert from 'node:assert/strict';

import { getThoughtConnectionActionState } from './thought-connections-list.js';

test('a Spatial connection remains navigable without a Board placement', () => {
  assert.deepEqual(
    getThoughtConnectionActionState({ boardMode: false, placedOnBoard: false }),
    { navigable: true, placeable: false },
  );
});

test('an on-Board connection navigates without offering another placement', () => {
  assert.deepEqual(
    getThoughtConnectionActionState({ boardMode: true, placedOnBoard: true }),
    { navigable: true, placeable: false },
  );
});

test('an off-Board connection requires an explicit placement action', () => {
  assert.deepEqual(
    getThoughtConnectionActionState({ boardMode: true, placedOnBoard: false }),
    { navigable: false, placeable: true },
  );
});
