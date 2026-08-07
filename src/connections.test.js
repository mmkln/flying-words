import assert from 'node:assert/strict';
import test from 'node:test';

import {
  ConnectionKind,
  ConnectionSpacing,
  detachIncomingCanvasConnections,
  flattenCanvasConnections,
  getOutgoingCanvasConnections,
  normalizeConnectionSpacing,
  reconcileCanvasConnections,
  repairCanvasConnections,
} from './connections.js';

function thought(id, outgoing = undefined) {
  return {
    id,
    meta: outgoing
      ? { connections: { version: 1, outgoing } }
      : {},
  };
}

test('stores only Canvas target ids in the source thought metadata', () => {
  const source = thought('source');
  const result = reconcileCanvasConnections(source, ['target']);
  const connection = source.meta.connections.outgoing[0];

  assert.deepEqual(result, { changed: true, count: 1 });
  assert.equal(source.meta.connections.version, 1);
  assert.equal(connection.targetId, 'target');
  assert.equal(connection.kind, ConnectionKind.RELATED);
  assert.equal(connection.spaceId, 'canvas-1');
  assert.equal(connection.spacing, ConnectionSpacing.NORMAL);
  assert.equal('sourceId' in connection, false);
  assert.equal('target' in connection, false);
});

test('rejects self-links and duplicate target selections', () => {
  const source = thought('source');

  const result = reconcileCanvasConnections(source, ['source', 'target', 'target']);

  assert.deepEqual(result, { changed: true, count: 1 });
  assert.deepEqual(
    getOutgoingCanvasConnections(source).map(({ targetId }) => targetId),
    ['target'],
  );
});

test('reconciles a Canvas multi-selection while preserving existing connection ids', () => {
  const source = thought('source');
  reconcileCanvasConnections(source, ['kept', 'removed']);
  const keptId = getOutgoingCanvasConnections(source)[0].id;

  const result = reconcileCanvasConnections(source, new Set(['kept', 'added']));
  const outgoing = getOutgoingCanvasConnections(source);

  assert.deepEqual(result, { changed: true, count: 2 });
  assert.deepEqual(outgoing.map(({ targetId }) => targetId), ['kept', 'added']);
  assert.equal(outgoing[0].id, keptId);
  assert.notEqual(outgoing[1].id, keptId);
});

test('reconciling an unchanged Canvas selection does not rewrite connections', () => {
  const source = thought('source');
  reconcileCanvasConnections(source, ['target']);
  const existing = getOutgoingCanvasConnections(source)[0];

  const result = reconcileCanvasConnections(source, ['target']);

  assert.deepEqual(result, { changed: false, count: 1 });
  assert.equal(getOutgoingCanvasConnections(source)[0], existing);
});

test('reconciling an empty selection removes connection metadata', () => {
  const source = thought('source');
  reconcileCanvasConnections(source, ['target']);

  const result = reconcileCanvasConnections(source, []);

  assert.deepEqual(result, { changed: true, count: 0 });
  assert.equal(source.meta.connections, undefined);
});

test('unknown and missing connection spacing fall back to normal', () => {
  assert.equal(normalizeConnectionSpacing(undefined), ConnectionSpacing.NORMAL);
  assert.equal(normalizeConnectionSpacing('unknown'), ConnectionSpacing.NORMAL);
  assert.equal(normalizeConnectionSpacing('tight'), ConnectionSpacing.TIGHT);
  assert.equal(normalizeConnectionSpacing('loose'), ConnectionSpacing.LOOSE);
});

test('removes incoming Canvas links when a target thought is deleted', () => {
  const first = thought('first');
  const second = thought('second');
  reconcileCanvasConnections(first, ['target']);
  reconcileCanvasConnections(second, ['target']);

  const changed = detachIncomingCanvasConnections([first, second], 'target');

  assert.deepEqual(changed, [first, second]);
  assert.equal(first.meta.connections, undefined);
  assert.equal(second.meta.connections, undefined);
});

test('repairs invalid, missing, and legacy Flow connections out of metadata', () => {
  const source = thought('source', [
    { id: 'valid', targetId: 'target', kind: 'related', spaceId: 'canvas-1' },
    { id: 'duplicate', targetId: 'target', kind: 'related', spaceId: 'canvas-1' },
    { id: 'missing', targetId: 'missing', kind: 'related', spaceId: 'canvas-1' },
    { id: 'self', targetId: 'source', kind: 'related', spaceId: 'canvas-1' },
    { id: 'unknown', targetId: 'target', kind: 'unknown', spaceId: 'canvas-1' },
    { id: 'legacy', targetId: 'flow-target', kind: 'related' },
    { id: 'flow', targetId: 'flow-target', kind: 'related', spaceId: 'space-1' },
  ]);
  const target = thought('target');

  assert.deepEqual(repairCanvasConnections([source, target]), [source]);
  assert.deepEqual(getOutgoingCanvasConnections(source), [
    { id: 'valid', targetId: 'target', kind: 'related', spaceId: 'canvas-1' },
  ]);
});

test('flattens Canvas links for rendering without duplicating thoughts', () => {
  const source = thought('source');
  const target = thought('target');
  reconcileCanvasConnections(source, [target.id]);

  const flattened = flattenCanvasConnections([source, target]);

  assert.equal(flattened.length, 1);
  assert.equal(flattened[0].sourceId, source.id);
  assert.equal(flattened[0].targetId, target.id);
  assert.equal('source' in flattened[0], false);
  assert.equal('target' in flattened[0], false);
});

test('editing Canvas connections replaces stale Flow connection metadata', () => {
  const source = thought('source', [
    { id: 'legacy', targetId: 'flow-target', kind: 'related' },
  ]);

  const result = reconcileCanvasConnections(source, ['canvas-target']);

  assert.deepEqual(result, { changed: true, count: 1 });
  assert.deepEqual(
    source.meta.connections.outgoing.map(({ targetId, spaceId }) => ({ targetId, spaceId })),
    [{ targetId: 'canvas-target', spaceId: 'canvas-1' }],
  );
});
