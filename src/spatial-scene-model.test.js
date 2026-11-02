import assert from 'node:assert/strict';
import test from 'node:test';

import { buildSpatialClusterPlan } from './spatial-clusters.js';
import {
  SpatialSceneLevel,
  buildSpatialScene,
  createSpatialClusterScene,
  createSpatialDetailScene,
  createSpatialOverviewScene,
} from './spatial-scene-model.js';

const nodes = [
  { id: 'a', text: 'Alpha', kind: 'thought' },
  { id: 'b', text: 'Beta', kind: 'thought' },
  { id: 'c', text: 'Central idea', kind: 'thought' },
  { id: 'd', text: 'Delta', kind: 'thought' },
  { id: 'e', text: 'Epsilon', kind: 'thought' },
  { id: 'f', text: 'Phi', kind: 'thought' },
];
const links = [
  ['a', 'b'], ['b', 'c'], ['c', 'a'],
  ['d', 'e'], ['e', 'f'], ['f', 'd'],
  ['c', 'd'],
].map(([sourceId, targetId]) => ({ sourceId, targetId }));
const plan = buildSpatialClusterPlan(nodes, links);

test('overview exposes cluster proxies instead of thought nodes', () => {
  const scene = buildSpatialScene({
    nodes,
    links,
    clusterPlan: plan,
    sceneState: createSpatialOverviewScene(),
  });

  assert.equal(scene.state.level, SpatialSceneLevel.OVERVIEW);
  assert.equal(scene.thoughtIds.size, 0);
  assert.equal(scene.thoughtLinks.length, 0);
  assert.equal(scene.clusters.length, 2);
  assert.equal(scene.clusterLinks.length, 1);
});
test('cluster scene exposes members and neighbouring cluster proxies', () => {
  const scene = buildSpatialScene({
    nodes,
    links,
    clusterPlan: plan,
    sceneState: createSpatialClusterScene('cluster:a'),
  });

  assert.deepEqual([...scene.thoughtIds].sort(), ['a', 'b', 'c']);
  assert.equal(scene.thoughtLinks.length, 3);
  assert.deepEqual(scene.clusters.map(({ id }) => id), ['cluster:d']);
  assert.deepEqual(scene.summary, { label: 'Alpha', count: 3 });
});

test('forced connection targets remain visible in a cluster scene', () => {
  const scene = buildSpatialScene({
    nodes,
    links,
    clusterPlan: plan,
    sceneState: createSpatialClusterScene('cluster:a'),
    forcedThoughtIds: ['e'],
  });

  assert.equal(scene.thoughtIds.has('e'), true);
});

test('missing clusters fall back to overview', () => {
  const scene = buildSpatialScene({
    nodes,
    links,
    clusterPlan: plan,
    sceneState: createSpatialClusterScene('cluster:missing'),
  });

  assert.equal(scene.state.level, SpatialSceneLevel.OVERVIEW);
  assert.equal(scene.clusters.length, 2);
});

test('detail scene preserves the ordinary thought graph', () => {
  const scene = buildSpatialScene({
    nodes,
    links,
    clusterPlan: plan,
    sceneState: createSpatialDetailScene(),
  });

  assert.equal(scene.thoughtIds.size, nodes.length);
  assert.equal(scene.thoughtLinks.length, links.length);
  assert.equal(scene.clusters.length, 0);
});

