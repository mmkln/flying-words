import assert from 'node:assert/strict';
import test from 'node:test';

import {
  applyThoughtPatch,
  diffMetaPatch,
  isPausedBoardPlacementOnlyOperation,
  mergeMetaPatch,
  mergeThoughtPatches,
  metaPatchFromThought,
} from './sync-operations.js';

test('meta patch preserves namespaces that were not changed', () => {
  const current = {
    connections: { version: 2, outgoing: [{ id: 'link' }] },
    knowledge: { version: 1, kind: 'thought' },
  };

  assert.deepEqual(mergeMetaPatch(current, {
    knowledge: { version: 1, kind: 'question' },
  }), {
    connections: current.connections,
    knowledge: { version: 1, kind: 'question' },
  });
});

test('null removes only the addressed meta namespace', () => {
  assert.deepEqual(mergeMetaPatch({ connections: {}, spatial: {} }, {
    connections: null,
  }), { spatial: {} });
});

test('thought patch maps API pinned field without replacing meta', () => {
  const thought = { text: 'Before', pinned: false, meta: { connections: {} } };
  const patched = applyThoughtPatch(thought, {
    text: 'After',
    is_pinned: true,
  });

  assert.equal(patched.text, 'After');
  assert.equal(patched.pinned, true);
  assert.deepEqual(patched.meta, thought.meta);
});

test('queued patches coalesce by field and meta namespace', () => {
  assert.deepEqual(mergeThoughtPatches(
    { text: 'After', meta_patch: { knowledge: { kind: 'question' } } },
    { is_pinned: true, meta_patch: { spatial: { version: 1 } } },
  ), {
    text: 'After',
    is_pinned: true,
    meta_patch: {
      knowledge: { kind: 'question' },
      spatial: { version: 1 },
    },
  });
});

test('meta patch is derived only for requested namespaces', () => {
  const thought = { meta: { knowledge: { kind: 'quote' }, connections: {} } };
  assert.deepEqual(metaPatchFromThought(thought, ['knowledge', 'spatial']), {
    knowledge: { kind: 'quote' },
    spatial: null,
  });
});

test('meta diff preserves new values and emits null for deletion', () => {
  assert.deepEqual(diffMetaPatch(
    { knowledge: { kind: 'thought' }, connections: {} },
    { knowledge: { kind: 'question' }, spatial: {} },
  ), {
    knowledge: { kind: 'question' },
    connections: null,
    spatial: {},
  });
});

test('paused Board-only patches can be superseded by a new arrangement', () => {
  for (const status of ['blocked', 'conflict']) {
    assert.equal(isPausedBoardPlacementOnlyOperation({
      type: 'patch',
      status,
      patch: {
        meta_patch: {
          canvas: { version: 2, placements: { 'canvas-1': { x: 20, y: 30 } } },
        },
      },
    }), true);
  }
});

test('active or content-bearing cloud changes are never discarded for arrangement', () => {
  const canvas = { version: 2, placements: { 'canvas-1': { x: 20, y: 30 } } };

  assert.equal(isPausedBoardPlacementOnlyOperation({
    type: 'patch',
    status: 'pending',
    patch: { meta_patch: { canvas } },
  }), false);
  assert.equal(isPausedBoardPlacementOnlyOperation({
    type: 'patch',
    status: 'blocked',
    patch: { text: 'Keep me', meta_patch: { canvas } },
  }), false);
  assert.equal(isPausedBoardPlacementOnlyOperation({
    type: 'patch',
    status: 'conflict',
    patch: { meta_patch: { canvas, connections: { version: 1 } } },
  }), false);
  assert.equal(isPausedBoardPlacementOnlyOperation({
    type: 'delete',
    status: 'blocked',
  }), false);
});
