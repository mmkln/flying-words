const STORAGE_KEY = 'flying-thoughts:v1';
const AUTH_STORAGE_KEY = 'flying-thoughts:auth:v1';
const PENDING_SYNC_STORAGE_PREFIX = 'flying-thoughts:pending-sync:v1:';
const ACCOUNT_STORAGE_PREFIX = 'flying-thoughts:account:v1:';
const OUTBOX_STORAGE_PREFIX = 'flying-thoughts:outbox:v1:';
const MAX_THOUGHTS = 200;
const RESERVED_BOTTOM_SPACE = 132;
const MIN_VISIBLE_THOUGHTS = 4;
const MAX_VISIBLE_THOUGHTS = 30;
const TARGET_VISIBLE_DENSITY = 0.35;
const RESPAWN_DELAY_MIN = 800;
const RESPAWN_DELAY_MAX = 1400;
const SPAWN_MARGIN = 20;
const LOCAL_API_URL = 'http://127.0.0.1:8000/api/v1';
const PRODUCTION_API_URL = 'https://mxllwords.pythonanywhere.com/api/v1';
const API_URL = ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ? LOCAL_API_URL
  : PRODUCTION_API_URL;

const canvas = document.querySelector('#canvas');
const form = document.querySelector('#thought-form');
const input = document.querySelector('#thought-input');
const emptyState = document.querySelector('#empty-state');
const template = document.querySelector('#thought-template');
const announcer = document.querySelector('#announcer');
const historyButton = document.querySelector('#history-button');
const historyDialog = document.querySelector('#history-dialog');
const historyClose = document.querySelector('#history-close');
const historySearch = document.querySelector('#history-search');
const historyList = document.querySelector('#history-list');
const accountButton = document.querySelector('#account-button');
const authDialog = document.querySelector('#auth-dialog');
const authForm = document.querySelector('#auth-form');
const authEmail = document.querySelector('#auth-email');
const authPassword = document.querySelector('#auth-password');
const authMessage = document.querySelector('#auth-message');
const authClose = document.querySelector('#auth-close');
const registerButton = document.querySelector('#register-button');
const loginButton = document.querySelector('#login-button');

let auth = loadAuth();
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
let syncOperationId = 0;
const visibilityStates = new Map();
let draggedThought = null;
let dragOffset = { x: 0, y: 0 };
let lastTimestamp = performance.now();
let nextSpawnAt = 0;
let saveTimer;
let handlingThoughtSubmit = false;
let outboxFlushInFlight = false;
let outboxRetryTimer;
let outboxRetryDelay = 2000;

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
  return Boolean(auth) && !syncPending;
}

function blockEditsDuringAccountSync() {
  if (!auth || (!syncPending && !syncInFlight)) return false;

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
      && (operation.type === 'upsert' || operation.type === 'delete')
      && (operation.type === 'delete' || typeof operation.payload?.text === 'string')
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
    x: normalize(thought.x / availableWidth),
    y: normalize(thought.y / availableHeight),
  };
}

function updatePinnedLayoutMeta(thought) {
  if (!thought.pinned) return;

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
      text: thought.text.slice(0, 280),
      color: thought.color || 'purple',
      x: Number.isFinite(thought.x) ? thought.x : 100,
      y: Number.isFinite(thought.y) ? thought.y : 100,
      vx: Number.isFinite(thought.vx) ? thought.vx : randomVelocity(),
      vy: Number.isFinite(thought.vy) ? thought.vy : randomVelocity(),
      rotation: Number.isFinite(thought.rotation) ? thought.rotation : randomBetween(-2.5, 2.5),
      pinned: Boolean(thought.pinned),
      meta: thought.meta && typeof thought.meta === 'object' && !Array.isArray(thought.meta)
        ? thought.meta
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

function getVisibilityState(thought) {
  let state = visibilityStates.get(thought.id);
  if (!state) {
    state = { status: 'visible', lastVisibleAt: 0 };
    visibilityStates.set(thought.id, state);
  }
  return state;
}

function isThoughtActive(thought) {
  return thought.pinned || getVisibilityState(thought).status !== 'dormant';
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
  const bounds = getPlayfieldBounds();
  const usableArea = bounds.width * bounds.height;
  const measuredThoughts = thoughts.filter(
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
  const pinnedCount = thoughts.filter((thought) => thought.pinned).length;

  return Math.max(pinnedCount, Math.min(thoughts.length, limitedTarget));
}

function showThought(thought) {
  getVisibilityState(thought).status = 'visible';
  thought.element.hidden = false;
}

function hideThought(thought) {
  if (thought.pinned || thought === draggedThought) return;

  const state = getVisibilityState(thought);
  state.status = 'dormant';
  state.lastVisibleAt = Date.now();
  thought.element.hidden = true;
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

function spawnThoughtFromEdge(thought, reducedMotion = false) {
  const bounds = getPlayfieldBounds();
  const state = getVisibilityState(thought);

  thought.element.hidden = false;
  measureThought(thought);

  if (reducedMotion) {
    state.status = 'visible';
    thought.x = randomBetween(0, Math.max(0, bounds.width - thought.width));
    thought.y = randomBetween(0, Math.max(0, bounds.height - thought.height));
    thought.vx = 0;
    thought.vy = 0;
    renderThought(thought);
    return;
  }

  state.status = 'entering';
  const edge = Math.floor(Math.random() * 4);
  const speed = randomBetween(14, 23);
  const drift = randomBetween(-8, 8);

  if (edge === 0) {
    thought.x = -thought.width - SPAWN_MARGIN;
    thought.y = randomBetween(0, Math.max(0, bounds.height - thought.height));
    thought.vx = speed;
    thought.vy = drift;
  } else if (edge === 1) {
    thought.x = bounds.width + SPAWN_MARGIN;
    thought.y = randomBetween(0, Math.max(0, bounds.height - thought.height));
    thought.vx = -speed;
    thought.vy = drift;
  } else if (edge === 2) {
    thought.x = randomBetween(0, Math.max(0, bounds.width - thought.width));
    thought.y = -thought.height - SPAWN_MARGIN;
    thought.vx = drift;
    thought.vy = speed;
  } else {
    thought.x = randomBetween(0, Math.max(0, bounds.width - thought.width));
    thought.y = bounds.height + SPAWN_MARGIN;
    thought.vx = drift;
    thought.vy = -speed;
  }

  thought.rotation = randomBetween(-2.5, 2.5);
  renderThought(thought);
}

function spawnNextDormantThought(reducedMotion) {
  const thought = thoughts
    .filter((item) => (
      !item.pinned && getVisibilityState(item).status === 'dormant'
    ))
    .sort((first, second) => (
      getVisibilityState(first).lastVisibleAt
      - getVisibilityState(second).lastVisibleAt
    ))[0];

  if (!thought) return false;
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

  const target = calculateVisibleTarget();
  const pinnedThoughts = thoughts.filter((thought) => thought.pinned);
  const availableSlots = Math.max(0, target - pinnedThoughts.length);
  const initialUnpinned = thoughts
    .filter((thought) => !thought.pinned)
    .sort((first, second) => second.createdAt - first.createdAt)
    .slice(0, availableSlots);
  const visibleIds = new Set([
    ...pinnedThoughts.map((thought) => thought.id),
    ...initialUnpinned.map((thought) => thought.id),
  ]);

  thoughts.forEach((thought) => {
    if (visibleIds.has(thought.id)) showThought(thought);
    else hideThought(thought);
  });

  nextSpawnAt = 0;
}

function makeThought(text, restoredThought = {}) {
  const fragment = template.content.cloneNode(true);
  const element = fragment.querySelector('.thought-card');
  const textElement = fragment.querySelector('.thought-text');
  const pinButton = fragment.querySelector('.pin-button');
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
    meta: restoredThought.meta && typeof restoredThought.meta === 'object'
      ? cloneMeta(restoredThought.meta)
      : {},
    createdAt: restoredThought.createdAt || Date.now(),
    element,
    width: 0,
    height: 0,
  };

  textElement.textContent = text;
  canvas.append(element);
  measureThought(thought);
  const hasLocalPosition = (
    Number.isFinite(restoredThought.x) && Number.isFinite(restoredThought.y)
  );
  if (!hasLocalPosition) applyPinnedLayout(thought);
  constrainThought(thought);
  renderThought(thought);

  pinButton.addEventListener('click', () => togglePinned(thought));
  deleteButton.addEventListener('click', () => removeThought(thought));
  element.addEventListener('pointerdown', (event) => beginDrag(event, thought));
  element.addEventListener('pointerenter', () => element.classList.add('is-hovered'));
  element.addEventListener('pointerleave', () => element.classList.remove('is-hovered'));
  return thought;
}

function replaceThoughts(nextThoughts) {
  stopDrag();
  thoughts.forEach((thought) => thought.element?.remove());
  thoughts = nextThoughts.map((thought) => makeThought(thought.text, thought));
  initializeThoughtVisibility();
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

    const existing = merged.get(operation.thoughtId) || {};
    merged.set(operation.thoughtId, apiThoughtToClientThought(
      {
        ...operation.payload,
        id: operation.thoughtId,
      },
      existing,
    ));
  });

  return [...merged.values()];
}

function enqueueThoughtUpsert(thought) {
  if (!isCloudMode()) return;

  const accountId = auth.id;
  const operations = loadOutbox(accountId).filter(
    (operation) => operation.thoughtId !== thought.id,
  );
  const payload = serializeThoughtsForSync([thought])[0];

  operations.push({
    operationId: crypto.randomUUID(),
    thoughtId: thought.id,
    type: 'upsert',
    payload,
  });
  saveOutbox(accountId, operations);
  void flushOutbox();
}

function enqueueThoughtDelete(thoughtId) {
  if (!isCloudMode()) return;

  const accountId = auth.id;
  const operations = loadOutbox(accountId).filter(
    (operation) => operation.thoughtId !== thoughtId,
  );

  operations.push({
    operationId: crypto.randomUUID(),
    thoughtId,
    type: 'delete',
  });
  saveOutbox(accountId, operations);
  void flushOutbox();
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
  if (!response.ok) throw new Error(apiErrorMessage(payload));
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

async function flushOutbox() {
  if (!isCloudMode() || outboxFlushInFlight || !navigator.onLine) return;

  const accountId = auth.id;
  outboxFlushInFlight = true;
  window.clearTimeout(outboxRetryTimer);

  try {
    while (auth?.id === accountId && navigator.onLine) {
      const operation = loadOutbox(accountId)[0];
      if (!operation) break;

      if (operation.type === 'upsert') {
        await requestApi(`/thoughts/${operation.thoughtId}/sync/`, {
          method: 'PUT',
          body: operation.payload,
        });
      } else {
        await requestApi(`/thoughts/${operation.thoughtId}/sync/`, {
          method: 'DELETE',
        });
      }

      if (auth?.id !== accountId) return;

      const remaining = loadOutbox(accountId).filter(
        (item) => item.operationId !== operation.operationId,
      );
      saveOutbox(accountId, remaining);
      outboxRetryDelay = 2000;
    }
  } catch (error) {
    if (auth?.id === accountId) {
      announce(`Changes are safe on this device and will sync later: ${error.message}`);
      scheduleOutboxRetry(accountId);
    }
  } finally {
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
  if (!isCloudMode()) return false;

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

  if (isCloudMode()) void flushOutbox();
  return ready;
}

function addThought(rawText) {
  const text = rawText.trim();
  if (!text) return false;

  if (blockEditsDuringAccountSync()) return false;

  if (thoughts.length >= MAX_THOUGHTS) {
    announce(`You can keep up to ${MAX_THOUGHTS} thoughts. Delete one to add a new thought.`);
    return false;
  }

  const thought = makeThought(text, {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  });
  thoughts.push(thought);
  updateUi();
  saveThoughts();

  if (isCloudMode()) {
    enqueueThoughtUpsert(thought);
    announce('Thought added.');
  } else {
    announce('Thought added locally. Sign in to save thoughts to your account.');
  }

  return true;
}

function togglePinned(thought) {
  if (blockEditsDuringAccountSync()) return;

  thought.pinned = !thought.pinned;
  if (thought.pinned) {
    showThought(thought);
    constrainThought(thought);
    thought.vx = 0;
    thought.vy = 0;
    thought.rotation = 0;
  } else {
    thought.vx = randomVelocity();
    thought.vy = randomVelocity();
    thought.rotation = randomBetween(-2.5, 2.5);
  }

  if (thought.pinned) updatePinnedLayoutMeta(thought);

  renderThought(thought);
  saveThoughts();
  announce(thought.pinned ? 'Thought pinned.' : 'Thought unpinned.');

  if (isCloudMode()) enqueueThoughtUpsert(thought);
}

function removeThought(thought) {
  if (blockEditsDuringAccountSync()) return;
  if (isCloudMode()) enqueueThoughtDelete(thought.id);
  removeThoughtElement(thought);
}

function removeThoughtElement(thought) {
  if (draggedThought === thought) stopDrag();
  thought.element.classList.add('is-removing');
  window.setTimeout(() => {
    thought.element.remove();
    visibilityStates.delete(thought.id);
    thoughts = thoughts.filter((item) => item !== thought);
    updateUi();
    saveThoughts();
    announce('Thought deleted.');
  }, 180);
}

function beginDrag(event, thought) {
  if (event.target.closest('button')) return;
  if (blockEditsDuringAccountSync()) return;
  event.preventDefault();
  draggedThought = thought;
  const bounds = thought.element.getBoundingClientRect();
  dragOffset = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  thought.vx = 0;
  thought.vy = 0;
  thought.element.setPointerCapture(event.pointerId);
  thought.element.classList.add('is-dragging');
  thought.element.style.zIndex = String(topZIndex() + 1);
}

function moveDrag(event) {
  if (!draggedThought) return;
  const bounds = canvas.getBoundingClientRect();
  draggedThought.x = event.clientX - bounds.left - dragOffset.x;
  draggedThought.y = event.clientY - bounds.top - dragOffset.y;
  constrainThought(draggedThought);
  renderThought(draggedThought);
}

function stopDrag() {
  if (!draggedThought) return;
  const thought = draggedThought;
  thought.element.classList.remove('is-dragging');
  if (!thought.pinned) {
    thought.vx = randomVelocity();
    thought.vy = randomVelocity();
  } else {
    updatePinnedLayoutMeta(thought);
    if (isCloudMode()) enqueueThoughtUpsert(thought);
  }
  draggedThought = null;
  scheduleSave();
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

function renderThought(thought) {
  thought.element.classList.toggle('is-pinned', thought.pinned);
  thought.element.style.transform = `translate3d(${thought.x}px, ${thought.y}px, 0) rotate(${thought.rotation}deg)`;
  const pinButton = thought.element.querySelector('.pin-button');
  pinButton.title = thought.pinned ? 'Unpin thought' : 'Pin thought';
  pinButton.setAttribute('aria-label', pinButton.title);
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

function focusThoughtFromHistory(thought) {
  historyDialog.close();
  showThought(thought);
  measureThought(thought);

  if (!thought.pinned) {
    const bounds = getPlayfieldBounds();
    thought.x = Math.max(0, (bounds.width - thought.width) / 2);
    thought.y = Math.max(0, (bounds.height - thought.height) / 2);
    thought.vx = randomVelocity();
    thought.vy = randomVelocity();
    getVisibilityState(thought).status = 'visible';
  }

  thought.element.style.zIndex = String(topZIndex() + 1);
  constrainThought(thought);
  renderThought(thought);
  thought.element.classList.add('is-history-focused');
  window.setTimeout(() => thought.element.classList.remove('is-history-focused'), 900);
  announce('Thought shown on the canvas.');
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
      const button = document.createElement('button');
      const text = document.createElement('span');
      const details = document.createElement('span');
      const time = document.createElement('time');

      button.type = 'button';
      button.className = 'history-item';
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

      button.append(text, details);
      button.addEventListener('click', () => focusThoughtFromHistory(thought));
      item.append(button);
      list.append(item);
    });

    section.append(list);
    historyList.append(section);
  });
}

function openHistory() {
  historySearch.value = '';
  renderHistory();
  historyDialog.showModal();
  historySearch.focus();
}

function updateUi() {
  emptyState.hidden = thoughts.length > 0;
  if (historyDialog.open) renderHistory();
}

function announce(message) {
  announcer.textContent = '';
  window.setTimeout(() => { announcer.textContent = message; }, 10);
}

function resolveCollisions(activeThoughts) {
  for (let pass = 0; pass < 2; pass += 1) {
    for (let firstIndex = 0; firstIndex < activeThoughts.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < activeThoughts.length; secondIndex += 1) {
        const first = activeThoughts[firstIndex];
        const second = activeThoughts[secondIndex];
        const firstCanMove = !first.pinned && first !== draggedThought;
        const secondCanMove = !second.pinned && second !== draggedThought;
        const inverseMassFirst = firstCanMove ? 1 : 0;
        const inverseMassSecond = secondCanMove ? 1 : 0;
        const totalInverseMass = inverseMassFirst + inverseMassSecond;

        if (totalInverseMass === 0) continue;

        const overlapX = Math.min(first.x + first.width, second.x + second.width) - Math.max(first.x, second.x);
        const overlapY = Math.min(first.y + first.height, second.y + second.height) - Math.max(first.y, second.y);
        if (overlapX <= 0 || overlapY <= 0) continue;

        const firstCenterX = first.x + first.width / 2;
        const firstCenterY = first.y + first.height / 2;
        const secondCenterX = second.x + second.width / 2;
        const secondCenterY = second.y + second.height / 2;
        const collisionOnHorizontalAxis = overlapX < overlapY;
        const normalX = collisionOnHorizontalAxis ? (firstCenterX < secondCenterX ? -1 : 1) : 0;
        const normalY = collisionOnHorizontalAxis ? 0 : (firstCenterY < secondCenterY ? -1 : 1);
        const penetration = collisionOnHorizontalAxis ? overlapX : overlapY;
        const correction = Math.max(0, penetration - 0.25) * 0.78 / totalInverseMass;

        if (firstCanMove) {
          first.x += normalX * correction * inverseMassFirst;
          first.y += normalY * correction * inverseMassFirst;
        }
        if (secondCanMove) {
          second.x -= normalX * correction * inverseMassSecond;
          second.y -= normalY * correction * inverseMassSecond;
        }

        const relativeSpeed = (first.vx - second.vx) * normalX + (first.vy - second.vy) * normalY;
        if (relativeSpeed >= 0) continue;

        const restitution = 0.68;
        const impulse = -((1 + restitution) * relativeSpeed) / totalInverseMass;
        if (firstCanMove) {
          first.vx += normalX * impulse * inverseMassFirst;
          first.vy += normalY * impulse * inverseMassFirst;
        }
        if (secondCanMove) {
          second.vx -= normalX * impulse * inverseMassSecond;
          second.vy -= normalY * impulse * inverseMassSecond;
        }
      }
    }
  }
}

function animate(timestamp) {
  const delta = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
  lastTimestamp = timestamp;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (historyDialog.open) {
    window.requestAnimationFrame(animate);
    return;
  }

  if (!reducedMotion) {
    const bounds = getPlayfieldBounds();

    getActiveThoughts().forEach((thought) => {
      if (thought.pinned || thought === draggedThought) return;
      const speed = thought.element.matches(':hover') ? 0.35 : 1;
      thought.x += thought.vx * delta * speed;
      thought.y += thought.vy * delta * speed;

      const state = getVisibilityState(thought);
      if (state.status === 'entering' && intersectsPlayfield(thought, bounds)) {
        state.status = 'visible';
      } else if (state.status === 'visible' && isFullyOutside(thought, bounds)) {
        hideThought(thought);
      }
    });

    const activeThoughts = getActiveThoughts();
    const collisionThoughts = activeThoughts.filter((thought) => (
      thought.pinned || getVisibilityState(thought).status === 'visible'
    ));
    resolveCollisions(collisionThoughts);
    activeThoughts.forEach(renderThought);
  }

  maybeSpawnThought(timestamp, reducedMotion);
  window.requestAnimationFrame(animate);
}

function updateAccountButton() {
  accountButton.textContent = auth ? 'Sign out' : 'Sign in';
  accountButton.title = auth ? `Signed in as ${auth.email}. Sign out` : 'Sign in or create an account';
}

function openAuthDialog() {
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
    storeAuth();
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
  saveThoughts();
  window.clearTimeout(outboxRetryTimer);
  outboxRetryDelay = 2000;
  auth = null;
  syncPending = false;
  syncOperationId += 1;
  syncInFlight = false;
  localStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  updateAccountButton();
  replaceThoughts(loadStoredThoughts(STORAGE_KEY));
  announce(message);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (handlingThoughtSubmit) return;

  const submittedText = input.value;
  if (!submittedText.trim()) return;

  handlingThoughtSubmit = true;
  input.value = '';
  try {
    const added = addThought(submittedText);
    if (!added && !input.value) input.value = submittedText;
  } finally {
    handlingThoughtSubmit = false;
    input.focus();
  }
});

accountButton.addEventListener('click', () => {
  if (auth) signOut();
  else openAuthDialog();
});
historyButton.addEventListener('click', openHistory);
historyClose.addEventListener('click', () => historyDialog.close());
historySearch.addEventListener('input', renderHistory);
historyDialog.addEventListener('click', (event) => {
  if (event.target === historyDialog) historyDialog.close();
});
authClose.addEventListener('click', () => authDialog.close());
authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  void authenticate('login');
});
registerButton.addEventListener('click', () => void authenticate('register'));
canvas.addEventListener('pointermove', moveDrag);
canvas.addEventListener('pointerup', stopDrag);
canvas.addEventListener('pointercancel', stopDrag);
window.addEventListener('resize', () => {
  getActiveThoughts().forEach((thought) => {
    measureThought(thought);
    if (thought.pinned) {
      applyPinnedLayout(thought);
      constrainThought(thought);
    }
    renderThought(thought);
  });
  nextSpawnAt = 0;
  scheduleSave();
});
window.addEventListener('beforeunload', saveThoughts);

replaceThoughts(thoughts);
updateAccountButton();
if (auth) void restoreAuthenticatedThoughts();
window.addEventListener('online', () => {
  if (!auth) return;
  if (syncPending) {
    void syncGuestThoughts().then(() => {
      if (isCloudMode()) void flushOutbox();
    });
  } else {
    void flushOutbox();
  }
});
window.requestAnimationFrame(animate);
