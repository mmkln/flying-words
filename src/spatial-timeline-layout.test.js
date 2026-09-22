import assert from 'node:assert/strict';
import test from 'node:test';

import {
  TIMELINE_BUCKET_GAP,
  buildTimelineLayoutPlan,
  extendTimelineLayoutPlan,
  timelineLayoutPlanKey,
} from './spatial-timeline-layout.js';

const DAY = 24 * 60 * 60 * 1000;
const node = (id, createdAt) => ({ id, createdAt, kind: 'thought' });

test('places older thoughts before newer thoughts', () => {
  const plan = buildTimelineLayoutPlan([
    node('old', DAY),
    node('middle', DAY * 30),
    node('new', DAY * 60),
  ]);

  assert.ok(
    plan.nodeLayoutById.get('old').layoutAnchor.x
      < plan.nodeLayoutById.get('middle').layoutAnchor.x,
  );
  assert.ok(
    plan.nodeLayoutById.get('middle').layoutAnchor.x
      < plan.nodeLayoutById.get('new').layoutAnchor.x,
  );
});

test('keeps thoughts from the same time bucket on one chronological plane', () => {
  const plan = buildTimelineLayoutPlan([
    node('first', DAY),
    node('second', DAY + 60_000),
    node('later', DAY * 20),
  ]);

  assert.equal(
    plan.nodeLayoutById.get('first').layoutAnchor.x,
    plan.nodeLayoutById.get('second').layoutAnchor.x,
  );
});

test('bounds very large time ranges to a readable number of layers', () => {
  const plan = buildTimelineLayoutPlan([
    node('old', Date.UTC(1900, 0, 1)),
    node('new', Date.UTC(2026, 0, 1)),
  ]);
  const distance = Math.abs(
    plan.nodeLayoutById.get('new').layoutAnchor.x
      - plan.nodeLayoutById.get('old').layoutAnchor.x,
  );

  assert.ok(distance <= TIMELINE_BUCKET_GAP * 24);
});

test('places malformed dates on a separate unknown plane', () => {
  const plan = buildTimelineLayoutPlan([
    node('known', DAY),
    node('unknown', null),
  ]);

  assert.notEqual(
    plan.nodeLayoutById.get('known').layoutAnchor.x,
    plan.nodeLayoutById.get('unknown').layoutAnchor.x,
  );
  assert.equal(plan.strategyState.bucketByNodeId.get('unknown'), null);
});

test('timeline keys change with creation time but not link direction', () => {
  const nodes = [node('a', DAY), node('b', DAY * 2)];
  assert.notEqual(
    timelineLayoutPlanKey(nodes),
    timelineLayoutPlanKey([node('a', DAY), node('b', DAY * 3)]),
  );
  assert.equal(
    timelineLayoutPlanKey(nodes, [{ sourceId: 'a', targetId: 'b' }]),
    timelineLayoutPlanKey(nodes, [{ sourceId: 'b', targetId: 'a' }]),
  );
});

test('extends a timeline without moving existing anchors', () => {
  const plan = buildTimelineLayoutPlan([
    node('parent', DAY),
    node('other', DAY * 2),
  ]);
  const parentBefore = structuredClone(plan.nodeLayoutById.get('parent'));
  const otherBefore = structuredClone(plan.nodeLayoutById.get('other'));
  const extended = extendTimelineLayoutPlan(plan, {
    node: node('new', DAY * 3),
    anchorNodeId: 'parent',
  });

  assert.deepEqual(extended.nodeLayoutById.get('parent'), parentBefore);
  assert.deepEqual(extended.nodeLayoutById.get('other'), otherBefore);
  assert.ok(Number.isFinite(extended.nodeLayoutById.get('new').layoutAnchor.x));
});
