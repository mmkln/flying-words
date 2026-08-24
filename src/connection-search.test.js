import assert from 'node:assert/strict';
import test from 'node:test';

import { findConnectionSearchResults } from './connection-search.js';

const thought = (id, text, createdAt) => ({ id, text, createdAt });

test('excludes the source thought from connection search results', () => {
  const results = findConnectionSearchResults([
    thought('source', 'Systems thinking', '2026-08-01T00:00:00Z'),
    thought('target', 'Thinking in systems', '2026-08-02T00:00:00Z'),
  ], {
    sourceId: 'source',
    query: 'thinking',
  });

  assert.deepEqual(results.map(({ id }) => id), ['target']);
});

test('matches text case-insensitively and prioritizes direct prefixes', () => {
  const results = findConnectionSearchResults([
    thought('contains', 'A note about graph theory', '2026-08-03T00:00:00Z'),
    thought('prefix', 'Graph theory basics', '2026-08-01T00:00:00Z'),
  ], {
    query: 'GRAPH',
  });

  assert.deepEqual(results.map(({ id }) => id), ['prefix', 'contains']);
});

test('limits results after ranking them', () => {
  const results = findConnectionSearchResults(
    Array.from({ length: 80 }, (_, index) => (
      thought(`thought-${index}`, `Note ${index}`, `2026-08-${String(index % 28 + 1).padStart(2, '0')}T00:00:00Z`)
    )),
    { limit: 60 },
  );

  assert.equal(results.length, 60);
});
