import assert from 'node:assert/strict';
import test from 'node:test';

import { buildHierarchyComponents } from './magnet-hierarchy.js';
import { createMagnetPhysics } from './magnet-physics.js';

function makeThought(id, {
  x = 0,
  y = 0,
  vx = 0,
  vy = 0,
  width = 120,
  height = 64,
  pinned = false,
} = {}) {
  return { id, x, y, vx, vy, width, height, pinned };
}

function sync(engine, thoughts, relations) {
  engine.syncTopology({
    thoughts,
    relations,
    hierarchyComponents: buildHierarchyComponents(
      thoughts.map((thought) => thought.id),
      relations,
    ),
  });
}

function simulate(engine, thoughtIds, frameDelta, seconds) {
  const frames = Math.round(seconds / frameDelta);
  for (let frame = 0; frame < frames; frame += 1) {
    engine.advance(frameDelta, {
      activeThoughtIds: new Set(thoughtIds),
      hoveredComponentIds: new Set(),
      reducedMotion: false,
    });
  }
}

function assertPosition(thought, expected) {
  assert.ok(Math.abs(thought.x - expected.x) < 1e-9);
  assert.ok(Math.abs(thought.y - expected.y) < 1e-9);
  assert.ok(Math.abs(thought.vx - expected.vx) < 1e-9);
  assert.ok(Math.abs(thought.vy - expected.vy) < 1e-9);
}

test('topology merge and split preserve every thought world transform', () => {
  const thoughts = [
    makeThought('a', { x: 20, y: 40, vx: 12, vy: -3 }),
    makeThought('b', { x: 260, y: 170, vx: -5, vy: 9 }),
    makeThought('c', { x: 510, y: 90, vx: 2, vy: 4 }),
  ];
  const expected = new Map(thoughts.map((thought) => [thought.id, { ...thought }]));
  const engine = createMagnetPhysics();

  sync(engine, thoughts, []);
  sync(engine, thoughts, [{ parentId: 'a', childId: 'b', slot: 0 }]);
  thoughts.forEach((thought) => assertPosition(thought, expected.get(thought.id)));

  sync(engine, thoughts, []);
  thoughts.forEach((thought) => assertPosition(thought, expected.get(thought.id)));
});

test('internal magnetic forces do not accelerate the component center of mass', () => {
  const thoughts = [
    makeThought('parent', { x: 0, y: 0, vx: 20, vy: -8 }),
    makeThought('child', { x: 320, y: 210, vx: 20, vy: -8 }),
  ];
  const relations = [{ parentId: 'parent', childId: 'child', slot: 0 }];
  const engine = createMagnetPhysics();
  sync(engine, thoughts, relations);
  const before = engine.debugSnapshot().components[0];

  simulate(engine, thoughts.map(({ id }) => id), 1 / 120, 1);

  const after = engine.debugSnapshot().components[0];
  assert.ok(Math.abs(after.x - before.x - 20) < 0.05);
  assert.ok(Math.abs(after.y - before.y + 8) < 0.05);
  assert.ok(Math.abs(after.vx - 20) < 0.01);
  assert.ok(Math.abs(after.vy + 8) < 0.01);
});

test('fixed timestep produces the same cloud motion at 60 and 120 FPS', () => {
  const makeSystem = () => {
    const thoughts = [
      makeThought('left', { x: 40, y: 80, vx: 16, vy: 7 }),
      makeThought('middle', { x: 280, y: 230, vx: 8, vy: -4 }),
      makeThought('right', { x: 520, y: 60, vx: -3, vy: 2 }),
    ];
    const relations = [
      { parentId: 'left', childId: 'middle', slot: 1 },
      { parentId: 'right', childId: 'middle', slot: 4 },
    ];
    const engine = createMagnetPhysics();
    sync(engine, thoughts, relations);
    return { engine, thoughts };
  };
  const at60 = makeSystem();
  const at120 = makeSystem();

  simulate(at60.engine, at60.thoughts.map(({ id }) => id), 1 / 60, 4);
  simulate(at120.engine, at120.thoughts.map(({ id }) => id), 1 / 120, 4);

  at60.thoughts.forEach((thought, index) => {
    const comparison = at120.thoughts[index];
    assert.ok(Math.abs(thought.x - comparison.x) < 0.05);
    assert.ok(Math.abs(thought.y - comparison.y) < 0.05);
    assert.ok(Math.abs(thought.vx - comparison.vx) < 0.05);
    assert.ok(Math.abs(thought.vy - comparison.vy) < 0.05);
  });
});

test('multi-parent constraints stay finite and velocity-limited', () => {
  const thoughts = [
    makeThought('parent-a', { x: 0, y: 40, vx: 18, vy: 3 }),
    makeThought('parent-b', { x: 560, y: 320, vx: -12, vy: -5 }),
    makeThought('child', { x: 260, y: 160, vx: 0, vy: 0 }),
  ];
  const relations = [
    { parentId: 'parent-a', childId: 'child', slot: 0 },
    { parentId: 'parent-b', childId: 'child', slot: 3 },
  ];
  const engine = createMagnetPhysics();
  sync(engine, thoughts, relations);

  simulate(engine, thoughts.map(({ id }) => id), 1 / 60, 12);

  thoughts.forEach((thought) => {
    assert.ok(Number.isFinite(thought.x));
    assert.ok(Number.isFinite(thought.y));
    assert.ok(Number.isFinite(thought.vx));
    assert.ok(Number.isFinite(thought.vy));
    assert.ok(Math.hypot(thought.vx, thought.vy) <= 145.01);
  });
});

test('a newly created relation ramps in without a first-frame jump', () => {
  const thoughts = [
    makeThought('parent', { x: 40, y: 40 }),
    makeThought('child', { x: 500, y: 340 }),
  ];
  const engine = createMagnetPhysics();
  sync(engine, thoughts, []);
  sync(engine, thoughts, [{ parentId: 'parent', childId: 'child', slot: 0 }]);
  const before = thoughts.map(({ x, y }) => ({ x, y }));

  simulate(engine, thoughts.map(({ id }) => id), 1 / 120, 1 / 120);

  thoughts.forEach((thought, index) => {
    assert.ok(Math.hypot(
      thought.x - before[index].x,
      thought.y - before[index].y,
    ) < 0.1);
  });
  assert.ok(engine.debugSnapshot().constraints[0].strength > 0);
  assert.ok(engine.debugSnapshot().constraints[0].strength < 0.1);
});

test('cards inside a dense component separate without a bounce impulse', () => {
  const thoughts = [
    makeThought('parent', { x: 100, y: 100 }),
    makeThought('child', { x: 120, y: 115 }),
  ];
  const relations = [{ parentId: 'parent', childId: 'child', slot: 0 }];
  const engine = createMagnetPhysics();
  sync(engine, thoughts, relations);

  simulate(engine, thoughts.map(({ id }) => id), 1 / 60, 1.5);

  const overlapX = Math.min(
    thoughts[0].x + thoughts[0].width,
    thoughts[1].x + thoughts[1].width,
  ) - Math.max(thoughts[0].x, thoughts[1].x);
  const overlapY = Math.min(
    thoughts[0].y + thoughts[0].height,
    thoughts[1].y + thoughts[1].height,
  ) - Math.max(thoughts[0].y, thoughts[1].y);
  assert.ok(overlapX <= 0 || overlapY <= 0);
  thoughts.forEach((thought) => {
    assert.ok(Number.isFinite(thought.vx));
    assert.ok(Number.isFinite(thought.vy));
  });
});

test('dragging keeps the selected card at the pointer target', () => {
  const thoughts = [
    makeThought('parent', { x: 40, y: 80, vx: 12, vy: 5 }),
    makeThought('child', { x: 260, y: 180, vx: 12, vy: 5 }),
  ];
  const relations = [{ parentId: 'parent', childId: 'child', slot: 2 }];
  const engine = createMagnetPhysics();
  sync(engine, thoughts, relations);

  assert.equal(engine.beginDrag('child'), true);
  engine.moveDraggedThought('child', 420, 260, 1000);
  engine.moveDraggedThought('child', 440, 280, 1016);
  simulate(engine, thoughts.map(({ id }) => id), 1 / 60, 0.5);

  assert.ok(Math.abs(thoughts[1].x - 440) < 0.001);
  assert.ok(Math.abs(thoughts[1].y - 280) < 0.001);
  assert.equal(engine.endDrag('child'), true);
  assert.ok(Number.isFinite(thoughts[1].vx));
  assert.ok(Number.isFinite(thoughts[1].vy));
});
