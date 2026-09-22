import assert from 'node:assert/strict';
import test from 'node:test';

import {
  HIERARCHY_LAYER_GAP,
  buildHierarchyLayoutPlan,
  extendHierarchyLayoutPlan,
  hierarchyLayoutPlanKey,
} from './spatial-hierarchy-layout.js';

const node = (id) => ({ id });
const link = (sourceId, targetId) => ({ sourceId, targetId });

test('places a directed chain on consecutive hierarchy levels', () => {
  const plan = buildHierarchyLayoutPlan(
    [node('a'), node('b'), node('c')],
    [link('a', 'b'), link('b', 'c')],
  );

  assert.equal(plan.nodeLayoutById.get('a').layoutAnchor.y, 0);
  assert.equal(plan.nodeLayoutById.get('b').layoutAnchor.y, -HIERARCHY_LAYER_GAP);
  assert.equal(plan.nodeLayoutById.get('c').layoutAnchor.y, -HIERARCHY_LAYER_GAP * 2);
});

test('keeps direction in the hierarchy key and resulting rank', () => {
  const nodes = [node('a'), node('b')];
  const forward = buildHierarchyLayoutPlan(nodes, [link('a', 'b')]);
  const reverse = buildHierarchyLayoutPlan(nodes, [link('b', 'a')]);

  assert.notEqual(
    hierarchyLayoutPlanKey(nodes, [link('a', 'b')]),
    hierarchyLayoutPlanKey(nodes, [link('b', 'a')]),
  );
  assert.ok(
    forward.nodeLayoutById.get('a').layoutAnchor.y
      > forward.nodeLayoutById.get('b').layoutAnchor.y,
  );
  assert.ok(
    reverse.nodeLayoutById.get('b').layoutAnchor.y
      > reverse.nodeLayoutById.get('a').layoutAnchor.y,
  );
});

test('collapses a directed cycle into one visual level', () => {
  const plan = buildHierarchyLayoutPlan(
    [node('a'), node('b'), node('c')],
    [link('a', 'b'), link('b', 'a'), link('b', 'c')],
  );
  const first = plan.nodeLayoutById.get('a');
  const second = plan.nodeLayoutById.get('b');

  assert.equal(first.groupId, second.groupId);
  assert.equal(first.layoutAnchor.y, second.layoutAnchor.y);
  assert.notDeepEqual(first.layoutAnchor, second.layoutAnchor);
  assert.ok(Object.values(first.layoutAnchor).every(Number.isFinite));
});

test('places a multiple-parent child below both parents', () => {
  const plan = buildHierarchyLayoutPlan(
    [node('left'), node('right'), node('child')],
    [link('left', 'child'), link('right', 'child')],
  );
  const childY = plan.nodeLayoutById.get('child').layoutAnchor.y;

  assert.ok(childY < plan.nodeLayoutById.get('left').layoutAnchor.y);
  assert.ok(childY < plan.nodeLayoutById.get('right').layoutAnchor.y);
});

test('extends a hierarchy below its anchor without moving existing anchors', () => {
  const plan = buildHierarchyLayoutPlan(
    [node('parent'), node('other')],
    [],
  );
  const parentBefore = structuredClone(plan.nodeLayoutById.get('parent'));
  const otherBefore = structuredClone(plan.nodeLayoutById.get('other'));
  const extended = extendHierarchyLayoutPlan(plan, {
    node: node('child'),
    anchorNodeId: 'parent',
  });

  assert.deepEqual(extended.nodeLayoutById.get('parent'), parentBefore);
  assert.deepEqual(extended.nodeLayoutById.get('other'), otherBefore);
  assert.equal(
    extended.nodeLayoutById.get('child').layoutAnchor.y,
    parentBefore.layoutAnchor.y - HIERARCHY_LAYER_GAP,
  );
});

test('builds a large hierarchy without recursive stack overflow', () => {
  const count = 3_000;
  const nodes = Array.from({ length: count }, (_, index) => node(`n${index}`));
  const links = Array.from(
    { length: count - 1 },
    (_, index) => link(`n${index}`, `n${index + 1}`),
  );
  const plan = buildHierarchyLayoutPlan(nodes, links);

  assert.equal(plan.nodeLayoutById.size, count);
  assert.ok(
    plan.nodeLayoutById.get(`n${count - 1}`).layoutAnchor.y
      < plan.nodeLayoutById.get('n0').layoutAnchor.y,
  );
});
