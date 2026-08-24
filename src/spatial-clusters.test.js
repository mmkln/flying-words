import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildSpatialClusterPlan,
  spatialClusterPlanKey,
} from './spatial-clusters.js';
import { SpatialLayoutMode } from './spatial-layout-mode.js';

const nodes = 'abcdef'.split('').map((id) => ({ id, kind: 'thought' }));
const clusteredLinks = [
  ['a', 'b'], ['b', 'c'], ['c', 'a'],
  ['d', 'e'], ['e', 'f'], ['f', 'd'],
  ['c', 'd'],
].map(([sourceId, targetId]) => ({ sourceId, targetId }));

function distance(first, second) {
  return Math.hypot(
    first.x - second.x,
    first.y - second.y,
    first.z - second.z,
  );
}

test('derives stable visual communities from one connected graph', () => {
  const first = buildSpatialClusterPlan(nodes, clusteredLinks);
  const second = buildSpatialClusterPlan(nodes, clusteredLinks);

  assert.deepEqual(
    first.clusters.map(({ id, nodeIds }) => ({ id, nodeIds })),
    [
      { id: 'cluster:a', nodeIds: ['a', 'b', 'c'] },
      { id: 'cluster:d', nodeIds: ['d', 'e', 'f'] },
    ],
  );
  assert.deepEqual(
    first.clusters.map(({ anchor }) => ({ x: anchor.x, y: anchor.y, z: anchor.z })),
    second.clusters.map(({ anchor }) => ({ x: anchor.x, y: anchor.y, z: anchor.z })),
  );
  assert.equal(first.interClusterLinks.length, 1);
  assert.equal(first.interClusterLinks[0].weight, 1);
});

test('keeps cluster anchors far enough apart for their visual footprint', () => {
  const { clusters } = buildSpatialClusterPlan(nodes, clusteredLinks);
  const [first, second] = clusters;

  assert.ok(distance(first.anchor, second.anchor) >= first.radius + second.radius + 160);
});

test('keeps unconnected thoughts in a separate visual cloud', () => {
  const plan = buildSpatialClusterPlan(
    [...nodes, { id: 'solo', kind: 'observation' }],
    clusteredLinks,
  );

  assert.deepEqual(
    plan.clusterByNodeId.get('solo').nodeIds,
    ['solo'],
  );
  assert.equal(plan.clusterByNodeId.get('solo').id, 'cluster:unlinked');
});

test('uses knowledge kind depth only in the Knowledge layers mode', () => {
  const layerPlan = buildSpatialClusterPlan(
    [
      { id: 'question', kind: 'question' },
      { id: 'hypothesis', kind: 'hypothesis' },
    ],
    [{ sourceId: 'question', targetId: 'hypothesis' }],
    SpatialLayoutMode.KNOWLEDGE_LAYERS,
  );
  const constellationPlan = buildSpatialClusterPlan(
    [
      { id: 'question', kind: 'question' },
      { id: 'hypothesis', kind: 'hypothesis' },
    ],
    [{ sourceId: 'question', targetId: 'hypothesis' }],
    SpatialLayoutMode.CONSTELLATIONS,
  );

  assert.equal(layerPlan.nodeLayoutById.get('question').clusterAnchor.z, -360);
  assert.equal(layerPlan.nodeLayoutById.get('hypothesis').clusterAnchor.z, 120);
  assert.equal(
    constellationPlan.nodeLayoutById.get('question').clusterAnchor.z,
    constellationPlan.nodeLayoutById.get('hypothesis').clusterAnchor.z,
  );
});

test('only invalidates the cluster plan when topology, kind, or mode changes', () => {
  const sourceNodes = [
    { id: 'a', kind: 'thought', x: 10, y: 20, z: 30 },
    { id: 'b', kind: 'question', x: -10, y: -20, z: -30 },
  ];
  const links = [{ sourceId: 'a', targetId: 'b' }];
  const first = spatialClusterPlanKey(sourceNodes, links);
  const moved = spatialClusterPlanKey(
    sourceNodes.map((node) => ({ ...node, x: node.x + 500 })),
    links,
  );
  const changedKind = spatialClusterPlanKey(
    [{ ...sourceNodes[0], kind: 'hypothesis' }, sourceNodes[1]],
    links,
  );

  assert.equal(first, moved);
  assert.notEqual(first, changedKind);
  assert.notEqual(first, spatialClusterPlanKey(sourceNodes, [], SpatialLayoutMode.KNOWLEDGE_LAYERS));
});
