import {
  createKnowledgeKindIcon,
  renderKnowledgeKindTrigger,
} from './knowledge-kind-picker.js';
import { getThoughtKnowledgeKind } from './knowledge-kinds.js';
import {
  getThoughtPresentation,
  isThoughtResolved,
} from './thought-content.js';
import { createCanvasViewportController } from './canvas-viewport-controller.js';
import { getConnectionPathData } from './connection-map-edge-geometry.js';
import {
  getConnectionActionState,
  renderConnectionActionButton,
} from './connection-action-button.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const CARD_WIDTH = 280;
const CARD_HEIGHT = 96;
const CARD_GAP = 56;
const MIN_SCALE = 0.35;
const MAX_SCALE = 1.25;
const ZOOM_STEP = 0.15;
const DRAG_THRESHOLD = 5;

function rectanglesOverlap(first, second, gap = 0) {
  return !(
    first.x + CARD_WIDTH + gap <= second.x
    || second.x + CARD_WIDTH + gap <= first.x
    || first.y + CARD_HEIGHT + gap <= second.y
    || second.y + CARD_HEIGHT + gap <= first.y
  );
}

function createThoughtCard(
  node,
  onConnectionAction,
  onExpandBranch,
  onHideThought,
  onEditKind,
  onEditText,
) {
  const { thought, root } = node;
  const presentation = getThoughtPresentation(thought);
  const element = document.createElement('article');
  const icon = document.createElement('button');
  const text = document.createElement('span');
  const connectButton = document.createElement('button');

  element.className = 'connection-map-card';
  element.classList.toggle('is-root', root);
  element.classList.toggle('is-connection-editing', node.editing);
  element.classList.toggle('is-connection-source', node.connectionSource);
  element.classList.toggle('is-connection-selected', node.connectionSelected);
  element.dataset.thoughtId = thought.id;
  element.dataset.knowledgeKind = getThoughtKnowledgeKind(thought);
  element.tabIndex = 0;

  icon.type = 'button';
  icon.className = 'connection-map-card-kind';
  icon.setAttribute('aria-haspopup', 'listbox');
  icon.setAttribute('aria-expanded', 'false');
  renderKnowledgeKindTrigger(icon, getThoughtKnowledgeKind(thought), {
    resolved: isThoughtResolved(thought),
  });
  icon.addEventListener('click', () => onEditKind(thought.id, icon));

  text.className = 'connection-map-card-text';
  text.textContent = presentation.primaryText;
  text.title = 'Click again to edit';
  let textWasPressed = false;
  let editArmed = false;
  element.addEventListener('pointerdown', (event) => {
    textWasPressed = text.contains(event.target);
  });
  element.addEventListener('click', (event) => {
    if (event.target.closest('button')) return;
    const clickedText = textWasPressed || text.contains(event.target);
    textWasPressed = false;
    if (editArmed && clickedText) {
      onEditText(thought.id);
      return;
    }
    editArmed = true;
    element.focus({ preventScroll: true });
  });
  element.addEventListener('blur', () => { editArmed = false; });
  element.addEventListener('keydown', (event) => {
    if (event.target !== element || (event.key !== 'Enter' && event.key !== 'F2')) return;
    event.preventDefault();
    onEditText(thought.id);
  });

  connectButton.type = 'button';
  connectButton.className = 'connection-action-button connection-map-card-connect';

  let connectionTitle = 'Edit connections';
  if (node.connectionSource) connectionTitle = 'Finish editing connections';
  else if (node.editing && node.connectionSelected) connectionTitle = 'Remove connection';
  else if (node.editing) connectionTitle = 'Add connection';

  renderConnectionActionButton(connectButton, {
    state: getConnectionActionState({
      editing: node.editing,
      source: node.connectionSource,
      selected: node.connectionSelected,
    }),
    title: connectionTitle,
    ariaLabel: `${connectionTitle}: ${presentation.primaryText}`,
  });
  connectButton.addEventListener('click', () => onConnectionAction(thought.id));

  element.append(icon, text, connectButton);

  if (!root && !node.editing) {
    const hideButton = document.createElement('button');
    hideButton.type = 'button';
    hideButton.className = 'connection-map-card-hide';
    hideButton.title = 'Hide from this view';
    hideButton.setAttribute(
      'aria-label',
      `Hide from this view: ${presentation.primaryText}`,
    );
    hideButton.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14"></path>
      </svg>
    `;
    hideButton.addEventListener('click', () => onHideThought(thought.id));
    element.append(hideButton);
  }

  if (node.hiddenConnectionCount > 0) {
    const expandButton = document.createElement('button');
    const hiddenLabel = node.hiddenConnectionCount === 1
      ? 'connected thought'
      : 'connected thoughts';

    expandButton.type = 'button';
    expandButton.className = 'connection-map-card-expand';
    expandButton.textContent = `+${node.hiddenConnectionCount}`;
    expandButton.title = `Show ${node.hiddenConnectionCount} more ${hiddenLabel}`;
    expandButton.setAttribute('aria-label', expandButton.title);
    expandButton.addEventListener('click', (event) => {
      event.stopPropagation();
      onExpandBranch(thought.id);
    });
    element.append(expandButton);
  }

  return element;
}

function createSearchResult({ thought, selected }, onSelect) {
  const presentation = getThoughtPresentation(thought);
  const button = document.createElement('button');
  const icon = document.createElement('span');
  const text = document.createElement('span');
  const direction = document.createElement('span');

  button.type = 'button';
  button.className = 'connection-map-result';
  button.classList.toggle('is-selected', selected);
  button.dataset.knowledgeKind = getThoughtKnowledgeKind(thought);
  button.addEventListener('click', () => onSelect(thought.id, { source: 'search' }));

  icon.className = 'connection-map-result-kind';
  icon.append(createKnowledgeKindIcon(getThoughtKnowledgeKind(thought)));
  icon.dataset.resolved = String(isThoughtResolved(thought));
  icon.setAttribute('aria-hidden', 'true');
  text.textContent = presentation.primaryText;
  direction.textContent = selected ? 'Selected' : '';
  direction.className = 'connection-map-result-state';
  direction.setAttribute('aria-hidden', 'true');
  button.append(icon, text, direction);
  return button;
}

function createThoughtProposal(
  { text, kind },
  onCreateThought,
  onCreateKind,
) {
  const row = document.createElement('div');
  const kindButton = document.createElement('button');
  const createButton = document.createElement('button');

  row.className = 'connection-map-create-result';
  row.dataset.knowledgeKind = kind;

  kindButton.type = 'button';
  kindButton.className = 'connection-map-create-kind';
  kindButton.setAttribute('aria-haspopup', 'listbox');
  kindButton.setAttribute('aria-expanded', 'false');
  renderKnowledgeKindTrigger(kindButton, kind);
  kindButton.addEventListener('click', () => onCreateKind(kindButton));

  createButton.type = 'button';
  createButton.className = 'connection-map-create-action';
  createButton.textContent = `Create “${text}”`;
  createButton.title = createButton.textContent;
  createButton.addEventListener('click', () => onCreateThought(text));

  row.append(kindButton, createButton);
  return row;
}

export function createConnectionMapView({
  dialog,
  onSearchSelect,
  onCreateThought,
  onCreateKind,
  onConnectionAction,
  onExpandBranch,
  onHideThought,
  onFinishConnectionEditing,
  onQueryChange,
  onEditKind,
  onEditText,
  onSaveBoard,
  onClose,
}) {
  const saveBoardButton = dialog.querySelector('#connection-map-save-board');
  const closeButton = dialog.querySelector('#connection-map-close');
  const searchInput = dialog.querySelector('#connection-map-search');
  const searchResults = dialog.querySelector('#connection-map-results');
  const viewport = dialog.querySelector('#connection-map-viewport');
  const stage = dialog.querySelector('.connection-map-stage');
  const world = dialog.querySelector('#connection-map-world');
  const edgesLayer = dialog.querySelector('#connection-map-edges');
  const nodesLayer = dialog.querySelector('#connection-map-nodes');
  const selectionToolbar = dialog.querySelector('#connection-map-selection');
  const selectionFinish = dialog.querySelector('#connection-map-selection-finish');
  const selectionLabel = dialog.querySelector('#connection-map-selection-label');
  const fitButton = dialog.querySelector('#connection-map-fit');
  const zoomOutButton = dialog.querySelector('#connection-map-zoom-out');
  const zoomResetButton = dialog.querySelector('#connection-map-zoom-reset');
  const zoomInButton = dialog.querySelector('#connection-map-zoom-in');

  const positions = new Map();
  const nodeElements = new Map();
  let rootId = null;
  let renderedEdges = [];
  let edgeFrame = null;
  const viewportController = createCanvasViewportController({
    viewport,
    world,
    fitButton,
    zoomOutButton,
    zoomResetButton,
    zoomInButton,
    minimumScale: MIN_SCALE,
    maximumScale: MAX_SCALE,
    zoomStep: ZOOM_STEP,
    shouldStartPan: (event) => (
      event.button === 0 && !event.target.closest('.connection-map-card')
    ),
  });
  const camera = viewportController.getCamera();

  function getNodeRect(thoughtId) {
    const element = nodeElements.get(thoughtId);
    const position = positions.get(thoughtId);
    if (!element || !position) return null;

    const width = element.offsetWidth || CARD_WIDTH;
    const height = element.offsetHeight || CARD_HEIGHT;
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

  function drawEdges() {
    edgeFrame = null;
    const definitions = edgesLayer.querySelector('defs');
    edgesLayer.replaceChildren(definitions);

    renderedEdges.forEach((edge) => {
      const source = getNodeRect(edge.sourceId);
      const target = getNodeRect(edge.targetId);
      if (!source || !target) return;

      const pathData = getConnectionPathData(source.center, target.center);
      const hitArea = document.createElementNS(SVG_NAMESPACE, 'path');
      const connection = document.createElementNS(SVG_NAMESPACE, 'path');

      hitArea.classList.add('connection-map-edge-hit-area');
      hitArea.setAttribute('d', pathData);
      connection.classList.add('connection-map-edge');
      connection.setAttribute('d', pathData);
      connection.setAttribute('marker-end', 'url(#connection-map-arrow)');
      if (edge.bidirectional) {
        connection.setAttribute('marker-start', 'url(#connection-map-arrow)');
      }
      edgesLayer.append(hitArea, connection);
    });
  }

  function scheduleEdges() {
    if (edgeFrame) return;
    edgeFrame = requestAnimationFrame(drawEdges);
  }

  function isPositionInsideViewport(position, padding = 24) {
    const bounds = viewport.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return true;

    const left = (padding - camera.x) / camera.scale;
    const top = (padding - camera.y) / camera.scale;
    const right = (bounds.width - padding - camera.x) / camera.scale - CARD_WIDTH;
    const bottom = (bounds.height - padding - camera.y) / camera.scale - CARD_HEIGHT;

    return (
      position.x >= left
      && position.x <= right
      && position.y >= top
      && position.y <= bottom
    );
  }

  function placeMissingNode(thoughtId, anchorId = rootId) {
    const occupied = [...positions.values()].map((position) => ({ ...position }));
    const anchor = positions.get(anchorId)
      || positions.get(rootId)
      || { x: -CARD_WIDTH / 2, y: -CARD_HEIGHT / 2 };
    let firstOpenPosition = null;

    const stepX = CARD_WIDTH + CARD_GAP;
    const stepY = CARD_HEIGHT + CARD_GAP;
    const maxRings = Math.max(12, occupied.length + 2);

    for (let ring = 1; ring <= maxRings; ring += 1) {
      const offsets = [];
      for (let row = -ring; row <= ring; row += 1) {
        offsets.push({ column: ring, row });
      }
      for (let column = ring - 1; column >= -ring; column -= 1) {
        offsets.push({ column, row: ring });
      }
      for (let row = ring - 1; row >= -ring; row -= 1) {
        offsets.push({ column: -ring, row });
      }
      for (let column = -ring + 1; column < ring; column += 1) {
        offsets.push({ column, row: -ring });
      }

      for (const offset of offsets) {
        const candidate = {
          x: anchor.x + offset.column * stepX,
          y: anchor.y + offset.row * stepY,
        };
        if (!occupied.every(
          (position) => !rectanglesOverlap(candidate, position, CARD_GAP),
        )) {
          continue;
        }

        if (!firstOpenPosition) firstOpenPosition = candidate;
        if (isPositionInsideViewport(candidate)) {
          positions.set(thoughtId, candidate);
          return;
        }
      }
    }

    if (firstOpenPosition) {
      positions.set(thoughtId, firstOpenPosition);
      return;
    }

    positions.set(thoughtId, {
      x: anchor.x + occupied.length * (CARD_WIDTH + CARD_GAP),
      y: anchor.y,
    });
  }

  function moveCard(thoughtId, x, y) {
    positions.set(thoughtId, { x, y });
    const element = nodeElements.get(thoughtId);
    if (element) element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    scheduleEdges();
  }

  function attachCardDrag(element, thoughtId) {
    let drag = null;
    let suppressClick = false;

    element.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || event.target.closest('button')) return;
      event.stopPropagation();
      const position = positions.get(thoughtId);
      if (!position) return;

      drag = {
        pointerId: event.pointerId,
        clientX: event.clientX,
        clientY: event.clientY,
        startX: position.x,
        startY: position.y,
        moved: false,
      };
      element.setPointerCapture(event.pointerId);
    });

    element.addEventListener('pointermove', (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const deltaX = event.clientX - drag.clientX;
      const deltaY = event.clientY - drag.clientY;
      if (!drag.moved && Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD) return;

      drag.moved = true;
      suppressClick = true;
      element.classList.add('is-dragging');
      moveCard(
        thoughtId,
        drag.startX + deltaX / camera.scale,
        drag.startY + deltaY / camera.scale,
      );
    });

    const finishDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      element.classList.remove('is-dragging');
      drag = null;
      requestAnimationFrame(() => { suppressClick = false; });
    };
    element.addEventListener('pointerup', finishDrag);
    element.addEventListener('pointercancel', finishDrag);
    element.addEventListener('click', (event) => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
  }

  function fitAll() {
    const nodeBounds = [...nodeElements.keys()].map(getNodeRect).filter(Boolean);
    if (!nodeBounds.length) return;
    const viewportBounds = viewport.getBoundingClientRect();
    viewportController.fit(nodeBounds, {
      padding: viewportBounds.width < 600 ? 44 : 92,
    });
  }

  function revealThought(thoughtId) {
    requestAnimationFrame(() => {
      const node = getNodeRect(thoughtId);
      if (!node) return;

      const bounds = viewport.getBoundingClientRect();
      camera.x = bounds.width / 2 - node.center.x * camera.scale;
      camera.y = bounds.height / 2 - node.center.y * camera.scale;
      viewportController.render();
    });
  }

  saveBoardButton.addEventListener('click', onSaveBoard);
  closeButton.addEventListener('click', onClose);
  selectionFinish.addEventListener('click', onFinishConnectionEditing);
  searchInput.addEventListener('input', () => onQueryChange(searchInput.value));
  searchInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.isComposing || !searchInput.value.trim()) return;

    event.preventDefault();
    onCreateThought(searchInput.value);
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    onClose();
  });
  function open({ nextRootId, initialPositions = [] } = {}) {
    rootId = nextRootId;
    positions.clear();
    initialPositions.forEach(({ id, x, y }) => positions.set(id, { x, y }));
    viewportController.reset();
    searchInput.value = '';
    dialog.showModal();
    requestAnimationFrame(fitAll);
  }

  function close() {
    if (edgeFrame) cancelAnimationFrame(edgeFrame);
    edgeFrame = null;
    nodeElements.clear();
    positions.clear();
    renderedEdges = [];
    if (dialog.open) dialog.close();
  }

  function render({
    nodes,
    edges,
    results,
    createProposal,
    editor,
    query,
    saveBoardVisible = true,
    savingBoard = false,
  }) {
    saveBoardButton.hidden = !saveBoardVisible;
    saveBoardButton.disabled = savingBoard || Boolean(editor);
    saveBoardButton.textContent = savingBoard ? 'Saving…' : 'Save as Board';
    closeButton.disabled = savingBoard;
    stage.inert = savingBoard;
    if (searchInput.value !== query) searchInput.value = query;

    const activeIds = new Set(nodes.map(({ thought }) => thought.id));
    [...positions.keys()].forEach((thoughtId) => {
      if (!activeIds.has(thoughtId)) positions.delete(thoughtId);
    });
    nodes.forEach((node) => {
      if (!positions.has(node.thought.id)) {
        placeMissingNode(node.thought.id, node.spawnAnchorId || rootId);
      }
    });

    nodeElements.clear();
    const fragment = document.createDocumentFragment();
    nodes.forEach((node) => {
      const element = createThoughtCard(
        node,
        onConnectionAction,
        onExpandBranch,
        onHideThought,
        onEditKind,
        onEditText,
      );
      const position = positions.get(node.thought.id);
      element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      attachCardDrag(element, node.thought.id);
      nodeElements.set(node.thought.id, element);
      fragment.append(element);
    });
    nodesLayer.replaceChildren(fragment);

    renderedEdges = edges;
    scheduleEdges();

    selectionToolbar.hidden = !editor;
    selectionLabel.textContent = editor
      ? `Connecting “${editor.sourceText}” · ${editor.selectedCount} selected`
      : '';
    selectionLabel.title = editor ? editor.sourceText : '';

    const resultFragment = document.createDocumentFragment();
    results.forEach((result) => {
      resultFragment.append(createSearchResult(result, onSearchSelect));
    });
    if (createProposal) {
      resultFragment.append(createThoughtProposal(
        createProposal,
        onCreateThought,
        onCreateKind,
      ));
    }
    searchResults.replaceChildren(resultFragment);
    searchResults.hidden = results.length === 0 && !createProposal;
  }

  function focusThought(thoughtId, { kind = false } = {}) {
    const card = nodeElements.get(thoughtId);
    const target = kind ? card?.querySelector('.connection-map-card-kind') : card;
    target?.focus({ preventScroll: true });
  }

  function getLayoutSnapshot() {
    return [...positions].map(([id, { x, y }]) => ({ id, x, y }));
  }

  return { open, close, render, fitAll, revealThought, focusThought, getLayoutSnapshot };
}
