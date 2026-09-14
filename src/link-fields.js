import { normalizeLinkInput } from './thought-content.js';

function hostnameFor(value) {
  try {
    return new URL(value).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export function createLinkFields({
  root,
  requestPreview,
  presentation = 'detail',
}) {
  const trigger = root.querySelector('[data-link-trigger]');
  const triggerLabel = root.querySelector('[data-link-trigger-label]');
  const indicator = root.querySelector('[data-link-indicator]');
  const preview = root.querySelector('[data-link-preview]');
  const editButton = root.querySelector('[data-link-edit]');
  const previewTitle = root.querySelector('[data-link-preview-title]');
  const previewHost = root.querySelector('[data-link-preview-host]');
  const popover = root.querySelector('[data-link-popover]');
  const confirmButton = root.querySelector('[data-link-confirm]');
  const secondaryActions = root.querySelector('[data-link-actions]');
  const titleToggle = root.querySelector('[data-link-title-toggle]');
  const titleField = root.querySelector('[data-link-title-field]');
  const removeButtons = [...root.querySelectorAll('[data-link-remove]')];
  const urlInput = root.querySelector('[data-link-url]');
  const titleInput = root.querySelector('[data-link-title]');
  const status = root.querySelector('[data-link-status]');

  if (
    !trigger
    || !triggerLabel
    || !indicator
    || !preview
    || !editButton
    || !previewTitle
    || !previewHost
    || !popover
    || !confirmButton
    || !secondaryActions
    || !titleToggle
    || !titleField
    || !removeButtons.length
    || !urlInput
    || !titleInput
    || !status
  ) {
    throw new Error('Link attachment markup is incomplete.');
  }

  root.dataset.presentation = presentation;

  let link = { url: '', title: '' };
  let popoverOpen = false;
  let titleEditorOpen = false;
  let titleWasEdited = false;
  let requestId = 0;

  function hasLink() {
    return Boolean(link.url);
  }

  function setStatus(message = '') {
    status.textContent = message;
    status.hidden = !message;
  }

  function renderPreview() {
    const hostname = hostnameFor(link.url);
    previewTitle.textContent = link.title || hostname || 'Link';
    previewHost.textContent = hostname || link.url;
  }

  function render() {
    const attached = hasLink();
    const controlOnly = presentation === 'control';

    root.dataset.state = popoverOpen ? 'open' : attached ? 'attached' : 'empty';
    trigger.hidden = !controlOnly && attached;
    trigger.classList.toggle('is-attached', attached);
    trigger.setAttribute('aria-expanded', String(popoverOpen));
    trigger.setAttribute('aria-pressed', String(attached));
    trigger.setAttribute('aria-label', attached ? 'Edit attached link' : 'Attach link');
    triggerLabel.textContent = attached ? 'Edit link' : 'Add link';
    indicator.hidden = !attached;

    preview.hidden = controlOnly || !attached;
    popover.hidden = !popoverOpen;
    urlInput.disabled = !popoverOpen;
    titleInput.disabled = !popoverOpen;
    confirmButton.textContent = attached ? 'Done' : 'Add';
    secondaryActions.hidden = !attached;
    titleToggle.hidden = titleEditorOpen;
    titleField.hidden = !titleEditorOpen;
    renderPreview();
  }

  function open() {
    popoverOpen = true;
    titleEditorOpen = false;
    titleWasEdited = false;
    urlInput.value = link.url;
    titleInput.value = link.title;
    setStatus();
    render();

    requestAnimationFrame(() => {
      urlInput.focus({ preventScroll: true });
      urlInput.select();
    });
  }

  function collapse({ restoreFocus = true } = {}) {
    if (!popoverOpen) return;
    popoverOpen = false;
    titleEditorOpen = false;
    titleWasEdited = false;
    setStatus();
    render();

    if (restoreFocus) {
      const target = presentation === 'control' || !hasLink() ? trigger : editButton;
      target.focus({ preventScroll: true });
    }
  }

  function remove({ restoreFocus = true } = {}) {
    requestId += 1;
    link = { url: '', title: '' };
    popoverOpen = false;
    titleEditorOpen = false;
    titleWasEdited = false;
    urlInput.value = '';
    titleInput.value = '';
    delete root.dataset.previewState;
    setStatus();
    render();

    if (restoreFocus) trigger.focus({ preventScroll: true });
  }

  async function loadPreview(url) {
    if (!url || typeof requestPreview !== 'function' || link.title) return;

    const currentRequestId = ++requestId;
    root.dataset.previewState = 'loading';

    try {
      const result = await requestPreview(url);
      if (currentRequestId !== requestId || link.url !== url || link.title) return;

      if (result?.title) {
        link = { ...link, title: result.title.trim() };
        titleInput.value = link.title;
      }
    } catch {
      // The URL remains valid when its remote metadata is unavailable.
    } finally {
      if (currentRequestId === requestId) {
        delete root.dataset.previewState;
        render();
      }
    }
  }

  function confirm() {
    const normalizedUrl = normalizeLinkInput(urlInput.value);
    if (!normalizedUrl) {
      setStatus('Enter a valid web address.');
      return false;
    }

    const urlChanged = normalizedUrl !== link.url;
    const nextTitle = titleWasEdited
      ? titleInput.value.trim()
      : urlChanged
        ? ''
        : link.title;

    requestId += 1;
    link = { url: normalizedUrl, title: nextTitle };
    popoverOpen = false;
    titleEditorOpen = false;
    titleWasEdited = false;
    setStatus();
    render();
    void loadPreview(normalizedUrl);
    return true;
  }

  function handleFieldKeyDown(event) {
    if (event.isComposing) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      confirm();
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      collapse();
    }
  }

  trigger.addEventListener('click', () => {
    if (popoverOpen) collapse();
    else open();
  });
  editButton.addEventListener('click', open);
  confirmButton.addEventListener('click', confirm);
  titleToggle.addEventListener('click', () => {
    titleEditorOpen = true;
    render();
    titleInput.focus({ preventScroll: true });
    titleInput.select();
  });

  for (const button of removeButtons) {
    button.addEventListener('click', () => remove());
  }

  urlInput.addEventListener('input', () => setStatus());
  urlInput.addEventListener('keydown', handleFieldKeyDown);
  titleInput.addEventListener('input', () => {
    titleWasEdited = true;
  });
  titleInput.addEventListener('keydown', handleFieldKeyDown);

  document.addEventListener('pointerdown', (event) => {
    if (!popoverOpen || root.contains(event.target)) return;
    collapse({ restoreFocus: false });
  });

  render();

  return {
    collapse,

    focus() {
      open();
    },

    getValue() {
      return { ...link };
    },

    open,
    remove,

    reset() {
      remove({ restoreFocus: false });
    },

    setValue({ url = '', title = '' } = {}) {
      requestId += 1;
      link = { url, title };
      popoverOpen = false;
      titleEditorOpen = false;
      titleWasEdited = false;
      urlInput.value = url;
      titleInput.value = title;
      delete root.dataset.previewState;
      setStatus();
      render();
    },
  };
}
