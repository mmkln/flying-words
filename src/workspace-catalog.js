export const WorkspaceFilter = Object.freeze({
  ALL: 'all',
  UNSORTED: 'unsorted',
});

export function normalizeWorkspaceRecords(records = []) {
  const seen = new Set();

  return records
    .map((workspace) => ({
      id: typeof workspace?.id === 'string' ? workspace.id : '',
      name: typeof workspace?.name === 'string' ? workspace.name.trim() : '',
      created_at: workspace?.created_at ?? null,
      updated_at: workspace?.updated_at ?? null,
    }))
    .filter(({ id, name }) => {
      if (!id || !name || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
}

export function boardsForWorkspace(boards = [], filterId = WorkspaceFilter.ALL) {
  if (filterId === WorkspaceFilter.ALL) return boards.slice();
  if (filterId === WorkspaceFilter.UNSORTED) {
    return boards.filter((board) => !board?.workspace_id);
  }
  return boards.filter((board) => board?.workspace_id === filterId);
}

export function workspaceBoardCount(boards, filterId) {
  return boardsForWorkspace(boards, filterId).length;
}

export function workspaceForBoard(board, workspaces = []) {
  if (!board?.workspace_id) return null;
  return workspaces.find(({ id }) => id === board.workspace_id) || null;
}

export function isWorkspaceFilterAvailable(filterId, workspaces = []) {
  return filterId === WorkspaceFilter.ALL
    || filterId === WorkspaceFilter.UNSORTED
    || workspaces.some(({ id }) => id === filterId);
}

export function workspaceFilterForBoard(board, workspaces = []) {
  const workspace = workspaceForBoard(board, workspaces);
  return workspace?.id || WorkspaceFilter.UNSORTED;
}

export function workspaceFilterLabel(filterId, workspaces = []) {
  if (filterId === WorkspaceFilter.ALL) return 'All Boards';
  if (filterId === WorkspaceFilter.UNSORTED) return 'Unsorted';
  return workspaces.find(({ id }) => id === filterId)?.name || 'Unsorted';
}
