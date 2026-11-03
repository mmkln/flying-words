import assert from 'node:assert/strict';
import test from 'node:test';

import {
  clearHistoryFilters,
  countHistoryFilters,
  createHistoryFilters,
  matchesHistoryFilters,
  setHistoryFilterFlag,
  toggleHistoryKind,
} from './history-filters.js';

function thought(kind, { anchored = false, resolved = false } = {}) {
  return {
    meta: {
      knowledge: { version: 1, kind },
      ...(anchored
        ? { navigation: { version: 2, anchor: { createdAt: 1 } } }
        : {}),
      ...(resolved ? { resolved: true } : {}),
    },
  };
}

test('matches any selected knowledge kind', () => {
  const filters = createHistoryFilters({ kinds: ['question', 'hypothesis'] });

  assert.equal(matchesHistoryFilters(thought('question'), filters), true);
  assert.equal(matchesHistoryFilters(thought('hypothesis'), filters), true);
  assert.equal(matchesHistoryFilters(thought('observation'), filters), false);
});

test('combines type and flag filters with AND semantics', () => {
  const filters = createHistoryFilters({
    kinds: ['question'],
    anchored: true,
    resolved: true,
  });

  assert.equal(matchesHistoryFilters(thought('question', {
    anchored: true,
    resolved: true,
  }), filters), true);
  assert.equal(matchesHistoryFilters(thought('question', {
    anchored: true,
  }), filters), false);
  assert.equal(matchesHistoryFilters(thought('thought', {
    anchored: true,
    resolved: true,
  }), filters), false);
});

test('updates filters immutably and counts every active predicate', () => {
  const initial = createHistoryFilters();
  const withKind = toggleHistoryKind(initial, 'question');
  const withAnchor = setHistoryFilterFlag(withKind, 'anchored', true);

  assert.deepEqual(initial.kinds, []);
  assert.deepEqual(withAnchor.kinds, ['question']);
  assert.equal(withAnchor.anchored, true);
  assert.equal(countHistoryFilters(withAnchor), 2);
});

test('ignores unknown kinds and flags', () => {
  const initial = createHistoryFilters();

  assert.equal(toggleHistoryKind(initial, 'unknown'), initial);
  assert.equal(setHistoryFilterFlag(initial, 'unknown', true), initial);
});

test('clear returns the canonical empty filter state', () => {
  assert.deepEqual(clearHistoryFilters(), {
    kinds: [],
    anchored: false,
    resolved: false,
  });
});
