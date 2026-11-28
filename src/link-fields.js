import {
  MAX_LINKS_PER_THOUGHT,
  normalizeLinkInput,
} from './thought-content.js';
import { getWebResourcePresentation } from './web-resource-presentation.js';

const EMPTY_LINK = Object.freeze({ id: '', url: '', title: '' });

let fallbackId = 0;

function createLinkId() {
  if (typeof globalThis.crypto?.randomUUID === 'function') {
    return globalThis.crypto.randomUUID();
  }

  fallbackId += 1;
  return `link-${Date.now()}-${fallbackId}`;
}

function copyLink(value = EMPTY_LINK, { createId = false } = {}) {
  const source = value ?? EMPTY_LINK;
  const id = typeof source.id === 'string' ? source.id.trim() : '';

  return {
    id: id || (createId ? createLinkId() : ''),
    url: typeof source.url === 'string' ? source.url : '',
    title: typeof source.title === 'string' ? source.title : '',
  };
}

function copyLinks(value = []) {
  const sources = Array.isArray(value)
    ? value
    : value?.url || value?.title
      ? [value]
      : [];
  const usedIds = new Set();

  return sources
    .map((source) => copyLink(source, { createId: true }))
    .filter(({ url, title }) => url || title)
    .map((link) => {
      if (!usedIds.has(link.id)) {
        usedIds.add(link.id);
        return link;
      }

      const nextLink = { ...link, id: createLinkId() };
      usedIds.add(nextLink.id);
      return nextLink;
    })
    .slice(0, MAX_LINKS_PER_THOUGHT);
}

function linksEqual(first, second) {
  return (
    first.id === second.id
    && first.url === second.url
    && first.title === second.title
  );
}

export function createLinkFields({
  root,
  itemTemplate,
  requestPreview,
  variant = 'detail',
  maxLinks = MAX_LINKS_PER_THOUGHT,
}) {
  const list = root.querySelector('[data-link-list]');
  const trigger = root.querySelector('[data-link-trigger]');
  const triggerLabel = root.querySelector('[data-link-trigger-label]');
  const countBadge = root.querySelector('[data-link-count]');
  const popover = root.querySelector('[data-link-popover]');
  const editor = root.querySelector('[data-link-editor]');
  const saveButton = root.querySelector('[data-link-save]');
  const deleteButton = popover?.querySelector('[data-link-remove]');
  const cancelButtons = [...root.querySelectorAll('[data-link-cancel]')];
  const urlInput = root.querySelector('[data-link-url]');
  const titleInput = root.querySelector('[data-link-title]');
  const status = root.querySelector('[data-link-status]');

  if (
    !list
    || !trigger
    || !triggerLabel
    || !countBadge
    || !popover
    || !editor
    || !saveButton
    || !deleteButton
    || !cancelButtons.length
    || !urlInput
    || !titleInput
    || !status
    || !itemTemplate?.content
  ) {
    throw new Error('Web link collection markup is incomplete.');
  }

  root.dataset.variant = variant;

  let committedLinks = [];
  let draftLink = copyLink();
  let editingId = null;
  let popoverOpen = false;
  let titleTouched = false;
  const previewRequests = new Map();
  const loadingPreviews = new Set();

  function getCommittedLink(linkId) {
    return committedLinks.find(({ id }) => id === linkId) || null;
  }

  function getItem(linkId) {
    return [...list.querySelectorAll('[data-link-item]')]
      .find((item) => item.dataset.linkId === linkId) || null;
  }

  function setStatus(message = '') {
    status.textContent = message;
    status.hidden = !message;
  }

  function syncDraftFields() {
    urlInput.value = draftLink.url;
    titleInput.value = draftLink.title;
  }

  function renderList() {
    const previousScrollLeft = list.scrollLeft;
    const fragment = document.createDocumentFragment();

    for (const link of committedLinks) {
      const item = itemTemplate.content.firstElementChild.cloneNode(true);
      const editButton = item.querySelector('[data-link-edit]');
      const removeButton = item.querySelector('[data-link-remove]');
      const previewTitle = item.querySelector('[data-link-preview-title]');
      const previewHost = item.querySelector('[data-link-preview-host]');
      const previewSeparator = item.querySelector('[data-link-preview-separator]');
      const presentation = getWebResourcePresentation(link);
      const hasSubtitle = Boolean(presentation.displaySubtitle);

      item.dataset.linkId = link.id;
      item.dataset.previewState = loadingPreviews.has(link.id) ? 'loading' : 'idle';
      previewTitle.textContent = presentation.displayTitle;
      previewHost.textContent = presentation.displaySubtitle;
      previewHost.hidden = !hasSubtitle;
      previewSeparator.hidden = !hasSubtitle;
      editButton.setAttribute(
        'aria-label',
        `Edit web link: ${presentation.accessibleLabel}`,
      );
      editButton.setAttribute(
        'aria-expanded',
        String(popoverOpen && editingId === link.id),
      );
      removeButton.setAttribute(
        'aria-label',
        `Remove web link: ${presentation.accessibleLabel}`,
      );
      fragment.append(item);
    }

    list.replaceChildren(fragment);
    list.scrollLeft = previousScrollLeft;
  }

  function renderFormState() {
    const committedLink = editingId ? getCommittedLink(editingId) : null;
    const baseline = committedLink || { ...EMPTY_LINK, id: draftLink.id };
    const dirty = !linksEqual(draftLink, baseline);

    saveButton.textContent = committedLink ? 'Done' : 'Add';
    saveButton.disabled = !dirty;
    deleteButton.hidden = !committedLink;
  }

  function render() {
    const attached = committedLinks.length > 0;
    const atLimit = committedLinks.length >= maxLinks;

    root.dataset.state = popoverOpen
      ? 'open'
      : attached
        ? 'attached'
        : 'empty';
    root.dataset.linkCount = String(committedLinks.length);

    trigger.hidden = atLimit;
    trigger.setAttribute(
      'aria-expanded',
      String(popoverOpen && editingId === null),
    );
    trigger.setAttribute(
      'aria-label',
      attached ? 'Attach another web link' : 'Attach web link',
    );
    triggerLabel.textContent = attached ? 'Add link' : 'Add web link';
    countBadge.textContent = String(committedLinks.length);
    countBadge.hidden = !attached;

    popover.hidden = !popoverOpen;
    urlInput.disabled = !popoverOpen;
    titleInput.disabled = !popoverOpen;
    root.classList.toggle('is-preview-loading', loadingPreviews.size > 0);

    renderList();
    renderFormState();
  }

  function focusItem(linkId) {
    const item = getItem(linkId);
    item?.querySelector('[data-link-edit]')?.focus({ preventScroll: true });
    if (variant === 'compact') {
      item?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }

  function open(linkId = null) {
    const committedLink = linkId ? getCommittedLink(linkId) : null;
    if (!committedLink && committedLinks.length >= maxLinks) return;

    draftLink = committedLink
      ? copyLink(committedLink)
      : copyLink({}, { createId: true });
    editingId = committedLink?.id || null;
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

    const previousEditingId = editingId;
    draftLink = copyLink();
    editingId = null;
    popoverOpen = false;
    titleTouched = false;

    syncDraftFields();
    setStatus();
    render();

    if (!restoreFocus) return;
    if (previousEditingId) focusItem(previousEditingId);
    else trigger.focus({ preventScroll: true });
  }

  function invalidatePreview(linkId) {
    previewRequests.set(linkId, (previewRequests.get(linkId) || 0) + 1);
    loadingPreviews.delete(linkId);
  }

  function remove(linkId = editingId, { restoreFocus = true } = {}) {
    if (!linkId) return;

    const index = committedLinks.findIndex(({ id }) => id === linkId);
    if (index < 0) return;

    invalidatePreview(linkId);
    committedLinks = committedLinks.filter(({ id }) => id !== linkId);
    if (editingId === linkId) {
      draftLink = copyLink();
      editingId = null;
      popoverOpen = false;
      titleTouched = false;
      syncDraftFields();
      setStatus();
    }
    render();

    if (!restoreFocus) return;
    const nextLink = committedLinks[Math.min(index, committedLinks.length - 1)];
    if (nextLink) focusItem(nextLink.id);
    else trigger.focus({ preventScroll: true });
  }

  async function loadPreview(linkId, url) {
    const link = getCommittedLink(linkId);
    if (
      !link
      || !url
      || typeof requestPreview !== 'function'
      || link.title
    ) {
      return;
    }

    const requestId = (previewRequests.get(linkId) || 0) + 1;
    previewRequests.set(linkId, requestId);
    loadingPreviews.add(linkId);
    render();

    try {
      const result = await requestPreview(url);
      const currentLink = getCommittedLink(linkId);

      if (
        previewRequests.get(linkId) !== requestId
        || currentLink?.url !== url
        || currentLink?.title
        || !result?.title
      ) {
        return;
      }

      const title = result.title.trim();
      committedLinks = committedLinks.map((item) => (
        item.id === linkId ? { ...item, title } : item
      ));

      if (
        popoverOpen
        && editingId === linkId
        && draftLink.url === url
        && !titleTouched
      ) {
        draftLink.title = title;
        titleInput.value = title;
      }
    } catch {
      // A valid web link is still useful when remote metadata is unavailable.
    } finally {
      if (previewRequests.get(linkId) === requestId) {
        loadingPreviews.delete(linkId);
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

    const duplicate = committedLinks.find((link) => (
      link.id !== editingId && link.url === normalizedUrl
    ));
    if (duplicate) {
      setStatus('This web link is already attached.');
      urlInput.focus({ preventScroll: true });
      return false;
    }

    const previousLink = editingId ? getCommittedLink(editingId) : null;
    const link = {
      id: previousLink?.id || draftLink.id || createLinkId(),
      url: normalizedUrl,
      title: draftLink.title.trim(),
    };

    if (previousLink) {
      invalidatePreview(previousLink.id);
      committedLinks = committedLinks.map((item) => (
        item.id === previousLink.id ? link : item
      ));
    } else {
      committedLinks = [...committedLinks, link];
    }

    draftLink = copyLink();
    editingId = null;
    popoverOpen = false;
    titleTouched = false;

    syncDraftFields();
    setStatus();
    render();
    focusItem(link.id);

    if (!link.title && link.url !== previousLink?.url) {
      void loadPreview(link.id, link.url);
    }

    return true;
  }

  trigger.addEventListener('click', () => {
    if (popoverOpen && editingId === null) cancel();
    else open();
  });

  list.addEventListener('click', (event) => {
    const item = event.target.closest('[data-link-item]');
    if (!item) return;

    if (event.target.closest('[data-link-remove]')) {
      remove(item.dataset.linkId);
      return;
    }

    if (event.target.closest('[data-link-edit]')) {
      if (popoverOpen && editingId === item.dataset.linkId) cancel();
      else open(item.dataset.linkId);
    }
  });

  saveButton.addEventListener('click', commit);
  deleteButton.addEventListener('click', () => remove(editingId));

  urlInput.addEventListener('input', () => {
    const nextUrl = urlInput.value;
    const committedLink = editingId ? getCommittedLink(editingId) : null;

    if (nextUrl !== committedLink?.url && !titleTouched) {
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
      return committedLinks.map((link) => copyLink(link));
    },

    reset() {
      committedLinks.forEach(({ id }) => invalidatePreview(id));
      committedLinks = [];
      draftLink = copyLink();
      editingId = null;
      popoverOpen = false;
      titleTouched = false;
      syncDraftFields();
      setStatus();
      render();
    },

    setValue(value = []) {
      committedLinks.forEach(({ id }) => invalidatePreview(id));
      committedLinks = copyLinks(value);
      draftLink = copyLink();
      editingId = null;
      popoverOpen = false;
      titleTouched = false;

      syncDraftFields();
      setStatus();
      render();
    },
  };
}
