const ITEM_SELECTOR = '[data-board-reorder-id]';
const HANDLE_SELECTOR = '[data-board-reorder-handle]';
const MOUSE_DRAG_THRESHOLD = 6;
const TOUCH_DRAG_THRESHOLD = 10;
const TOUCH_HOLD_DELAY = 260;
const AUTO_SCROLL_EDGE = 72;
const AUTO_SCROLL_STEP = 18;

function distanceToRange(value, start, end) {
  if (value < start) return start - value;
  if (value > end) return value - end;
  return 0;
}

function normalizedItems(items) {
  return items
    .filter(({ id, rect }) => (
      id
      && rect
      && Number.isFinite(rect.top)
      && Number.isFinite(rect.left)
      && Number.isFinite(rect.width)
      && Number.isFinite(rect.height)
    ))
    .map((item) => ({
      ...item,
      centerX: item.rect.left + item.rect.width / 2,
      centerY: item.rect.top + item.rect.height / 2,
      bottom: item.rect.top + item.rect.height,
    }))
    .sort((left, right) => (
      Math.abs(left.rect.top - right.rect.top) > 8
        ? left.rect.top - right.rect.top
        : left.rect.left - right.rect.left
    ));
}

export function findBoardReorderReferenceId(items, point) {
  const orderedItems = normalizedItems(items);
  if (!orderedItems.length) return null;

  const rows = [];
  orderedItems.forEach((item) => {
    const currentRow = rows.at(-1);
    if (!currentRow || Math.abs(currentRow.centerY - item.centerY) > 12) {
      rows.push({
        items: [item],
        top: item.rect.top,
        bottom: item.bottom,
        centerY: item.centerY,
      });
      return;
    }

    currentRow.items.push(item);
    currentRow.top = Math.min(currentRow.top, item.rect.top);
    currentRow.bottom = Math.max(currentRow.bottom, item.bottom);
    currentRow.centerY = currentRow.items.reduce(
      (total, rowItem) => total + rowItem.centerY,
      0,
    ) / currentRow.items.length;
  });

  const row = rows.reduce((nearest, candidate) => {
    const distance = distanceToRange(point.y, candidate.top, candidate.bottom);
    if (!nearest || distance < nearest.distance) return { row: candidate, distance };
    if (distance > nearest.distance) return nearest;
    return Math.abs(point.y - candidate.centerY) < Math.abs(point.y - nearest.row.centerY)
      ? { row: candidate, distance }
      : nearest;
  }, null).row;

  const rowIndex = rows.indexOf(row);
  const reference = row.items.find((item) => point.x < item.centerX);
  if (reference) return reference.id;
  return rows[rowIndex + 1]?.items[0]?.id ?? null;
}

function boardItems(grid, excludedItem = null) {
  return [...grid.querySelectorAll(ITEM_SELECTOR)]
    .filter((item) => item !== excludedItem);
}

function itemId(item) {
  return item?.dataset.boardReorderId || null;
}

function captureItemPositions(grid, excludedItem) {
  return new Map(boardItems(grid, excludedItem).map((item) => [
    item,
    item.getBoundingClientRect(),
  ]));
}

function animateItemPositions(previousPositions) {
  previousPositions.forEach((previousRect, item) => {
    const nextRect = item.getBoundingClientRect();
    const deltaX = previousRect.left - nextRect.left;
    const deltaY = previousRect.top - nextRect.top;
    if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;
    if (typeof item.animate !== 'function') return;

    item.getAnimations().forEach((animation) => animation.cancel());
    item.animate([
      { transform: `translate(${deltaX}px, ${deltaY}px)` },
      { transform: 'translate(0, 0)' },
    ], {
      duration: 170,
      easing: 'cubic-bezier(.2, .8, .2, 1)',
    });
  });
}

function cleanCloneIds(root) {
  if (root.id) root.removeAttribute('id');
  root.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
}

export function createBoardReorderController({
  grid,
  scrollContainer,
  onCommit,
  onAnnounce = () => {},
}) {
  if (!grid) throw new TypeError('Board reorder requires a grid element.');

  const controller = new AbortController();
  let gesture = null;
  let suppressClickUntil = 0;

  function clearTouchTimer() {
    if (!gesture?.touchTimer) return;
    window.clearTimeout(gesture.touchTimer);
    gesture.touchTimer = null;
  }

  function movePreview(clientX, clientY) {
    if (!gesture?.preview) return;
    const left = clientX - gesture.pointerOffsetX;
    const top = clientY - gesture.pointerOffsetY;
    gesture.preview.style.transform = `translate3d(${left}px, ${top}px, 0) scale(1.025)`;
  }

  function beginDrag() {
    if (!gesture || gesture.started) return;
    gesture.started = true;
    clearTouchTimer();

    const rect = gesture.item.getBoundingClientRect();
    const preview = gesture.item.cloneNode(true);
    cleanCloneIds(preview);
    preview.classList.remove('is-active');
    preview.classList.add('space-tile-reorder-preview');
    preview.setAttribute('aria-hidden', 'true');
    preview.style.width = `${rect.width}px`;
    preview.style.height = `${rect.height}px`;

    gesture.pointerOffsetX = gesture.currentX - rect.left;
    gesture.pointerOffsetY = gesture.currentY - rect.top;
    gesture.preview = preview;
    gesture.item.classList.add('is-reordering');
    document.body.classList.add('is-board-reordering');
    document.body.append(preview);
    gesture.handle.setPointerCapture?.(gesture.pointerId);
    movePreview(gesture.currentX, gesture.currentY);
    onAnnounce(`Moving ${gesture.item.dataset.boardLabel || 'Board'}.`);
  }

  function maybeAutoScroll(clientY) {
    if (!scrollContainer) return;
    const rect = scrollContainer.getBoundingClientRect();
    if (clientY < rect.top + AUTO_SCROLL_EDGE) {
      scrollContainer.scrollBy({ top: -AUTO_SCROLL_STEP, behavior: 'auto' });
    } else if (clientY > rect.bottom - AUTO_SCROLL_EDGE) {
      scrollContainer.scrollBy({ top: AUTO_SCROLL_STEP, behavior: 'auto' });
    }
  }

  function placeDraggedItem(clientX, clientY) {
    const items = boardItems(grid, gesture.item);
    const referenceId = findBoardReorderReferenceId(
      items.map((element) => ({
        id: itemId(element),
        rect: element.getBoundingClientRect(),
      })),
      { x: clientX, y: clientY },
    );
    const reference = referenceId
      ? items.find((element) => itemId(element) === referenceId)
      : null;
    if (reference === gesture.item.nextElementSibling) return;
    if (!reference && gesture.item === grid.lastElementChild) return;

    const previousPositions = captureItemPositions(grid, gesture.item);
    grid.insertBefore(gesture.item, reference);
    animateItemPositions(previousPositions);
  }

  function cleanupGesture({ restore = false } = {}) {
    if (!gesture) return;
    clearTouchTimer();

    if (restore) {
      const reference = gesture.initialNextSibling?.parentElement === grid
        ? gesture.initialNextSibling
        : null;
      grid.insertBefore(gesture.item, reference);
    }

    gesture.item.classList.remove('is-reordering');
    gesture.preview?.remove();
    gesture.handle.releasePointerCapture?.(gesture.pointerId);
    document.body.classList.remove('is-board-reordering');
  }

  function currentNeighbours(item) {
    const items = boardItems(grid);
    const index = items.indexOf(item);
    return {
      previousId: itemId(items[index - 1]),
      nextId: itemId(items[index + 1]),
    };
  }

  function finishGesture({ cancelled = false } = {}) {
    if (!gesture) return;
    const activeGesture = gesture;
    const wasStarted = activeGesture.started;
    const neighbours = wasStarted && !cancelled
      ? currentNeighbours(activeGesture.item)
      : null;
    cleanupGesture({ restore: cancelled });
    gesture = null;

    if (!wasStarted) return;
    suppressClickUntil = performance.now() + 400;

    if (cancelled) {
      onAnnounce('Board move cancelled.');
      return;
    }

    const unchanged = (
      neighbours.previousId === activeGesture.initialPreviousId
      && neighbours.nextId === activeGesture.initialNextId
    );
    if (unchanged) return;

    void onCommit({
      boardId: itemId(activeGesture.item),
      ...neighbours,
    });
  }

  function handlePointerDown(event) {
    if (gesture || event.button !== 0) return;
    const handle = event.target.closest?.(HANDLE_SELECTOR);
    const item = handle?.closest?.(ITEM_SELECTOR);
    if (!handle || !item || !grid.contains(item)) return;

    const neighbours = currentNeighbours(item);
    gesture = {
      pointerId: event.pointerId,
      pointerType: event.pointerType,
      handle,
      item,
      initialNextSibling: item.nextElementSibling,
      initialPreviousId: neighbours.previousId,
      initialNextId: neighbours.nextId,
      startX: event.clientX,
      startY: event.clientY,
      currentX: event.clientX,
      currentY: event.clientY,
      started: false,
      preview: null,
      touchTimer: null,
      pointerOffsetX: 0,
      pointerOffsetY: 0,
    };

    if (event.pointerType === 'touch') {
      gesture.touchTimer = window.setTimeout(beginDrag, TOUCH_HOLD_DELAY);
    }
  }

  function handlePointerMove(event) {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    gesture.currentX = event.clientX;
    gesture.currentY = event.clientY;
    const distance = Math.hypot(
      event.clientX - gesture.startX,
      event.clientY - gesture.startY,
    );

    if (!gesture.started) {
      const threshold = gesture.pointerType === 'touch'
        ? TOUCH_DRAG_THRESHOLD
        : MOUSE_DRAG_THRESHOLD;
      if (gesture.pointerType === 'touch' && distance >= threshold) {
        finishGesture({ cancelled: true });
        return;
      }
      if (gesture.pointerType !== 'touch' && distance >= threshold) beginDrag();
    }

    if (!gesture?.started) return;
    event.preventDefault();
    movePreview(event.clientX, event.clientY);
    maybeAutoScroll(event.clientY);
    placeDraggedItem(event.clientX, event.clientY);
  }

  function handlePointerUp(event) {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    finishGesture();
  }

  function handlePointerCancel(event) {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    finishGesture({ cancelled: true });
  }

  function handleKeyDown(event) {
    if (event.key !== 'Escape' || !gesture?.started) return;
    event.preventDefault();
    finishGesture({ cancelled: true });
  }

  function suppressDraggedClick(event) {
    if (performance.now() >= suppressClickUntil) return;
    event.preventDefault();
    event.stopPropagation();
  }

  grid.addEventListener('pointerdown', handlePointerDown, { signal: controller.signal });
  grid.addEventListener('click', suppressDraggedClick, {
    capture: true,
    signal: controller.signal,
  });
  document.addEventListener('pointermove', handlePointerMove, {
    passive: false,
    signal: controller.signal,
  });
  document.addEventListener('pointerup', handlePointerUp, { signal: controller.signal });
  document.addEventListener('pointercancel', handlePointerCancel, { signal: controller.signal });
  document.addEventListener('keydown', handleKeyDown, { signal: controller.signal });

  return {
    destroy() {
      if (gesture) finishGesture({ cancelled: true });
      controller.abort();
    },
  };
}
