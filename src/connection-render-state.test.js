import assert from 'node:assert/strict';
import test from 'node:test';

import { buildRenderableConnections } from './connection-render-state.js';

const connection = (id, sourceId, targetId) => ({
  id,
  sourceId,
  targetId,
  kind: 'related',
  spacing: 'normal',
});

test('returns persisted connections outside edit mode', () => {
  const persisted = [connection('one', 'source', 'target')];

  assert.deepEqual(buildRenderableConnections(persisted, null), [{
    ...persisted[0],
    draft: false,
  }]);
  assert.equal(persisted[0].draft, undefined);
});

test('replaces only the edited source connections with its draft selection', () => {
  const persisted = [
    connection('kept', 'other', 'neighbour'),
    connection('existing', 'source', 'first'),
    connection('removed', 'source', 'second'),
  ];
  const editor = {
    sourceId: 'source',
    selectedTargetIds: new Set(['first', 'new-target']),
  };

  assert.deepEqual(buildRenderableConnections(persisted, editor), [
    { ...persisted[0], draft: false },
    { ...persisted[1], draft: true },
    {
      id: 'draft:source:new-target',
      sourceId: 'source',
      targetId: 'new-target',
      kind: 'related',
      spacing: 'normal',
      draft: true,
    },
  ]);
});

test('an empty draft hides every outgoing connection from the edited source', () => {
  const persisted = [
    connection('removed', 'source', 'target'),
    connection('kept', 'other', 'target'),
  ];

  assert.deepEqual(buildRenderableConnections(persisted, {
    sourceId: 'source',
    selectedTargetIds: new Set(),
  }), [
    { ...persisted[1], draft: false },
  ]);
});
