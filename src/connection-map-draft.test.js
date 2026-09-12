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

test('limits the initial undirected neighbourhood by depth', () => {
  const root = connect(thought('root'), ['child']);
  const child = connect(thought('child'), ['grandchild']);
  const grandchild = connect(thought('grandchild'), ['great-grandchild']);
  const greatGrandchild = thought('great-grandchild');
  const isolated = thought('isolated');
  const draft = createConnectionMapDraft(
    [root, child, grandchild, greatGrandchild, isolated],
    root.id,
  );

  assert.deepEqual(draft.getNeighbourhoodIds(root.id, 2), [
    root.id,
    child.id,
    grandchild.id,
  ]);
});

test('traverses incoming connections when building a neighbourhood', () => {
  const root = thought('root');
  const parent = connect(thought('parent'), ['root']);
  const grandparent = connect(thought('grandparent'), ['parent']);
  const draft = createConnectionMapDraft([root, parent, grandparent], root.id);

  assert.deepEqual(draft.getNeighbourhoodIds(root.id, 2), [
    root.id,
    parent.id,
    grandparent.id,
  ]);
});

test('returns only direct neighbours hidden from the temporary Board', () => {
  const root = connect(thought('root'), ['child']);
  const child = connect(thought('child'), ['grandchild', 'shared']);
  const grandchild = thought('grandchild');
  const shared = connect(thought('shared'), ['root']);
  const draft = createConnectionMapDraft(
    [root, child, grandchild, shared],
    root.id,
  );
  const visibleIds = new Set(['root', 'child', 'shared']);

  assert.deepEqual(draft.getHiddenNeighbourIds('child', visibleIds), [
    grandchild.id,
  ]);
  assert.deepEqual(draft.getHiddenNeighbourIds('root', visibleIds), []);
});

test('does not duplicate nodes reached through cycles or shared branches', () => {
  const root = connect(thought('root'), ['left', 'right']);
  const left = connect(thought('left'), ['shared']);
  const right = connect(thought('right'), ['shared']);
  const shared = connect(thought('shared'), ['root']);
  const draft = createConnectionMapDraft([root, left, right, shared], root.id);

  assert.deepEqual(draft.getNeighbourhoodIds(root.id, 2), [
    root.id,
    left.id,
    right.id,
    shared.id,
  ]);
});

test('registers a new thought and connects it without mutating source data', () => {
  const root = thought('root');
  const draft = createConnectionMapDraft([root], root.id);

  assert.equal(draft.registerThought('new-thought'), true);
  assert.equal(draft.registerThought('new-thought'), false);
  assert.equal(draft.setOutgoingTargetIds(root.id, ['new-thought']), true);
  assert.deepEqual(draft.getOutgoingTargetIds(root.id), ['new-thought']);
  assert.deepEqual(draft.getNeighbourhoodIds(root.id, 1), [
    root.id,
    'new-thought',
  ]);
  assert.deepEqual(draft.getChanges(), [{
    sourceId: root.id,
    targetIds: ['new-thought'],
  }]);
  assert.deepEqual(root.meta, {});
});

test('allows a registered thought to become a connection source', () => {
  const root = thought('root');
  const draft = createConnectionMapDraft([root], root.id);

  draft.registerThought('new-thought');
  assert.equal(draft.setOutgoingTargetIds('new-thought', [root.id]), true);
  assert.deepEqual(draft.getChanges(), [{
    sourceId: 'new-thought',
    targetIds: [root.id],
  }]);
});
