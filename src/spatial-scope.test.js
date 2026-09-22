import assert from 'node:assert/strict';
import test from 'node:test';
import {
  SpatialScopeMode,
  applySpatialScope,
  createAllSpatialScope,
  createContextSpatialScope,
  getSpatialScopeIds,
} from './spatial-scope.js';

function graph() {
  return {
    nodes: ['root', 'child', 'grandchild', 'outside'].map((id) => ({ id })),
    links: [
      { id: 'first', sourceId: 'root', targetId: 'child' },
      { id: 'second', sourceId: 'child', targetId: 'grandchild' },
    ],
    layoutMode: 'constellations',
  };
}

test('All scope preserves every graph node and link', () => {
  const source = graph();
  const scoped = applySpatialScope(source, createAllSpatialScope());

  assert.deepEqual(scoped, source);
  assert.notEqual(scoped, source);
});

test('Context scope includes incoming and outgoing thoughts through depth two', () => {
  const source = graph();
  const scope = createContextSpatialScope(source, 'grandchild', 2);
  const scoped = applySpatialScope(source, scope);

  assert.equal(scope.mode, SpatialScopeMode.CONTEXT);
  assert.deepEqual(scoped.nodes.map(({ id }) => id), ['root', 'child', 'grandchild']);
  assert.deepEqual(scoped.links.map(({ id }) => id), ['first', 'second']);
  assert.deepEqual(
    [...getSpatialScopeIds(source, scope)],
    ['grandchild', 'child', 'root'],
  );
});

test('a missing context root safely falls back to All scope', () => {
  const source = graph();
  const scope = createContextSpatialScope(source, 'missing', 2);

  assert.equal(scope.mode, SpatialScopeMode.ALL);
  assert.deepEqual(applySpatialScope(source, scope), source);
});

test('filtering a Context graph never mutates its source', () => {
  const source = graph();
  const snapshot = structuredClone(source);

  applySpatialScope(source, createContextSpatialScope(source, 'root', 1));

  assert.deepEqual(source, snapshot);
});
