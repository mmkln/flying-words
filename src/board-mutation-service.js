function validateChanges(changes) {
  if (!Array.isArray(changes) || !changes.length) {
    throw new Error('Board placement has no changes to save.');
  }
  return changes;
}

export function createBoardMutationService({ request, prepare }) {
  if (typeof request !== 'function' || typeof prepare !== 'function') {
    throw new TypeError('Board mutation service requires request and prepare functions.');
  }

  return {
    async applyPlacements(thoughtIds, buildChanges) {
      if (!Array.isArray(thoughtIds) || typeof buildChanges !== 'function') {
        throw new TypeError('Board placement requires thought ids and a change builder.');
      }
      await prepare([...new Set(thoughtIds)]);
      const builtChanges = buildChanges();
      if (!Array.isArray(builtChanges) || !builtChanges.length) {
        return { changes: [], thoughts: [] };
      }
      const validatedChanges = validateChanges(builtChanges);
      const response = await request('/boards/placements/batch/', {
        method: 'POST',
        body: { changes: validatedChanges },
      });
      return {
        changes: validatedChanges,
        thoughts: Array.isArray(response?.thoughts) ? response.thoughts : [],
      };
    },
    deleteBoard(boardId) {
      if (typeof boardId !== 'string' || !boardId) {
        throw new TypeError('Board id is required.');
      }
      return request(`/boards/${boardId}/`, { method: 'DELETE' });
    },
  };
}
