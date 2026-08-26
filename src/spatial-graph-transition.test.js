import assert from 'node:assert/strict';
import test from 'node:test';

import {
  SpatialGraphTransitionKind,
  normalizeSpatialGraphTransition,
} from './spatial-graph-transition.js';

test('normalizes a linked-node insertion', () => {
  assert.deepEqual(
    normalizeSpatialGraphTransition({
      kind: SpatialGraphTransitionKind.INSERT_LINKED_NODE,
      nodeId: 'child',
      anchorId: 'parent',
      ignored: true,
    }),
    {
      kind: SpatialGraphTransitionKind.INSERT_LINKED_NODE,
      nodeId: 'child',
      anchorId: 'parent',
    },
  );
});

test('rejects a linked-node insertion with the same node and anchor', () => {
  assert.deepEqual(
    normalizeSpatialGraphTransition({
      kind: SpatialGraphTransitionKind.INSERT_LINKED_NODE,
      nodeId: 'same',
      anchorId: 'same',
    }),
    { kind: SpatialGraphTransitionKind.RECONCILE },
  );
});

test('falls back to reconcile for malformed transition data', () => {
  assert.deepEqual(
    normalizeSpatialGraphTransition({
      kind: SpatialGraphTransitionKind.INSERT_LINKED_NODE,
      nodeId: 'child',
    }),
    { kind: SpatialGraphTransitionKind.RECONCILE },
  );
  assert.deepEqual(
    normalizeSpatialGraphTransition(null),
    { kind: SpatialGraphTransitionKind.RECONCILE },
  );
});
