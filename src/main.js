const STORAGE_KEY = 'flying-thoughts:v1';
const AUTH_STORAGE_KEY = 'flying-thoughts:auth:v1';
const MAX_THOUGHTS = 50;
const RESERVED_BOTTOM_SPACE = 132;
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
let thoughts = loadThoughts();
let draggedThought = null;
let dragOffset = { x: 0, y: 0 };
let lastTimestamp = performance.now();
let saveTimer;

function loadAuth() {
  try {
    const savedAuth = JSON.parse(sessionStorage.getItem(AUTH_STORAGE_KEY));
    if (!savedAuth?.access || !savedAuth?.refresh || !savedAuth?.email) return null;
    return savedAuth;
  } catch {
    return null;
  }
}

function storeAuth() {
  if (auth) sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
}

function loadThoughts() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
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
        createdAt: thought.createdAt || Date.now(),
      }));
  } catch {
    return [];
  }
}

function saveThoughts() {
  if (auth) return;

  const serializableThoughts = thoughts.map(({ element, width, height, ...thought }) => thought);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializableThoughts));
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
    createdAt: restoredThought.createdAt || Date.now(),
    element,
    width: 0,
    height: 0,
  };

  textElement.textContent = text;
  canvas.append(element);
  measureThought(thought);
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
    x: layout.x,
    y: layout.y,
    vx: layout.vx,
    vy: layout.vy,
    rotation: layout.rotation,
    createdAt: Date.parse(record.created_at) || Date.now(),
  };
}

async function requestApi(path, { method = 'GET', body, retry = true } = {}) {
  const headers = { Accept: 'application/json' };
  if (auth?.access) headers.Authorization = `Bearer ${auth.access}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  let response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (response.status === 401 && retry && await refreshAccessToken()) {
    response = await requestApi(path, { method, body, retry: false });
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

async function refreshAccessToken() {
  if (!auth?.refresh) return false;

  const response = await fetch(`${API_URL}/auth/refresh/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ refresh: auth.refresh }),
  });
  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.access) {
    signOut('Your session ended. Please sign in again.');
    return false;
  }

  auth.access = payload.access;
  storeAuth();
  return true;
}

async function loadServerThoughts() {
  if (!auth) return;

  try {
    const layouts = new Map(thoughts.map((thought) => [thought.id, thought]));
    const records = await requestApi('/thoughts/');
    replaceThoughts(records.slice(0, MAX_THOUGHTS).map((record) => (
      apiThoughtToClientThought(record, layouts.get(record.id))
    )));
    announce('Your saved thoughts are ready.');
  } catch (error) {
    announce(`Could not load saved thoughts: ${error.message}`);
  }
}

async function addThought(rawText) {
  const text = rawText.trim();
  if (!text) return false;

  if (thoughts.length >= MAX_THOUGHTS) {
    announce(`You can keep up to ${MAX_THOUGHTS} thoughts. Delete one to add a new thought.`);
    return false;
  }

  if (auth) {
    try {
      const record = await requestApi('/thoughts/', {
        method: 'POST',
        body: { text, color: 'purple' },
      });
      thoughts.push(makeThought(record.text, apiThoughtToClientThought(record)));
      updateUi();
      announce('Thought saved.');
      return true;
    } catch (error) {
      announce(`Could not save thought: ${error.message}`);
      return false;
    }
  }

  thoughts.push(makeThought(text));
  updateUi();
  scheduleSave();
  announce('Thought added locally. Sign in to save thoughts to your account.');
  return true;
}

function togglePinned(thought) {
  const previous = {
    pinned: thought.pinned,
    vx: thought.vx,
    vy: thought.vy,
    rotation: thought.rotation,
  };

  thought.pinned = !thought.pinned;
  if (thought.pinned) {
    thought.vx = 0;
    thought.vy = 0;
    thought.rotation = 0;
  } else {
    thought.vx = randomVelocity();
    thought.vy = randomVelocity();
    thought.rotation = randomBetween(-2.5, 2.5);
  }

  renderThought(thought);
  scheduleSave();
  announce(thought.pinned ? 'Thought pinned.' : 'Thought unpinned.');

  if (auth) void persistPinnedState(thought, previous);
}

async function persistPinnedState(thought, previous) {
  try {
    const record = await requestApi(`/thoughts/${thought.id}/`, {
      method: 'PATCH',
      body: { is_pinned: thought.pinned },
    });
    thought.pinned = record.is_pinned;
    renderThought(thought);
  } catch (error) {
    Object.assign(thought, previous);
    renderThought(thought);
    announce(`Could not update thought: ${error.message}`);
  }
}

function removeThought(thought) {
  if (auth) {
    void deleteServerThought(thought);
    return;
  }
  removeThoughtElement(thought);
}

async function deleteServerThought(thought) {
  try {
    await requestApi(`/thoughts/${thought.id}/`, { method: 'DELETE' });
    removeThoughtElement(thought);
  } catch (error) {
    announce(`Could not delete thought: ${error.message}`);
  }
}

function removeThoughtElement(thought) {
  if (draggedThought === thought) stopDrag();
  thought.element.classList.add('is-removing');
  window.setTimeout(() => {
    thought.element.remove();
    thoughts = thoughts.filter((item) => item !== thought);
    updateUi();
    saveThoughts();
    announce('Thought deleted.');
  }, 180);
}

function beginDrag(event, thought) {
  if (event.target.closest('button')) return;
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

function updateUi() {
  emptyState.hidden = thoughts.length > 0;
}

function announce(message) {
  announcer.textContent = '';
  window.setTimeout(() => { announcer.textContent = message; }, 10);
}

function resolveCollisions() {
  for (let pass = 0; pass < 2; pass += 1) {
    for (let firstIndex = 0; firstIndex < thoughts.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < thoughts.length; secondIndex += 1) {
        const first = thoughts[firstIndex];
        const second = thoughts[secondIndex];
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
          constrainThought(first);
        }
        if (secondCanMove) {
          second.x -= normalX * correction * inverseMassSecond;
          second.y -= normalY * correction * inverseMassSecond;
          constrainThought(second);
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

  if (!reducedMotion) {
    const bounds = canvas.getBoundingClientRect();

    thoughts.forEach((thought) => {
      if (thought.pinned || thought === draggedThought) return;
      const speed = thought.element.matches(':hover') ? 0.35 : 1;
      thought.x += thought.vx * delta * speed;
      thought.y += thought.vy * delta * speed;

      const maxX = Math.max(0, bounds.width - thought.width);
      const maxY = Math.max(0, bounds.height - RESERVED_BOTTOM_SPACE - thought.height);
      if (thought.x <= 0 || thought.x >= maxX) {
        thought.x = Math.min(Math.max(0, thought.x), maxX);
        thought.vx *= -1;
        thought.rotation = randomBetween(-2.5, 2.5);
      }
      if (thought.y <= 0 || thought.y >= maxY) {
        thought.y = Math.min(Math.max(0, thought.y), maxY);
        thought.vy *= -1;
        thought.rotation = randomBetween(-2.5, 2.5);
      }
    });

    resolveCollisions();
    thoughts.forEach(renderThought);
  }

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

    auth = {
      access: payload.access,
      refresh: payload.refresh,
      email: payload.user?.email || email,
    };
    storeAuth();
    updateAccountButton();
    authPassword.value = '';
    authDialog.close();
    await loadServerThoughts();
    announce(mode === 'register' ? 'Account created. Your thoughts are now synced.' : 'Signed in.');
  } catch (error) {
    authMessage.textContent = error.message;
  } finally {
    setAuthBusy(false);
  }
}

function signOut(message = 'Signed out. Local thoughts stay on this browser.') {
  auth = null;
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  updateAccountButton();
  replaceThoughts(loadThoughts());
  announce(message);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const added = await addThought(input.value);
  if (added) input.value = '';
  input.focus();
});

accountButton.addEventListener('click', () => {
  if (auth) signOut();
  else openAuthDialog();
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
  thoughts.forEach((thought) => {
    measureThought(thought);
    constrainThought(thought);
    renderThought(thought);
  });
  scheduleSave();
});
window.addEventListener('beforeunload', saveThoughts);

replaceThoughts(thoughts);
updateAccountButton();
if (auth) void loadServerThoughts();
window.requestAnimationFrame(animate);
