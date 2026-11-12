export function createSidePanelGroup({
  root,
  paletteQuery,
  openClass = 'is-side-panel-open',
  requestFrame = globalThis.requestAnimationFrame,
}) {
  if (!root || !paletteQuery) {
    throw new TypeError('A side-panel group requires a root and palette query.');
  }

  let activePanel = null;

  function create({
    dialog,
    trigger,
    closeButton,
    collapseRail,
    onClose,
  }) {
    if (!dialog || !trigger) {
      throw new TypeError('A side panel requires a dialog and trigger.');
    }

    let restoreFocus = false;

    const panel = {
      dialog,

      open() {
        if (dialog.open) return dialog.dataset.presentation;

        const previousPanel = activePanel;
        if (previousPanel && previousPanel !== panel) {
          previousPanel.close({ restoreFocus: false });
        }

        activePanel = panel;
        const presentation = paletteQuery.matches ? 'palette' : 'modal';
        dialog.dataset.presentation = presentation;
        root.classList.toggle(openClass, presentation === 'palette');

        if (presentation === 'palette') dialog.show();
        else dialog.showModal();

        trigger.setAttribute('aria-expanded', 'true');
        return presentation;
      },

      close({ restoreFocus: shouldRestoreFocus = false } = {}) {
        if (!dialog.open) return;
        restoreFocus = shouldRestoreFocus;
        dialog.close();
      },

      get isOpen() {
        return dialog.open;
      },
    };

    const requestClose = () => panel.close({ restoreFocus: true });
    closeButton?.addEventListener('click', requestClose);
    collapseRail?.addEventListener('click', requestClose);

    dialog.addEventListener('click', (event) => {
      if (
        dialog.dataset.presentation === 'modal'
        && event.target === dialog
      ) requestClose();
    });

    dialog.addEventListener('close', () => {
      const shouldRestoreFocus = restoreFocus;
      restoreFocus = false;

      if (activePanel === panel) {
        activePanel = null;
        root.classList.remove(openClass);
      }

      trigger.setAttribute('aria-expanded', 'false');
      delete dialog.dataset.presentation;
      onClose?.();

      if (shouldRestoreFocus) {
        requestFrame(() => trigger.focus({ preventScroll: true }));
      }
    });

    return panel;
  }

  return {
    create,
    getActiveDialog() {
      return activePanel?.dialog || null;
    },
  };
}
