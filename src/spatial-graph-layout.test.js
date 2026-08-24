import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createSpatialGraphLayout,
  seedSpatialPosition,
} from './spatial-graph-layout.js';
import { SpatialLayoutMode } from './spatial-layout-mode.js';

test('creates stable deterministic seed positions', () => {
  const first = seedSpatialPosition('thought-a', 3);
  const second = seedSpatialPosition('thought-a', 3);
  const other = seedSpatialPosition('thought-b', 3);

  assert.deepEqual(first, second);
  assert.notDeepEqual(first, other);
  assert.ok(Object.values(first).every(Number.isFinite));
});

test('keeps existing node positions when the graph is refreshed', () => {
  const layout = createSpatialGraphLayout();
  layout.setGraph({
    nodes: [{ id: 'a', radius: 8 }, { id: 'b', radius: 8 }],
    links: [],
  });
  layout.stop();
  const before = { ...layout.getNode('a') };

  layout.setGraph({
    nodes: [{ id: 'a', radius: 8 }, { id: 'b', radius: 8 }, { id: 'c', radius: 8 }],
    links: [],
  });
  layout.stop();

  assert.equal(layout.getNode('a').x, before.x);
  assert.equal(layout.getNode('a').y, before.y);
  assert.equal(layout.getNode('a').z, before.z);
  layout.dispose();
});

test('uses a transient supplied position without pinning a Spatial node', () => {
  const layout = createSpatialGraphLayout();
  layout.setGraph({
    nodes: [{ id: 'related', radius: 8, x: 72, y: -36, z: 48 }],
    links: [],
  });
  layout.stop();

  const node = layout.getNode('related');
  assert.equal(node.x, 72);
  assert.equal(node.y, -36);
  assert.equal(node.z, 48);
  assert.equal(node.pinned, false);
  layout.dispose();
});

test('filters invalid links and resolves valid source and target nodes', () => {
  const layout = createSpatialGraphLayout();
  layout.setGraph({
    nodes: [{ id: 'a', radius: 8 }, { id: 'b', radius: 8 }],
    links: [
      { id: 'valid', sourceId: 'a', targetId: 'b', spacing: 'normal' },
      { id: 'missing', sourceId: 'a', targetId: 'c', spacing: 'normal' },
      { id: 'self', sourceId: 'a', targetId: 'a', spacing: 'normal' },
    ],
  });
  layout.stop();

  assert.equal(layout.getLinks().length, 1);
  assert.equal(layout.getLinks()[0].source.id, 'a');
  assert.equal(layout.getLinks()[0].target.id, 'b');
  layout.dispose();
});

test('adds cluster anchors to Spatial nodes without changing semantic links', () => {
  const layout = createSpatialGraphLayout();
  layout.setGraph({
    nodes: [
      { id: 'a', radius: 8, kind: 'thought' },
      { id: 'b', radius: 8, kind: 'thought' },
      { id: 'c', radius: 8, kind: 'thought' },
      { id: 'd', radius: 8, kind: 'thought' },
      { id: 'e', radius: 8, kind: 'thought' },
      { id: 'f', radius: 8, kind: 'thought' },
    ],
    links: [
      { sourceId: 'a', targetId: 'b' },
      { sourceId: 'b', targetId: 'c' },
      { sourceId: 'c', targetId: 'a' },
      { sourceId: 'd', targetId: 'e' },
      { sourceId: 'e', targetId: 'f' },
      { sourceId: 'f', targetId: 'd' },
      { sourceId: 'c', targetId: 'd' },
    ],
  });
  layout.stop();

  assert.equal(layout.getLinks().length, 7);
  assert.equal(layout.getNode('a').clusterId, 'cluster:a');
  assert.equal(layout.getNode('d').clusterId, 'cluster:d');
  assert.notDeepEqual(
    layout.getNode('a').clusterAnchor,
    layout.getNode('d').clusterAnchor,
  );
  layout.dispose();
});

test('uses kind depth as a visual-only anchor in the Knowledge layers mode', () => {
  const layout = createSpatialGraphLayout();
  layout.setGraph({
    layoutMode: SpatialLayoutMode.KNOWLEDGE_LAYERS,
    nodes: [
      { id: 'question', radius: 8, kind: 'question' },
      { id: 'hypothesis', radius: 8, kind: 'hypothesis' },
    ],
    links: [{ sourceId: 'question', targetId: 'hypothesis' }],
  });
  layout.stop();

  assert.equal(layout.getNode('question').clusterAnchor.z, -360);
  assert.equal(layout.getNode('hypothesis').clusterAnchor.z, 120);
  layout.dispose();
});

test('releases free nodes and keeps pinned nodes fixed after drag', () => {
  const layout = createSpatialGraphLayout();
  layout.setGraph({ nodes: [{ id: 'a', radius: 8 }], links: [] });
  layout.stop();

  layout.beginDrag('a');
  layout.dragNode('a', { x: 12, y: 24, z: -8 });
  layout.endDrag('a', { pinned: false });
  layout.stop();
  assert.equal(layout.getNode('a').fx, null);

  layout.beginDrag('a');
  layout.dragNode('a', { x: 20, y: 30, z: 40 });
  layout.endDrag('a', { pinned: true });
  layout.stop();
  assert.equal(layout.getNode('a').fx, 20);
  assert.equal(layout.getNode('a').fy, 30);
  assert.equal(layout.getNode('a').fz, 40);
  layout.dispose();
});
