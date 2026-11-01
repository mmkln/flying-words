import assert from 'node:assert/strict';
import test from 'node:test';

import { parseThoughtSyncReceipt } from './thought-sync-api.js';

test('normalizes a valid thought sync receipt without an account snapshot', () => {
  assert.deepEqual(
    parseThoughtSyncReceipt({
      created_ids: ['created'],
      already_present_ids: ['existing'],
    }),
    {
      createdIds: ['created'],
      alreadyPresentIds: ['existing'],
    },
  );
});

test('rejects a thought sync receipt without both id lists', () => {
  assert.equal(parseThoughtSyncReceipt({ created_ids: [] }), null);
  assert.equal(parseThoughtSyncReceipt({ already_present_ids: [] }), null);
});

test('rejects malformed thought sync receipt ids', () => {
  assert.equal(parseThoughtSyncReceipt({
    created_ids: 'created',
    already_present_ids: [],
  }), null);
  assert.equal(parseThoughtSyncReceipt({
    created_ids: [42],
    already_present_ids: [],
  }), null);
});
