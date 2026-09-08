import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildThoughtListPath,
  normalizeThoughtListResponse,
} from './thought-list-api.js';

test('builds the base thought list path without query parameters', () => {
  assert.equal(buildThoughtListPath(), '/thoughts/');
});

test('builds a paginated thought list path with cursor and query', () => {
  assert.equal(
    buildThoughtListPath({
      limit: 50,
      cursor: 'next-page',
      query: ' marketing ',
      knowledgeKind: 'question',
    }),
    '/thoughts/?limit=50&cursor=next-page&q=marketing&knowledge_kind=question',
  );
});

test('normalizes the legacy array thought list response', () => {
  const records = [{ id: 'one' }];

  assert.deepEqual(normalizeThoughtListResponse(records), {
    results: records,
    nextCursor: null,
    hasMore: false,
  });
});

test('normalizes the paginated thought list response', () => {
  assert.deepEqual(
    normalizeThoughtListResponse({
      results: [{ id: 'one' }],
      next_cursor: 'next',
      has_more: true,
    }),
    {
      results: [{ id: 'one' }],
      nextCursor: 'next',
      hasMore: true,
    },
  );
});

test('falls back to an empty page for malformed paginated responses', () => {
  assert.deepEqual(normalizeThoughtListResponse({ results: null }), {
    results: [],
    nextCursor: null,
    hasMore: false,
  });
});
