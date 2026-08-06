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
import {
  addConnection,
  detachIncomingConnections,
  flattenConnections,
  repairConnections,
} from './connections.js';
import { createConnectionRenderer } from './connection-renderer.js';

const STORAGE_KEY = 'flying-thoughts:v1';
const AUTH_STORAGE_KEY = 'flying-thoughts:auth:v1';
const PENDING_SYNC_STORAGE_PREFIX = 'flying-thoughts:pending-sync:v1:';
const ACCOUNT_STORAGE_PREFIX = 'flying-thoughts:account:v1:';
const OUTBOX_STORAGE_PREFIX = 'flying-thoughts:outbox:v1:';
const MAX_THOUGHTS = 200;
const RESERVED_BOTTOM_SPACE = 0;
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
const connectionLayer = document.querySelector('#connection-layer');
const form = document.querySelector('#thought-form');
const input = document.querySelector('#thought-input');
const knowledgePickerTrigger = document.querySelector('#knowledge-picker-trigger');
const knowledgePickerMenu = document.querySelector('#knowledge-picker-menu');
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
const magnetToolbar = document.querySelector('#magnet-toolbar');
const magnetCount = document.querySelector('#magnet-count');
const magnetCancel = document.querySelector('#magnet-cancel');
const magnetDone = document.querySelector('#magnet-done');

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
const componentByThoughtId = new Map();
const magnetPhysics = createMagnetPhysics();
let magnetComponents = [];
let draggedThought = null;
let dragOffset = { x: 0, y: 0 };
let lastTimestamp = performance.now();
let nextSpawnAt = 0;
let saveTimer;
let handlingThoughtSubmit = false;
let outboxFlushInFlight = false;
let outboxRetryTimer;
let outboxRetryDelay = 2000;
let magnetEditor = null;
let connectionEditor = null;
let composerKnowledgeKind = KnowledgeKind.THOUGHT;
let knowledgeKindEditor = null;

const connectionRenderer = createConnectionRenderer({
  layer: connectionLayer,
  getThoughtById,
});

const knowledgeKindPicker = createKnowledgeKindPicker({
  menu: knowledgePickerMenu,
  onClose() {
    knowledgeKindEditor = null;
  },
});

function renderComposerKnowledgeKind(kind) {
  composerKnowledgeKind = kind;
  renderKnowledgeKindTrigger(knowledgePickerTrigger, kind);
  input.placeholder = getKnowledgeKindPlaceholder(kind);
}

renderComposerKnowledgeKind(composerKnowledgeKind);

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
  renderThought(thought);
  saveThoughts();
  if (isCloudMode()) enqueueThoughtUpsert(thought);
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

function getThoughtById(thoughtId) {
  return thoughts.find((thought) => thought.id === thoughtId) || null;
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

function isMagnetComponentPinned(component) {
  return getMagnetComponentMembers(component).some((thought) => thought.pinned);
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
        if (!parent || parent === thought || parent.pinned || thought.pinned) return;

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
  const component = getMagnetComponent(thought);
  if (!component) return;
  getVisibilityState(component).status = 'visible';
  getMagnetComponentMembers(component).forEach((member) => {
    member.element.hidden = false;
  });
}

function hideThought(thought) {
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
    magnetPhysics.setComponentVelocity(component.id, 0, 0);
    members.forEach(renderThought);
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
      !isMagnetComponentPinned(item) && getVisibilityState(item).status === 'dormant'
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

  const target = calculateVisibleTarget();
  const pinnedComponents = magnetComponents.filter(isMagnetComponentPinned);
  const visibleComponentIds = new Set(pinnedComponents.map((component) => component.id));
  let visibleCardCount = pinnedComponents.reduce(
    (count, component) => count + component.memberIds.length,
    0,
  );

  magnetComponents
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

function renderMagnetUi() {
  const selectedCount = magnetEditor?.selectedChildIds.size || 0;
  magnetCount.textContent = `${selectedCount} selected`;
  magnetToolbar.hidden = !magnetEditor;
  canvas.classList.toggle('is-magnet-editing', Boolean(magnetEditor));
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
  renderMagnetUi();
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
  renderMagnetUi();
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
  renderMagnetUi();
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
  if (isCloudMode()) changedThoughts.forEach(enqueueThoughtUpsert);
  announce(`${editor.selectedChildIds.size} thoughts connected.`);
}

function renderConnectionThoughtState(thought) {
  const button = thought.element.querySelector('.connection-button');
  if (!button) return;

  const isSource = thought.id === connectionEditor?.sourceId;
  thought.element.classList.toggle('is-connection-source', isSource);
  button.disabled = Boolean(magnetEditor);
  button.setAttribute('aria-pressed', String(isSource));

  if (isSource) button.title = 'Cancel connection';
  else if (connectionEditor) button.title = 'Connect to this thought';
  else button.title = 'Connect thought';
  button.setAttribute('aria-label', button.title);
}

function renderConnectionUi() {
  canvas.classList.toggle('is-connection-editing', Boolean(connectionEditor));
  renderMagnetUi();
}

function rebuildConnectionLayer() {
  const connections = flattenConnections(thoughts);
  connectionRenderer.setConnections(connections);
  magnetPhysics.syncConnections(connections);
  connectionRenderer.update();
}

function openConnectionEditor(source) {
  if (magnetEditor) {
    announce('Finish editing the magnetic group first.');
    return;
  }
  if (blockEditsDuringAccountSync()) return;

  knowledgeKindPicker.close();
  connectionEditor = { sourceId: source.id };
  showThought(source);
  renderConnectionUi();
  announce('Choose another thought to connect. Escape to cancel.');
}

function closeConnectionEditor() {
  if (!connectionEditor) return;
  connectionEditor = null;
  renderConnectionUi();
}

function handleConnectionButton(thought) {
  if (!connectionEditor) {
    openConnectionEditor(thought);
    return;
  }

  if (connectionEditor.sourceId === thought.id) {
    closeConnectionEditor();
    announce('Connection cancelled.');
    return;
  }

  const source = getThoughtById(connectionEditor.sourceId);
  if (!source) {
    closeConnectionEditor();
    return;
  }

  const result = addConnection(source, thought.id);
  if (result.status === 'duplicate') {
    announce('These thoughts are already connected.');
    return;
  }
  if (result.status === 'limit') {
    announce('This thought has too many connections.');
    return;
  }

  closeConnectionEditor();
  rebuildConnectionLayer();
  saveThoughts();
  if (isCloudMode()) enqueueThoughtUpsert(source);
  announce('Thoughts connected.');
}

function makeThought(text, restoredThought = {}) {
  const fragment = template.content.cloneNode(true);
  const element = fragment.querySelector('.thought-card');
  const textElement = fragment.querySelector('.thought-text');
  const kindButton = fragment.querySelector('.thought-kind-button');
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
  kindButton.addEventListener('click', () => openThoughtKnowledgeKindPicker(thought));
  kindButton.addEventListener('keydown', (event) => {
    handleKnowledgeKindTriggerKeyDown(
      event,
      () => openThoughtKnowledgeKindPicker(thought),
    );
  });
  magnetButton.addEventListener('click', () => handleMagnetButton(thought));
  connectionButton.addEventListener('click', () => handleConnectionButton(thought));
  deleteButton.addEventListener('click', () => removeThought(thought));
  element.addEventListener('pointerdown', (event) => beginDrag(event, thought));
  element.addEventListener('pointerenter', () => element.classList.add('is-hovered'));
  element.addEventListener('pointerleave', () => element.classList.remove('is-hovered'));
  return thought;
}

function replaceThoughts(nextThoughts) {
  knowledgeKindPicker.close();
  magnetEditor = null;
  connectionEditor = null;
  magnetToolbar.hidden = true;
  canvas.classList.remove('is-magnet-editing');
  canvas.classList.remove('is-connection-editing');
  stopDrag();
  thoughts.forEach((thought) => thought.element?.remove());
  thoughts = nextThoughts.map((thought) => makeThought(thought.text, thought));
  const repairedThoughts = new Set([
    ...repairMagnetRelations(),
    ...repairConnections(thoughts),
  ]);
  rebuildMagnetComponents({ preserveVisibility: false });
  initializeThoughtVisibility();
  renderMagnetUi();
  rebuildConnectionLayer();
  updateUi();
  saveThoughts();
  if (isCloudMode()) repairedThoughts.forEach(enqueueThoughtUpsert);
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

  if (magnetEditor || connectionEditor) {
    announce('Finish the current card relationship first.');
    return false;
  }

  if (blockEditsDuringAccountSync()) return false;

  if (thoughts.length >= MAX_THOUGHTS) {
    announce(`You can keep up to ${MAX_THOUGHTS} thoughts. Delete one to add a new thought.`);
    return false;
  }

  const thought = makeThought(text, {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    meta: {
      knowledge: createKnowledgeMeta(composerKnowledgeKind),
    },
  });
  thoughts.push(thought);
  rebuildMagnetComponents();
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

  rebuildMagnetComponents();
  if (thought.pinned) updatePinnedLayoutMeta(thought);

  renderThought(thought);
  saveThoughts();
  announce(thought.pinned ? 'Thought pinned.' : 'Thought unpinned.');

  if (isCloudMode()) enqueueThoughtUpsert(thought);
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
  if (isCloudMode()) changedThoughts.forEach(enqueueThoughtUpsert);
  renderMagnetUi();
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
  if (isCloudMode()) changedConnectionSources.forEach(enqueueThoughtUpsert);
  if (isCloudMode()) enqueueThoughtDelete(thought.id);
  removeThoughtElement(thought);
}

function removeThoughtElement(thought) {
  if (draggedThought === thought) stopDrag();
  thought.element.classList.add('is-removing');
  window.setTimeout(() => {
    thought.element.remove();
    thoughts = thoughts.filter((item) => item !== thought);
    rebuildMagnetComponents();
    renderMagnetUi();
    rebuildConnectionLayer();
    updateUi();
    saveThoughts();
    announce('Thought deleted.');
  }, 180);
}

function beginDrag(event, thought) {
  if (event.target.closest('button, select, input, a')) return;
  if (magnetEditor || connectionEditor) return;
  if (blockEditsDuringAccountSync()) return;
  event.preventDefault();
  if (event.pointerType === 'touch') {
    thought.element.focus({ preventScroll: true });
  }
  draggedThought = thought;
  const bounds = thought.element.getBoundingClientRect();
  dragOffset = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  magnetPhysics.beginDrag(thought.id);
  thought.element.setPointerCapture(event.pointerId);
  thought.element.classList.add('is-dragging');
  thought.element.style.zIndex = String(topZIndex() + 1);
}

function moveDrag(event) {
  if (!draggedThought) return;
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

function stopDrag() {
  if (!draggedThought) return;
  const thought = draggedThought;
  thought.element.classList.remove('is-dragging');
  magnetPhysics.endDrag(thought.id);
  if (thought.pinned) {
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
  const kind = getThoughtKnowledgeKind(thought);
  if (thought.element.dataset.knowledgeKind !== kind) {
    const kindButton = thought.element.querySelector('.thought-kind-button');
    thought.element.dataset.knowledgeKind = kind;
    renderKnowledgeKindTrigger(kindButton, kind);
  }
  thought.element.style.transform = `translate3d(${thought.x}px, ${thought.y}px, 0) rotate(${thought.rotation}deg)`;
  const pinButton = thought.element.querySelector('.pin-button');
  pinButton.title = thought.pinned ? 'Unpin thought' : 'Pin thought';
  pinButton.setAttribute('aria-label', pinButton.title);
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

function focusThoughtFromHistory(thought) {
  historyDialog.close();
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
      contentButton.addEventListener('click', () => focusThoughtFromHistory(thought));
      row.append(kindButton, contentButton);
      item.append(row);
      list.append(item);
    });

    section.append(list);
    historyList.append(section);
  });
}

function openHistory() {
  knowledgeKindPicker.close();
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

function animate(timestamp) {
  const delta = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
  lastTimestamp = timestamp;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (historyDialog.open) {
    window.requestAnimationFrame(animate);
    return;
  }

  const bounds = getPlayfieldBounds();
  const activeThoughts = getActiveThoughts();
  const activeComponents = magnetComponents.filter((component) => (
    isMagnetComponentPinned(component)
    || getVisibilityState(component).status !== 'dormant'
  ));

  if (!magnetEditor && !connectionEditor) {
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
      reducedMotion,
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

  if (!magnetEditor && !connectionEditor) maybeSpawnThought(timestamp, reducedMotion);
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
  knowledgeKindPicker.close();
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

knowledgePickerTrigger.addEventListener('click', openComposerKnowledgeKindPicker);
knowledgePickerTrigger.addEventListener('keydown', (event) => {
  handleKnowledgeKindTriggerKeyDown(event, openComposerKnowledgeKindPicker);
});

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
magnetCancel.addEventListener('click', () => {
  closeMagnetEditor({ restoreMotion: true });
  announce('Magnetic group changes canceled.');
});
magnetDone.addEventListener('click', commitMagnetEditor);
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
  knowledgeKindPicker.close();
  getActiveThoughts().forEach((thought) => {
    measureThought(thought);
    if (thought.pinned) {
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

  if (connectionEditor && event.key === 'Escape') {
    event.preventDefault();
    closeConnectionEditor();
    announce('Connection cancelled.');
    return;
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
