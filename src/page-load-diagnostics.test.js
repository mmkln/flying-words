import assert from 'node:assert/strict';
import test from 'node:test';

import { createPageLoadDiagnostics } from './page-load-diagnostics.js';

test('logs an ISO timestamp and elapsed page-load time', () => {
  let now = 100;
  const entries = [];
  const diagnostics = createPageLoadDiagnostics({
    logger: (message, details) => entries.push({ message, details }),
    wallClock: () => new Date('2026-10-28T16:30:00.000Z'),
    monotonicClock: () => now,
    pageStartedAt: 100,
  });

  now = 137.25;
  diagnostics.mark('cache:guest-ready', { thoughtCount: 4 });

  assert.deepEqual(entries, [{
    message: '[Flying Thoughts][page-load] 2026-10-28T16:30:00.000Z +37.3ms cache:guest-ready',
    details: {
      timestamp: '2026-10-28T16:30:00.000Z',
      elapsedMs: 37.3,
      thoughtCount: 4,
    },
  }]);
});

test('logs one terminal stage event with its duration', () => {
  let now = 500;
  const entries = [];
  const diagnostics = createPageLoadDiagnostics({
    logger: (message, details) => entries.push({ message, details }),
    wallClock: () => new Date('2026-10-28T16:30:00.000Z'),
    monotonicClock: () => now,
    pageStartedAt: 500,
  });

  now = 520;
  const finish = diagnostics.begin('thoughts:first-page', { limit: 50 });
  now = 612.34;
  finish('complete', { resultCount: 50 });
  finish('failed');

  assert.equal(entries.length, 2);
  assert.equal(
    entries[0].message,
    '[Flying Thoughts][page-load] 2026-10-28T16:30:00.000Z +20ms thoughts:first-page:start',
  );
  assert.deepEqual(entries[1], {
    message: '[Flying Thoughts][page-load] 2026-10-28T16:30:00.000Z +112.3ms thoughts:first-page:complete',
    details: {
      timestamp: '2026-10-28T16:30:00.000Z',
      elapsedMs: 112.3,
      resultCount: 50,
      durationMs: 92.3,
    },
  });
});
