export const LEGACY_ACCOUNT_SNAPSHOT_PREFIX = 'flying-thoughts:account:v1:';

export function shouldPersistThoughtSnapshot({ authenticated = false } = {}) {
  return !authenticated;
}

export function removeLegacyAccountSnapshot(storage, accountId) {
  const key = `${LEGACY_ACCOUNT_SNAPSHOT_PREFIX}${accountId}`;

  try {
    const removed = storage.getItem(key) !== null;
    storage.removeItem(key);
    return { removed, error: null };
  } catch (error) {
    return { removed: false, error };
  }
}
