import assert from 'node:assert/strict';
import test from 'node:test';
import {
  ConnectionRelation,
  createConnectionMapDraft,
} from './connection-map-draft.js';
import { reconcileConnections } from './connections.js';

function thought(id) {
  return { id, meta: {} };
}

function connect(source, targetIds) {
  reconcileConnections(source, targetIds);
  return source;
}

test('reads incoming, outgoing, and bidirectional root relationships', () => {
  const root = connect(thought('root'), ['outgoing', 'both']);
  const incoming = connect(thought('incoming'), ['root']);
  const outgoing = thought('outgoing');
  const both = connect(thought('both'), ['root']);
  const draft = createConnectionMapDraft([root, incoming, outgoing, both], root.id);

  assert.equal(draft.getRelation(incoming.id), ConnectionRelation.INCOMING);
  assert.equal(draft.getRelation(outgoing.id), ConnectionRelation.OUTGOING);
  assert.equal(draft.getRelation(both.id), ConnectionRelation.BOTH);
});

test('reverses an outgoing relationship without mutating thoughts', () => {
  const root = connect(thought('root'), ['neighbour']);
  const neighbour = thought('neighbour');
  const originalRootMeta = structuredClone(root.meta);
  const draft = createConnectionMapDraft([root, neighbour], root.id);

  assert.equal(
    draft.setRelation(neighbour.id, ConnectionRelation.INCOMING),
    true,
  );
  assert.deepEqual(root.meta, originalRootMeta);
  assert.deepEqual(neighbour.meta, {});
  assert.deepEqual(draft.getChanges(), [
    { sourceId: 'root', targetIds: [] },
    { sourceId: 'neighbour', targetIds: ['root'] },
  ]);
});

test('creates and removes a bidirectional relationship', () => {
  const root = thought('root');
  const neighbour = thought('neighbour');
  const draft = createConnectionMapDraft([root, neighbour], root.id);

  draft.setRelation(neighbour.id, ConnectionRelation.BOTH);
  assert.equal(draft.getRelation(neighbour.id), ConnectionRelation.BOTH);
  assert.deepEqual(new Set(draft.getChanges().map(({ sourceId }) => sourceId)), new Set([
    'root',
    'neighbour',
  ]));

  draft.setRelation(neighbour.id, ConnectionRelation.NONE);
  assert.equal(draft.getRelation(neighbour.id), ConnectionRelation.NONE);
  assert.deepEqual(draft.getChanges(), []);
});

test('preserves neighbour relationships with unrelated thoughts', () => {
  const root = thought('root');
  const neighbour = connect(thought('neighbour'), ['other']);
  const other = thought('other');
  const draft = createConnectionMapDraft([root, neighbour, other], root.id);

  draft.setRelation(neighbour.id, ConnectionRelation.INCOMING);

  assert.deepEqual(draft.getChanges(), [
    { sourceId: 'neighbour', targetIds: ['other', 'root'] },
  ]);
});

test('returns only thoughts whose outgoing relationships changed', () => {
  const root = connect(thought('root'), ['first']);
  const first = thought('first');
  const second = thought('second');
  const draft = createConnectionMapDraft([root, first, second], root.id);

  draft.setRelation(first.id, ConnectionRelation.OUTGOING);
  draft.setRelation(second.id, ConnectionRelation.OUTGOING);

  assert.deepEqual(draft.getChanges(), [
    { sourceId: 'root', targetIds: ['first', 'second'] },
  ]);
});

test('edits outgoing connections for any visible Board card', () => {
  const root = thought('root');
  const first = thought('first');
  const second = thought('second');
  const draft = createConnectionMapDraft([root, first, second], root.id);

  assert.equal(draft.setOutgoingTargetIds(first.id, [second.id]), true);
  assert.deepEqual(draft.getOutgoingTargetIds(first.id), [second.id]);
  assert.deepEqual(draft.getChanges(), [
    { sourceId: first.id, targetIds: [second.id] },
  ]);
});

test('returns only edges whose endpoints are present on the temporary Board', () => {
  const root = connect(thought('root'), ['first']);
  const first = connect(thought('first'), ['root', 'hidden']);
  const hidden = thought('hidden');
  const draft = createConnectionMapDraft([root, first, hidden], root.id);

  assert.deepEqual(draft.getEdges(new Set(['root', 'first'])), [{
    sourceId: 'root',
    targetId: 'first',
    bidirectional: true,
  }]);
});

test('finds the complete undirected component around the selected thought', () => {
  const root = connect(thought('root'), ['child']);
  const child = connect(thought('child'), ['grandchild']);
  const grandchild = thought('grandchild');
  const isolated = thought('isolated');
  const draft = createConnectionMapDraft(
    [root, child, grandchild, isolated],
    root.id,
  );

  assert.deepEqual(draft.getConnectedComponentIds(), [
    root.id,
    child.id,
    grandchild.id,
  ]);
});
