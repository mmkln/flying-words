import test from 'node:test';
import assert from 'node:assert/strict';
import { createBoardMutationService } from './board-mutation-service.js';

test('Board mutation service prepares affected thoughts then posts one batch', async () => {
  const calls = [];
  const service = createBoardMutationService({
    prepare: async (thoughtIds) => calls.push(['prepare', thoughtIds]),
    request: async (path, options) => {
      calls.push(['request', path, options]);
      return { thoughts: [{ id: 'a', revision: 4 }] };
    },
  });
  const changes = [{
    thought_id: 'a',
    base_revision: 3,
    placements: [{ board_id: 'b', position: { x: 1, y: 2 } }],
  }];

  const result = await service.applyPlacements(['a', 'a'], () => changes);

  assert.deepEqual(result, {
    changes,
    thoughts: [{ id: 'a', revision: 4 }],
  });
  assert.deepEqual(calls, [
    ['prepare', ['a']],
    ['request', '/boards/placements/batch/', { method: 'POST', body: { changes } }],
  ]);
});

test('Board mutation service treats an empty post-prepare mutation as a no-op', async () => {
  let prepared = false;
  const service = createBoardMutationService({
    prepare: async () => { prepared = true; },
    request: async () => ({ thoughts: [] }),
  });

  assert.deepEqual(
    await service.applyPlacements(['a'], () => []),
    { changes: [], thoughts: [] },
  );
  assert.equal(prepared, true);
});

test('Board mutation service owns the Board deletion request contract', async () => {
  const calls = [];
  const service = createBoardMutationService({
    prepare: async () => {},
    request: async (path, options) => calls.push([path, options]),
  });

  await service.deleteBoard('board-a');

  assert.deepEqual(calls, [[
    '/boards/board-a/',
    { method: 'DELETE' },
  ]]);
});
