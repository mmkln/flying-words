import assert from 'node:assert/strict';
import test from 'node:test';

import { createBoardRenderScheduler } from './board-render-scheduler.js';

function createHarness(onFlush = () => {}) {
  const frames = new Map();
  let nextFrameId = 1;
  const cancelled = [];
  const scheduler = createBoardRenderScheduler({
    requestFrame(callback) {
      const frameId = nextFrameId;
      nextFrameId += 1;
      frames.set(frameId, callback);
      return frameId;
    },
    cancelFrame(frameId) {
      cancelled.push(frameId);
      frames.delete(frameId);
    },
    onFlush,
  });

  return {
    cancelled,
    frames,
    scheduler,
    flushNext() {
      const [frameId, callback] = frames.entries().next().value || [];
      if (!callback) return false;
      frames.delete(frameId);
      callback();
      return true;
    },
  };
}

test('coalesces multiple Board invalidations into one frame', () => {
  const updates = [];
  const harness = createHarness((update) => updates.push(update));

  harness.scheduler.request({ cards: ['a'], minimap: true });
  harness.scheduler.request({ cards: ['a', 'b'], connections: true });
  harness.scheduler.request({ allCards: true, controls: true });

  assert.equal(harness.frames.size, 1);
  assert.equal(harness.flushNext(), true);
  assert.equal(updates.length, 1);
  assert.deepEqual(updates[0], {
    allCards: true,
    thoughtIds: new Set(['a', 'b']),
    connections: true,
    minimap: true,
    controls: true,
  });
});

test('clears pending state after a flush', () => {
  const updates = [];
  const harness = createHarness((update) => updates.push(update));

  harness.scheduler.request({ cards: ['a'], connections: true });
  harness.flushNext();
  harness.scheduler.request({ minimap: true });
  harness.flushNext();

  assert.deepEqual(updates[1], {
    allCards: false,
    thoughtIds: new Set(),
    connections: false,
    minimap: true,
    controls: false,
  });
});

test('cancels a pending frame and its update', () => {
  const updates = [];
  const harness = createHarness((update) => updates.push(update));

  harness.scheduler.request({ allCards: true, minimap: true });
  harness.scheduler.cancel();

  assert.deepEqual(harness.cancelled, [1]);
  assert.equal(harness.frames.size, 0);
  assert.deepEqual(updates, []);
});

test('schedules invalidations raised during a flush for the next frame', () => {
  const updates = [];
  let scheduler;
  const harness = createHarness((update) => {
    updates.push(update);
    if (updates.length === 1) scheduler.request({ cards: ['next'] });
  });
  scheduler = harness.scheduler;

  scheduler.request({ cards: ['first'] });
  harness.flushNext();

  assert.equal(harness.frames.size, 1);
  harness.flushNext();
  assert.deepEqual([...updates[1].thoughtIds], ['next']);
});
