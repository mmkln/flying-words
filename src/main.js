import {
  buildHierarchyComponents,
  magnetMetaFromParents,
  normalizeMagnetParents,
  wouldCreateHierarchyCycle,
} from './magnet-hierarchy.js';
import { createMagnetPhysics } from './magnet-physics.js';
import {
  KnowledgeKind,
  createKnowledgeMeta,
  getKnowledgeKindLabel,
  getKnowledgeKindPlaceholder,
  getThoughtKnowledgeKind,
  setThoughtKnowledgeKind,
} from './knowledge-kinds.js';
import {
  createKnowledgeKindPicker,
  renderKnowledgeKindTrigger,
} from './knowledge-kind-picker.js';
import { createThoughtEditor } from './thought-editor.js';
import {
  MAX_CONNECTIONS_PER_THOUGHT,
  detachIncomingConnections,
  flattenConnections,
  getOutgoingConnections,
  reconcileConnections,
} from './connections.js';
import { createConnectionRenderer } from './connection-renderer.js';
import {
  getCanvasPlacement,
  hasCanvasPlacement,
  normalizeCanvasMeta,
  withCanvasPlacement,
} from './canvas-placements.js';
import {
  getSpatialPlacement,
  withSpatialPlacement,
  withoutSpatialPlacement,
} from './spatial-placements.js';
import {
  getBoardAnchor,
  hasBoardAnchor,
  withBoardAnchor,
  withoutBoardAnchor,
} from './board-anchors.js';
import {
  DEFAULT_SPACE_ID,
  SPACES,
  getSpaceCapabilities,
  getThoughtSpaceId,
  isCanvasSpace,
  isFlowSpace,
  isSpaceId,
  isSpatialSpace,
  isThoughtAvailableInSpace,
} from './spaces.js';
import {
  applyThoughtPatch,
  diffMetaPatch,
  mergeThoughtPatches,
  metaPatchFromThought,
} from './sync-operations.js';
import {
  ThemeMode,
  nextThemeMode,
  normalizeThemeMode,
  resolveTheme,
} from './theme.js';

const STORAGE_KEY = 'flying-thoughts:v1';
const AUTH_STORAGE_KEY = 'flying-thoughts:auth:v1';
const ACTIVE_SPACE_STORAGE_KEY = 'flying-thoughts:active-space:v1';
const CANVAS_CAMERA_STORAGE_PREFIX = 'flying-thoughts:canvas-camera:v1:';
const SPATIAL_CAMERA_STORAGE_PREFIX = 'flying-thoughts:spatial-camera:v3:';
const SPATIAL_LAYOUT_STORAGE_PREFIX = 'flying-thoughts:spatial-layout:v2:';
const PENDING_SYNC_STORAGE_PREFIX = 'flying-thoughts:pending-sync:v1:';
const ACCOUNT_STORAGE_PREFIX = 'flying-thoughts:account:v1:';
const LEGACY_OUTBOX_STORAGE_PREFIX = 'flying-thoughts:outbox:v1:';
const OUTBOX_STORAGE_PREFIX = 'flying-thoughts:outbox:v2:';
const QUARANTINED_OUTBOX_STORAGE_PREFIX = 'flying-thoughts:outbox-quarantine:v1:';
const THEME_STORAGE_KEY = 'flying-thoughts:theme:v1';
const MAX_THOUGHTS = 1000;
const MAX_THOUGHT_TEXT_LENGTH = 2000;
const THOUGHT_TEXT_WARNING_THRESHOLD = 1700;
const RESERVED_BOTTOM_SPACE = 0;
const MIN_VISIBLE_THOUGHTS = 4;
const MAX_VISIBLE_THOUGHTS = 30;
const TARGET_VISIBLE_DENSITY = 0.35;
const RESPAWN_DELAY_MIN = 800;
const RESPAWN_DELAY_MAX = 1400;
const SPAWN_MARGIN = 20;
const REDUCED_MOTION_TIME_SCALE = 0.25;
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const MIN_CANVAS_SCALE = 0.3;
const MAX_CANVAS_SCALE = 1;
const CANVAS_SPAWN_MARGIN = 20;
const CANVAS_SPAWN_GAP = 18;
const CANVAS_SPAWN_MAX_RINGS = 8;
const LOCAL_API_URL = 'http://127.0.0.1:8000/api/v1';
const PRODUCTION_API_URL = 'https://mxllwords.pythonanywhere.com/api/v1';
const CONFIGURED_API_URL = import.meta.env.VITE_API_URL?.trim().replace(/\/$/, '');
const API_URL = CONFIGURED_API_URL || (
  ['localhost', '127.0.0.1'].includes(window.location.hostname)
    ? LOCAL_API_URL
    : PRODUCTION_API_URL
);

const canvas = document.querySelector('#canvas');
const canvasWorld = document.querySelector('#canvas-world');
const spatialWorld = document.querySelector('#spatial-world');
const spatialFitButton = document.querySelector('#spatial-fit');
const spatialFocusButton = document.querySelector('#spatial-focus');
const spatialResetButton = document.querySelector('#spatial-reset');
const spatialInspector = document.querySelector('#spatial-inspector');
const spatialInspectorKind = document.querySelector('#spatial-inspector-kind');
const spatialInspectorKindLabel = document.querySelector('#spatial-inspector-kind-label');
const spatialInspectorText = document.querySelector('#spatial-inspector-text');
const spatialInspectorClose = document.querySelector('#spatial-inspector-close');
const spatialInspectorEdit = document.querySelector('#spatial-inspector-edit');
const spatialInspectorPin = document.querySelector('#spatial-inspector-pin');
const connectionLayer = document.querySelector('#connection-layer');
const form = document.querySelector('#thought-form');
const input = document.querySelector('#thought-input');
const composerWrap = document.querySelector('.composer-wrap');
const knowledgePickerTrigger = document.querySelector('#knowledge-picker-trigger');
const knowledgePickerMenu = document.querySelector('#knowledge-picker-menu');
const emptyState = document.querySelector('#empty-state');
const emptyStateTitle = emptyState.querySelector('h1');
const emptyStateDescription = emptyState.querySelector('p');
const template = document.querySelector('#thought-template');
const announcer = document.querySelector('#announcer');
const historyButton = document.querySelector('#history-button');
const historyDialog = document.querySelector('#history-dialog');
const historyClose = document.querySelector('#history-close');
const historySearch = document.querySelector('#history-search');
const historyList = document.querySelector('#history-list');
const anchorsButton = document.querySelector('#anchors-button');
const anchorsDialog = document.querySelector('#anchors-dialog');
const anchorsClose = document.querySelector('#anchors-close');
const anchorsList = document.querySelector('#anchors-list');
const spacesButton = document.querySelector('#spaces-button');
const canvasControls = document.querySelector('#canvas-controls');
const canvasZoomIn = document.querySelector('#canvas-zoom-in');
const canvasZoomOut = document.querySelector('#canvas-zoom-out');
const canvasResetZoom = document.querySelector('#canvas-reset-zoom');
const spacesOverview = document.querySelector('#spaces-overview');
const spacesClose = document.querySelector('#spaces-close');
const spacesGrid = document.querySelector('#spaces-grid');
const themeButton = document.querySelector('#theme-button');
const accountButton = document.querySelector('#account-button');
const authDialog = document.querySelector('#auth-dialog');
const authForm = document.querySelector('#auth-form');
const authEmail = document.querySelector('#auth-email');
const authPassword = document.querySelector('#auth-password');
const authMessage = document.querySelector('#auth-message');
const authClose = document.querySelector('#auth-close');
const registerButton = document.querySelector('#register-button');
const loginButton = document.querySelector('#login-button');
const selectionToolbar = document.querySelector('#selection-toolbar');
const selectionCount = document.querySelector('#selection-count');
const selectionCancel = document.querySelector('#selection-cancel');
const selectionDone = document.querySelector('#selection-done');
const thoughtFocusDialog = document.querySelector('#thought-focus-dialog');
const thoughtFocusForm = document.querySelector('#thought-focus-form');
const thoughtFocusEditor = document.querySelector('#thought-focus-editor');
const thoughtFocusCount = document.querySelector('#thought-focus-count');
const thoughtFocusKind = document.querySelector('#thought-focus-kind');
const thoughtFocusDiscard = document.querySelector('#thought-focus-discard');

let auth = loadAuth();
const legacyOutboxQuarantined = auth ? quarantineLegacyOutbox(auth.id) : false;
const initialPendingThoughts = auth ? loadPendingThoughts(auth.id) : [];
const initialGuestThoughts = initialPendingThoughts.length
  ? initialPendingThoughts
  : loadStoredThoughts(STORAGE_KEY);
const initialAccountThoughts = auth ? loadAccountThoughts(auth.id) : [];
let thoughts = auth
  ? applyOutboxOperations(
    mergeThoughts(initialAccountThoughts, initialGuestThoughts),
    loadOutbox(auth.id),
  )
  : initialGuestThoughts;
let syncPending = Boolean(auth && initialGuestThoughts.length);
if (auth && !initialPendingThoughts.length && initialGuestThoughts.length) {
  storePendingThoughts(auth.id, initialGuestThoughts);
}
let syncInFlight = false;
let serverStateReady = !auth;
let syncOperationId = 0;
const visibilityStates = new Map();
const componentByThoughtId = new Map();
const magnetPhysics = createMagnetPhysics();
let magnetComponents = [];
const DRAG_THRESHOLD_PX = 6;
let draggedThought = null;
let dragCandidate = null;
let dragOffset = { x: 0, y: 0 };
let canvasPan = null;
let canvasScaleAnimationId = null;
let canvasHudTimer = null;
let canvasHudVisible = false;
let canvasHudExpanded = false;
let lastTimestamp = performance.now();
let nextSpawnAt = 0;
let saveTimer;
let handlingThoughtSubmit = false;
let outboxFlushInFlight = false;
let activeOutboxOperation = null;
let outboxRetryTimer;
let outboxRetryDelay = 2000;
let syncCapabilities = null;
let syncCapabilitiesPromise = null;
let syncCompatibilityAnnounced = false;
let magnetEditor = null;
let connectionEditor = null;
let composerKnowledgeKind = KnowledgeKind.THOUGHT;
let knowledgeKindEditor = null;
let selectedThoughtId = null;
let spatialView = null;
let spatialViewPromise = null;
let themeMode = normalizeThemeMode(document.documentElement.dataset.themeMode);
let resolvedTheme = resolveTheme(themeMode, systemThemeQuery.matches);
let viewMode = 'canvas';
let activeSpaceId = localStorage.getItem(ACTIVE_SPACE_STORAGE_KEY);
if (!isSpaceId(activeSpaceId)) activeSpaceId = DEFAULT_SPACE_ID;
let canvasCamera = loadCanvasCamera(activeSpaceId);
canvasHudVisible = isCanvasSpace(activeSpaceId) && canvasCamera.scale < MAX_CANVAS_SCALE;

const connectionRenderer = createConnectionRenderer({
  layer: connectionLayer,
  getThoughtById,
});

function renderThemeButton() {
  const labels = {
    [ThemeMode.SYSTEM]: 'System',
    [ThemeMode.LIGHT]: 'Light',
    [ThemeMode.DARK]: 'Dark',
  };
  const label = labels[themeMode];
  themeButton.dataset.mode = themeMode;
  themeButton.title = `Appearance: ${label}`;
  themeButton.setAttribute('aria-label', `Appearance: ${label}`);
}

function applyTheme() {
  resolvedTheme = resolveTheme(themeMode, systemThemeQuery.matches);
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.dataset.themeMode = themeMode;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    resolvedTheme === ThemeMode.DARK ? '#0e0d14' : '#f9f8fe',
  );
  spatialView?.setTheme(resolvedTheme);
  renderThemeButton();
}

function storeThemeMode() {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  } catch {
    // The selected theme still applies for this session when storage is disabled.
  }
}

function buildSpatialGraph() {
  const availableIds = new Set(thoughts.map((thought) => thought.id));
  const links = flattenConnections(thoughts).filter(({ sourceId, targetId }) => (
    availableIds.has(sourceId) && availableIds.has(targetId)
  ));
  const connectionCounts = new Map();
  links.forEach(({ sourceId, targetId }) => {
    connectionCounts.set(sourceId, (connectionCounts.get(sourceId) || 0) + 1);
    connectionCounts.set(targetId, (connectionCounts.get(targetId) || 0) + 1);
  });

  const nodes = thoughts.map((thought) => {
    const connectionCount = connectionCounts.get(thought.id) || 0;
    return {
      id: thought.id,
      text: thought.text,
      kind: getThoughtKnowledgeKind(thought),
      radius: Math.min(13, 5 + Math.sqrt(connectionCount) * 1.6),
      connectionCount,
      pinnedPosition: getSpatialPlacement(thought, activeSpaceId),
    };
  });
  return { nodes, links };
}

async function ensureSpatialView() {
  if (spatialView) return spatialView;
  if (!spatialViewPromise) {
    spatialViewPromise = import('./spatial-view.js')
      .then(({ createSpatialView }) => {
        spatialView = createSpatialView({
          container: spatialWorld,
          theme: resolvedTheme,
          storageKey: `${SPATIAL_CAMERA_STORAGE_PREFIX}spatial-1`,
          layoutStorageKey: `${SPATIAL_LAYOUT_STORAGE_PREFIX}spatial-1`,
          onThoughtSelect(thoughtId) {
            const thought = getThoughtById(thoughtId);
            if (thought) selectThought(thought);
          },
          onThoughtActivate(thoughtId) {
            const thought = getThoughtById(thoughtId);
            if (thought) startThoughtTextEditing(thought);
          },
          onThoughtMove(thoughtId, position) {
            if (!isSpatialSpace(activeSpaceId)) return;
            const thought = getThoughtById(thoughtId);
            if (!thought || position.pinned !== true) return;
            thought.meta = withSpatialPlacement(thought.meta, activeSpaceId, position);
            saveThoughts();
            if (isCloudMode()) enqueueThoughtMetaPatch(thought, ['spatial']);
            renderSpatialInspector();
          },
          onError(message) {
            announce(message);
          },
        });
        return spatialView;
      })
      .catch((error) => {
        spatialViewPromise = null;
        console.error('Unable to initialize Spatial view.', error);
        announce('3D rendering is unavailable in this browser.');
        return null;
      });
  }
  return spatialViewPromise;
}

function refreshSpatialGraph() {
  if (!spatialView || !isSpatialSpace(activeSpaceId)) return;
  spatialView.setGraph(buildSpatialGraph());
  spatialView.setSelectedThought(selectedThoughtId);
  renderSpatialInspector();
}

async function activateSpatialView() {
  canvasWorld.hidden = true;
  spatialWorld.hidden = false;
  const view = await ensureSpatialView();
  if (!view || !isSpatialSpace(activeSpaceId)) return;
  view.setGraph(buildSpatialGraph());
  view.setSelectedThought(selectedThoughtId);
  view.activate();
  renderSpatialInspector();
}

function deactivateSpatialView() {
  spatialView?.deactivate();
  spatialInspector.hidden = true;
  spatialWorld.hidden = true;
  canvasWorld.hidden = false;
}

const knowledgeKindPicker = createKnowledgeKindPicker({
  menu: knowledgePickerMenu,
  onClose() {
    knowledgeKindEditor = null;
  },
});

const thoughtEditor = createThoughtEditor({
  dialog: thoughtFocusDialog,
  form: thoughtFocusForm,
  textarea: thoughtFocusEditor,
  counter: thoughtFocusCount,
  discardButton: thoughtFocusDiscard,
  maximum: MAX_THOUGHT_TEXT_LENGTH,
  warningThreshold: THOUGHT_TEXT_WARNING_THRESHOLD,
  onSave({ thoughtId, text }) {
    const thought = getThoughtById(thoughtId);
    if (!thought || !text) {
      announce('A thought cannot be empty.');
      return false;
    }

    if (text.length > MAX_THOUGHT_TEXT_LENGTH) {
      announce(`A thought can contain up to ${MAX_THOUGHT_TEXT_LENGTH} characters.`);
      return false;
    }

    if (text !== thought.text) {
      thought.text = text;
      saveThoughts();
      if (isCloudMode()) enqueueThoughtPatch(thought, { text: thought.text });
      if (historyDialog.open) renderHistory();
      if (isSpatialSpace(activeSpaceId)) {
        refreshSpatialGraph();
      } else {
        renderThought(thought);
        measureThought(thought);
        if (isFlowSpace(activeSpaceId) && thought.pinned) {
          constrainThought(thought);
          updatePinnedLayoutMeta(thought);
        }
      }
      rebuildConnectionLayer();
      announce('Thought updated.');
    }

    return true;
  },
  onClose({ thoughtId, restoreFocus }) {
    if (!restoreFocus) return;
    if (isSpatialSpace(activeSpaceId)) {
      spatialInspectorEdit.focus({ preventScroll: true });
      return;
    }
    getThoughtById(thoughtId)?.element?.focus({ preventScroll: true });
  },
});

function renderComposerKnowledgeKind(kind) {
  composerKnowledgeKind = kind;
  renderKnowledgeKindTrigger(knowledgePickerTrigger, kind);
  input.placeholder = getKnowledgeKindPlaceholder(kind);
}

function resizeComposer() {
  const maxHeight = 120;
  input.style.height = 'auto';
  input.style.height = `${Math.min(input.scrollHeight, maxHeight)}px`;
  input.style.overflowY = input.scrollHeight > maxHeight ? 'auto' : 'hidden';
}

renderComposerKnowledgeKind(composerKnowledgeKind);
resizeComposer();

function openComposerKnowledgeKindPicker() {
  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return;
  }

  if (knowledgeKindPicker.isOpenFor(knowledgePickerTrigger)) {
    knowledgeKindPicker.close({ restoreFocus: true });
    return;
  }

  knowledgeKindPicker.close();
  knowledgeKindEditor = { mode: 'create' };
  knowledgeKindPicker.openFor({
    trigger: knowledgePickerTrigger,
    value: composerKnowledgeKind,
    onSelect(kind) {
      renderComposerKnowledgeKind(kind);
      announce(`New knowledge type: ${getKnowledgeKindLabel(kind)}.`);
    },
  });
}

function openThoughtKnowledgeKindPicker(
  thought,
  trigger = thought.element.querySelector('.thought-kind-button'),
) {
  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return;
  }
  if (blockEditsDuringAccountSync()) return;

  if (knowledgeKindPicker.isOpenFor(trigger)) {
    knowledgeKindPicker.close({ restoreFocus: true });
    return;
  }

  knowledgeKindPicker.close();
  knowledgeKindEditor = {
    mode: 'edit',
    thoughtId: thought.id,
  };
  knowledgeKindPicker.openFor({
    trigger,
    value: getThoughtKnowledgeKind(thought),
    onSelect(kind) {
      updateThoughtKnowledgeKind(thought, kind);
    },
  });
}

function updateThoughtKnowledgeKind(thought, kind) {
  if (blockEditsDuringAccountSync()) return;
  if (getThoughtKnowledgeKind(thought) === kind) return;

  setThoughtKnowledgeKind(thought, kind);
  if (isSpatialSpace(activeSpaceId)) refreshSpatialGraph();
  else renderThought(thought);
  saveThoughts();
  if (isCloudMode()) enqueueThoughtMetaPatch(thought, ['knowledge']);
  if (historyDialog.open) renderHistory();
  announce(`Knowledge type changed to ${getKnowledgeKindLabel(kind)}.`);
}

function handleKnowledgeKindTriggerKeyDown(event, openPicker) {
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
  event.preventDefault();
  event.stopPropagation();
  openPicker();
}

function loadAuthFrom(storage) {
  try {
    const savedAuth = JSON.parse(storage.getItem(AUTH_STORAGE_KEY));
    if (!savedAuth?.access || !savedAuth?.refresh || !savedAuth?.email || !savedAuth?.id) return null;
    return savedAuth;
  } catch {
    return null;
  }
}

function loadAuth() {
  const savedAuth = loadAuthFrom(localStorage);
  if (savedAuth) return savedAuth;

  const legacyAuth = loadAuthFrom(sessionStorage);
  if (!legacyAuth) return null;

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(legacyAuth));
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  return legacyAuth;
}

function storeAuth() {
  if (!auth) return;
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
}

function isCloudMode() {
  return Boolean(auth) && !syncPending && serverStateReady;
}

function blockEditsDuringAccountSync() {
  if (!auth || (serverStateReady && !syncPending && !syncInFlight)) return false;

  announce('Your local thoughts are being synced. Please try again in a moment.');
  return true;
}

function pendingSyncStorageKey(accountId) {
  return `${PENDING_SYNC_STORAGE_PREFIX}${accountId}`;
}

function accountStorageKey(accountId) {
  return `${ACCOUNT_STORAGE_PREFIX}${accountId}`;
}

function outboxStorageKey(accountId) {
  return `${OUTBOX_STORAGE_PREFIX}${accountId}`;
}

function quarantineLegacyOutbox(accountId) {
  const legacyKey = `${LEGACY_OUTBOX_STORAGE_PREFIX}${accountId}`;
  const raw = localStorage.getItem(legacyKey);
  if (!raw) return false;

  try {
    const quarantineKey = `${QUARANTINED_OUTBOX_STORAGE_PREFIX}${accountId}`;
    if (!localStorage.getItem(quarantineKey)) {
      localStorage.setItem(quarantineKey, raw);
    }
    localStorage.removeItem(legacyKey);
    return true;
  } catch {
    return false;
  }
}

function currentThoughtStorageKey() {
  return auth ? accountStorageKey(auth.id) : STORAGE_KEY;
}

function loadOutbox(accountId) {
  try {
    const operations = JSON.parse(localStorage.getItem(outboxStorageKey(accountId)));
    if (!Array.isArray(operations)) return [];

    return operations.filter((operation) => (
      typeof operation?.operationId === 'string'
      && typeof operation?.thoughtId === 'string'
      && ['create', 'patch', 'delete'].includes(operation.type)
      && ['pending', 'blocked', 'conflict'].includes(operation.status)
      && (
        (operation.type === 'create' && typeof operation.payload?.text === 'string')
        || (
          operation.type === 'patch'
          && Number.isInteger(operation.baseRevision)
          && operation.baseRevision >= 1
          && operation.patch
          && typeof operation.patch === 'object'
        )
        || (
          operation.type === 'delete'
          && Number.isInteger(operation.baseRevision)
          && operation.baseRevision >= 0
        )
      )
    ));
  } catch {
    return [];
  }
}

function saveOutbox(accountId, operations) {
  if (!operations.length) {
    localStorage.removeItem(outboxStorageKey(accountId));
    return;
  }

  localStorage.setItem(outboxStorageKey(accountId), JSON.stringify(operations));
}

function serializableThoughts(source = thoughts) {
  return source.map(({ element, width, height, ...thought }) => thought);
}

function cloneMeta(meta = {}) {
  return JSON.parse(JSON.stringify(meta));
}

function canvasCameraStorageKey(spaceId) {
  return `${CANVAS_CAMERA_STORAGE_PREFIX}${spaceId}`;
}

function defaultCanvasCamera() {
  return { x: 0, y: 0, scale: MAX_CANVAS_SCALE };
}

function loadCanvasCamera(spaceId) {
  if (!isCanvasSpace(spaceId)) return defaultCanvasCamera();

  try {
    const stored = JSON.parse(localStorage.getItem(canvasCameraStorageKey(spaceId)));
    if (!stored || !Number.isFinite(stored.x) || !Number.isFinite(stored.y)) {
      return defaultCanvasCamera();
    }

    return {
      x: stored.x,
      y: stored.y,
      scale: Math.min(
        MAX_CANVAS_SCALE,
        Math.max(MIN_CANVAS_SCALE, Number.isFinite(stored.scale) ? stored.scale : 1),
      ),
    };
  } catch {
    return defaultCanvasCamera();
  }
}

function saveCanvasCamera() {
  if (!isCanvasSpace(activeSpaceId)) return;
  localStorage.setItem(canvasCameraStorageKey(activeSpaceId), JSON.stringify(canvasCamera));
}

function isCanvasAtDefaultScale() {
  return Math.abs(canvasCamera.scale - MAX_CANVAS_SCALE) < 0.001;
}

function clearCanvasHudTimer() {
  if (canvasHudTimer) window.clearTimeout(canvasHudTimer);
  canvasHudTimer = null;
}

function renderCanvasHud() {
  const shouldShow = isCanvasSpace(activeSpaceId)
    && viewMode !== 'spaces'
    && canvasHudVisible;
  canvasControls.hidden = !shouldShow;
  if (!shouldShow) return;

  canvasControls.classList.toggle('is-expanded', canvasHudExpanded);
  const percentage = Math.round(canvasCamera.scale * 100);
  canvasResetZoom.textContent = `${percentage}%`;
  canvasZoomIn.disabled = canvasCamera.scale >= MAX_CANVAS_SCALE;
  canvasZoomOut.disabled = canvasCamera.scale <= MIN_CANVAS_SCALE;
}

function scheduleCanvasHudCollapse(delay = 1500) {
  clearCanvasHudTimer();
  canvasHudTimer = window.setTimeout(() => {
    canvasHudExpanded = false;
    if (isCanvasAtDefaultScale()) canvasHudVisible = false;
    renderCanvasHud();
  }, delay);
}

function revealCanvasHud() {
  if (!isCanvasSpace(activeSpaceId)) return;
  clearCanvasHudTimer();
  canvasHudVisible = true;
  canvasHudExpanded = true;
  renderCanvasHud();
  scheduleCanvasHudCollapse();
}

function renderCanvasCamera() {
  const activeCanvas = isCanvasSpace(activeSpaceId);
  canvas.classList.toggle('is-static-canvas', activeCanvas);
  canvas.classList.toggle('is-spatial-canvas', isSpatialSpace(activeSpaceId));
  canvasWorld.style.transform = activeCanvas
    ? `translate3d(${canvasCamera.x}px, ${canvasCamera.y}px, 0) scale(${canvasCamera.scale})`
    : '';
  renderCanvasHud();
}

function applyCanvasPlacement(thought) {
  const placement = getCanvasPlacement(thought, activeSpaceId);
  if (!placement) return false;

  thought.x = placement.x;
  thought.y = placement.y;
  thought.vx = 0;
  thought.vy = 0;
  thought.rotation = 0;
  return true;
}

function updateCanvasPlacement(thought) {
  thought.meta = withCanvasPlacement(thought.meta, activeSpaceId, {
    x: thought.x,
    y: thought.y,
  });
}

function clientPointToCanvasWorld(clientX, clientY) {
  const bounds = canvas.getBoundingClientRect();
  return {
    x: (clientX - bounds.left - canvasCamera.x) / canvasCamera.scale,
    y: (clientY - bounds.top - canvasCamera.y) / canvasCamera.scale,
  };
}

function pointerToCanvasWorld(event) {
  return clientPointToCanvasWorld(event.clientX, event.clientY);
}

function getCanvasSpawnSafeArea() {
  const canvasBounds = canvas.getBoundingClientRect();
  const composerBounds = composerWrap.getBoundingClientRect();

  return {
    left: canvasBounds.left + CANVAS_SPAWN_MARGIN,
    top: canvasBounds.top + CANVAS_SPAWN_MARGIN,
    right: canvasBounds.right - CANVAS_SPAWN_MARGIN,
    bottom: Math.min(
      canvasBounds.bottom - CANVAS_SPAWN_MARGIN,
      composerBounds.top - CANVAS_SPAWN_MARGIN,
    ),
  };
}

function getCanvasSpawnOverlap(candidate, thought, gap) {
  const left = Math.max(candidate.x - gap / 2, thought.x - gap / 2);
  const right = Math.min(
    candidate.x + candidate.width + gap / 2,
    thought.x + thought.width + gap / 2,
  );
  const top = Math.max(candidate.y - gap / 2, thought.y - gap / 2);
  const bottom = Math.min(
    candidate.y + candidate.height + gap / 2,
    thought.y + thought.height + gap / 2,
  );

  return Math.max(0, right - left) * Math.max(0, bottom - top);
}

function findCanvasSpawnPosition(thought) {
  const safeArea = getCanvasSpawnSafeArea();
  const bounds = canvas.getBoundingClientRect();
  const scale = canvasCamera.scale;
  const gap = CANVAS_SPAWN_GAP / scale;
  const centre = clientPointToCanvasWorld(
    (safeArea.left + safeArea.right) / 2,
    (safeArea.top + safeArea.bottom) / 2,
  );
  const occupied = thoughts.filter((item) => hasCanvasPlacement(item, activeSpaceId));
  let bestCandidate = null;
  let smallestOverlap = Infinity;

  for (let ring = 0; ring <= CANVAS_SPAWN_MAX_RINGS; ring += 1) {
    for (let column = -ring; column <= ring; column += 1) {
      for (let row = -ring; row <= ring; row += 1) {
        if (Math.max(Math.abs(column), Math.abs(row)) !== ring) continue;

        const candidate = {
          x: centre.x - thought.width / 2 + column * (thought.width + gap),
          y: centre.y - thought.height / 2 + row * (thought.height + gap),
          width: thought.width,
          height: thought.height,
        };
        const screenLeft = bounds.left + canvasCamera.x + candidate.x * scale;
        const screenTop = bounds.top + canvasCamera.y + candidate.y * scale;
        const fitsSafeArea = (
          screenLeft >= safeArea.left
          && screenTop >= safeArea.top
          && screenLeft + candidate.width * scale <= safeArea.right
          && screenTop + candidate.height * scale <= safeArea.bottom
        );

        if (!fitsSafeArea) continue;

        const overlap = occupied.reduce(
          (total, item) => total + getCanvasSpawnOverlap(candidate, item, gap),
          0,
        );

        if (overlap === 0) return candidate;

        if (overlap < smallestOverlap) {
          smallestOverlap = overlap;
          bestCandidate = candidate;
        }
      }
    }
  }

  return bestCandidate || {
    x: centre.x - thought.width / 2,
    y: centre.y - thought.height / 2,
  };
}

function placeThoughtInVisibleCanvas(thought) {
  const position = findCanvasSpawnPosition(thought);

  thought.x = Math.round(position.x);
  thought.y = Math.round(position.y);
  thought.vx = 0;
  thought.vy = 0;
  thought.rotation = 0;

  updateCanvasPlacement(thought);
  showThought(thought);
  renderThought(thought);
  thought.element.style.visibility = '';
}

function getThoughtById(thoughtId) {
  return thoughts.find((thought) => thought.id === thoughtId) || null;
}

function renderSpatialInspector() {
  const thought = selectedThoughtId ? getThoughtById(selectedThoughtId) : null;
  const visible = Boolean(thought && isSpatialSpace(activeSpaceId));
  spatialInspector.hidden = !visible;
  spatialFocusButton.disabled = !visible;
  if (!visible) return;

  const kind = getThoughtKnowledgeKind(thought);
  renderKnowledgeKindTrigger(spatialInspectorKind, kind);
  spatialInspectorKindLabel.textContent = getKnowledgeKindLabel(kind);
  spatialInspectorText.textContent = thought.text;
  const pinned = getSpatialPlacement(thought, activeSpaceId)?.pinned === true;
  spatialInspectorPin.textContent = pinned ? 'Unpin position' : 'Pin position';
  spatialInspectorPin.setAttribute('aria-pressed', String(pinned));
}

function toggleSpatialPositionPin() {
  if (!isSpatialSpace(activeSpaceId) || !selectedThoughtId) return;
  if (blockEditsDuringAccountSync()) return;
  const thought = getThoughtById(selectedThoughtId);
  if (!thought) return;

  const pinned = getSpatialPlacement(thought, activeSpaceId)?.pinned === true;
  if (pinned) {
    thought.meta = withoutSpatialPlacement(thought.meta, activeSpaceId);
    spatialView?.setThoughtPinned(thought.id, false);
  } else {
    const position = spatialView?.setThoughtPinned(thought.id, true)
      || spatialView?.getThoughtPosition(thought.id);
    if (!position) return;
    thought.meta = withSpatialPlacement(thought.meta, activeSpaceId, {
      ...position,
      pinned: true,
    });
  }

  saveThoughts();
  if (isCloudMode()) enqueueThoughtMetaPatch(thought, ['spatial']);
  renderSpatialInspector();
  announce(pinned ? 'Spatial position released.' : 'Spatial position pinned.');
}

function selectThought(thought) {
  selectedThoughtId = thought.id;
  thoughts.forEach((item) => {
    item.element.classList.toggle('is-selected', item.id === selectedThoughtId);
  });
  spatialView?.setSelectedThought(selectedThoughtId);
  renderSpatialInspector();
}

function clearThoughtSelection() {
  selectedThoughtId = null;
  thoughts.forEach((thought) => thought.element.classList.remove('is-selected'));
  spatialView?.setSelectedThought(null);
  renderSpatialInspector();
}

function getPersistedMagnetParents(thought) {
  return normalizeMagnetParents(thought.meta?.magnet, MAX_THOUGHTS);
}

function getPersistedMagnetChildren(parentId) {
  return thoughts.filter(
    (thought) => getPersistedMagnetParents(thought).some(
      (relation) => relation.parentId === parentId,
    ),
  );
}

function isPersistedMagnetParent(thought) {
  return getPersistedMagnetChildren(thought.id).length > 0;
}

function writeMagnetParents(thought, parents) {
  thought.meta = { ...(thought.meta || {}) };
  const magnet = magnetMetaFromParents(parents);
  if (magnet) thought.meta.magnet = magnet;
  else delete thought.meta.magnet;
}

function getEffectiveMagnetParents(thought) {
  const stored = getPersistedMagnetParents(thought);
  if (!magnetEditor || thought.id === magnetEditor.parentId) return stored;

  const otherParents = stored.filter(
    (relation) => relation.parentId !== magnetEditor.parentId,
  );

  if (magnetEditor.selectedChildIds.has(thought.id)) {
    return [...otherParents, {
      parentId: magnetEditor.parentId,
      slot: magnetEditor.slots.get(thought.id) ?? 0,
    }];
  }

  return otherParents;
}

function getEffectiveMagnetRelations() {
  return thoughts.flatMap((child) => getEffectiveMagnetParents(child).map(
    (relation) => ({ ...relation, childId: child.id }),
  )).filter((relation) => getThoughtById(relation.parentId));
}

function rebuildMagnetComponents({ preserveVisibility = true } = {}) {
  const previousStateByThoughtId = new Map();
  if (preserveVisibility) {
    componentByThoughtId.forEach((component, thoughtId) => {
      const state = visibilityStates.get(component.id);
      if (state) previousStateByThoughtId.set(thoughtId, { ...state });
    });
  }

  magnetComponents = buildHierarchyComponents(
    thoughts.map((thought) => thought.id),
    getEffectiveMagnetRelations(),
  );
  componentByThoughtId.clear();
  magnetComponents.forEach((component) => {
    component.memberIds.forEach((thoughtId) => {
      componentByThoughtId.set(thoughtId, component);
    });
  });
  magnetPhysics.syncTopology({
    thoughts,
    relations: getEffectiveMagnetRelations(),
    hierarchyComponents: magnetComponents,
  });

  if (!preserveVisibility) return;
  visibilityStates.clear();
  magnetComponents.forEach((component) => {
    const previousStates = component.memberIds
      .map((thoughtId) => previousStateByThoughtId.get(thoughtId))
      .filter(Boolean);
    if (!previousStates.length) return;

    visibilityStates.set(component.id, {
      status: previousStates.some((state) => state.status !== 'dormant')
        ? 'visible'
        : 'dormant',
      lastVisibleAt: Math.min(...previousStates.map((state) => state.lastVisibleAt || 0)),
    });
  });
}

function getMagnetComponent(thought) {
  return componentByThoughtId.get(thought.id) || null;
}

function getMagnetComponentMembers(component) {
  return component?.memberIds.map(getThoughtById).filter(Boolean) || [];
}

function isThoughtAvailableInActiveSpace(thought) {
  return isThoughtAvailableInSpace(thought, activeSpaceId);
}

function isMagnetComponentAvailableInActiveSpace(component) {
  return getMagnetComponentMembers(component).every(isThoughtAvailableInActiveSpace);
}

function isMagnetComponentPinned(component) {
  return getMagnetComponentMembers(component).some(
    (thought) => thought.pinned && isThoughtAvailableInActiveSpace(thought),
  );
}

function wouldCreateMagnetCycle(parentId, childId) {
  return wouldCreateHierarchyCycle(parentId, childId, (thoughtId) => {
    const thought = getThoughtById(thoughtId);
    return thought ? getEffectiveMagnetParents(thought) : [];
  });
}

function firstAvailableMagnetSlot(selectedIds, slots) {
  const usedSlots = new Set(
    [...selectedIds]
      .map((thoughtId) => slots.get(thoughtId))
      .filter(Number.isInteger),
  );
  let slot = 0;
  while (usedSlots.has(slot)) slot += 1;
  return slot;
}

function repairMagnetRelations() {
  const byId = new Map(thoughts.map((thought) => [thought.id, thought]));
  const acceptedParentsByChild = new Map();
  const usedSlotsByParent = new Map();
  const changed = new Set();

  [...thoughts]
    .sort((first, second) => validCreatedAt(first.createdAt) - validCreatedAt(second.createdAt))
    .forEach((thought) => {
      const previousMagnet = thought.meta?.magnet || null;
      const acceptedParents = [];

      getPersistedMagnetParents(thought).forEach((relation) => {
        const parent = byId.get(relation.parentId);
        if (
          !parent
          || parent === thought
          || parent.pinned
          || thought.pinned
        ) return;

        const createsCycle = wouldCreateHierarchyCycle(
          relation.parentId,
          thought.id,
          (thoughtId) => acceptedParentsByChild.get(thoughtId) || [],
        );
        if (createsCycle) return;

        if (!usedSlotsByParent.has(relation.parentId)) {
          usedSlotsByParent.set(relation.parentId, new Set());
        }
        const usedSlots = usedSlotsByParent.get(relation.parentId);
        let slot = relation.slot;
        while (usedSlots.has(slot)) slot += 1;
        if (slot >= MAX_THOUGHTS) return;
        usedSlots.add(slot);
        acceptedParents.push({ parentId: relation.parentId, slot });
      });

      acceptedParentsByChild.set(thought.id, acceptedParents);
      const nextMagnet = magnetMetaFromParents(acceptedParents);
      if (JSON.stringify(previousMagnet) === JSON.stringify(nextMagnet)) return;
      writeMagnetParents(thought, acceptedParents);
      changed.add(thought);
    });

  return [...changed];
}

function normalizedLayout(thought) {
  const bounds = canvas.getBoundingClientRect();
  const availableWidth = Math.max(1, bounds.width - thought.width);
  const availableHeight = Math.max(
    1,
    bounds.height - RESERVED_BOTTOM_SPACE - thought.height,
  );
  const normalize = (value) => Math.round(Math.min(1, Math.max(0, value)) * 1e6) / 1e6;

  return {
    version: 1,
    mode: 'normalized',
    spaceId: activeSpaceId,
    x: normalize(thought.x / availableWidth),
    y: normalize(thought.y / availableHeight),
  };
}

function updatePinnedLayoutMeta(thought) {
  if (
    !isFlowSpace(activeSpaceId)
    || !thought.pinned
    || !isThoughtAvailableInActiveSpace(thought)
  ) return;

  thought.meta = {
    ...(thought.meta || {}),
    layout: normalizedLayout(thought),
  };
}

function applyPinnedLayout(thought) {
  const layout = thought.meta?.layout;
  if (
    !thought.pinned
    || layout?.version !== 1
    || layout?.mode !== 'normalized'
    || !Number.isFinite(layout.x)
    || !Number.isFinite(layout.y)
  ) {
    return false;
  }

  const bounds = canvas.getBoundingClientRect();
  const availableWidth = Math.max(0, bounds.width - thought.width);
  const availableHeight = Math.max(
    0,
    bounds.height - RESERVED_BOTTOM_SPACE - thought.height,
  );

  thought.x = Math.min(1, Math.max(0, layout.x)) * availableWidth;
  thought.y = Math.min(1, Math.max(0, layout.y)) * availableHeight;
  return true;
}

function serializeThoughtsForSync(source = thoughts) {
  const renderedThoughts = new Map(thoughts.map((thought) => [thought.id, thought]));

  return source.map((storedThought) => {
    const thought = renderedThoughts.get(storedThought.id) || storedThought;
    if (thought.pinned && thought.width && thought.height) {
      updatePinnedLayoutMeta(thought);
    }

    return {
      id: thought.id,
      text: thought.text,
      color: thought.color,
      is_pinned: thought.pinned,
      meta: thought.meta || {},
      created_at: validCreatedAt(thought.createdAt).toISOString(),
    };
  });
}

function validCreatedAt(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function normalizeThoughts(data) {
  if (!Array.isArray(data)) return [];

  return data
    .filter((thought) => typeof thought?.text === 'string')
    .slice(0, MAX_THOUGHTS)
    .map((thought) => ({
      id: thought.id || crypto.randomUUID(),
      text: thought.text.slice(0, MAX_THOUGHT_TEXT_LENGTH),
      color: thought.color || 'purple',
      x: Number.isFinite(thought.x) ? thought.x : 100,
      y: Number.isFinite(thought.y) ? thought.y : 100,
      vx: Number.isFinite(thought.vx) ? thought.vx : randomVelocity(),
      vy: Number.isFinite(thought.vy) ? thought.vy : randomVelocity(),
      rotation: Number.isFinite(thought.rotation) ? thought.rotation : randomBetween(-2.5, 2.5),
      pinned: Boolean(thought.pinned),
      revision: Number.isInteger(thought.revision) && thought.revision >= 0
        ? thought.revision
        : 0,
      meta: thought.meta && typeof thought.meta === 'object' && !Array.isArray(thought.meta)
        ? normalizeCanvasMeta(thought.meta)
        : {},
      createdAt: thought.createdAt || Date.now(),
    }));
}

function loadStoredThoughts(storageKey) {
  try {
    return normalizeThoughts(JSON.parse(localStorage.getItem(storageKey)));
  } catch {
    return [];
  }
}

function loadAccountThoughts(accountId) {
  return loadStoredThoughts(accountStorageKey(accountId));
}

function loadPendingThoughts(accountId) {
  try {
    return normalizeThoughts(JSON.parse(localStorage.getItem(pendingSyncStorageKey(accountId))));
  } catch {
    return [];
  }
}

function storePendingThoughts(accountId, source = thoughts) {
  localStorage.setItem(
    pendingSyncStorageKey(accountId),
    JSON.stringify(serializableThoughts(source)),
  );
}

function mergeThoughts(...groups) {
  const merged = new Map();
  groups.flat().forEach((thought) => merged.set(thought.id, thought));
  return [...merged.values()];
}

function saveThoughts() {
  localStorage.setItem(
    currentThoughtStorageKey(),
    JSON.stringify(serializableThoughts()),
  );
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveThoughts, 350);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function randomVelocity() {
  const velocity = randomBetween(11, 22);
  return Math.random() > 0.5 ? velocity : -velocity;
}

function getVisibilityState(value) {
  const component = value?.memberIds ? value : getMagnetComponent(value);
  if (!component) return { status: 'dormant', lastVisibleAt: Date.now() };

  let state = visibilityStates.get(component.id);
  if (!state) {
    state = { status: 'visible', lastVisibleAt: 0 };
    visibilityStates.set(component.id, state);
  }
  return state;
}

function isThoughtActive(thought) {
  if (!isThoughtAvailableInActiveSpace(thought)) return false;
  if (isCanvasSpace(activeSpaceId) || isSpatialSpace(activeSpaceId)) return true;
  const component = getMagnetComponent(thought);
  return isMagnetComponentPinned(component)
    || getVisibilityState(component).status !== 'dormant';
}

function getActiveThoughts() {
  return thoughts.filter(isThoughtActive);
}

function getPlayfieldBounds() {
  const bounds = canvas.getBoundingClientRect();
  return {
    width: bounds.width,
    height: Math.max(0, bounds.height - RESERVED_BOTTOM_SPACE),
  };
}

function calculateVisibleTarget() {
  const availableThoughts = thoughts.filter(isThoughtAvailableInActiveSpace);
  const bounds = getPlayfieldBounds();
  const usableArea = bounds.width * bounds.height;
  const measuredThoughts = availableThoughts.filter(
    (thought) => thought.width > 0 && thought.height > 0,
  );
  const averageCardArea = measuredThoughts.length
    ? measuredThoughts.reduce(
      (total, thought) => total + (thought.width + 24) * (thought.height + 24),
      0,
    ) / measuredThoughts.length
    : 220 * 84;
  const calculatedTarget = Math.floor(
    (usableArea * TARGET_VISIBLE_DENSITY) / averageCardArea,
  );
  const limitedTarget = Math.max(
    MIN_VISIBLE_THOUGHTS,
    Math.min(MAX_VISIBLE_THOUGHTS, calculatedTarget),
  );
  const pinnedCount = availableThoughts.filter((thought) => thought.pinned).length;

  return Math.max(pinnedCount, Math.min(availableThoughts.length, limitedTarget));
}

function showThought(thought) {
  if (!isThoughtAvailableInActiveSpace(thought)) return;
  if (isSpatialSpace(activeSpaceId)) return;
  if (isCanvasSpace(activeSpaceId)) {
    thought.element.hidden = false;
    return;
  }
  const component = getMagnetComponent(thought);
  if (!component) return;
  getVisibilityState(component).status = 'visible';
  getMagnetComponentMembers(component).forEach((member) => {
    member.element.hidden = false;
  });
}

function hideThought(thought) {
  if (isCanvasSpace(activeSpaceId) || isSpatialSpace(activeSpaceId)) return;
  const component = getMagnetComponent(thought);
  if (!component) return;
  const members = getMagnetComponentMembers(component);
  if (members.some((member) => member.pinned || member === draggedThought)) return;

  const state = getVisibilityState(component);
  state.status = 'dormant';
  state.lastVisibleAt = Date.now();
  members.forEach((member) => {
    member.element.hidden = true;
  });
}

function intersectsPlayfield(thought, bounds) {
  return (
    thought.x < bounds.width
    && thought.x + thought.width > 0
    && thought.y < bounds.height
    && thought.y + thought.height > 0
  );
}

function isFullyOutside(thought, bounds) {
  return (
    thought.x + thought.width < 0
    || thought.x > bounds.width
    || thought.y + thought.height < 0
    || thought.y > bounds.height
  );
}

function componentBounds(component) {
  const members = getMagnetComponentMembers(component);
  return {
    minX: Math.min(...members.map((member) => member.x)),
    minY: Math.min(...members.map((member) => member.y)),
    maxX: Math.max(...members.map((member) => member.x + member.width)),
    maxY: Math.max(...members.map((member) => member.y + member.height)),
  };
}

function shiftMagnetComponent(component, shiftX, shiftY) {
  magnetPhysics.translateComponent(component.id, shiftX, shiftY);
}

function isMagnetComponentFullyOutside(component, bounds) {
  return getMagnetComponentMembers(component).every(
    (member) => isFullyOutside(member, bounds),
  );
}

function spawnThoughtFromEdge(thought, reducedMotion = false) {
  const component = getMagnetComponent(thought);
  if (!component) return;
  const bounds = getPlayfieldBounds();
  const state = getVisibilityState(component);
  const members = getMagnetComponentMembers(component);

  members.forEach((member) => {
    member.element.hidden = false;
    measureThought(member);
  });

  if (reducedMotion) {
    state.status = 'visible';
    const group = componentBounds(component);
    const groupWidth = group.maxX - group.minX;
    const groupHeight = group.maxY - group.minY;
    shiftMagnetComponent(
      component,
      randomBetween(0, Math.max(0, bounds.width - groupWidth)) - group.minX,
      randomBetween(0, Math.max(0, bounds.height - groupHeight)) - group.minY,
    );

    const angle = randomBetween(0, Math.PI * 2);
    const speed = randomBetween(14, 18);
    magnetPhysics.setComponentVelocity(
      component.id,
      Math.cos(angle) * speed,
      Math.sin(angle) * speed,
    );

    members.forEach((member) => {
      member.rotation = 0;
      renderThought(member);
    });
    return;
  }

  state.status = 'entering';
  const edge = Math.floor(Math.random() * 4);
  const speed = randomBetween(14, 23);
  const drift = randomBetween(-8, 8);
  const group = componentBounds(component);
  const groupWidth = group.maxX - group.minX;
  const groupHeight = group.maxY - group.minY;
  let vx = 0;
  let vy = 0;

  if (edge === 0) {
    shiftMagnetComponent(
      component,
      -SPAWN_MARGIN - group.maxX,
      randomBetween(0, Math.max(0, bounds.height - groupHeight)) - group.minY,
    );
    vx = speed;
    vy = drift;
  } else if (edge === 1) {
    shiftMagnetComponent(
      component,
      bounds.width + SPAWN_MARGIN - group.minX,
      randomBetween(0, Math.max(0, bounds.height - groupHeight)) - group.minY,
    );
    vx = -speed;
    vy = drift;
  } else if (edge === 2) {
    shiftMagnetComponent(
      component,
      randomBetween(0, Math.max(0, bounds.width - groupWidth)) - group.minX,
      -SPAWN_MARGIN - group.maxY,
    );
    vx = drift;
    vy = speed;
  } else {
    shiftMagnetComponent(
      component,
      randomBetween(0, Math.max(0, bounds.width - groupWidth)) - group.minX,
      bounds.height + SPAWN_MARGIN - group.minY,
    );
    vx = drift;
    vy = -speed;
  }

  magnetPhysics.setComponentVelocity(component.id, vx, vy);
  members.forEach((member) => {
    member.rotation = randomBetween(-2.5, 2.5);
  });
  members.forEach(renderThought);
}

function spawnNextDormantThought(reducedMotion) {
  const component = magnetComponents
    .filter((item) => (
      isMagnetComponentAvailableInActiveSpace(item)
      && !isMagnetComponentPinned(item)
      && getVisibilityState(item).status === 'dormant'
    ))
    .sort((first, second) => (
      getVisibilityState(first).lastVisibleAt
      - getVisibilityState(second).lastVisibleAt
    ))[0];

  if (!component) return false;
  const thought = getMagnetComponentMembers(component)[0];
  spawnThoughtFromEdge(thought, reducedMotion);
  return true;
}

function maybeSpawnThought(timestamp, reducedMotion) {
  if (getActiveThoughts().length >= calculateVisibleTarget()) {
    nextSpawnAt = 0;
    return;
  }

  if (!nextSpawnAt) {
    nextSpawnAt = timestamp + randomBetween(RESPAWN_DELAY_MIN, RESPAWN_DELAY_MAX);
    return;
  }

  if (timestamp < nextSpawnAt) return;

  if (spawnNextDormantThought(reducedMotion)) {
    nextSpawnAt = timestamp + randomBetween(RESPAWN_DELAY_MIN, RESPAWN_DELAY_MAX);
  } else {
    nextSpawnAt = 0;
  }
}

function initializeThoughtVisibility() {
  visibilityStates.clear();

  if (isSpatialSpace(activeSpaceId)) {
    thoughts.forEach((thought) => {
      thought.element.hidden = true;
    });
    nextSpawnAt = 0;
    return;
  }

  if (isCanvasSpace(activeSpaceId)) {
    thoughts.forEach((thought) => {
      thought.element.hidden = !isThoughtAvailableInActiveSpace(thought);
    });
    nextSpawnAt = 0;
    return;
  }

  const target = calculateVisibleTarget();
  const availableComponents = magnetComponents.filter(
    isMagnetComponentAvailableInActiveSpace,
  );
  const pinnedComponents = availableComponents.filter(isMagnetComponentPinned);
  const visibleComponentIds = new Set(pinnedComponents.map((component) => component.id));
  let visibleCardCount = pinnedComponents.reduce(
    (count, component) => count + component.memberIds.length,
    0,
  );

  availableComponents
    .filter((component) => !isMagnetComponentPinned(component))
    .sort((first, second) => {
      const firstCreatedAt = Math.max(
        ...getMagnetComponentMembers(first).map((thought) => validCreatedAt(thought.createdAt)),
      );
      const secondCreatedAt = Math.max(
        ...getMagnetComponentMembers(second).map((thought) => validCreatedAt(thought.createdAt)),
      );
      return secondCreatedAt - firstCreatedAt;
    })
    .some((component) => {
      if (visibleCardCount >= target) return true;
      visibleComponentIds.add(component.id);
      visibleCardCount += component.memberIds.length;
      return false;
    });

  magnetComponents.forEach((component) => {
    const visible = visibleComponentIds.has(component.id);
    visibilityStates.set(component.id, {
      status: visible ? 'visible' : 'dormant',
      lastVisibleAt: visible ? 0 : Date.now(),
    });
    getMagnetComponentMembers(component).forEach((member) => {
      member.element.hidden = !visible;
    });
  });

  nextSpawnAt = 0;
}

function magnetCandidateDisabled(thought) {
  if (!magnetEditor || thought.id === magnetEditor.parentId) return false;
  if (magnetEditor.selectedChildIds.has(thought.id)) return false;
  return thought.pinned || wouldCreateMagnetCycle(magnetEditor.parentId, thought.id);
}

function renderMagnetThoughtState(thought) {
  const button = thought.element.querySelector('.magnet-button');
  if (!button) return;

  if (!getSpaceCapabilities(activeSpaceId).magnets) {
    button.hidden = true;
    thought.element.classList.remove(
      'is-magnet-parent',
      'is-magnet-child',
      'is-magnet-hybrid',
      'is-magnet-editor-parent',
      'is-magnet-disabled',
    );
    return;
  }

  button.hidden = false;

  const storedParents = getPersistedMagnetParents(thought);
  const hasParents = storedParents.length > 0;
  const hasChildren = isPersistedMagnetParent(thought);
  const isEditingParent = magnetEditor?.parentId === thought.id;
  const isHybrid = hasParents && hasChildren;
  const isParent = isEditingParent || hasChildren;
  const isSelected = magnetEditor
    ? magnetEditor.selectedChildIds.has(thought.id)
    : hasParents;
  const isChild = !isEditingParent && (
    magnetEditor
      ? isSelected || storedParents.some(
        (relation) => relation.parentId !== magnetEditor.parentId,
      )
      : hasParents
  );
  const disabled = Boolean(magnetEditor && (
    isEditingParent || magnetCandidateDisabled(thought)
  ));

  thought.element.classList.toggle('is-magnet-parent', isParent);
  thought.element.classList.toggle('is-magnet-child', isChild);
  thought.element.classList.toggle('is-magnet-hybrid', isHybrid);
  thought.element.classList.toggle('is-magnet-editor-parent', isEditingParent);
  thought.element.classList.toggle('is-magnet-disabled', disabled && !isEditingParent);
  button.classList.toggle('is-selected', isSelected);
  button.disabled = disabled;
  button.setAttribute('aria-pressed', String(isParent || isSelected));

  if (isEditingParent) button.title = 'Magnetic group parent';
  else if (disabled) button.title = 'This thought cannot join this group';
  else if (magnetEditor && isSelected) button.title = 'Remove from magnetic group';
  else if (magnetEditor) button.title = 'Add to magnetic group';
  else if (isHybrid) button.title = 'Parent and child — edit its children';
  else if (hasParents) button.title = 'Use as a parent or edit its children';
  else if (isParent) button.title = 'Edit magnetic group';
  else button.title = 'Create magnetic group';
  button.setAttribute('aria-label', button.title);
}

function renderRelationshipUi() {
  if (!getSpaceCapabilities(activeSpaceId).connections) connectionEditor = null;

  const selectedTotal = magnetEditor
    ? magnetEditor.selectedChildIds.size
    : connectionEditor?.selectedTargetIds.size || 0;
  selectionCount.textContent = `${selectedTotal} selected`;
  selectionToolbar.hidden = !magnetEditor && !connectionEditor;
  selectionToolbar.setAttribute(
    'aria-label',
    magnetEditor ? 'Edit magnetic group' : 'Edit thought connections',
  );
  canvas.classList.toggle('is-magnet-editing', Boolean(magnetEditor));
  canvas.classList.toggle('is-connection-editing', Boolean(connectionEditor));
  knowledgePickerTrigger.disabled = Boolean(magnetEditor || connectionEditor);
  thoughts.forEach((thought) => {
    renderMagnetThoughtState(thought);
    renderConnectionThoughtState(thought);
    thought.element.querySelector('.thought-kind-button').disabled = Boolean(
      magnetEditor || connectionEditor,
    );
  });
}

function openMagnetEditor(parent) {
  if (!getSpaceCapabilities(activeSpaceId).magnets) {
    announce('Magnetic groups are only available in flying Spaces.');
    return;
  }
  if (connectionEditor) {
    announce('Finish creating the connection first.');
    return;
  }
  knowledgeKindPicker.close();
  if (blockEditsDuringAccountSync()) return;
  if (parent.pinned) {
    announce('Unpin this thought first.');
    return;
  }

  const children = getPersistedMagnetChildren(parent.id);
  magnetEditor = {
    parentId: parent.id,
    selectedChildIds: new Set(children.map((child) => child.id)),
    slots: new Map(children.map((child) => [
      child.id,
      getPersistedMagnetParents(child).find(
        (relation) => relation.parentId === parent.id,
      )?.slot ?? 0,
    ])),
    motion: new Map(thoughts.map((thought) => [thought.id, {
      x: thought.x,
      y: thought.y,
      vx: thought.vx,
      vy: thought.vy,
    }])),
  };

  showThought(parent);
  renderRelationshipUi();
  announce('Choose thoughts to connect, then select Done.');
}

function toggleMagnetCandidate(thought) {
  if (!magnetEditor || thought.id === magnetEditor.parentId) return;
  if (magnetCandidateDisabled(thought)) {
    announce('This thought cannot join the selected group.');
    return;
  }

  if (magnetEditor.selectedChildIds.has(thought.id)) {
    magnetEditor.selectedChildIds.delete(thought.id);
    magnetEditor.slots.delete(thought.id);
  } else {
    magnetEditor.selectedChildIds.add(thought.id);
    magnetEditor.slots.set(
      thought.id,
      firstAvailableMagnetSlot(magnetEditor.selectedChildIds, magnetEditor.slots),
    );
    showThought(thought);
  }

  rebuildMagnetComponents();
  renderRelationshipUi();
  announce(`${magnetEditor.selectedChildIds.size} thoughts selected.`);
}

function handleMagnetButton(thought) {
  if (connectionEditor) {
    announce('Finish creating the connection first.');
    return;
  }

  if (magnetEditor) {
    toggleMagnetCandidate(thought);
    return;
  }

  openMagnetEditor(thought);
}

function closeMagnetEditor({ restoreMotion = false } = {}) {
  if (!magnetEditor) return;
  const editor = magnetEditor;
  magnetEditor = null;

  if (restoreMotion) {
    thoughts.forEach((thought) => {
      const motion = editor.motion.get(thought.id);
      if (!motion) return;
      Object.assign(thought, motion);
    });
  }

  rebuildMagnetComponents();
  if (restoreMotion) thoughts.forEach(renderThought);
  renderRelationshipUi();
}

function commitMagnetEditor() {
  if (!magnetEditor) return;
  const editor = magnetEditor;
  const changedThoughts = [];

  thoughts.forEach((thought) => {
    if (thought.id === editor.parentId) return;
    const isSelected = editor.selectedChildIds.has(thought.id);
    const existingParents = getPersistedMagnetParents(thought);
    const otherParents = existingParents.filter(
      (relation) => relation.parentId !== editor.parentId,
    );
    const nextParents = isSelected
      ? [...otherParents, {
        parentId: editor.parentId,
        slot: editor.slots.get(thought.id) ?? 0,
      }]
      : otherParents;
    if (JSON.stringify(existingParents) === JSON.stringify(nextParents)) return;

    writeMagnetParents(thought, nextParents);
    changedThoughts.push(thought);
  });

  closeMagnetEditor();
  saveThoughts();
  if (isCloudMode()) {
    changedThoughts.forEach((thought) => enqueueThoughtMetaPatch(thought, ['magnet']));
  }
  announce(`${editor.selectedChildIds.size} thoughts connected.`);
}

function renderConnectionThoughtState(thought) {
  const button = thought.element.querySelector('.connection-button');
  if (!button) return;

  const { connections } = getSpaceCapabilities(activeSpaceId);
  button.hidden = !connections;
  if (!connections) {
    thought.element.classList.remove(
      'is-connection-source',
      'is-connection-selected',
    );
    button.disabled = true;
    button.setAttribute('aria-pressed', 'false');
    return;
  }

  const isSource = thought.id === connectionEditor?.sourceId;
  const isSelected = Boolean(
    connectionEditor?.selectedTargetIds.has(thought.id),
  );
  thought.element.classList.toggle('is-connection-source', isSource);
  thought.element.classList.toggle('is-connection-selected', isSelected);
  button.disabled = Boolean(magnetEditor);
  button.setAttribute('aria-pressed', String(isSource || isSelected));

  if (isSource) button.title = 'Connection source';
  else if (connectionEditor && isSelected) button.title = 'Remove connection';
  else if (connectionEditor) button.title = 'Add connection';
  else button.title = 'Edit connections';
  button.setAttribute('aria-label', button.title);
}

function renderConnectionUi() {
  renderRelationshipUi();
}

function rebuildConnectionLayer() {
  if (isSpatialSpace(activeSpaceId)) {
    connectionRenderer.setConnections([]);
    magnetPhysics.syncConnections([]);
    connectionRenderer.update();
    refreshSpatialGraph();
    return;
  }

  if (!getSpaceCapabilities(activeSpaceId).connections) {
    connectionRenderer.setConnections([]);
    magnetPhysics.syncConnections([]);
    connectionRenderer.update();
    return;
  }

  const availableThoughtIds = new Set(
    thoughts
      .filter(isThoughtAvailableInActiveSpace)
      .map((thought) => thought.id),
  );
  const connections = flattenConnections(thoughts).filter((connection) => (
    availableThoughtIds.has(connection.sourceId)
    && availableThoughtIds.has(connection.targetId)
  ));
  connectionRenderer.setConnections(connections);
  magnetPhysics.syncConnections([]);
  connectionRenderer.update();
}

function openConnectionEditor(source) {
  if (!getSpaceCapabilities(activeSpaceId).connections) return;
  if (magnetEditor) {
    announce('Finish editing the magnetic group first.');
    return;
  }
  if (blockEditsDuringAccountSync()) return;

  knowledgeKindPicker.close();
  connectionEditor = {
    sourceId: source.id,
    selectedTargetIds: new Set(
      getOutgoingConnections(source)
        .map((connection) => connection.targetId),
    ),
  };
  showThought(source);
  renderConnectionUi();
  announce('Choose connected thoughts, then select Done.');
}

function closeConnectionEditor() {
  if (!connectionEditor) return;
  connectionEditor = null;
  renderConnectionUi();
}

function toggleConnectionCandidate(thought) {
  if (!connectionEditor || thought.id === connectionEditor.sourceId) return;

  const selected = connectionEditor.selectedTargetIds;
  if (selected.has(thought.id)) {
    selected.delete(thought.id);
  } else {
    if (selected.size >= MAX_CONNECTIONS_PER_THOUGHT) {
      announce(`You can create up to ${MAX_CONNECTIONS_PER_THOUGHT} connections.`);
      return;
    }

    selected.add(thought.id);
    showThought(thought);
  }

  renderConnectionUi();
  announce(`${selected.size} thoughts selected.`);
}

function handleConnectionButton(thought) {
  if (!connectionEditor) {
    openConnectionEditor(thought);
    return;
  }

  if (connectionEditor.sourceId === thought.id) {
    closeConnectionEditor();
    announce('Connection changes cancelled.');
    return;
  }

  toggleConnectionCandidate(thought);
}

function commitConnectionEditor() {
  if (!connectionEditor) return;
  if (!getSpaceCapabilities(activeSpaceId).connections) {
    closeConnectionEditor();
    return;
  }

  const editor = connectionEditor;
  const source = getThoughtById(editor.sourceId);
  if (!source) {
    closeConnectionEditor();
    return;
  }

  const result = reconcileConnections(source, editor.selectedTargetIds);
  closeConnectionEditor();

  if (result.changed) {
    rebuildConnectionLayer();
    saveThoughts();
    if (isCloudMode()) enqueueThoughtMetaPatch(source, ['connections']);
  }

  announce(`${result.count} thoughts connected.`);
}

function makeThought(
  text,
  restoredThought = {},
  { deferReveal = false } = {},
) {
  const fragment = template.content.cloneNode(true);
  const element = fragment.querySelector('.thought-card');
  const textElement = fragment.querySelector('.thought-text');
  const kindButton = fragment.querySelector('.thought-kind-button');
  const anchorButton = fragment.querySelector('.anchor-button');
  const pinButton = fragment.querySelector('.pin-button');
  const magnetButton = fragment.querySelector('.magnet-button');
  const connectionButton = fragment.querySelector('.connection-button');
  const deleteButton = fragment.querySelector('.delete-button');
  const rect = canvas.getBoundingClientRect();
  const thought = {
    id: restoredThought.id || crypto.randomUUID(),
    text,
    color: restoredThought.color || 'purple',
    x: Number.isFinite(restoredThought.x)
      ? restoredThought.x
      : Math.max(20, rect.width / 2 - 100 + randomBetween(-40, 40)),
    y: Number.isFinite(restoredThought.y)
      ? restoredThought.y
      : Math.max(40, rect.height * 0.56 + randomBetween(-40, 40)),
    vx: Number.isFinite(restoredThought.vx) ? restoredThought.vx : randomVelocity(),
    vy: Number.isFinite(restoredThought.vy) ? restoredThought.vy : randomVelocity(),
    rotation: Number.isFinite(restoredThought.rotation)
      ? restoredThought.rotation
      : randomBetween(-2.5, 2.5),
    pinned: Boolean(restoredThought.pinned),
    revision: Number.isInteger(restoredThought.revision) && restoredThought.revision >= 0
      ? restoredThought.revision
      : 0,
    meta: restoredThought.meta && typeof restoredThought.meta === 'object'
      ? cloneMeta(restoredThought.meta)
      : {},
    createdAt: restoredThought.createdAt || Date.now(),
    element,
    width: 0,
    height: 0,
  };

  textElement.textContent = text;
  if (deferReveal) {
    element.style.visibility = 'hidden';
  }
  canvasWorld.append(element);
  measureThought(thought);
  const hasLocalPosition = (
    Number.isFinite(restoredThought.x) && Number.isFinite(restoredThought.y)
  );
  if (!hasLocalPosition) {
    if (isCanvasSpace(activeSpaceId)) applyCanvasPlacement(thought);
    else if (isFlowSpace(activeSpaceId)) applyPinnedLayout(thought);
  }
  if (isFlowSpace(activeSpaceId)) constrainThought(thought);
  renderThought(thought);
  if (isSpatialSpace(activeSpaceId)) element.hidden = true;

  pinButton.addEventListener('click', () => togglePinned(thought));
  anchorButton.addEventListener('click', () => toggleBoardAnchor(thought));
  kindButton.addEventListener('click', () => openThoughtKnowledgeKindPicker(thought));
  kindButton.addEventListener('keydown', (event) => {
    handleKnowledgeKindTriggerKeyDown(
      event,
      () => openThoughtKnowledgeKindPicker(thought),
    );
  });
  textElement.title = 'Click again to edit · Drag the card to move it';
  magnetButton.addEventListener('click', () => handleMagnetButton(thought));
  connectionButton.addEventListener('click', () => handleConnectionButton(thought));
  deleteButton.addEventListener('click', () => removeThought(thought));
  element.addEventListener('pointerdown', (event) => beginDrag(event, thought));
  element.addEventListener('keydown', (event) => {
    if (event.target !== element) return;
    if (event.key !== 'Enter' && event.key !== 'F2') return;

    event.preventDefault();
    startThoughtTextEditing(thought);
  });
  element.addEventListener('focus', () => selectThought(thought));
  element.addEventListener('pointerenter', () => element.classList.add('is-hovered'));
  element.addEventListener('pointerleave', () => element.classList.remove('is-hovered'));
  return thought;
}

function replaceThoughts(nextThoughts) {
  thoughtEditor.discard({ restoreFocus: false });
  selectedThoughtId = null;
  knowledgeKindPicker.close();
  magnetEditor = null;
  connectionEditor = null;
  selectionToolbar.hidden = true;
  canvas.classList.remove('is-magnet-editing');
  canvas.classList.remove('is-connection-editing');
  stopDrag();
  thoughts.forEach((thought) => thought.element?.remove());
  thoughts = nextThoughts.map((thought) => makeThought(thought.text, thought));
  repairMagnetRelations();
  rebuildMagnetComponents({ preserveVisibility: false });
  initializeThoughtVisibility();
  renderRelationshipUi();
  rebuildConnectionLayer();
  updateUi();
  saveThoughts();
}

function measureThought(thought) {
  thought.width = thought.element.offsetWidth;
  thought.height = thought.element.offsetHeight;
}

function apiThoughtToClientThought(record, layout = {}) {
  return {
    id: record.id,
    text: record.text,
    color: record.color,
    pinned: record.is_pinned,
    meta: record.meta || {},
    revision: Number.isInteger(record.revision) ? record.revision : 0,
    x: layout.x,
    y: layout.y,
    vx: layout.vx,
    vy: layout.vy,
    rotation: layout.rotation,
    createdAt: Date.parse(record.created_at) || Date.now(),
  };
}

function applyOutboxOperations(source, operations) {
  const merged = new Map(source.map((thought) => [thought.id, thought]));

  operations.forEach((operation) => {
    if (operation.type === 'delete') {
      merged.delete(operation.thoughtId);
      return;
    }

    const existing = merged.get(operation.thoughtId);
    if (operation.type === 'create') {
      merged.set(operation.thoughtId, apiThoughtToClientThought(
        {
          ...operation.payload,
          id: operation.thoughtId,
          revision: existing?.revision || 0,
        },
        existing,
      ));
      return;
    }

    if (operation.type === 'patch' && existing) {
      merged.set(operation.thoughtId, applyThoughtPatch(existing, operation.patch));
    }
  });

  return [...merged.values()];
}

function enqueueThoughtCreate(thought) {
  if (!isCloudMode()) return;

  const accountId = auth.id;
  const operations = loadOutbox(accountId).filter(
    (operation) => operation.thoughtId !== thought.id,
  );

  operations.push({
    operationId: crypto.randomUUID(),
    thoughtId: thought.id,
    type: 'create',
    status: 'pending',
    payload: serializeThoughtsForSync([thought])[0],
  });
  saveOutbox(accountId, operations);
  void flushOutbox();
}

function enqueueThoughtPatch(thought, patch) {
  if (!isCloudMode()) return;
  if (thought.revision === 0) {
    enqueueThoughtCreate(thought);
    return;
  }

  const accountId = auth.id;
  const operations = loadOutbox(accountId);
  const existing = operations.find((operation) => (
    operation.thoughtId === thought.id
    && operation.type === 'patch'
    && operation.status === 'pending'
    && operation.operationId !== activeOutboxOperation?.operationId
  ));

  if (existing) {
    existing.patch = mergeThoughtPatches(existing.patch, patch);
  } else {
    operations.push({
      operationId: crypto.randomUUID(),
      thoughtId: thought.id,
      type: 'patch',
      status: 'pending',
      baseRevision: thought.revision,
      patch,
    });
  }

  saveOutbox(accountId, operations);
  void flushOutbox();
}

function enqueueThoughtMetaPatch(thought, keys) {
  enqueueThoughtPatch(thought, {
    meta_patch: metaPatchFromThought(thought, keys),
  });
}

function enqueueThoughtDelete(thought) {
  if (!isCloudMode()) return;

  const accountId = auth.id;
  const operations = loadOutbox(accountId).filter(
    (operation) => operation.thoughtId !== thought.id,
  );

  const createIsInFlight = (
    activeOutboxOperation?.thoughtId === thought.id
    && activeOutboxOperation.type === 'create'
  );
  if (thought.revision === 0 && !createIsInFlight) {
    saveOutbox(accountId, operations);
    return;
  }

  operations.push({
    operationId: crypto.randomUUID(),
    thoughtId: thought.id,
    type: 'delete',
    status: 'pending',
    baseRevision: thought.revision,
  });
  saveOutbox(accountId, operations);
  void flushOutbox();
}

class ApiError extends Error {
  constructor(status, payload) {
    super(apiErrorMessage(payload));
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}

async function requestApi(path, {
  method = 'GET', body, retry = true, authSnapshot = auth,
} = {}) {
  const headers = { Accept: 'application/json' };
  if (authSnapshot?.access) headers.Authorization = `Bearer ${authSnapshot.access}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (
    response.status === 401
    && retry
    && authSnapshot?.id === auth?.id
    && await refreshAccessToken(authSnapshot)
  ) {
    return requestApi(path, {
      method,
      body,
      retry: false,
      authSnapshot: auth,
    });
  }

  const payload = await response.json().catch(() => null);
  if (!response.ok) throw new ApiError(response.status, payload);
  return payload;
}

function apiErrorMessage(payload) {
  if (!payload) return 'The server could not complete that request.';
  if (typeof payload.detail === 'string') return payload.detail;

  for (const value of Object.values(payload)) {
    if (Array.isArray(value) && value[0]) return value[0];
    if (typeof value === 'string') return value;
  }

  return 'The server could not complete that request.';
}

async function ensureSyncCapabilities() {
  if (syncCapabilities?.revision_sync === true) return true;
  if (!syncCapabilitiesPromise) {
    syncCapabilitiesPromise = requestApi('/health/', { authSnapshot: null })
      .then((payload) => {
        syncCapabilities = payload?.sync_schema === 2
          ? payload.capabilities
          : null;
        return syncCapabilities?.revision_sync === true;
      })
      .catch(() => false)
      .finally(() => {
        syncCapabilitiesPromise = null;
      });
  }

  const compatible = await syncCapabilitiesPromise;
  if (!compatible && !syncCompatibilityAnnounced) {
    syncCompatibilityAnnounced = true;
    announce('Cloud changes are paused until the server update is complete.');
  }
  return compatible;
}

async function refreshAccessToken(authSnapshot = auth) {
  if (!authSnapshot?.refresh || authSnapshot.id !== auth?.id) return false;

  const response = await fetch(`${API_URL}/auth/refresh/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ refresh: authSnapshot.refresh }),
  });
  const payload = await response.json().catch(() => null);

  if (authSnapshot.id !== auth?.id) return false;

  if (!response.ok || !payload?.access) {
    signOut('Your session ended. Please sign in again.');
    return false;
  }

  auth.access = payload.access;
  storeAuth();
  return true;
}

function scheduleOutboxRetry(accountId) {
  window.clearTimeout(outboxRetryTimer);
  const delay = outboxRetryDelay;
  outboxRetryDelay = Math.min(outboxRetryDelay * 2, 30_000);
  outboxRetryTimer = window.setTimeout(() => {
    if (auth?.id === accountId) void flushOutbox();
  }, delay);
}

function patchFromCreatePayload(current, payload) {
  const patch = {};
  if (current.text !== payload.text) patch.text = payload.text;
  if (current.color !== payload.color) patch.color = payload.color;
  if (current.is_pinned !== payload.is_pinned) patch.is_pinned = payload.is_pinned;
  const metaPatch = diffMetaPatch(current.meta || {}, payload.meta || {});
  if (Object.keys(metaPatch).length) patch.meta_patch = metaPatch;
  return patch;
}

function setLocalThoughtRevision(thoughtId, revision) {
  if (!Number.isInteger(revision)) return;
  const thought = getThoughtById(thoughtId);
  if (!thought) return;
  thought.revision = revision;
  saveThoughts();
}

function rebaseQueuedThoughtOperations(operations, completedOperation, current) {
  return operations.flatMap((operation) => {
    if (operation.operationId === completedOperation.operationId) return [];
    if (operation.thoughtId !== completedOperation.thoughtId) return [operation];

    if (operation.type === 'create') {
      const patch = patchFromCreatePayload(current, operation.payload);
      if (!Object.keys(patch).length) return [];
      const { payload, ...rest } = operation;
      return [{
        ...rest,
        type: 'patch',
        status: 'pending',
        baseRevision: current.revision,
        patch,
      }];
    }

    return [{
      ...operation,
      baseRevision: current.revision,
    }];
  });
}

async function executeOutboxOperation(operation) {
  if (operation.type === 'create') {
    return requestApi(`/thoughts/${operation.thoughtId}/sync/`, {
      method: 'PUT',
      body: operation.payload,
    });
  }
  if (operation.type === 'patch') {
    return requestApi(`/thoughts/${operation.thoughtId}/sync/`, {
      method: 'PATCH',
      body: {
        base_revision: operation.baseRevision,
        ...operation.patch,
      },
    });
  }
  await requestApi(
    `/thoughts/${operation.thoughtId}/sync/?base_revision=${operation.baseRevision}`,
    { method: 'DELETE' },
  );
  return null;
}

function blockOutboxOperation(accountId, operation, error) {
  const operations = loadOutbox(accountId);
  const stored = operations.find((item) => item.operationId === operation.operationId);
  if (!stored) return;
  stored.status = error.status === 409 ? 'conflict' : 'blocked';
  stored.error = error.message;
  if (error.payload?.current) stored.serverThought = error.payload.current;
  saveOutbox(accountId, operations);
}

function rebaseRejectedCreate(accountId, operation, current) {
  const sameCreation = (
    Date.parse(current?.created_at) === Date.parse(operation.payload?.created_at)
  );
  if (!current || !sameCreation || !Number.isInteger(current.revision)) return false;

  const operations = loadOutbox(accountId);
  const stored = operations.find((item) => item.operationId === operation.operationId);
  if (!stored) return true;
  const patch = patchFromCreatePayload(current, stored.payload);
  if (!Object.keys(patch).length) {
    saveOutbox(accountId, operations.filter(
      (item) => item.operationId !== operation.operationId,
    ));
  } else {
    const { payload, ...rest } = stored;
    Object.assign(stored, rest, {
      type: 'patch',
      status: 'pending',
      baseRevision: current.revision,
      patch,
    });
    delete stored.payload;
    saveOutbox(accountId, operations);
  }
  setLocalThoughtRevision(operation.thoughtId, current.revision);
  return true;
}

async function flushOutbox() {
  if (!isCloudMode() || outboxFlushInFlight || !navigator.onLine) return;
  if (!await ensureSyncCapabilities()) return;

  const accountId = auth.id;
  outboxFlushInFlight = true;
  window.clearTimeout(outboxRetryTimer);

  try {
    while (auth?.id === accountId && navigator.onLine) {
      const operation = loadOutbox(accountId).find((item) => item.status === 'pending');
      if (!operation) break;
      activeOutboxOperation = operation;

      let result;
      try {
        result = await executeOutboxOperation(operation);
      } catch (error) {
        if (
          error instanceof ApiError
          && error.status === 428
          && operation.type === 'create'
          && rebaseRejectedCreate(accountId, operation, error.payload?.current)
        ) {
          activeOutboxOperation = null;
          continue;
        }
        if (error instanceof ApiError && error.status >= 400 && error.status < 500) {
          blockOutboxOperation(accountId, operation, error);
          announce(error.status === 409
            ? 'A cloud change conflicts with a newer version and was paused.'
            : `A cloud change was paused: ${error.message}`);
          activeOutboxOperation = null;
          continue;
        }
        throw error;
      }

      if (auth?.id !== accountId) return;

      const storedOperations = loadOutbox(accountId);
      const remaining = result
        ? rebaseQueuedThoughtOperations(storedOperations, operation, result)
        : storedOperations.filter((item) => item.operationId !== operation.operationId);
      saveOutbox(accountId, remaining);
      if (result) setLocalThoughtRevision(operation.thoughtId, result.revision);
      outboxRetryDelay = 2000;
      activeOutboxOperation = null;
    }
  } catch (error) {
    if (auth?.id === accountId) {
      announce(`Changes are safe on this device and will sync later: ${error.message}`);
      scheduleOutboxRetry(accountId);
    }
  } finally {
    activeOutboxOperation = null;
    outboxFlushInFlight = false;
    if (auth?.id && auth.id !== accountId && isCloudMode()) {
      void flushOutbox();
    }
  }
}

function applyServerThoughts(records) {
  const layouts = new Map(thoughts.map((thought) => [thought.id, thought]));
  const serverThoughts = records.slice(0, MAX_THOUGHTS).map((record) => (
    apiThoughtToClientThought(record, layouts.get(record.id))
  ));
  const visibleThoughts = auth
    ? applyOutboxOperations(serverThoughts, loadOutbox(auth.id))
    : serverThoughts;

  replaceThoughts(visibleThoughts);
}

async function loadServerThoughts() {
  if (!auth || syncPending) return false;

  try {
    const records = await requestApi('/thoughts/');
    applyServerThoughts(records);
    announce('Your saved thoughts are ready.');
    return true;
  } catch (error) {
    announce(`Could not load saved thoughts: ${error.message}`);
    return false;
  }
}

async function syncGuestThoughts() {
  if (!auth || syncInFlight) return false;
  if (!await ensureSyncCapabilities()) {
    syncPending = true;
    return false;
  }

  const accountId = auth.id;
  let pending = loadPendingThoughts(accountId);
  if (!pending.length && thoughts.length) {
    storePendingThoughts(accountId);
    localStorage.removeItem(STORAGE_KEY);
    pending = loadPendingThoughts(accountId);
  }

  if (!pending.length) {
    syncPending = false;
    return true;
  }

  const operationId = ++syncOperationId;
  syncInFlight = true;
  try {
    const response = await requestApi('/thoughts/sync/', {
      method: 'POST',
      body: { thoughts: serializeThoughtsForSync(pending) },
    });

    if (auth?.id !== accountId || operationId !== syncOperationId) return false;

    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(pendingSyncStorageKey(accountId));
    syncPending = false;
    applyServerThoughts(response.thoughts);
    return true;
  } catch (error) {
    if (auth?.id !== accountId || operationId !== syncOperationId) return false;

    if (/up to \d+ thoughts/i.test(error.message)) {
      syncPending = false;
      const loaded = await loadServerThoughts();
      if (loaded) {
        announce('Your account is full. Delete saved thoughts to import the local ones.');
      } else {
        syncPending = true;
      }
      return false;
    }

    syncPending = true;
    announce(`Could not sync local thoughts. They are still safe on this device: ${error.message}`);
    return false;
  } finally {
    if (operationId === syncOperationId) syncInFlight = false;
  }
}

async function restoreAuthenticatedThoughts() {
  let ready;
  if (syncPending) {
    ready = await syncGuestThoughts();
  } else {
    ready = await loadServerThoughts();
  }

  if (ready && auth) serverStateReady = true;
  if (isCloudMode()) void flushOutbox();
  return ready;
}

async function addThought(rawText) {
  const text = rawText.trim();
  if (!text) return false;

  if (text.length > MAX_THOUGHT_TEXT_LENGTH) {
    announce(`A thought can contain up to ${MAX_THOUGHT_TEXT_LENGTH} characters.`);
    return false;
  }

  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return false;
  }

  if (blockEditsDuringAccountSync()) return false;

  if (thoughts.length >= MAX_THOUGHTS) {
    announce(`You can keep up to ${MAX_THOUGHTS} thoughts. Delete one to add a new thought.`);
    return false;
  }

  const meta = {
    knowledge: createKnowledgeMeta(composerKnowledgeKind),
  };

  const targetSpaceId = activeSpaceId;
  const addingToBoard = isCanvasSpace(targetSpaceId);
  const addingToSpatial = isSpatialSpace(targetSpaceId);
  const thought = makeThought(
    text,
    {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      meta,
    },
    {
      deferReveal: addingToBoard || addingToSpatial,
    },
  );
  if (addingToBoard) {
    placeThoughtInVisibleCanvas(thought);
  }
  if (addingToSpatial) {
    thought.element.hidden = true;
  }
  thoughts.push(thought);
  rebuildMagnetComponents();
  updateUi();
  saveThoughts();
  if (addingToSpatial && activeSpaceId === targetSpaceId) refreshSpatialGraph();

  if (isCloudMode()) {
    enqueueThoughtCreate(thought);
    announce('Thought added.');
  } else {
    announce('Thought added locally. Sign in to save thoughts to your account.');
  }

  return true;
}

function togglePinned(thought) {
  if (isCanvasSpace(activeSpaceId) || isSpatialSpace(activeSpaceId)) {
    announce(isSpatialSpace(activeSpaceId)
      ? 'Spatial cards stay in place without pins.'
      : 'Board cards stay in place without pins.');
    return;
  }
  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return;
  }
  if (blockEditsDuringAccountSync()) return;
  if (getPersistedMagnetParents(thought).length || isPersistedMagnetParent(thought)) {
    announce('Disconnect this thought before pinning it.');
    return;
  }

  thought.pinned = !thought.pinned;
  if (thought.pinned) {
    constrainThought(thought);
    thought.vx = 0;
    thought.vy = 0;
    thought.rotation = 0;
    thought.meta = {
      ...(thought.meta || {}),
      layout: normalizedLayout(thought),
    };
    showThought(thought);
  } else {
    thought.meta = { ...(thought.meta || {}) };
    delete thought.meta.layout;
    thought.vx = randomVelocity();
    thought.vy = randomVelocity();
    thought.rotation = randomBetween(-2.5, 2.5);
  }

  rebuildMagnetComponents();
  if (thought.pinned) updatePinnedLayoutMeta(thought);

  renderThought(thought);
  saveThoughts();
  announce(thought.pinned ? 'Thought pinned.' : 'Thought unpinned.');

  if (isCloudMode()) enqueueThoughtPatch(thought, {
    is_pinned: thought.pinned,
    meta_patch: metaPatchFromThought(thought, ['layout']),
  });
}

function toggleBoardAnchor(thought) {
  if (!isCanvasSpace(activeSpaceId)) return;
  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return;
  }
  if (blockEditsDuringAccountSync()) return;

  const anchored = hasBoardAnchor(thought, activeSpaceId);
  thought.meta = anchored
    ? withoutBoardAnchor(thought.meta, activeSpaceId)
    : withBoardAnchor(thought.meta, activeSpaceId);

  renderThought(thought);
  saveThoughts();
  if (isCloudMode()) enqueueThoughtMetaPatch(thought, ['navigation']);
  if (anchorsDialog.open) renderAnchors();
  announce(anchored ? 'Anchor removed.' : 'Anchor added.');
}

function detachLocalMagnetChildren(parentId) {
  const changedThoughts = getPersistedMagnetChildren(parentId);
  changedThoughts.forEach((child) => {
    writeMagnetParents(
      child,
      getPersistedMagnetParents(child).filter(
        (relation) => relation.parentId !== parentId,
      ),
    );
  });

  if (!changedThoughts.length) return;
  rebuildMagnetComponents();
  saveThoughts();
  if (isCloudMode()) {
    changedThoughts.forEach((child) => enqueueThoughtMetaPatch(child, ['magnet']));
  }
  renderRelationshipUi();
}

function removeThought(thought) {
  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return;
  }
  if (blockEditsDuringAccountSync()) return;
  if (knowledgeKindEditor?.thoughtId === thought.id) knowledgeKindPicker.close();
  if (isPersistedMagnetParent(thought)) detachLocalMagnetChildren(thought.id);
  const changedConnectionSources = detachIncomingConnections(thoughts, thought.id);
  if (isCloudMode()) {
    changedConnectionSources.forEach((source) => (
      enqueueThoughtMetaPatch(source, ['connections'])
    ));
    enqueueThoughtDelete(thought);
  }
  removeThoughtElement(thought);
}

function removeThoughtElement(thought) {
  if (draggedThought === thought) stopDrag();
  thought.element.classList.add('is-removing');
  window.setTimeout(() => {
    thought.element.remove();
    thoughts = thoughts.filter((item) => item !== thought);
    rebuildMagnetComponents();
    renderRelationshipUi();
    rebuildConnectionLayer();
    updateUi();
    saveThoughts();
    announce('Thought deleted.');
  }, 180);
}

function beginDrag(event, thought) {
  if (event.button !== 0) return;
  if (event.target.closest('button, select, input, textarea, a')) return;
  if (thoughtEditor.isOpen()) return;
  if (magnetEditor || connectionEditor) return;
  if (blockEditsDuringAccountSync()) return;

  const wasSelected = selectedThoughtId === thought.id;
  const startedOnText = Boolean(event.target.closest('.thought-text'));
  selectThought(thought);
  event.preventDefault();

  const nextDragOffset = isCanvasSpace(activeSpaceId)
    ? (() => {
      const pointer = pointerToCanvasWorld(event);
      return {
        x: pointer.x - thought.x,
        y: pointer.y - thought.y,
      };
    })()
    : (() => {
      const bounds = thought.element.getBoundingClientRect();
      return {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
    })();

  dragCandidate = {
    thought,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    startedOnText,
    wasSelected,
    dragOffset: nextDragOffset,
  };
  thought.element.setPointerCapture(event.pointerId);

  if (event.pointerType === 'touch') {
    thought.element.focus({ preventScroll: true });
  }
}

function activateDrag(candidate) {
  draggedThought = candidate.thought;
  dragCandidate = null;
  dragOffset = candidate.dragOffset;

  if (isFlowSpace(activeSpaceId)) {
    magnetPhysics.beginDrag(draggedThought.id);
  }

  draggedThought.element.classList.add('is-dragging');
  draggedThought.element.style.zIndex = String(topZIndex() + 1);
}

function moveDrag(event) {
  if (!draggedThought && dragCandidate) {
    if (event.pointerId !== dragCandidate.pointerId) return;

    const distance = Math.hypot(
      event.clientX - dragCandidate.startX,
      event.clientY - dragCandidate.startY,
    );

    if (distance < DRAG_THRESHOLD_PX) return;
    activateDrag(dragCandidate);
  }

  if (!draggedThought) return;

  if (isCanvasSpace(activeSpaceId)) {
    const pointer = pointerToCanvasWorld(event);
    draggedThought.x = pointer.x - dragOffset.x;
    draggedThought.y = pointer.y - dragOffset.y;
    draggedThought.rotation = 0;
    renderThought(draggedThought);
    connectionRenderer.update();
    return;
  }

  const bounds = canvas.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - draggedThought.width);
  const maxY = Math.max(
    0,
    bounds.height - RESERVED_BOTTOM_SPACE - draggedThought.height,
  );
  const x = Math.min(
    Math.max(0, event.clientX - bounds.left - dragOffset.x),
    maxX,
  );
  const y = Math.min(
    Math.max(0, event.clientY - bounds.top - dragOffset.y),
    maxY,
  );
  magnetPhysics.moveDraggedThought(draggedThought.id, x, y, event.timeStamp);
  renderThought(draggedThought);
}

function stopDrag(event, { cancelled = !event } = {}) {
  if (
    dragCandidate
    && (!event || event.pointerId === dragCandidate.pointerId)
  ) {
    const candidate = dragCandidate;
    dragCandidate = null;

    if (!draggedThought && !cancelled) {
      if (candidate.startedOnText && candidate.wasSelected) {
        startThoughtTextEditing(candidate.thought);
      } else {
        candidate.thought.element.focus({ preventScroll: true });
      }
    }
  }

  if (!draggedThought) return;
  const thought = draggedThought;
  thought.element.classList.remove('is-dragging');

  if (isCanvasSpace(activeSpaceId)) {
    updateCanvasPlacement(thought);
    draggedThought = null;
    saveThoughts();
    if (isCloudMode()) enqueueThoughtMetaPatch(thought, ['canvas']);
    return;
  }

  magnetPhysics.endDrag(thought.id);
  if (thought.pinned) {
    updatePinnedLayoutMeta(thought);
    if (isCloudMode()) enqueueThoughtMetaPatch(thought, ['layout']);
  }
  draggedThought = null;
  scheduleSave();
}

function beginCanvasPan(event) {
  if (!isCanvasSpace(activeSpaceId)) return;
  if (event.button !== 0 || event.target.closest('.thought-card, button, input')) return;

  canvasPan = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    cameraX: canvasCamera.x,
    cameraY: canvasCamera.y,
  };
  canvas.setPointerCapture(event.pointerId);
  canvas.classList.add('is-panning');
}

function moveCanvasPan(event) {
  if (!canvasPan || event.pointerId !== canvasPan.pointerId) return false;

  canvasCamera.x = canvasPan.cameraX + event.clientX - canvasPan.startX;
  canvasCamera.y = canvasPan.cameraY + event.clientY - canvasPan.startY;
  renderCanvasCamera();
  return true;
}

function stopCanvasPan(event) {
  if (!canvasPan || (event && event.pointerId !== canvasPan.pointerId)) return;
  canvasPan = null;
  canvas.classList.remove('is-panning');
  saveCanvasCamera();
}

function setCanvasScale(nextScale, clientX, clientY, { persist = true, revealHud = true } = {}) {
  if (!isCanvasSpace(activeSpaceId)) return;

  const scale = Math.min(MAX_CANVAS_SCALE, Math.max(MIN_CANVAS_SCALE, nextScale));
  if (scale === canvasCamera.scale) return;

  const bounds = canvas.getBoundingClientRect();
  const worldX = (clientX - bounds.left - canvasCamera.x) / canvasCamera.scale;
  const worldY = (clientY - bounds.top - canvasCamera.y) / canvasCamera.scale;
  canvasCamera.scale = scale;
  canvasCamera.x = clientX - bounds.left - worldX * scale;
  canvasCamera.y = clientY - bounds.top - worldY * scale;
  renderCanvasCamera();
  if (revealHud) revealCanvasHud();
  if (persist) saveCanvasCamera();
}

function animateCanvasScale(targetScale, clientX, clientY) {
  if (!isCanvasSpace(activeSpaceId)) return;
  if (canvasScaleAnimationId) cancelAnimationFrame(canvasScaleAnimationId);

  revealCanvasHud();

  const startScale = canvasCamera.scale;
  const finalScale = Math.min(
    MAX_CANVAS_SCALE,
    Math.max(MIN_CANVAS_SCALE, targetScale),
  );
  const startedAt = performance.now();
  const duration = 150;

  function frame(now) {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - (1 - progress) ** 3;
    const scale = startScale + (finalScale - startScale) * eased;

    setCanvasScale(scale, clientX, clientY, {
      persist: progress === 1,
      revealHud: false,
    });

    if (progress < 1) {
      canvasScaleAnimationId = requestAnimationFrame(frame);
    } else {
      canvasScaleAnimationId = null;
    }
  }

  canvasScaleAnimationId = requestAnimationFrame(frame);
}

function handleCanvasWheel(event) {
  if (!isCanvasSpace(activeSpaceId) || !event.ctrlKey) return;
  event.preventDefault();
  if (canvasScaleAnimationId) {
    cancelAnimationFrame(canvasScaleAnimationId);
    canvasScaleAnimationId = null;
  }
  const nextScale = canvasCamera.scale * Math.exp(-event.deltaY * 0.0015);
  setCanvasScale(nextScale, event.clientX, event.clientY, { revealHud: false });
  revealCanvasHud();
}

function topZIndex() {
  return thoughts.reduce((maximum, thought) => Math.max(maximum, Number(thought.element.style.zIndex) || 1), 1);
}

function constrainThought(thought) {
  const bounds = canvas.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - thought.width);
  const maxY = Math.max(0, bounds.height - RESERVED_BOTTOM_SPACE - thought.height);
  thought.x = Math.min(Math.max(0, thought.x), maxX);
  thought.y = Math.min(Math.max(0, thought.y), maxY);
}

function startThoughtTextEditing(thought) {
  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return;
  }
  if (blockEditsDuringAccountSync() || thoughtEditor.isOpen()) return;
  if (draggedThought) stopDrag();

  knowledgeKindPicker.close();
  selectThought(thought);
  renderKnowledgeKindTrigger(
    thoughtFocusKind,
    getThoughtKnowledgeKind(thought),
  );
  thoughtFocusKind.removeAttribute('title');
  thoughtEditor.open({
    thoughtId: thought.id,
    text: thought.text,
  });
}

function renderThought(thought) {
  const canvasThought = isCanvasSpace(activeSpaceId);
  const textElement = thought.element.querySelector('.thought-text');
  textElement.textContent = thought.text;

  thought.element.classList.toggle('is-pinned', thought.pinned);
  thought.element.classList.toggle('is-canvas-card', canvasThought);
  thought.element.classList.toggle('is-selected', selectedThoughtId === thought.id);
  const kind = getThoughtKnowledgeKind(thought);
  if (thought.element.dataset.knowledgeKind !== kind) {
    const kindButton = thought.element.querySelector('.thought-kind-button');
    thought.element.dataset.knowledgeKind = kind;
    renderKnowledgeKindTrigger(kindButton, kind);
  }
  thought.element.style.transform = `translate3d(${thought.x}px, ${thought.y}px, 0) rotate(${canvasThought ? 0 : thought.rotation}deg)`;
  const pinButton = thought.element.querySelector('.pin-button');
  pinButton.hidden = canvasThought;
  pinButton.title = thought.pinned ? 'Unpin thought' : 'Pin thought';
  pinButton.setAttribute('aria-label', pinButton.title);
  const anchorButton = thought.element.querySelector('.anchor-button');
  const anchored = canvasThought && hasBoardAnchor(thought, activeSpaceId);
  anchorButton.hidden = !canvasThought;
  anchorButton.classList.toggle('is-active', anchored);
  anchorButton.setAttribute('aria-pressed', String(anchored));
  anchorButton.title = anchored ? 'Remove from anchors' : 'Add to anchors';
  anchorButton.setAttribute('aria-label', anchorButton.title);
  thought.element.classList.toggle('is-anchored', anchored);
  renderMagnetThoughtState(thought);
  renderConnectionThoughtState(thought);
}

function historyGroup(createdAt) {
  const date = validCreatedAt(createdAt);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const thoughtDay = new Date(date);
  thoughtDay.setHours(0, 0, 0, 0);
  const daysAgo = Math.round((today - thoughtDay) / 86_400_000);

  if (daysAgo === 0) return 'Today';
  if (daysAgo === 1) return 'Yesterday';
  if (daysAgo > 1 && daysAgo < 7) return 'Previous 7 Days';

  return new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function formatHistoryDate(createdAt) {
  const date = validCreatedAt(createdAt);
  const group = historyGroup(date);
  const options = group === 'Today' || group === 'Yesterday'
    ? { hour: 'numeric', minute: '2-digit' }
    : {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit',
    };

  return new Intl.DateTimeFormat(undefined, options).format(date);
}

function focusCanvasThought(thought, message = 'Thought shown on Board.') {
  applyCanvasPlacement(thought);
  const bounds = canvas.getBoundingClientRect();
  canvasCamera.x = bounds.width / 2 - (thought.x + thought.width / 2) * canvasCamera.scale;
  canvasCamera.y = bounds.height / 2 - (thought.y + thought.height / 2) * canvasCamera.scale;
  renderCanvasCamera();
  saveCanvasCamera();
  showThought(thought);
  renderThought(thought);
  rebuildConnectionLayer();
  thought.element.focus({ preventScroll: true });
  thought.element.classList.add('is-history-focused');
  window.setTimeout(() => thought.element.classList.remove('is-history-focused'), 900);
  announce(message);
}

function addOrFocusThoughtOnCanvas(thought) {
  const existingPlacement = getCanvasPlacement(thought, activeSpaceId);

  historyDialog.close();

  if (existingPlacement) {
    focusCanvasThought(thought, 'Thought shown on Board.');
    return;
  }

  placeThoughtInVisibleCanvas(thought);
  saveThoughts();
  if (isCloudMode()) enqueueThoughtMetaPatch(thought, ['canvas']);

  rebuildConnectionLayer();
  updateUi();
  thought.element.focus({ preventScroll: true });
  announce('Thought added to Board.');
}

async function addOrFocusThoughtInSpatial(thought) {
  historyDialog.close();
  const view = await ensureSpatialView();
  if (!isSpatialSpace(activeSpaceId)) return;

  selectThought(thought);
  updateUi();
  view?.focusThought(thought.id);
  announce('Thought focused in Spatial.');
}

async function focusThoughtFromHistory(thought) {
  if (isSpatialSpace(activeSpaceId)) {
    await addOrFocusThoughtInSpatial(thought);
    return;
  }

  if (isCanvasSpace(activeSpaceId)) {
    addOrFocusThoughtOnCanvas(thought);
    return;
  }

  historyDialog.close();
  if (thought.pinned && getThoughtSpaceId(thought) !== activeSpaceId) {
    switchSpace(getThoughtSpaceId(thought));
  }

  const component = getMagnetComponent(thought);
  const members = getMagnetComponentMembers(component);
  showThought(thought);
  members.forEach(measureThought);

  if (!isMagnetComponentPinned(component)) {
    const bounds = getPlayfieldBounds();
    const targetX = Math.max(0, (bounds.width - thought.width) / 2);
    const targetY = Math.max(0, (bounds.height - thought.height) / 2);
    shiftMagnetComponent(component, targetX - thought.x, targetY - thought.y);
    const vx = randomVelocity();
    const vy = randomVelocity();
    magnetPhysics.setComponentVelocity(component.id, vx, vy);
    getVisibilityState(component).status = 'visible';
  }

  thought.element.style.zIndex = String(topZIndex() + 1);
  if (members.length === 1) constrainThought(thought);
  members.forEach(renderThought);
  thought.element.classList.add('is-history-focused');
  window.setTimeout(() => thought.element.classList.remove('is-history-focused'), 900);
  announce('Thought shown on the board.');
}

function renderHistory() {
  const query = historySearch.value.trim().toLocaleLowerCase();
  const matchingThoughts = [...thoughts]
    .filter((thought) => thought.text.toLocaleLowerCase().includes(query))
    .sort((first, second) => (
      validCreatedAt(second.createdAt) - validCreatedAt(first.createdAt)
    ));

  historyList.replaceChildren();
  if (!matchingThoughts.length) {
    const empty = document.createElement('p');
    empty.className = 'history-empty';
    empty.textContent = thoughts.length ? 'No matching thoughts.' : 'No thoughts yet.';
    historyList.append(empty);
    return;
  }

  const groups = new Map();
  matchingThoughts.forEach((thought) => {
    const label = historyGroup(thought.createdAt);
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(thought);
  });

  groups.forEach((groupThoughts, label) => {
    const section = document.createElement('section');
    section.className = 'history-group';

    const heading = document.createElement('h3');
    heading.textContent = label;
    section.append(heading);

    const list = document.createElement('ul');
    groupThoughts.forEach((thought) => {
      const item = document.createElement('li');
      const row = document.createElement('div');
      const kindButton = document.createElement('button');
      const contentButton = document.createElement('button');
      const text = document.createElement('span');
      const details = document.createElement('span');
      const time = document.createElement('time');
      const kind = getThoughtKnowledgeKind(thought);

      row.className = 'history-item';
      kindButton.type = 'button';
      kindButton.className = 'history-kind-icon history-kind-button';
      kindButton.setAttribute('aria-haspopup', 'listbox');
      kindButton.setAttribute('aria-expanded', 'false');
      renderKnowledgeKindTrigger(kindButton, kind);
      contentButton.type = 'button';
      contentButton.className = 'history-item-content';
      text.className = 'history-item-text';
      text.textContent = thought.text;
      details.className = 'history-item-details';
      time.dateTime = validCreatedAt(thought.createdAt).toISOString();
      time.textContent = formatHistoryDate(thought.createdAt);
      details.append(time);

      if (thought.pinned) {
        const pinned = document.createElement('span');
        pinned.className = 'history-pinned';
        pinned.textContent = 'Pinned';
        details.append(pinned);
      }

      kindButton.addEventListener('click', () => {
        openThoughtKnowledgeKindPicker(thought, kindButton);
      });
      kindButton.addEventListener('keydown', (event) => {
        handleKnowledgeKindTriggerKeyDown(
          event,
          () => openThoughtKnowledgeKindPicker(thought, kindButton),
        );
      });
      contentButton.append(text, details);
      contentButton.addEventListener('click', () => void focusThoughtFromHistory(thought));
      row.append(kindButton, contentButton);
      item.append(row);
      list.append(item);
    });

    section.append(list);
    historyList.append(section);
  });
}

function getAnchoredThoughts() {
  return thoughts
    .filter((thought) => (
      hasCanvasPlacement(thought, activeSpaceId)
      && hasBoardAnchor(thought, activeSpaceId)
    ))
    .sort((first, second) => {
      const firstTime = getBoardAnchor(first, activeSpaceId)?.createdAt || 0;
      const secondTime = getBoardAnchor(second, activeSpaceId)?.createdAt || 0;
      return secondTime - firstTime;
    });
}

function renderAnchors() {
  const anchoredThoughts = getAnchoredThoughts();
  anchorsList.replaceChildren();

  if (!anchoredThoughts.length) {
    const empty = document.createElement('p');
    empty.className = 'history-empty';
    empty.textContent = 'No anchors yet.';
    anchorsList.append(empty);
    return;
  }

  const section = document.createElement('section');
  const list = document.createElement('ul');
  section.className = 'history-group';

  anchoredThoughts.forEach((thought) => {
    const item = document.createElement('li');
    const row = document.createElement('div');
    const kindIcon = document.createElement('span');
    const contentButton = document.createElement('button');
    const text = document.createElement('span');
    const removeButton = document.createElement('button');

    row.className = 'history-item anchor-item';
    kindIcon.className = 'history-kind-icon anchor-kind-icon';
    renderKnowledgeKindTrigger(kindIcon, getThoughtKnowledgeKind(thought));

    contentButton.type = 'button';
    contentButton.className = 'history-item-content';
    contentButton.addEventListener('click', () => {
      anchorsDialog.close();
      focusCanvasThought(thought, 'Anchor shown on Board.');
    });

    text.className = 'history-item-text';
    text.textContent = thought.text;
    contentButton.append(text);

    removeButton.type = 'button';
    removeButton.className = 'anchor-remove';
    removeButton.textContent = '×';
    removeButton.setAttribute('aria-label', 'Remove anchor');
    removeButton.addEventListener('click', () => toggleBoardAnchor(thought));

    row.append(kindIcon, contentButton, removeButton);
    item.append(row);
    list.append(item);
  });

  section.append(list);
  anchorsList.append(section);
}

function openAnchors() {
  if (!isCanvasSpace(activeSpaceId)) return;
  if (magnetEditor) closeMagnetEditor({ restoreMotion: true });
  if (connectionEditor) closeConnectionEditor();
  stopDrag();
  knowledgeKindPicker.close();
  renderAnchors();
  anchorsDialog.showModal();
}

function openHistory() {
  knowledgeKindPicker.close();
  historySearch.value = '';
  renderHistory();
  historyDialog.showModal();
  historySearch.focus();
}

function renderSpacesOverview() {
  spacesGrid.replaceChildren();
  const canvasBounds = canvas.getBoundingClientRect();
  const canvasWidth = Math.max(1, canvasBounds.width);
  const canvasHeight = Math.max(1, canvasBounds.height - RESERVED_BOTTOM_SPACE);

  SPACES.forEach((space) => {
    const tile = document.createElement('button');
    const label = document.createElement('span');
    const surface = document.createElement('span');
    const chrome = document.createElement('span');
    const controls = document.createElement('span');
    const account = document.createElement('span');
    const composer = document.createElement('span');

    tile.type = 'button';
    tile.className = 'space-tile';
    tile.dataset.spaceId = space.id;
    tile.classList.toggle('is-spatial', isSpatialSpace(space.id));
    tile.classList.toggle('is-active', space.id === activeSpaceId);
    tile.setAttribute('aria-label', `Open ${space.label}`);
    if (space.id === activeSpaceId) tile.setAttribute('aria-current', 'true');

    label.className = 'space-tile-label';
    label.textContent = space.label;
    surface.className = 'space-preview-surface';
    chrome.className = 'space-preview-chrome';
    controls.className = 'space-preview-controls';
    controls.append(document.createElement('span'), document.createElement('span'));
    account.className = 'space-preview-account';
    composer.className = 'space-preview-composer';
    chrome.append(controls, account);
    surface.append(chrome, composer);
    tile.append(surface, label);

    const isCanvasPreview = isCanvasSpace(space.id);
    const isSpatialPreview = isSpatialSpace(space.id);
    const isPositionedPreview = isCanvasPreview || isSpatialPreview;
    const previewThoughts = thoughts.filter((thought) => (
      isCanvasPreview
        ? hasCanvasPlacement(thought, space.id)
        : isSpatialPreview
          ? true
          : thought.pinned && getThoughtSpaceId(thought) === space.id
    )).slice(0, 80);
    const previewPositions = previewThoughts.map((thought, index) => {
      if (isSpatialPreview) {
        const placement = getSpatialPlacement(thought, space.id);
        if (placement) return placement;
        const angle = index * 2.399963;
        const radius = 40 + Math.sqrt(index + 1) * 34;
        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
      }
      return getCanvasPlacement(thought, space.id);
    });
    const minCanvasX = Math.min(...previewPositions.map((position) => position?.x ?? 0), 0);
    const maxCanvasX = Math.max(...previewPositions.map((position) => position?.x ?? 0), 1);
    const minCanvasY = Math.min(...previewPositions.map((position) => position?.y ?? 0), 0);
    const maxCanvasY = Math.max(...previewPositions.map((position) => position?.y ?? 0), 1);
    const canvasRangeX = Math.max(1, maxCanvasX - minCanvasX);
    const canvasRangeY = Math.max(1, maxCanvasY - minCanvasY);

    previewThoughts.forEach((thought, index) => {
        const preview = document.createElement('span');
        const layout = thought.meta?.layout;
        const positionedPlacement = previewPositions[index];
        const x = isPositionedPreview
          ? 0.08 + ((positionedPlacement?.x ?? 0) - minCanvasX) / canvasRangeX * 0.84
          : Number.isFinite(layout?.x) ? layout.x : 0.5;
        const y = isPositionedPreview
          ? 0.08 + ((positionedPlacement?.y ?? 0) - minCanvasY) / canvasRangeY * 0.84
          : Number.isFinite(layout?.y) ? layout.y : 0.5;
        const width = Math.min(
          34,
          Math.max(12, ((thought.width || 180) / canvasWidth) * 100),
        );
        const height = Math.min(
          18,
          Math.max(6, ((thought.height || 64) / canvasHeight) * 100),
        );

        preview.className = 'space-preview-card';
        preview.style.left = `${Math.min(1, Math.max(0, x)) * (100 - width)}%`;
        preview.style.top = `${Math.min(1, Math.max(0, y)) * (100 - height)}%`;
        preview.style.width = `${width}%`;
        preview.style.height = `${height}%`;
        surface.append(preview);
      });

    tile.addEventListener('click', () => switchSpace(space.id));
    spacesGrid.append(tile);
  });
}

function closeSpacesOverview({ restoreFocus = true } = {}) {
  if (viewMode !== 'spaces') return;
  viewMode = 'canvas';
  renderCanvasCamera();
  spacesOverview.hidden = true;
  if (isSpatialSpace(activeSpaceId)) void activateSpatialView();
  if (restoreFocus) spacesButton.focus();
}

function switchSpace(spaceId) {
  if (!isSpaceId(spaceId)) return;

  if (magnetEditor) closeMagnetEditor({ restoreMotion: true });
  if (connectionEditor) closeConnectionEditor();
  stopDrag();
  stopCanvasPan();
  deactivateSpatialView();
  if (canvasScaleAnimationId) {
    cancelAnimationFrame(canvasScaleAnimationId);
    canvasScaleAnimationId = null;
  }
  saveCanvasCamera();

  activeSpaceId = spaceId;
  localStorage.setItem(ACTIVE_SPACE_STORAGE_KEY, activeSpaceId);
  canvasCamera = loadCanvasCamera(activeSpaceId);
  clearCanvasHudTimer();
  canvasHudVisible = isCanvasSpace(activeSpaceId) && !isCanvasAtDefaultScale();
  canvasHudExpanded = false;
  renderCanvasCamera();

  if (isSpatialSpace(activeSpaceId)) {
    initializeThoughtVisibility();
    rebuildConnectionLayer();
    updateUi();
    closeSpacesOverview();
    void activateSpatialView();

    const label = SPACES.find((space) => space.id === activeSpaceId)?.label;
    announce(`${label || 'Space'} opened.`);
    return;
  }

  thoughts.forEach((thought) => {
    if (!isThoughtAvailableInActiveSpace(thought)) {
      thought.element.hidden = true;
      return;
    }

    measureThought(thought);
    if (isCanvasSpace(activeSpaceId)) {
      applyCanvasPlacement(thought);
    } else if (isFlowSpace(activeSpaceId) && thought.pinned) {
      applyPinnedLayout(thought);
      constrainThought(thought);
    }
  });

  initializeThoughtVisibility();
  getActiveThoughts().forEach(renderThought);
  rebuildConnectionLayer();
  updateUi();
  closeSpacesOverview();

  const label = SPACES.find((space) => space.id === activeSpaceId)?.label;
  announce(`${label || 'Space'} opened.`);
}

function openSpacesOverview() {
  if (magnetEditor) closeMagnetEditor({ restoreMotion: true });
  if (connectionEditor) closeConnectionEditor();
  stopDrag();
  spatialView?.deactivate();
  knowledgeKindPicker.close();

  if (isFlowSpace(activeSpaceId)) {
    thoughts
      .filter((thought) => thought.pinned && isThoughtAvailableInActiveSpace(thought))
      .forEach(updatePinnedLayoutMeta);
  }
  saveThoughts();

  viewMode = 'spaces';
  renderCanvasCamera();
  renderSpacesOverview();
  spacesOverview.hidden = false;
  spacesGrid
    .querySelector(`[data-space-id="${activeSpaceId}"]`)
    ?.focus();
}

function updateUi() {
  const boardActive = isCanvasSpace(activeSpaceId);
  const spatialActive = isSpatialSpace(activeSpaceId);
  anchorsButton.hidden = !boardActive;
  if (!boardActive && anchorsDialog.open) anchorsDialog.close();
  emptyState.hidden = thoughts.some(isThoughtAvailableInActiveSpace);
  if (boardActive) {
    emptyStateTitle.textContent = 'Your Board is empty';
    emptyStateDescription.textContent = 'Add a card, then drag the board to move or pinch to zoom out.';
  } else if (spatialActive) {
    emptyStateTitle.textContent = 'Your knowledge graph is empty';
    emptyStateDescription.textContent = 'Add a thought below. Connections will shape the graph automatically.';
  } else {
    emptyStateTitle.textContent = 'Let your thought take flight';
    emptyStateDescription.textContent = 'Write it below. Drag cards, pin what matters — the rest will move on their own.';
  }
  if (historyDialog.open) renderHistory();
  if (anchorsDialog.open) renderAnchors();
  renderSpatialInspector();
}

function announce(message) {
  announcer.textContent = '';
  window.setTimeout(() => { announcer.textContent = message; }, 10);
}

function animate(timestamp) {
  const delta = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
  lastTimestamp = timestamp;
  const reducedMotion = reducedMotionQuery.matches;
  const motionScale = reducedMotion ? REDUCED_MOTION_TIME_SCALE : 1;

  if (viewMode === 'spaces' || historyDialog.open || anchorsDialog.open) {
    window.requestAnimationFrame(animate);
    return;
  }

  if (isSpatialSpace(activeSpaceId)) {
    window.requestAnimationFrame(animate);
    return;
  }

  if (isCanvasSpace(activeSpaceId)) {
    getActiveThoughts().forEach(renderThought);
    connectionRenderer.update();
    window.requestAnimationFrame(animate);
    return;
  }

  const bounds = getPlayfieldBounds();
  const activeThoughts = getActiveThoughts();
  const activeComponents = magnetComponents.filter((component) => (
    isMagnetComponentAvailableInActiveSpace(component)
    && (
      isMagnetComponentPinned(component)
      || getVisibilityState(component).status !== 'dormant'
    )
  ));

  if (!magnetEditor && !connectionEditor && !thoughtEditor.isOpen()) {
    const hoveredComponentIds = new Set(activeComponents
      .filter((component) => getMagnetComponentMembers(component).some(
        (thought) => thought.element.matches(':hover, :focus-within'),
      ))
      .map((component) => component.id));

    if (knowledgeKindEditor?.thoughtId) {
      const editedThought = getThoughtById(knowledgeKindEditor.thoughtId);
      const editedComponent = editedThought ? getMagnetComponent(editedThought) : null;
      if (editedComponent) hoveredComponentIds.add(editedComponent.id);
    }

    magnetPhysics.advance(delta, {
      activeThoughtIds: new Set(activeThoughts.map((thought) => thought.id)),
      hoveredComponentIds,
      motionScale,
    });
  }

  activeComponents.forEach((component) => {
    if (isMagnetComponentPinned(component) || magnetEditor) return;
    const state = getVisibilityState(component);
    const members = getMagnetComponentMembers(component);
    if (
      state.status === 'entering'
      && members.some((member) => intersectsPlayfield(member, bounds))
    ) {
      state.status = 'visible';
    } else if (
      state.status === 'visible'
      && isMagnetComponentFullyOutside(component, bounds)
    ) {
      hideThought(members[0]);
    }
  });

  activeThoughts.forEach(renderThought);
  connectionRenderer.update();

  if (!magnetEditor && !connectionEditor && !thoughtEditor.isOpen()) {
    maybeSpawnThought(timestamp, reducedMotion);
  }
  window.requestAnimationFrame(animate);
}

function updateAccountButton() {
  accountButton.textContent = auth ? 'Sign out' : 'Sign in';
  accountButton.title = auth ? `Signed in as ${auth.email}. Sign out` : 'Sign in or create an account';
}

function openAuthDialog() {
  knowledgeKindPicker.close();
  authMessage.textContent = '';
  authDialog.showModal();
  authEmail.focus();
}

function setAuthBusy(isBusy) {
  loginButton.disabled = isBusy;
  registerButton.disabled = isBusy;
  authEmail.disabled = isBusy;
  authPassword.disabled = isBusy;
}

async function authenticate(mode) {
  const email = authEmail.value.trim();
  const password = authPassword.value;
  if (!email || !password) return;

  const guestThoughts = thoughts;
  setAuthBusy(true);
  authMessage.textContent = '';
  try {
    const response = await fetch(`${API_URL}/auth/${mode}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const payload = await response.json().catch(() => null);
    if (!response.ok) throw new Error(apiErrorMessage(payload));

    if (!payload.user?.id) {
      throw new Error('The server did not return an account identity. Please try again.');
    }

    auth = {
      id: payload.user.id,
      access: payload.access,
      refresh: payload.refresh,
      email: payload.user?.email || email,
    };
    serverStateReady = false;
    storeAuth();
    const quarantinedLegacyOutbox = quarantineLegacyOutbox(auth.id);
    const cachedAccountThoughts = applyOutboxOperations(
      loadAccountThoughts(auth.id),
      loadOutbox(auth.id),
    );
    const pendingForAccount = loadPendingThoughts(auth.id);
    const thoughtsToSync = mergeThoughts(pendingForAccount, guestThoughts);
    syncPending = thoughtsToSync.length > 0;
    if (syncPending) {
      storePendingThoughts(auth.id, thoughtsToSync);
      localStorage.removeItem(STORAGE_KEY);
    }
    replaceThoughts(mergeThoughts(cachedAccountThoughts, thoughtsToSync));
    updateAccountButton();
    if (quarantinedLegacyOutbox) {
      announce('Older unsynced changes were paused to protect server data.');
    }
    authPassword.value = '';
    const ready = await restoreAuthenticatedThoughts();
    authDialog.close();
    if (ready) {
      announce(mode === 'register' ? 'Account created. Your thoughts are synced.' : 'Signed in.');
    }
  } catch (error) {
    authMessage.textContent = error.message;
  } finally {
    setAuthBusy(false);
  }
}

function signOut(message = 'Signed out. Local thoughts stay on this browser.') {
  knowledgeKindPicker.close();
  saveThoughts();
  window.clearTimeout(outboxRetryTimer);
  outboxRetryDelay = 2000;
  auth = null;
  serverStateReady = true;
  syncPending = false;
  syncOperationId += 1;
  syncInFlight = false;
  localStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  updateAccountButton();
  replaceThoughts(loadStoredThoughts(STORAGE_KEY));
  announce(message);
}

knowledgePickerTrigger.addEventListener('click', openComposerKnowledgeKindPicker);
knowledgePickerTrigger.addEventListener('keydown', (event) => {
  handleKnowledgeKindTriggerKeyDown(event, openComposerKnowledgeKindPicker);
});

input.addEventListener('input', resizeComposer);
input.addEventListener('keydown', (event) => {
  if (event.isComposing || event.key !== 'Enter' || event.shiftKey) return;
  event.preventDefault();
  form.requestSubmit();
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (handlingThoughtSubmit) return;

  const submittedText = input.value;
  if (!submittedText.trim()) return;

  handlingThoughtSubmit = true;
  input.value = '';
  try {
    const added = await addThought(submittedText);
    if (!added && !input.value) input.value = submittedText;
  } finally {
    handlingThoughtSubmit = false;
    resizeComposer();
    input.focus({ preventScroll: true });
  }
});

spatialFitButton.addEventListener('click', () => {
  if (!spatialView?.fitAll()) announce('The Spatial graph is empty.');
});
spatialFocusButton.addEventListener('click', () => {
  if (!selectedThoughtId || !spatialView?.focusThought(selectedThoughtId)) {
    announce('Select a node to focus it.');
  }
});
spatialResetButton.addEventListener('click', () => spatialView?.resetView());
spatialInspectorClose.addEventListener('click', clearThoughtSelection);
spatialInspectorEdit.addEventListener('click', () => {
  const thought = selectedThoughtId ? getThoughtById(selectedThoughtId) : null;
  if (thought) startThoughtTextEditing(thought);
});
spatialInspectorPin.addEventListener('click', toggleSpatialPositionPin);

accountButton.addEventListener('click', () => {
  if (magnetEditor) closeMagnetEditor({ restoreMotion: true });
  if (connectionEditor) closeConnectionEditor();
  if (auth) signOut();
  else openAuthDialog();
});
historyButton.addEventListener('click', () => {
  if (magnetEditor) closeMagnetEditor({ restoreMotion: true });
  if (connectionEditor) closeConnectionEditor();
  openHistory();
});
anchorsButton.addEventListener('click', openAnchors);
spacesButton.addEventListener('click', openSpacesOverview);
spacesClose.addEventListener('click', closeSpacesOverview);
spacesOverview.addEventListener('click', (event) => {
  if (event.target === spacesOverview) closeSpacesOverview();
});
selectionCancel.addEventListener('click', () => {
  if (magnetEditor) {
    closeMagnetEditor({ restoreMotion: true });
    announce('Magnetic group changes canceled.');
  } else if (connectionEditor) {
    closeConnectionEditor();
    announce('Connection changes cancelled.');
  }
});
selectionDone.addEventListener('click', () => {
  if (magnetEditor) commitMagnetEditor();
  else if (connectionEditor) commitConnectionEditor();
});
historyClose.addEventListener('click', () => historyDialog.close());
historySearch.addEventListener('input', renderHistory);
historyDialog.addEventListener('click', (event) => {
  if (event.target === historyDialog) historyDialog.close();
});
anchorsClose.addEventListener('click', () => anchorsDialog.close());
anchorsDialog.addEventListener('click', (event) => {
  if (event.target === anchorsDialog) anchorsDialog.close();
});
authClose.addEventListener('click', () => authDialog.close());
authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  void authenticate('login');
});
registerButton.addEventListener('click', () => void authenticate('register'));
canvas.addEventListener('pointerdown', beginCanvasPan);
canvas.addEventListener('pointermove', (event) => {
  if (!moveCanvasPan(event)) moveDrag(event);
});
canvas.addEventListener('pointerup', (event) => {
  const wasPanning = Boolean(canvasPan);
  stopCanvasPan(event);
  if (!wasPanning) stopDrag(event);
});
canvas.addEventListener('pointercancel', (event) => {
  const wasPanning = Boolean(canvasPan);
  stopCanvasPan(event);
  if (!wasPanning) stopDrag(event, { cancelled: true });
});
canvas.addEventListener('wheel', handleCanvasWheel, { passive: false });

function getCanvasViewportCenter() {
  const bounds = canvas.getBoundingClientRect();
  return {
    x: bounds.left + bounds.width / 2,
    y: bounds.top + bounds.height / 2,
  };
}

canvasZoomIn.addEventListener('click', () => {
  const center = getCanvasViewportCenter();
  animateCanvasScale(canvasCamera.scale / 0.88, center.x, center.y);
});
canvasZoomOut.addEventListener('click', () => {
  const center = getCanvasViewportCenter();
  animateCanvasScale(canvasCamera.scale * 0.88, center.x, center.y);
});
canvasResetZoom.addEventListener('click', () => {
  const center = getCanvasViewportCenter();
  animateCanvasScale(MAX_CANVAS_SCALE, center.x, center.y);
});
canvasControls.addEventListener('pointerenter', () => {
  if (!canvasHudVisible) return;
  clearCanvasHudTimer();
  canvasHudExpanded = true;
  renderCanvasHud();
});
canvasControls.addEventListener('pointerleave', () => {
  if (!canvasHudVisible) return;
  canvasHudExpanded = false;
  renderCanvasHud();
  scheduleCanvasHudCollapse();
});
canvasControls.addEventListener('focusin', () => {
  if (!canvasHudVisible) return;
  clearCanvasHudTimer();
  canvasHudExpanded = true;
  renderCanvasHud();
});
canvasControls.addEventListener('focusout', () => {
  window.requestAnimationFrame(() => {
    if (!canvasHudVisible || canvasControls.contains(document.activeElement)) return;
    canvasHudExpanded = false;
    renderCanvasHud();
    scheduleCanvasHudCollapse();
  });
});
window.addEventListener('resize', () => {
  knowledgeKindPicker.close();
  if (isSpatialSpace(activeSpaceId)) {
    spatialView?.resize();
    return;
  }
  getActiveThoughts().forEach((thought) => {
    measureThought(thought);
    if (isCanvasSpace(activeSpaceId)) {
      applyCanvasPlacement(thought);
    } else if (isFlowSpace(activeSpaceId) && thought.pinned) {
      applyPinnedLayout(thought);
      constrainThought(thought);
    }
    renderThought(thought);
  });
  rebuildMagnetComponents();
  connectionRenderer.update();
  nextSpawnAt = 0;
  scheduleSave();
});
window.addEventListener('keydown', (event) => {
  if (event.isComposing || event.repeat) return;

  if (viewMode === 'spaces') {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSpacesOverview();
      return;
    }

    const tiles = [...spacesGrid.querySelectorAll('.space-tile')];
    const focusedIndex = tiles.indexOf(document.activeElement);
    const currentIndex = focusedIndex >= 0
      ? focusedIndex
      : SPACES.findIndex((space) => space.id === activeSpaceId);
    const columnCount = window.matchMedia('(max-width: 560px)').matches ? 2 : 3;
    let nextIndex = currentIndex;

    if (event.key === 'ArrowLeft' && currentIndex % columnCount > 0) nextIndex -= 1;
    else if (event.key === 'ArrowRight' && currentIndex % columnCount < columnCount - 1 && currentIndex + 1 < tiles.length) nextIndex += 1;
    else if (event.key === 'ArrowUp' && currentIndex >= columnCount) nextIndex -= columnCount;
    else if (event.key === 'ArrowDown' && currentIndex + columnCount < tiles.length) nextIndex += columnCount;
    else return;

    event.preventDefault();
    tiles[nextIndex]?.focus();
    return;
  }

  if (connectionEditor && event.key === 'Escape') {
    event.preventDefault();
    closeConnectionEditor();
    announce('Connection changes cancelled.');
    return;
  }

  if (connectionEditor && event.key === 'Enter') {
    event.preventDefault();
    commitConnectionEditor();
    return;
  }

  const typing = event.target instanceof HTMLElement && event.target.matches(
    'input, textarea, [contenteditable="true"]',
  );
  if (isSpatialSpace(activeSpaceId) && !typing && !thoughtFocusDialog.open) {
    if (event.key === 'Escape' && selectedThoughtId) {
      event.preventDefault();
      clearThoughtSelection();
      return;
    }
    if (event.key.toLowerCase() === 'f' && selectedThoughtId) {
      event.preventDefault();
      spatialView?.focusThought(selectedThoughtId);
      return;
    }
    if (event.key === '0') {
      event.preventDefault();
      spatialView?.fitAll();
      return;
    }
  }

  if (!magnetEditor) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeMagnetEditor({ restoreMotion: true });
    announce('Magnetic group changes canceled.');
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    commitMagnetEditor();
  }
});
document.addEventListener('pointerdown', (event) => {
  if (!event.target.closest('.thought-card, .spatial-toolbar, .spatial-inspector')) {
    clearThoughtSelection();
  }
  if (event.pointerType !== 'touch' || event.target.closest('.thought-card')) return;
  const focusedThought = document.activeElement?.closest?.('.thought-card');
  focusedThought?.blur();
});
window.addEventListener('beforeunload', () => {
  if (magnetEditor) {
    const editor = magnetEditor;
    thoughts.forEach((thought) => {
      const motion = editor.motion.get(thought.id);
      if (motion) Object.assign(thought, motion);
    });
  }
  saveThoughts();
});

themeButton.addEventListener('click', () => {
  themeMode = nextThemeMode(themeMode);
  storeThemeMode();
  applyTheme();
  announce(`Appearance changed to ${themeMode}.`);
});

systemThemeQuery.addEventListener('change', () => {
  if (themeMode === ThemeMode.SYSTEM) applyTheme();
});

applyTheme();
replaceThoughts(thoughts);
renderCanvasCamera();
if (isSpatialSpace(activeSpaceId)) void activateSpatialView();
updateAccountButton();
if (legacyOutboxQuarantined) {
  announce('Older unsynced changes were paused to protect server data.');
}
if (auth) void restoreAuthenticatedThoughts();
window.addEventListener('online', () => {
  if (!auth) return;
  if (!serverStateReady) {
    void restoreAuthenticatedThoughts();
    return;
  }
  if (syncPending) {
    void syncGuestThoughts().then(() => {
      if (isCloudMode()) void flushOutbox();
    });
  } else {
    void flushOutbox();
  }
});
window.requestAnimationFrame(animate);
