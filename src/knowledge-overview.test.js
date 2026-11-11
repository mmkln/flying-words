import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createKnowledgeOverviewViewModel,
  distributePercentages,
  normalizeKnowledgeOverview,
} from './knowledge-overview.js';


test('normalizes a complete knowledge overview', () => {
  const overview = normalizeKnowledgeOverview({
    total: 10,
    activity: { last_30_days: 4, daily: [{ date: '2026-11-11', count: 2 }] },
    attention: { open_questions: 3, without_connections: 5 },
    structure: { connected_percent: 50 },
    composition: { thought: 4, excerpt: 3, question: 2, observation: 1 },
    channels: { web: 7, telegram: 2, mcp: 1 },
  });

  assert.equal(overview.total, 10);
  assert.equal(overview.activity.daily.length, 30);
  assert.equal(overview.activity.daily.at(-1).count, 2);
  assert.equal(overview.composition.link, 0);
  assert.equal(overview.channels.telegram, 2);
});

test('rejects a non-object overview response', () => {
  assert.throws(
    () => normalizeKnowledgeOverview(null),
    /invalid knowledge overview/,
  );
});

test('composition groups secondary knowledge kinds as other', () => {
  const overview = normalizeKnowledgeOverview({
    total: 10,
    composition: {
      thought: 3,
      excerpt: 2,
      question: 1,
      observation: 1,
      hypothesis: 1,
      quote: 1,
      research_result: 1,
    },
    channels: { web: 10 },
  });
  const model = createKnowledgeOverviewViewModel(overview);

  assert.deepEqual(model.compositionPercentages, [30, 20, 10, 40]);
  assert.deepEqual(model.channelPercentages, [100, 0, 0]);
});

test('percentage distribution is stable for empty and rounded values', () => {
  assert.deepEqual(distributePercentages([0, 0, 0]), [0, 0, 0]);
  const result = distributePercentages([1, 1, 1]);
  assert.equal(result.reduce((sum, value) => sum + value, 0), 100);
  assert.deepEqual(result, [34, 33, 33]);
});
