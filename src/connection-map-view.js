import {
  createKnowledgeKindIcon,
  renderKnowledgeKindTrigger,
} from './knowledge-kind-picker.js';
import { getThoughtKnowledgeKind } from './knowledge-kinds.js';
import { zoomBoardCameraAtClientPoint } from './board-coordinate-space.js';
import { getConnectionPathData } from './connection-map-edge-geometry.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const CARD_WIDTH = 280;
const CARD_HEIGHT = 96;
const CARD_GAP = 56;
const MIN_SCALE = 0.35;
const MAX_SCALE = 1.25;
const ZOOM_STEP = 0.15;
const DRAG_THRESHOLD = 5;

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function rectanglesOverlap(first, second, gap = 0) {
  return !(
    first.x + CARD_WIDTH + gap <= second.x
    || second.x + CARD_WIDTH + gap <= first.x
    || first.y + CARD_HEIGHT + gap <= second.y
    || second.y + CARD_HEIGHT + gap <= first.y
  );
}

function createThoughtCard(node, onConnectionAction, onExpandBranch) {
  const { thought, root } = node;
  const element = document.createElement('article');
  const icon = document.createElement('span');
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

  icon.className = 'connection-map-card-kind';
  icon.append(createKnowledgeKindIcon(getThoughtKnowledgeKind(thought)));
  icon.setAttribute('aria-hidden', 'true');

  text.className = 'connection-map-card-text';
  text.textContent = thought.text;

  connectButton.type = 'button';
  connectButton.className = 'connection-map-card-connect';
  connectButton.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
      <circle cx="5" cy="12" r="3"></circle>
      <circle cx="19" cy="12" r="3"></circle>
      <path d="M8 12h8"></path>
    </svg>
  `;
  connectButton.setAttribute('aria-pressed', String(
    node.connectionSource || node.connectionSelected,
  ));
  if (node.connectionSource) connectButton.title = 'Finish editing connections';
  else if (node.editing && node.connectionSelected) connectButton.title = 'Remove connection';
  else if (node.editing) connectButton.title = 'Add connection';
  else connectButton.title = 'Edit connections';
  connectButton.setAttribute('aria-label', `${connectButton.title}: ${thought.text}`);
  connectButton.addEventListener('click', () => onConnectionAction(thought.id));

  element.append(icon, text, connectButton);

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
  icon.setAttribute('aria-hidden', 'true');
  text.textContent = thought.text;
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
  onFinishConnectionEditing,
  onQueryChange,
  onCommit,
  onCancel,
}) {
  const cancelButton = dialog.querySelector('#connection-map-cancel');
  const doneButton = dialog.querySelector('#connection-map-done');
  const searchInput = dialog.querySelector('#connection-map-search');
  const searchResults = dialog.querySelector('#connection-map-results');
  const viewport = dialog.querySelector('#connection-map-viewport');
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
  let camera = { x: 0, y: 0, scale: 1 };
  let pan = null;
  let edgeFrame = null;

  function renderCamera() {
    world.style.transform = `translate3d(${camera.x}px, ${camera.y}px, 0) scale(${camera.scale})`;
    zoomResetButton.textContent = `${Math.round(camera.scale * 100)}%`;
    zoomOutButton.disabled = camera.scale <= MIN_SCALE;
    zoomInButton.disabled = camera.scale >= MAX_SCALE;
  }

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
    const bounds = [...nodeElements.keys()].map(getNodeRect).filter(Boolean);
    if (!bounds.length) return;

    const viewportBounds = viewport.getBoundingClientRect();
    const minX = Math.min(...bounds.map(({ left }) => left));
    const minY = Math.min(...bounds.map(({ top }) => top));
    const maxX = Math.max(...bounds.map(({ right }) => right));
    const maxY = Math.max(...bounds.map(({ bottom }) => bottom));
    const padding = viewportBounds.width < 600 ? 44 : 92;
    const contentWidth = Math.max(1, maxX - minX);
    const contentHeight = Math.max(1, maxY - minY);
    const scale = clamp(Math.min(
      (viewportBounds.width - padding * 2) / contentWidth,
      (viewportBounds.height - padding * 2) / contentHeight,
      1,
    ), MIN_SCALE, MAX_SCALE);

    camera = {
      x: viewportBounds.width / 2 - (minX + maxX) / 2 * scale,
      y: viewportBounds.height / 2 - (minY + maxY) / 2 * scale,
      scale,
    };
    renderCamera();
  }

  function zoomAtCenter(nextScale) {
    const bounds = viewport.getBoundingClientRect();
    const point = {
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2,
    };
    camera = zoomBoardCameraAtClientPoint(
      camera,
      clamp(nextScale, MIN_SCALE, MAX_SCALE),
      point,
      bounds,
    );
    renderCamera();
  }

  function revealThought(thoughtId) {
    requestAnimationFrame(() => {
      const node = getNodeRect(thoughtId);
      if (!node) return;

      const bounds = viewport.getBoundingClientRect();
      camera.x = bounds.width / 2 - node.center.x * camera.scale;
      camera.y = bounds.height / 2 - node.center.y * camera.scale;
      renderCamera();
    });
  }

  cancelButton.addEventListener('click', onCancel);
  doneButton.addEventListener('click', onCommit);
  selectionFinish.addEventListener('click', onFinishConnectionEditing);
  searchInput.addEventListener('input', () => onQueryChange(searchInput.value));
  searchInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.isComposing || !searchInput.value.trim()) return;

    event.preventDefault();
    onCreateThought(searchInput.value);
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    onCancel();
  });
  fitButton.addEventListener('click', fitAll);
  zoomOutButton.addEventListener('click', () => zoomAtCenter(camera.scale - ZOOM_STEP));
  zoomResetButton.addEventListener('click', () => zoomAtCenter(1));
  zoomInButton.addEventListener('click', () => zoomAtCenter(camera.scale + ZOOM_STEP));

  viewport.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || event.target.closest('.connection-map-card')) return;
    pan = {
      pointerId: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
      cameraX: camera.x,
      cameraY: camera.y,
    };
    viewport.classList.add('is-panning');
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener('pointermove', (event) => {
    if (!pan || event.pointerId !== pan.pointerId) return;
    camera.x = pan.cameraX + event.clientX - pan.clientX;
    camera.y = pan.cameraY + event.clientY - pan.clientY;
    renderCamera();
  });
  const finishPan = (event) => {
    if (!pan || event.pointerId !== pan.pointerId) return;
    pan = null;
    viewport.classList.remove('is-panning');
  };
  viewport.addEventListener('pointerup', finishPan);
  viewport.addEventListener('pointercancel', finishPan);
  viewport.addEventListener('wheel', (event) => {
    event.preventDefault();
    const bounds = viewport.getBoundingClientRect();
    const direction = event.deltaY > 0 ? -1 : 1;
    camera = zoomBoardCameraAtClientPoint(
      camera,
      clamp(camera.scale + direction * ZOOM_STEP, MIN_SCALE, MAX_SCALE),
      { x: event.clientX, y: event.clientY },
      bounds,
    );
    renderCamera();
  }, { passive: false });

  function open({ nextRootId, initialPositions = [] } = {}) {
    rootId = nextRootId;
    positions.clear();
    initialPositions.forEach(({ id, x, y }) => positions.set(id, { x, y }));
    camera = { x: 0, y: 0, scale: 1 };
    searchInput.value = '';
    dialog.showModal();
    renderCamera();
    requestAnimationFrame(fitAll);
  }

  function close() {
    if (edgeFrame) cancelAnimationFrame(edgeFrame);
    edgeFrame = null;
    pan = null;
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
    dirty,
    query,
  }) {
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
    doneButton.disabled = Boolean(editor) || !dirty;
  }

  return { open, close, render, fitAll, revealThought };
}
