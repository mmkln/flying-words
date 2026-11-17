import assert from 'node:assert/strict';
import test from 'node:test';

import {
  LEGACY_ACCOUNT_SNAPSHOT_PREFIX,
  removeLegacyAccountSnapshot,
  shouldPersistThoughtSnapshot,
} from './thought-storage-policy.js';

test('only guest thoughts use a browser snapshot', () => {
  assert.equal(shouldPersistThoughtSnapshot(), true);
  assert.equal(shouldPersistThoughtSnapshot({ authenticated: false }), true);
  assert.equal(shouldPersistThoughtSnapshot({ authenticated: true }), false);
});

test('account activation removes the obsolete cloud snapshot', () => {
  const values = new Map([
    [`${LEGACY_ACCOUNT_SNAPSHOT_PREFIX}account-1`, '[{"id":"thought-1"}]'],
  ]);
  const storage = {
    getItem(key) {
      return values.get(key) ?? null;
    },
    removeItem(key) {
      values.delete(key);
    },
  };

  assert.deepEqual(removeLegacyAccountSnapshot(storage, 'account-1'), {
    removed: true,
    error: null,
  });
  assert.equal(values.size, 0);
});

test('legacy cleanup never blocks account activation when storage is unavailable', () => {
  const storageError = new DOMException('Storage is unavailable.', 'SecurityError');
  const storage = {
    getItem() {
      throw storageError;
    },
    removeItem() {
      throw new Error('unreachable');
    },
  };

  assert.deepEqual(removeLegacyAccountSnapshot(storage, 'account-1'), {
    removed: false,
    error: storageError,
  });
});
