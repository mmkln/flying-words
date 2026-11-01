export function getThoughtMountDiff({
  thoughts,
  mountedIds,
  shouldMount,
}) {
  const mountIds = [];
  const unmountIds = [];

  thoughts.forEach((thought) => {
    const mounted = mountedIds.has(thought.id);
    const desired = shouldMount(thought);

    if (desired && !mounted) mountIds.push(thought.id);
    else if (!desired && mounted) unmountIds.push(thought.id);
  });

  return { mountIds, unmountIds };
}
