import { normalizeLinkInput } from './thought-content.js';
import { getWebResourcePresentation } from './web-resource-presentation.js';

const EMPTY_LINK = Object.freeze({
  url: '',
  title: '',
});

function copyLink(value = EMPTY_LINK) {
  const source = value ?? EMPTY_LINK;

  return {
    url: typeof source.url === 'string' ? source.url : '',
    title: typeof source.title === 'string' ? source.title : '',
  };
}

function linksEqual(first, second) {
  return first.url === second.url && first.title === second.title;
}

export function createLinkFields({
  root,
  requestPreview,
  variant = 'detail',
}) {
  const trigger = root.querySelector('[data-link-trigger]');
  const triggerLabel = root.querySelector('[data-link-trigger-label]');
  const preview = root.querySelector('[data-link-preview]');
  const editButton = root.querySelector('[data-link-edit]');
  const previewTitle = root.querySelector('[data-link-preview-title]');
  const previewHost = root.querySelector('[data-link-preview-host]');
  const previewSeparator = root.querySelector('[data-link-preview-separator]');
  const popover = root.querySelector('[data-link-popover]');
  const editor = root.querySelector('[data-link-editor]');
  const saveButton = root.querySelector('[data-link-save]');
  const deleteButton = popover?.querySelector('[data-link-remove]');
  const removeButtons = [...root.querySelectorAll('[data-link-remove]')];
  const cancelButtons = [...root.querySelectorAll('[data-link-cancel]')];
  const urlInput = root.querySelector('[data-link-url]');
  const titleInput = root.querySelector('[data-link-title]');
  const status = root.querySelector('[data-link-status]');

  if (
    !trigger
    || !triggerLabel
    || !preview
    || !editButton
    || !previewTitle
    || !previewHost
    || !previewSeparator
    || !popover
    || !editor
    || !saveButton
    || !deleteButton
    || !removeButtons.length
    || !cancelButtons.length
    || !urlInput
    || !titleInput
    || !status
  ) {
    throw new Error('Web link markup is incomplete.');
  }

  root.dataset.variant = variant;

  let committedLink = copyLink();
  let draftLink = copyLink();
  let popoverOpen = false;
  let titleTouched = false;
  let requestId = 0;

  function hasCommittedLink() {
    return Boolean(committedLink.url);
  }

  function setStatus(message = '') {
    status.textContent = message;
    status.hidden = !message;
  }

  function syncDraftFields() {
    urlInput.value = draftLink.url;
    titleInput.value = draftLink.title;
  }

  function renderPreview() {
    const presentation = getWebResourcePresentation(committedLink);
    const hasSubtitle = Boolean(presentation.displaySubtitle);

    previewTitle.textContent = presentation.displayTitle;
    previewHost.textContent = presentation.displaySubtitle;
    previewHost.hidden = !hasSubtitle;
    previewSeparator.hidden = !hasSubtitle;
    editButton.setAttribute(
      'aria-label',
      `Edit web link: ${presentation.accessibleLabel}`,
    );
  }

  function renderFormState() {
    const attached = hasCommittedLink();
    const dirty = !linksEqual(draftLink, committedLink);

    saveButton.textContent = attached ? 'Done' : 'Add';
    saveButton.disabled = !dirty;
    deleteButton.hidden = !attached;
  }

  function render() {
    const attached = hasCommittedLink();

    root.dataset.state = popoverOpen
      ? 'open'
      : attached
        ? 'attached'
        : 'empty';

    trigger.hidden = attached;
    trigger.setAttribute('aria-expanded', String(popoverOpen));
    trigger.setAttribute(
      'aria-label',
      attached ? 'Edit web link' : 'Attach web link',
    );
    triggerLabel.textContent = attached ? 'Edit web link' : 'Add web link';
    editButton.setAttribute('aria-expanded', String(popoverOpen));

    preview.hidden = !attached;
    popover.hidden = !popoverOpen;
    urlInput.disabled = !popoverOpen;
    titleInput.disabled = !popoverOpen;

    renderPreview();
    renderFormState();
  }

  function open() {
    draftLink = copyLink(committedLink);
    popoverOpen = true;
    titleTouched = false;

    syncDraftFields();
    setStatus();
    render();

    requestAnimationFrame(() => {
      urlInput.focus({ preventScroll: true });
      urlInput.select();
    });
  }

  function cancel({ restoreFocus = true } = {}) {
    if (!popoverOpen) return;

    draftLink = copyLink(committedLink);
    popoverOpen = false;
    titleTouched = false;

    syncDraftFields();
    setStatus();
    render();

    if (restoreFocus) {
      const target = hasCommittedLink() ? editButton : trigger;
      target.focus({ preventScroll: true });
    }
  }

  function remove({ restoreFocus = true } = {}) {
    requestId += 1;
    committedLink = copyLink();
    draftLink = copyLink();
    popoverOpen = false;
    titleTouched = false;

    syncDraftFields();
    delete root.dataset.previewState;
    setStatus();
    render();

    if (restoreFocus) trigger.focus({ preventScroll: true });
  }

  async function loadPreview(url) {
    if (
      !url
      || typeof requestPreview !== 'function'
      || committedLink.title
    ) {
      return;
    }

    const currentRequestId = ++requestId;
    root.dataset.previewState = 'loading';

    try {
      const result = await requestPreview(url);

      if (
        currentRequestId !== requestId
        || committedLink.url !== url
        || committedLink.title
        || !result?.title
      ) {
        return;
      }

      committedLink = {
        ...committedLink,
        title: result.title.trim(),
      };

      if (
        popoverOpen
        && draftLink.url === url
        && !titleTouched
      ) {
        draftLink.title = committedLink.title;
        titleInput.value = committedLink.title;
      }
    } catch {
      // The web link remains valid when remote metadata is unavailable.
    } finally {
      if (currentRequestId === requestId) {
        delete root.dataset.previewState;
        render();
      }
    }
  }

  function commit() {
    const normalizedUrl = normalizeLinkInput(draftLink.url);

    if (!normalizedUrl) {
      setStatus('Enter a valid web address.');
      urlInput.focus({ preventScroll: true });
      return false;
    }

    const previousUrl = committedLink.url;
    requestId += 1;
    committedLink = {
      url: normalizedUrl,
      title: draftLink.title.trim(),
    };
    draftLink = copyLink(committedLink);
    popoverOpen = false;
    titleTouched = false;

    syncDraftFields();
    setStatus();
    render();
    editButton.focus({ preventScroll: true });

    if (!committedLink.title && committedLink.url !== previousUrl) {
      void loadPreview(committedLink.url);
    }

    return true;
  }

  function toggle() {
    if (popoverOpen) cancel();
    else open();
  }

  trigger.addEventListener('click', toggle);
  editButton.addEventListener('click', toggle);

  saveButton.addEventListener('click', commit);

  urlInput.addEventListener('input', () => {
    const nextUrl = urlInput.value;

    if (nextUrl !== committedLink.url && !titleTouched) {
      draftLink.title = '';
      titleInput.value = '';
    }

    draftLink.url = nextUrl;
    setStatus();
    renderFormState();
  });

  titleInput.addEventListener('input', () => {
    titleTouched = true;
    draftLink.title = titleInput.value;
    renderFormState();
  });

  for (const button of cancelButtons) {
    button.addEventListener('click', () => cancel());
  }

  for (const button of removeButtons) {
    button.addEventListener('click', () => remove());
  }

  root.addEventListener('keydown', (event) => {
    if (!popoverOpen || event.isComposing) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      cancel();
      return;
    }

    if (event.key === 'Enter' && event.target.matches('input')) {
      event.preventDefault();
      event.stopPropagation();
      commit();
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (!popoverOpen || root.contains(event.target)) return;
    cancel({ restoreFocus: false });
  });

  render();

  return {
    open,
    remove,
    collapse: cancel,

    focus() {
      open();
    },

    getValue() {
      return copyLink(committedLink);
    },

    reset() {
      remove({ restoreFocus: false });
    },

    setValue(value = EMPTY_LINK) {
      requestId += 1;
      committedLink = copyLink(value);
      draftLink = copyLink(committedLink);
      popoverOpen = false;
      titleTouched = false;

      syncDraftFields();
      delete root.dataset.previewState;
      setStatus();
      render();
    },
  };
}
