import assert from 'node:assert/strict';
import test from 'node:test';

import {
  ConnectionKind,
  ConnectionSpacing,
  detachIncomingConnections,
  flattenConnections,
  getOutgoingConnections,
  normalizeConnectionSpacing,
  reconcileConnections,
  repairConnections,
} from './connections.js';

function thought(id, outgoing = undefined, version = 2) {
  return {
    id,
    meta: outgoing
      ? { connections: { version, outgoing } }
      : {},
  };
}

test('stores renderer-independent target ids in source metadata', () => {
  const source = thought('source');
  const result = reconcileConnections(source, ['target']);
  const connection = source.meta.connections.outgoing[0];

  assert.deepEqual(result, { changed: true, count: 1 });
  assert.equal(source.meta.connections.version, 2);
  assert.equal(connection.targetId, 'target');
  assert.equal(connection.kind, ConnectionKind.RELATED);
  assert.equal(connection.spacing, ConnectionSpacing.NORMAL);
  assert.equal('spaceId' in connection, false);
  assert.equal('sourceId' in connection, false);
  assert.equal('target' in connection, false);
});

test('rejects self-links and duplicate target selections', () => {
  const source = thought('source');
  const result = reconcileConnections(source, ['source', 'target', 'target']);

  assert.deepEqual(result, { changed: true, count: 1 });
  assert.deepEqual(
    getOutgoingConnections(source).map(({ targetId }) => targetId),
    ['target'],
  );
});

test('preserves existing ids while reconciling a selection', () => {
  const source = thought('source');
  reconcileConnections(source, ['kept', 'removed']);
  const keptId = getOutgoingConnections(source)[0].id;

  const result = reconcileConnections(source, new Set(['kept', 'added']));
  const outgoing = getOutgoingConnections(source);

  assert.deepEqual(result, { changed: true, count: 2 });
  assert.deepEqual(outgoing.map(({ targetId }) => targetId), ['kept', 'added']);
  assert.equal(outgoing[0].id, keptId);
  assert.notEqual(outgoing[1].id, keptId);
});

test('does not rewrite an unchanged version 2 selection', () => {
  const source = thought('source');
  reconcileConnections(source, ['target']);
  const existing = source.meta.connections;

  const result = reconcileConnections(source, ['target']);

  assert.deepEqual(result, { changed: false, count: 1 });
  assert.equal(source.meta.connections, existing);
});

test('removes empty connection metadata', () => {
  const source = thought('source');
  reconcileConnections(source, ['target']);

  const result = reconcileConnections(source, []);

  assert.deepEqual(result, { changed: true, count: 0 });
  assert.equal(source.meta.connections, undefined);
});

test('unknown and missing spacing fall back to normal', () => {
  assert.equal(normalizeConnectionSpacing(undefined), ConnectionSpacing.NORMAL);
  assert.equal(normalizeConnectionSpacing('unknown'), ConnectionSpacing.NORMAL);
  assert.equal(normalizeConnectionSpacing('tight'), ConnectionSpacing.TIGHT);
  assert.equal(normalizeConnectionSpacing('loose'), ConnectionSpacing.LOOSE);
});

test('removes incoming links when a target is deleted', () => {
  const first = thought('first');
  const second = thought('second');
  reconcileConnections(first, ['target']);
  reconcileConnections(second, ['target']);

  const changed = detachIncomingConnections([first, second], 'target');

  assert.deepEqual(changed, [first, second]);
  assert.equal(first.meta.connections, undefined);
  assert.equal(second.meta.connections, undefined);
});

test('reads legacy Canvas links and migrates them to version 2 on write', () => {
  const source = thought('source', [
    { id: 'valid', targetId: 'target', kind: 'related', spaceId: 'canvas-1' },
    { id: 'flow', targetId: 'flow-target', kind: 'related', spaceId: 'space-1' },
  ], 1);

  assert.deepEqual(getOutgoingConnections(source), [{
    id: 'valid',
    targetId: 'target',
    kind: 'related',
    spacing: 'normal',
  }]);

  const result = reconcileConnections(source, ['target']);
  assert.deepEqual(result, { changed: true, count: 1 });
  assert.equal(source.meta.connections.version, 2);
  assert.equal('spaceId' in source.meta.connections.outgoing[0], false);
});

test('repairs invalid and missing targets', () => {
  const source = thought('source', [
    { id: 'valid', targetId: 'target', kind: 'related', spacing: 'normal' },
    { id: 'duplicate', targetId: 'target', kind: 'related', spacing: 'normal' },
    { id: 'missing', targetId: 'missing', kind: 'related', spacing: 'normal' },
    { id: 'self', targetId: 'source', kind: 'related', spacing: 'normal' },
    { id: 'unknown', targetId: 'target', kind: 'unknown', spacing: 'normal' },
  ]);
  const target = thought('target');

  assert.deepEqual(repairConnections([source, target]), [source]);
  assert.deepEqual(getOutgoingConnections(source), [{
    id: 'valid',
    targetId: 'target',
    kind: 'related',
    spacing: 'normal',
  }]);
});

test('flattens links without duplicating thoughts', () => {
  const source = thought('source');
  const target = thought('target');
  reconcileConnections(source, [target.id]);

  const flattened = flattenConnections([source, target]);

  assert.equal(flattened.length, 1);
  assert.equal(flattened[0].sourceId, source.id);
  assert.equal(flattened[0].targetId, target.id);
  assert.equal('source' in flattened[0], false);
  assert.equal('target' in flattened[0], false);
});
