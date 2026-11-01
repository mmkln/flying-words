import assert from 'node:assert/strict';
import test from 'node:test';

import { createFlowSceneCache } from './flow-scene-cache.js';

test('reuses a Flow scene snapshot until it is invalidated', () => {
  let buildCount = 0;
  const cache = createFlowSceneCache(() => ({ version: ++buildCount }));

  assert.equal(cache.getSnapshot().version, 1);
  assert.equal(cache.getSnapshot().version, 1);
  assert.equal(buildCount, 1);

  cache.invalidate();

  assert.equal(cache.getSnapshot().version, 2);
  assert.equal(buildCount, 2);
});

test('tracks hovered components without rebuilding the scene', () => {
  let buildCount = 0;
  const cache = createFlowSceneCache(() => {
    buildCount += 1;
    return { activeComponentIds: new Set(['active']) };
  });

  cache.getSnapshot();
  cache.setHovered('active', true);
  cache.setHovered('second', true);

  assert.deepEqual(
    cache.getSnapshot().hoveredComponentIds,
    new Set(['active', 'second']),
  );
  assert.equal(buildCount, 1);

  cache.setHovered('active', false);
  assert.deepEqual(cache.getSnapshot().hoveredComponentIds, new Set(['second']));

  cache.clearHovered();
  assert.deepEqual(cache.getSnapshot().hoveredComponentIds, new Set());
  assert.equal(buildCount, 1);
});

test('requires a snapshot builder', () => {
  assert.throws(
    () => createFlowSceneCache(),
    /requires a snapshot builder/,
  );
});
