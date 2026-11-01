import { createKnowledgeKindIcon } from './knowledge-kind-picker.js';
import { getThoughtKnowledgeKind } from './knowledge-kinds.js';
import { getThoughtPresentation, isThoughtResolved } from './thought-content.js';
import { createCanvasViewportController } from './canvas-viewport-controller.js';
import { getConnectionPathData } from './connection-map-edge-geometry.js';
import { BoardPlacementOperation } from './board-placement-session.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const DRAG_THRESHOLD = 5;

function createPlacementCard({ thought, draft, alreadyPresent = false }) {
  const element = document.createElement('article');
  const icon = document.createElement('span');
  const text = document.createElement('span');

  element.className = 'board-placement-card';
  element.classList.toggle('is-draft', draft);
  element.classList.toggle('is-already-present', alreadyPresent);
  element.classList.toggle('is-resolved', isThoughtResolved(thought));
  element.dataset.thoughtId = thought.id;
  element.dataset.knowledgeKind = getThoughtKnowledgeKind(thought);
  if (draft) element.setAttribute('aria-label', `Move ${getThoughtPresentation(thought).primaryText}`);

  icon.className = 'board-placement-card-kind';
  icon.append(createKnowledgeKindIcon(getThoughtKnowledgeKind(thought)));
  text.className = 'board-placement-card-text';
  text.textContent = getThoughtPresentation(thought).primaryText;

  element.append(icon, text);
  return element;
}

export function createBoardPlacementView({ dialog, onCancel, onConfirm }) {
  const title = dialog.querySelector('#board-placement-title');
  const summary = dialog.querySelector('#board-placement-summary');
  const cancelButton = dialog.querySelector('#board-placement-cancel');
  const confirmButton = dialog.querySelector('#board-placement-confirm');
  const viewport = dialog.querySelector('#board-placement-viewport');
  const world = dialog.querySelector('#board-placement-world');
  const edgesLayer = dialog.querySelector('#board-placement-edges');
  const nodesLayer = dialog.querySelector('#board-placement-nodes');
  const groupOutline = dialog.querySelector('#board-placement-group-outline');
  const groupLabel = dialog.querySelector('#board-placement-group-label');
  const fitButton = dialog.querySelector('#board-placement-fit');
  const zoomOutButton = dialog.querySelector('#board-placement-zoom-out');
  const zoomResetButton = dialog.querySelector('#board-placement-zoom-reset');
  const zoomInButton = dialog.querySelector('#board-placement-zoom-in');
  const positions = new Map();
  const nodeElements = new Map();
  const draftIds = new Set();
  let renderedEdges = [];
  let edgeFrame = null;
  let drag = null;
  let cardWidth = 280;
  let cardHeight = 96;
  let canConfirm = false;
  let busy = false;
  let currentOperation = BoardPlacementOperation.PLACE;

  const viewportController = createCanvasViewportController({
    viewport,
    world,
    fitButton,
    zoomOutButton,
    zoomResetButton,
    zoomInButton,
    minimumScale: 0.3,
    maximumScale: 1.25,
    zoomStep: 0.15,
    shouldStartPan: (event) => (
      event.button === 0 && !event.target.closest('.board-placement-card')
    ),
  });
  const camera = viewportController.getCamera();

  function getNodeRect(thoughtId) {
    const element = nodeElements.get(thoughtId);
    const position = positions.get(thoughtId);
    if (!element || !position) return null;
    const width = element.offsetWidth || cardWidth;
    const height = element.offsetHeight || cardHeight;
    return {
      left: position.x,
      top: position.y,
      right: position.x + width,
      bottom: position.y + height,
      center: {
        x: position.x + width / 2,
        y: position.y + height / 2,
        width,
        height,
      },
    };
  }

  function renderGroupOutline() {
    const rects = [...draftIds].map(getNodeRect).filter(Boolean);
    groupOutline.hidden = rects.length === 0;
    if (!rects.length) return;

    const padding = 18;
    const left = Math.min(...rects.map((rect) => rect.left)) - padding;
    const top = Math.min(...rects.map((rect) => rect.top)) - padding;
    const right = Math.max(...rects.map((rect) => rect.right)) + padding;
    const bottom = Math.max(...rects.map((rect) => rect.bottom)) + padding;
    groupOutline.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    groupOutline.style.width = `${right - left}px`;
    groupOutline.style.height = `${bottom - top}px`;
    groupLabel.textContent = `${rects.length} ${rects.length === 1 ? 'card' : 'cards'}`;
  }

  function drawEdges() {
    edgeFrame = null;
    const definitions = edgesLayer.querySelector('defs');
    edgesLayer.replaceChildren(definitions);

    renderedEdges.forEach((edge) => {
      const source = getNodeRect(edge.sourceId);
      const target = getNodeRect(edge.targetId);
      if (!source || !target) return;
      const path = document.createElementNS(SVG_NAMESPACE, 'path');
      path.classList.add('board-placement-edge');
      path.setAttribute('d', getConnectionPathData(source.center, target.center));
      path.setAttribute('marker-end', 'url(#board-placement-arrow)');
      edgesLayer.append(path);
    });
  }

  function scheduleGeometry() {
    renderGroupOutline();
    if (edgeFrame) return;
    edgeFrame = requestAnimationFrame(drawEdges);
  }

  function moveDraftCards(origins, delta) {
    origins.forEach((origin, thoughtId) => {
      const position = {
        x: origin.x + delta.x,
        y: origin.y + delta.y,
      };
      positions.set(thoughtId, position);
      const element = nodeElements.get(thoughtId);
      if (element) {
        element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      }
    });
    scheduleGeometry();
  }

  function attachDraftDrag(element) {
    element.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;
      event.stopPropagation();
      drag = {
        pointerId: event.pointerId,
        clientX: event.clientX,
        clientY: event.clientY,
        moved: false,
        origins: new Map(
          [...draftIds].map((thoughtId) => [thoughtId, { ...positions.get(thoughtId) }]),
        ),
      };
      element.setPointerCapture(event.pointerId);
    });

    element.addEventListener('pointermove', (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const deltaX = event.clientX - drag.clientX;
      const deltaY = event.clientY - drag.clientY;
      if (!drag.moved && Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD) return;
      drag.moved = true;
      nodesLayer.classList.add('is-dragging');
      moveDraftCards(drag.origins, {
        x: deltaX / camera.scale,
        y: deltaY / camera.scale,
      });
    });

    const finishDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      drag = null;
      nodesLayer.classList.remove('is-dragging');
    };
    element.addEventListener('pointerup', finishDrag);
    element.addEventListener('pointercancel', finishDrag);
  }

  function renderCards(cards, {
    draft = false,
    alreadyPresentIds = new Set(),
  } = {}) {
    cards.forEach(({ thought, position }) => {
      if (!thought || !position) return;
      const element = createPlacementCard({
        thought,
        draft,
        alreadyPresent: alreadyPresentIds.has(thought.id),
      });
      element.style.width = `${cardWidth}px`;
      element.style.minHeight = `${cardHeight}px`;
      positions.set(thought.id, { x: position.x, y: position.y });
      element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      nodeElements.set(thought.id, element);
      if (draft) {
        draftIds.add(thought.id);
        attachDraftDrag(element);
      }
      nodesLayer.append(element);
    });
  }

  function getDraftPositions() {
    return [...draftIds].map((id) => ({ id, ...positions.get(id) }));
  }

  function open({
    board,
    existingCards,
    draftCards,
    edges,
    geometry,
    selectedCount,
    operation,
    visibleWorld,
    preexistingTargetIds = [],
    confirmWithoutDraft = false,
  }) {
    positions.clear();
    nodeElements.clear();
    draftIds.clear();
    nodesLayer.replaceChildren();
    renderedEdges = edges || [];
    cardWidth = geometry?.cardWidth || 280;
    cardHeight = geometry?.cardHeight || 96;
    canConfirm = draftCards.length > 0 || confirmWithoutDraft;
    busy = false;
    currentOperation = operation;
    confirmButton.disabled = !canConfirm;
    const moving = operation === BoardPlacementOperation.MOVE;
    const boardLabel = board?.label || 'Board';
    const newCount = draftCards.length;
    const existingCount = preexistingTargetIds.length;
    title.textContent = `${moving ? 'Move to' : 'Place on'} “${boardLabel}”`;
    if (existingCount && !newCount && moving) {
      summary.textContent = `${selectedCount} already here · moving removes ${selectedCount === 1 ? 'it' : 'them'} from the current Board`;
    } else if (existingCount) {
      summary.textContent = `${newCount} new · ${existingCount} already here`;
    } else {
      summary.textContent = `${selectedCount} ${selectedCount === 1 ? 'card' : 'cards'}`;
    }
    confirmButton.textContent = moving ? 'Move' : 'Place';
    dialog.dataset.operation = operation;
    renderCards(existingCards, {
      alreadyPresentIds: new Set(preexistingTargetIds),
    });
    renderCards(draftCards, { draft: true });
    viewportController.reset();
    dialog.showModal();
    scheduleGeometry();
    requestAnimationFrame(() => {
      const bounds = viewport.getBoundingClientRect();
      if (visibleWorld?.width && visibleWorld?.height) {
        const scale = Number.isFinite(visibleWorld.scale) ? visibleWorld.scale : 1;
        viewportController.reset({
          x: bounds.width / 2 - (visibleWorld.x + visibleWorld.width / 2) * scale,
          y: bounds.height / 2 - (visibleWorld.y + visibleWorld.height / 2) * scale,
          scale,
        });
      } else {
        const rects = [...nodeElements.keys()].map(getNodeRect).filter(Boolean);
        viewportController.fit(rects, {
          padding: bounds.width < 600 ? 44 : 92,
        });
      }
      confirmButton.focus({ preventScroll: true });
    });
  }

  function close() {
    if (edgeFrame) cancelAnimationFrame(edgeFrame);
    edgeFrame = null;
    drag = null;
    positions.clear();
    nodeElements.clear();
    draftIds.clear();
    renderedEdges = [];
    busy = false;
    nodesLayer.replaceChildren();
    groupOutline.hidden = true;
    if (dialog.open) dialog.close();
  }

  function setBusy(nextBusy) {
    busy = Boolean(nextBusy);
    cancelButton.disabled = busy;
    confirmButton.disabled = busy || !canConfirm;
    if (busy) {
      confirmButton.textContent = currentOperation === BoardPlacementOperation.MOVE
        ? 'Moving…'
        : 'Placing…';
    } else {
      confirmButton.textContent = currentOperation === BoardPlacementOperation.MOVE
        ? 'Move'
        : 'Place';
    }
  }

  cancelButton.addEventListener('click', () => {
    if (!busy) onCancel();
  });
  confirmButton.addEventListener('click', () => {
    if (canConfirm && !busy) onConfirm(getDraftPositions());
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    if (!busy) onCancel();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.isComposing || event.target.closest('button')) return;
    event.preventDefault();
    if (canConfirm && !busy) onConfirm(getDraftPositions());
  });

  return { close, getDraftPositions, open, setBusy };
}

