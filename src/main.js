const STORAGE_KEY = 'flying-thoughts:v1';
const MAX_THOUGHTS = 50;
const RESERVED_BOTTOM_SPACE = 132;

const canvas = document.querySelector('#canvas');
const form = document.querySelector('#thought-form');
const input = document.querySelector('#thought-input');
const emptyState = document.querySelector('#empty-state');
const template = document.querySelector('#thought-template');
const announcer = document.querySelector('#announcer');

let thoughts = loadThoughts();
let draggedThought = null;
let dragOffset = { x: 0, y: 0 };
let lastTimestamp = performance.now();
let saveTimer;

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
        x: Number.isFinite(thought.x) ? thought.x : 100,
        y: Number.isFinite(thought.y) ? thought.y : 100,
        vx: Number.isFinite(thought.vx) ? thought.vx : randomVelocity(),
        vy: Number.isFinite(thought.vy) ? thought.vy : randomVelocity(),
        rotation: Number.isFinite(thought.rotation) ? thought.rotation : randomBetween(-2.5, 2.5),
        pinned: Boolean(thought.pinned),
        createdAt: thought.createdAt || Date.now(),
        element: null,
        width: 0,
        height: 0,
      }));
  } catch {
    return [];
  }
}

function saveThoughts() {
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

function makeThought(text, restoredThought) {
  const fragment = template.content.cloneNode(true);
  const element = fragment.querySelector('.thought-card');
  const textElement = fragment.querySelector('.thought-text');
  const pinButton = fragment.querySelector('.pin-button');
  const deleteButton = fragment.querySelector('.delete-button');
  textElement.textContent = text;

  const rect = canvas.getBoundingClientRect();
  const thought = restoredThought ?? {
    id: crypto.randomUUID(),
    text,
    x: Math.max(20, rect.width / 2 - 100 + randomBetween(-40, 40)),
    y: Math.max(40, rect.height * 0.56 + randomBetween(-40, 40)),
    vx: randomVelocity(),
    vy: randomVelocity(),
    rotation: randomBetween(-2.5, 2.5),
    pinned: false,
    createdAt: Date.now(),
    element: null,
    width: 0,
    height: 0,
  };

  thought.element = element;
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

function measureThought(thought) {
  thought.width = thought.element.offsetWidth;
  thought.height = thought.element.offsetHeight;
}

function addThought(rawText) {
  const text = rawText.trim();
  if (!text) return;

  if (thoughts.length >= MAX_THOUGHTS) {
    announce(`You can keep up to ${MAX_THOUGHTS} thoughts. Delete one to add a new thought.`);
    return;
  }

  const thought = makeThought(text);
  thoughts.push(thought);
  updateUi();
  scheduleSave();
  announce('Thought added.');
}

function togglePinned(thought) {
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
}

function removeThought(thought) {
  if (draggedThought === thought) stopDrag();
  thought.element.classList.add('is-removing');
  window.setTimeout(() => {
    thought.element.remove();
    thoughts = thoughts.filter((item) => item.id !== thought.id);
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
  // Two passes remove deep intersections when multiple cards collide at once.
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

        // Push along the smallest overlap axis so rectangular cards do not stick diagonally.
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

        // Apply an impulse only when cards move towards one another.
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

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addThought(input.value);
  if (input.value.trim()) input.value = '';
  input.focus();
});

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

thoughts = thoughts.map((thought) => makeThought(thought.text, thought));
updateUi();
window.requestAnimationFrame(animate);
