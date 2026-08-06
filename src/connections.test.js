import assert from 'node:assert/strict';
import test from 'node:test';

import {
  ConnectionKind,
  ConnectionSpacing,
  addConnection,
  detachIncomingConnections,
  flattenConnections,
  getOutgoingConnections,
  normalizeConnectionSpacing,
  repairConnections,
} from './connections.js';

function thought(id, outgoing = undefined) {
  return {
    id,
    meta: outgoing
      ? { connections: { version: 1, outgoing } }
      : {},
  };
}

test('stores only the target id in the source thought metadata', () => {
  const source = thought('source');
  const result = addConnection(source, 'target');

  assert.equal(result.status, 'created');
  assert.equal(source.meta.connections.version, 1);
  assert.equal(source.meta.connections.outgoing[0].targetId, 'target');
  assert.equal(source.meta.connections.outgoing[0].kind, ConnectionKind.RELATED);
  assert.equal(source.meta.connections.outgoing[0].spacing, ConnectionSpacing.NORMAL);
  assert.equal('sourceId' in source.meta.connections.outgoing[0], false);
  assert.equal('target' in source.meta.connections.outgoing[0], false);
});

test('rejects self-links and duplicate source-target pairs', () => {
  const source = thought('source');

  assert.equal(addConnection(source, 'source').status, 'self');
  assert.equal(addConnection(source, 'target').status, 'created');
  assert.equal(addConnection(source, 'target').status, 'duplicate');
  assert.equal(getOutgoingConnections(source).length, 1);
});

test('unknown and missing connection spacing fall back to normal', () => {
  assert.equal(normalizeConnectionSpacing(undefined), ConnectionSpacing.NORMAL);
  assert.equal(normalizeConnectionSpacing('unknown'), ConnectionSpacing.NORMAL);
  assert.equal(normalizeConnectionSpacing('tight'), ConnectionSpacing.TIGHT);
  assert.equal(normalizeConnectionSpacing('loose'), ConnectionSpacing.LOOSE);
});

test('removes incoming links when a target thought is deleted', () => {
  const first = thought('first');
  const second = thought('second');
  addConnection(first, 'target');
  addConnection(second, 'target');

  const changed = detachIncomingConnections([first, second], 'target');

  assert.deepEqual(changed, [first, second]);
  assert.equal(first.meta.connections, undefined);
  assert.equal(second.meta.connections, undefined);
});

test('repairs missing targets, duplicates, self-links, and unknown kinds', () => {
  const source = thought('source', [
    { id: 'valid', targetId: 'target', kind: 'related' },
    { id: 'duplicate', targetId: 'target', kind: 'related' },
    { id: 'missing', targetId: 'missing', kind: 'related' },
    { id: 'self', targetId: 'source', kind: 'related' },
    { id: 'unknown', targetId: 'target', kind: 'unknown' },
  ]);
  const target = thought('target');

  assert.deepEqual(repairConnections([source, target]), [source]);
  assert.deepEqual(getOutgoingConnections(source), [
    { id: 'valid', targetId: 'target', kind: 'related' },
  ]);
});

test('flattens outgoing links for rendering without duplicating thoughts', () => {
  const source = thought('source');
  const target = thought('target');
  addConnection(source, target.id);

  const flattened = flattenConnections([source, target]);

  assert.equal(flattened.length, 1);
  assert.equal(flattened[0].sourceId, source.id);
  assert.equal(flattened[0].targetId, target.id);
  assert.equal('source' in flattened[0], false);
  assert.equal('target' in flattened[0], false);
});
