export function createThoughtEditor({
  dialog,
  form,
  textarea,
  counter,
  discardButton,
  maximum = 1000,
  warningThreshold = 850,
  onSave,
  onClose,
}) {
  let session = null;

  function updateCounter() {
    const count = textarea.value.length;
    counter.hidden = count < warningThreshold;
    counter.textContent = `${count} / ${maximum}`;
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

    const saved = onSave({
      thoughtId: session.thoughtId,
      text: textarea.value.trim(),
    });

    if (saved === false) return false;
    close();
    return true;
  }

  function open({ thoughtId, text }) {
    if (session) discard({ restoreFocus: false });

    session = { thoughtId, originalText: text };
    textarea.value = text;
    updateCounter();

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
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    save();
  });
  discardButton.addEventListener('click', () => discard());
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    discard();
  });

  return { discard, isOpen: () => session !== null, open, save };
}
