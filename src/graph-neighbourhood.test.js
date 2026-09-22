import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildUndirectedAdjacency,
  collectHiddenNeighbourIds,
  collectNeighbourhoodIds,
} from './graph-neighbourhood.js';

test('builds one undirected graph from directed links', () => {
  const adjacency = buildUndirectedAdjacency(
    ['root', 'child', 'other'],
    [{ sourceId: 'child', targetId: 'root' }],
  );

  assert.deepEqual([...adjacency.get('root')], ['child']);
  assert.deepEqual([...adjacency.get('child')], ['root']);
  assert.deepEqual([...adjacency.get('other')], []);
});

test('collects a neighbourhood up to the requested depth', () => {
  const adjacency = buildUndirectedAdjacency(
    ['root', 'child', 'grandchild', 'great-grandchild'],
    [
      { sourceId: 'root', targetId: 'child' },
      { sourceId: 'child', targetId: 'grandchild' },
      { sourceId: 'grandchild', targetId: 'great-grandchild' },
    ],
  );

  assert.deepEqual([...collectNeighbourhoodIds(adjacency, 'root', 0)], ['root']);
  assert.deepEqual([...collectNeighbourhoodIds(adjacency, 'root', 1)], ['root', 'child']);
  assert.deepEqual(
    [...collectNeighbourhoodIds(adjacency, 'root', 2)],
    ['root', 'child', 'grandchild'],
  );
});

test('cycles and shared branches never duplicate thoughts', () => {
  const adjacency = buildUndirectedAdjacency(
    ['root', 'left', 'right', 'shared'],
    [
      { sourceId: 'root', targetId: 'left' },
      { sourceId: 'root', targetId: 'right' },
      { sourceId: 'left', targetId: 'shared' },
      { sourceId: 'right', targetId: 'shared' },
      { sourceId: 'shared', targetId: 'root' },
    ],
  );

  assert.deepEqual(
    [...collectNeighbourhoodIds(adjacency, 'root', 2)],
    ['root', 'left', 'right', 'shared'],
  );
});

test('ignores malformed links and reports hidden direct neighbours', () => {
  const adjacency = buildUndirectedAdjacency(
    ['root', 'child', 'hidden'],
    [
      { sourceId: 'root', targetId: 'missing' },
      { sourceId: 'root', targetId: 'root' },
      { sourceId: 'root', targetId: 'child' },
      { sourceId: 'root', targetId: 'hidden' },
    ],
  );

  assert.deepEqual(
    [...collectHiddenNeighbourIds(adjacency, 'root', new Set(['root', 'child']))],
    ['hidden'],
  );
});
