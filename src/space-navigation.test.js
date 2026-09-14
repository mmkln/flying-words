import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildSpaceUrl,
  readSpaceIdFromSearch,
  resolveSpaceId,
} from './space-navigation.js';

test('reads the active space from query parameters', () => {
  assert.equal(readSpaceIdFromSearch('?space=space-2'), 'space-2');
  assert.equal(readSpaceIdFromSearch('?theme=dark'), null);
});

test('builds a space URL without discarding unrelated state', () => {
  assert.equal(
    buildSpaceUrl(
      'https://example.com/app?theme=dark#section',
      'space-3',
    ),
    '/app?theme=dark&space=space-3#section',
  );
});

test('replaces an existing space parameter', () => {
  assert.equal(
    buildSpaceUrl('https://example.com/?space=space-1', 'spatial-1'),
    '/?space=spatial-1',
  );
});

test('prefers a valid URL space over remembered state', () => {
  assert.equal(
    resolveSpaceId({
      requestedSpaceId: 'space-2',
      rememberedSpaceId: 'space-1',
      isValid: (spaceId) => ['space-1', 'space-2'].includes(spaceId),
      fallbackSpaceId: 'space-1',
    }),
    'space-2',
  );
});

test('falls back from an unavailable URL space to remembered state', () => {
  assert.equal(
    resolveSpaceId({
      requestedSpaceId: 'deleted-board',
      rememberedSpaceId: 'space-2',
      isValid: (spaceId) => spaceId === 'space-2',
      fallbackSpaceId: 'space-1',
    }),
    'space-2',
  );
});

test('uses the default when neither URL nor remembered state is valid', () => {
  assert.equal(
    resolveSpaceId({
      requestedSpaceId: 'deleted-board',
      rememberedSpaceId: 'old-board',
      isValid: () => false,
      fallbackSpaceId: 'space-1',
    }),
    'space-1',
  );
});
