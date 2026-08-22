function cloneJson(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

export function mergeMetaPatch(meta, patch) {
  const merged = cloneJson(meta || {});

  Object.entries(patch || {}).forEach(([key, value]) => {
    if (value === null) delete merged[key];
    else merged[key] = cloneJson(value);
  });

  return merged;
}

export function metaPatchFromThought(thought, keys) {
  return Object.fromEntries(keys.map((key) => [
    key,
    Object.hasOwn(thought.meta || {}, key)
      ? cloneJson(thought.meta[key])
      : null,
  ]));
}

export function mergeThoughtPatches(first = {}, second = {}) {
  const merged = {
    ...cloneJson(first),
    ...cloneJson(second),
  };
  if (first.meta_patch || second.meta_patch) {
    merged.meta_patch = {
      ...cloneJson(first.meta_patch || {}),
      ...cloneJson(second.meta_patch || {}),
    };
  }
  return merged;
}

export function applyThoughtPatch(thought, patch = {}) {
  const next = { ...thought };
  if (Object.hasOwn(patch, 'text')) next.text = patch.text;
  if (Object.hasOwn(patch, 'color')) next.color = patch.color;
  if (Object.hasOwn(patch, 'is_pinned')) next.pinned = patch.is_pinned;
  if (Object.hasOwn(patch, 'meta_patch')) {
    next.meta = mergeMetaPatch(thought.meta, patch.meta_patch);
  }
  return next;
}

export function diffMetaPatch(previousMeta = {}, nextMeta = {}) {
  const keys = new Set([
    ...Object.keys(previousMeta || {}),
    ...Object.keys(nextMeta || {}),
  ]);
  return Object.fromEntries([...keys]
    .filter((key) => (
      JSON.stringify(previousMeta?.[key]) !== JSON.stringify(nextMeta?.[key])
    ))
    .map((key) => [
      key,
      Object.hasOwn(nextMeta || {}, key) ? cloneJson(nextMeta[key]) : null,
    ]));
}
