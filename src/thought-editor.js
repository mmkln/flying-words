export function createThoughtEditor({
  dialog,
  form,
  textarea,
  linkFields,
  counter,
  discardButton,
  resolveButton,
  maximum = 2000,
  warningThreshold = 850,
  onSave,
  onClose,
  onResolvedChange,
}) {
  let session = null;
  let kind = null;
  let resolved = false;

  function updateCounter() {
    const count = textarea.value.length;
    counter.hidden = count < warningThreshold;
    counter.textContent = `${count} / ${maximum}`;
  }

  function renderResolvedState() {
    if (resolveButton) {
      resolveButton.textContent = resolved ? 'Resolved' : 'Resolve';
      resolveButton.setAttribute('aria-pressed', String(resolved));
      resolveButton.classList.toggle('is-active', resolved);
    }
    onResolvedChange?.(resolved);
  }

  function close({ restoreFocus = true } = {}) {
    const closedSession = session;
    session = null;
    if (dialog.open) dialog.close();
    if (closedSession) onClose?.({ ...closedSession, restoreFocus });
  }

  function discard(options) {
    if (!session) return;
    close(options);
  }

  function save() {
    if (!session) return false;

    const link = linkFields?.getValue() || {};
    const saved = onSave({
      thoughtId: session.thoughtId,
      draft: {
        kind,
        text: textarea.value,
        resolved,
        linkUrl: link.url || '',
        linkTitle: link.title || '',
      },
    });

    if (saved === false) return false;
    close();
    return true;
  }

  function setKind(nextKind) {
    kind = nextKind;
  }

  function open({ thoughtId, draft, origin = 'space' }) {
    if (session) discard({ restoreFocus: false });

    session = { thoughtId, origin, originalDraft: structuredClone(draft) };
    textarea.value = draft.text;
    linkFields?.setValue({ url: draft.linkUrl, title: draft.linkTitle });
    setKind(draft.kind);
    resolved = draft.resolved === true;
    updateCounter();
    renderResolvedState();

    if (!dialog.open) dialog.showModal();
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    });
  }

  textarea.addEventListener('input', updateCounter);
  textarea.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      save();
    }
  });
  resolveButton?.addEventListener('click', () => {
    resolved = !resolved;
    renderResolvedState();
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    save();
  });
  discardButton.addEventListener('click', () => discard());
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    discard();
  });

  return {
    discard,
    getKind: () => kind,
    getResolved: () => resolved,
    getThoughtId: () => session?.thoughtId || null,
    isOpen: () => session !== null,
    open,
    save,
    setKind,
  };
}
