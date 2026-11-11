import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildBoardSelectionText,
} from './board-selection-export.js';

test('exports selected thoughts in visual reading order', () => {
  const thoughts = [
    { id: 'third', text: 'Third', x: 200, y: 100 },
    { id: 'first', text: 'First', x: 20, y: 20 },
    { id: 'second', text: 'Second', x: 100, y: 20 },
    { id: 'ignored', text: 'Ignored', x: 0, y: 0 },
  ];

  const result = buildBoardSelectionText(
    thoughts,
    new Set(['first', 'second', 'third']),
  );

  assert.equal(result, 'First\n\nSecond\n\nThird');
});

test('preserves full multiline text', () => {
  const result = buildBoardSelectionText([
    {
      id: 'a',
      text: 'Title\n\nDetailed explanation',
      x: 0,
      y: 0,
    },
  ], new Set(['a']));

  assert.equal(result, 'Title\n\nDetailed explanation');
});

test('returns an empty string for an empty selection', () => {
  assert.equal(
    buildBoardSelectionText(
      [{ id: 'a', text: 'Text', x: 0, y: 0 }],
      new Set(),
    ),
    '',
  );
});
