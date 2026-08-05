import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildHierarchyComponents,
  magnetMetaFromParents,
  normalizeMagnetParents,
  wouldCreateHierarchyCycle,
} from './magnet-hierarchy.js';

test('normalizes legacy and multi-parent magnet metadata', () => {
  assert.deepEqual(normalizeMagnetParents({
    version: 1,
    parentId: 'parent-a',
    slot: 2,
  }), [{ parentId: 'parent-a', slot: 2 }]);

  assert.deepEqual(normalizeMagnetParents({
    version: 2,
    parents: [
      { parentId: 'parent-a', slot: 0 },
      { parentId: 'parent-b', slot: 1 },
    ],
  }), [
    { parentId: 'parent-a', slot: 0 },
    { parentId: 'parent-b', slot: 1 },
  ]);
});

test('keeps hierarchy direction while deriving one physical component', () => {
  const components = buildHierarchyComponents(
    ['parent-a', 'parent-b', 'child', 'solo'],
    [
      { parentId: 'parent-a', childId: 'child' },
      { parentId: 'parent-b', childId: 'child' },
    ],
  );

  assert.deepEqual(components, [
    { id: 'child', memberIds: ['child', 'parent-a', 'parent-b'] },
    { id: 'solo', memberIds: ['solo'] },
  ]);
});

test('detects directed hierarchy cycles', () => {
  const parents = new Map([
    ['a', []],
    ['b', [{ parentId: 'a', slot: 0 }]],
    ['c', [{ parentId: 'b', slot: 0 }]],
  ]);
  const getParents = (thoughtId) => parents.get(thoughtId) || [];

  assert.equal(wouldCreateHierarchyCycle('c', 'a', getParents), true);
  assert.equal(wouldCreateHierarchyCycle('a', 'c', getParents), false);
  assert.equal(wouldCreateHierarchyCycle('a', 'a', getParents), true);
});

test('removes magnet metadata when no directed parents remain', () => {
  assert.deepEqual(magnetMetaFromParents([
    { parentId: 'a', slot: 0 },
  ]), {
    version: 2,
    parents: [{ parentId: 'a', slot: 0 }],
  });
  assert.equal(magnetMetaFromParents([]), null);
});
