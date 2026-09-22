import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildSpatialLayoutPlan,
  spatialLayoutPlanKey,
} from './spatial-layout-plan.js';
import { SpatialLayoutMode } from './spatial-layout-mode.js';

const nodes = [
  { id: 'a', kind: 'question', createdAt: 100 },
  { id: 'b', kind: 'thought', createdAt: 200 },
];
const links = [{ sourceId: 'a', targetId: 'b' }];

test('every layout mode returns the shared plan contract', () => {
  Object.values(SpatialLayoutMode).forEach((mode) => {
    const plan = buildSpatialLayoutPlan(nodes, links, mode);
    const first = plan.nodeLayoutById.get('a');

    assert.equal(typeof first.groupId, 'string');
    assert.ok(plan.groups.some(({ id }) => id === first.groupId));
    assert.ok(Object.values(first.layoutAnchor).every(Number.isFinite));
    assert.ok(Object.values(first.layoutStrength).every(Number.isFinite));
  });
});

test('layout plan keys encode only mode-relevant graph changes', () => {
  assert.notEqual(
    spatialLayoutPlanKey(nodes, links, SpatialLayoutMode.HIERARCHY),
    spatialLayoutPlanKey(
      nodes,
      [{ sourceId: 'b', targetId: 'a' }],
      SpatialLayoutMode.HIERARCHY,
    ),
  );
  assert.equal(
    spatialLayoutPlanKey(nodes, links, SpatialLayoutMode.TIMELINE),
    spatialLayoutPlanKey(
      nodes,
      [{ sourceId: 'b', targetId: 'a' }],
      SpatialLayoutMode.TIMELINE,
    ),
  );
});
