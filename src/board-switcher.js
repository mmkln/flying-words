import { WorkspaceFilter, boardsForWorkspace } from './workspace-catalog.js';

function createMenuButton({ label, className = '', prefix = '', suffix = '' }) {
  const button = document.createElement('button');
  const prefixElement = document.createElement('span');
  const labelElement = document.createElement('span');
  const suffixElement = document.createElement('span');

  button.type = 'button';
  button.className = `board-switcher-item ${className}`.trim();
  button.setAttribute('role', 'menuitem');
  prefixElement.className = 'board-switcher-item-prefix';
  prefixElement.textContent = prefix;
  labelElement.className = 'board-switcher-item-label';
  labelElement.textContent = label;
  suffixElement.className = 'board-switcher-item-suffix';
  suffixElement.textContent = suffix;
  button.append(prefixElement, labelElement, suffixElement);
  return button;
}

export function createBoardSwitcher({
  root,
  trigger,
  onOpenBoard,
  onCreateBoard,
  onShowAllBoards,
}) {
  let model = null;
  let displayedWorkspaceId;

  function close({ restoreFocus = false } = {}) {
    if (root.hidden) return;
    root.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    displayedWorkspaceId = undefined;
    if (restoreFocus) trigger.focus();
  }

  function addSectionLabel(text) {
    const label = document.createElement('p');
    label.className = 'board-switcher-section-label';
    label.textContent = text;
    root.append(label);
  }

  function addDivider() {
    const divider = document.createElement('div');
    divider.className = 'board-switcher-divider';
    divider.setAttribute('role', 'separator');
    root.append(divider);
  }

  function workspaceName(workspaceId) {
    if (workspaceId === WorkspaceFilter.UNSORTED) return 'Unsorted';
    return model.workspaces.find(({ id }) => id === workspaceId)?.name || 'Unsorted';
  }

  function workspaceBoards(workspaceId) {
    return boardsForWorkspace(model.boards, workspaceId);
  }

  function renderOpenMenu() {
    if (!model || root.hidden) return;
    root.replaceChildren();

    const currentWorkspaceId = (
      model.currentBoard?.workspace_id || WorkspaceFilter.UNSORTED
    );
    const workspaceId = displayedWorkspaceId ?? currentWorkspaceId;
    const drilling = workspaceId !== currentWorkspaceId;

    if (drilling) {
      const back = createMenuButton({
        label: workspaceName(workspaceId),
        className: 'is-back',
        prefix: '‹',
      });
      back.addEventListener('click', () => {
        displayedWorkspaceId = currentWorkspaceId;
        renderOpenMenu();
      });
      root.append(back);
    } else {
      addSectionLabel(workspaceName(workspaceId));
    }

    workspaceBoards(workspaceId).forEach((board) => {
      const current = board.id === model.currentBoard?.id;
      const item = createMenuButton({
        label: board.title,
        className: current ? 'is-current' : '',
        prefix: current ? '✓' : '',
      });
      if (current) item.setAttribute('aria-current', 'page');
      item.addEventListener('click', () => {
        close();
        onOpenBoard(board.id);
      });
      root.append(item);
    });

    const create = createMenuButton({
      label: 'New Board',
      className: 'is-secondary',
      prefix: '+',
    });
    create.addEventListener('click', () => {
      close();
      onCreateBoard(
        workspaceId === WorkspaceFilter.UNSORTED ? null : workspaceId,
      );
    });
    root.append(create);

    if (!drilling) {
      const otherWorkspaces = [
        ...model.workspaces
          .filter(({ id }) => id !== currentWorkspaceId)
          .map(({ id, name }) => ({ id, name })),
      ];
      const unsortedHasBoards = workspaceBoards(WorkspaceFilter.UNSORTED).length > 0;
      if (currentWorkspaceId !== WorkspaceFilter.UNSORTED && unsortedHasBoards) {
        otherWorkspaces.push({ id: WorkspaceFilter.UNSORTED, name: 'Unsorted' });
      }

      if (otherWorkspaces.length) {
        addDivider();
        addSectionLabel('Other Workspaces');
        otherWorkspaces.forEach((workspace) => {
          const item = createMenuButton({
            label: workspace.name,
            suffix: '›',
          });
          item.addEventListener('click', () => {
            displayedWorkspaceId = workspace.id;
            renderOpenMenu();
            root.querySelector('.board-switcher-item')?.focus();
          });
          root.append(item);
        });
      }

      addDivider();
      const showAll = createMenuButton({ label: 'Show All Boards' });
      showAll.addEventListener('click', () => {
        close();
        onShowAllBoards();
      });
      root.append(showAll);
    }
  }

  function open() {
    if (!model?.currentBoard) return;
    displayedWorkspaceId = (
      model.currentBoard.workspace_id || WorkspaceFilter.UNSORTED
    );
    root.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    renderOpenMenu();
    const initialItem = root.querySelector('[aria-current="page"]')
      || root.querySelector('.board-switcher-item');
    initialItem?.focus();
  }

  function toggle() {
    if (root.hidden) open();
    else close({ restoreFocus: true });
  }

  function render(nextModel) {
    model = nextModel;
    if (!root.hidden) renderOpenMenu();
  }

  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close({ restoreFocus: true });
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;

    const items = [...root.querySelectorAll('.board-switcher-item:not(:disabled)')];
    if (!items.length) return;
    const currentIndex = items.indexOf(document.activeElement);
    let nextIndex = currentIndex;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = items.length - 1;
    if (event.key === 'ArrowDown') nextIndex = (currentIndex + 1 + items.length) % items.length;
    if (event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + items.length) % items.length;
    event.preventDefault();
    items[nextIndex].focus();
  });

  document.addEventListener('pointerdown', (event) => {
    if (root.hidden || root.contains(event.target) || trigger.contains(event.target)) return;
    close();
  });

  return {
    close,
    isOpen: () => !root.hidden,
    render,
    toggle,
  };
}
