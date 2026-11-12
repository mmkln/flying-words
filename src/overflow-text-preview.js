const DEFAULT_DELAY = 250;
const DEFAULT_INSET = 8;
const DEFAULT_GAP = 8;

export function isTextOverflowing(element) {
  return (
    element.scrollWidth > element.clientWidth + 1
    || element.scrollHeight > element.clientHeight + 1
  );
}

export function calculateOverflowPreviewTop({
  surfaceHeight,
  itemTop,
  itemBottom,
  previewHeight,
  inset = DEFAULT_INSET,
  gap = DEFAULT_GAP,
}) {
  const below = itemBottom + gap;
  const above = itemTop - previewHeight - gap;
  const fitsBelow = surfaceHeight - itemBottom >= previewHeight + gap;
  const fitsAbove = itemTop >= previewHeight + gap + inset;
  const maximumTop = Math.max(inset, surfaceHeight - previewHeight - inset);
  const preferredTop = fitsBelow
    ? below
    : fitsAbove
      ? above
      : itemTop;

  return Math.max(inset, Math.min(preferredTop, maximumTop));
}

function closestItem(root, target, selector) {
  if (!(target instanceof Element)) return null;
  const item = target.closest(selector);
  return item && root.contains(item) ? item : null;
}

function remainsInside(item, relatedTarget) {
  return relatedTarget instanceof Node && item.contains(relatedTarget);
}

export function createOverflowTextPreview({
  root,
  surface,
  scrollRoot = root,
  itemSelector,
  textSelector,
  triggerSelector = itemSelector,
  delay = DEFAULT_DELAY,
}) {
  const element = document.createElement('div');
  element.className = 'overflow-text-preview';
  element.hidden = true;
  element.setAttribute('aria-hidden', 'true');
  surface.append(element);

  let timer = null;
  let activeItem = null;

  function hide() {
    window.clearTimeout(timer);
    timer = null;
    activeItem = null;
    element.hidden = true;
    element.textContent = '';
    element.style.removeProperty('top');
  }

  function position(item) {
    const surfaceRect = surface.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const top = calculateOverflowPreviewTop({
      surfaceHeight: surfaceRect.height,
      itemTop: itemRect.top - surfaceRect.top,
      itemBottom: itemRect.bottom - surfaceRect.top,
      previewHeight: element.offsetHeight,
    });

    element.style.top = `${top}px`;
  }

  function show(item) {
    if (!item?.isConnected) return;

    const text = item.querySelector(textSelector);
    if (!text || !isTextOverflowing(text)) return;

    activeItem = item;
    element.textContent = text.textContent;
    element.hidden = false;
    position(item);
  }

  function schedule(item) {
    hide();
    activeItem = item;
    timer = window.setTimeout(() => {
      if (activeItem === item) show(item);
    }, delay);
  }

  function handlePointerOver(event) {
    if (event.pointerType !== 'mouse') return;
    const trigger = closestItem(root, event.target, triggerSelector);
    const item = trigger?.closest(itemSelector);
    if (!item || remainsInside(trigger, event.relatedTarget)) return;
    schedule(item);
  }

  function handlePointerOut(event) {
    if (event.pointerType !== 'mouse') return;
    const trigger = closestItem(root, event.target, triggerSelector);
    if (!trigger || remainsInside(trigger, event.relatedTarget)) return;
    hide();
  }

  function handleFocusIn(event) {
    const trigger = closestItem(root, event.target, triggerSelector);
    const item = trigger?.closest(itemSelector);
    if (item && trigger.matches(':focus-visible')) show(item);
  }

  function handleFocusOut(event) {
    const trigger = closestItem(root, event.target, triggerSelector);
    if (!trigger || remainsInside(trigger, event.relatedTarget)) return;
    hide();
  }

  root.addEventListener('pointerover', handlePointerOver);
  root.addEventListener('pointerout', handlePointerOut);
  root.addEventListener('focusin', handleFocusIn);
  root.addEventListener('focusout', handleFocusOut);
  scrollRoot.addEventListener('scroll', hide, { passive: true });
  window.addEventListener('resize', hide, { passive: true });

  return {
    hide,
    destroy() {
      hide();
      root.removeEventListener('pointerover', handlePointerOver);
      root.removeEventListener('pointerout', handlePointerOut);
      root.removeEventListener('focusin', handleFocusIn);
      root.removeEventListener('focusout', handleFocusOut);
      scrollRoot.removeEventListener('scroll', hide);
      window.removeEventListener('resize', hide);
      element.remove();
    },
  };
}
