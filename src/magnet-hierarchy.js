export function normalizeMagnetParents(magnet, maxSlots = 200) {
  const rawParents = magnet?.version === 1
    ? [{ parentId: magnet.parentId, slot: magnet.slot }]
    : magnet?.version === 2 && Array.isArray(magnet.parents)
      ? magnet.parents
      : [];
  const uniqueParents = new Map();

  rawParents.forEach((relation) => {
    if (
      typeof relation?.parentId !== 'string'
      || !Number.isInteger(relation.slot)
      || relation.slot < 0
      || relation.slot >= maxSlots
    ) {
      return;
    }

    uniqueParents.set(relation.parentId, {
      parentId: relation.parentId,
      slot: relation.slot,
    });
  });

  return [...uniqueParents.values()];
}

export function magnetMetaFromParents(parents) {
  return parents.length ? { version: 2, parents } : null;
}

export function wouldCreateHierarchyCycle(parentId, childId, getParents) {
  if (parentId === childId) return true;

  const visited = new Set();
  const stack = [parentId];

  while (stack.length) {
    const currentId = stack.pop();
    if (currentId === childId) return true;
    if (visited.has(currentId)) continue;

    visited.add(currentId);
    getParents(currentId).forEach((relation) => stack.push(relation.parentId));
  }

  return false;
}

export function buildHierarchyComponents(thoughtIds, relations) {
  const neighbors = new Map(thoughtIds.map((thoughtId) => [thoughtId, new Set()]));

  relations.forEach(({ parentId, childId }) => {
    if (!neighbors.has(parentId) || !neighbors.has(childId) || parentId === childId) return;
    neighbors.get(parentId).add(childId);
    neighbors.get(childId).add(parentId);
  });

  const visited = new Set();
  const components = [];

  thoughtIds.forEach((thoughtId) => {
    if (visited.has(thoughtId)) return;

    const memberIds = [];
    const stack = [thoughtId];
    while (stack.length) {
      const memberId = stack.pop();
      if (visited.has(memberId)) continue;
      visited.add(memberId);
      memberIds.push(memberId);
      neighbors.get(memberId)?.forEach((neighborId) => stack.push(neighborId));
    }

    memberIds.sort();
    components.push({ id: memberIds[0], memberIds });
  });

  return components;
}
