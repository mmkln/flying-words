export function createSpatialNavigationHistory(limit = 50) {
  const entries = [];

  function record(snapshot, nextThoughtId) {
    if (!snapshot?.thoughtId || snapshot.thoughtId === nextThoughtId) return;

    entries.push(structuredClone(snapshot));
    if (entries.length > limit) entries.splice(0, entries.length - limit);
  }

  function peek(isValid) {
    for (let index = entries.length - 1; index >= 0; index -= 1) {
      if (isValid(entries[index].thoughtId)) {
        return structuredClone(entries[index]);
      }
    }
    return null;
  }

  function pop(isValid) {
    while (entries.length) {
      const entry = entries.pop();
      if (isValid(entry.thoughtId)) return entry;
    }
    return null;
  }

  function clear() {
    entries.length = 0;
  }

  return { record, peek, pop, clear };
}
