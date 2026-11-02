import { ConnectionDirection } from './connections.js';
import { createKnowledgeKindIcon } from './knowledge-kind-picker.js';

const CONNECTION_GROUPS = Object.freeze([
  Object.freeze({
    direction: ConnectionDirection.INCOMING,
    label: 'From',
    symbol: '←',
  }),
  Object.freeze({
    direction: ConnectionDirection.OUTGOING,
    label: 'To',
    symbol: '→',
  }),
  Object.freeze({
    direction: ConnectionDirection.BOTH,
    label: 'Both ways',
    symbol: '↔',
  }),
]);

const MOBILE_VIEWPORT_QUERY = '(max-width: 560px)';

export function getThoughtConnectionActionState({ boardMode, placedOnBoard }) {
  return Object.freeze({
    navigable: !boardMode || placedOnBoard,
    placeable: boardMode && !placedOnBoard,
  });
}

function createConnectionRow(item, group, disabled) {
  const row = document.createElement('div');
  const primary = document.createElement('button');
  const direction = document.createElement('span');
  const kind = document.createElement('span');
  const text = document.createElement('span');

  row.className = 'thought-connection-row';
  row.classList.toggle('is-off-board', item.placeable);

  primary.type = 'button';
  primary.className = 'thought-connection-primary';
  primary.dataset.connectionAction = 'navigate';
  primary.dataset.thoughtId = item.thoughtId;
  primary.disabled = disabled || !item.navigable;
  primary.title = item.text;
  primary.setAttribute('aria-label', `${group.label}: ${item.text}`);

  direction.className = 'thought-connection-direction';
  direction.textContent = group.symbol;
  direction.setAttribute('aria-hidden', 'true');

  kind.className = 'thought-connection-kind';
  kind.append(createKnowledgeKindIcon(item.kind));
  kind.dataset.resolved = String(item.resolved === true);
  kind.setAttribute('aria-hidden', 'true');

  text.className = 'thought-connection-text';
  text.textContent = item.text;

  primary.append(kind, text, direction);
  row.append(primary);

  if (item.placeable) {
    const place = document.createElement('button');
    place.type = 'button';
    place.className = 'thought-connection-place';
    place.dataset.connectionAction = 'place';
    place.dataset.thoughtId = item.thoughtId;
    place.disabled = disabled;
    place.textContent = '+';
    place.title = 'Add to this Board';
    place.setAttribute('aria-label', `Add “${item.text}” to this Board`);
    row.append(place);
  }

  return row;
}

export function createThoughtConnectionsList({
  section,
  toggle,
  list,
  count,
  onAction,
}) {
  let collapsed = window.matchMedia(MOBILE_VIEWPORT_QUERY).matches;

  function renderCollapsedState() {
    section.classList.toggle('is-collapsed', collapsed);
    toggle.setAttribute('aria-expanded', String(!collapsed));
    list.hidden = collapsed;
  }

  toggle.addEventListener('click', () => {
    collapsed = !collapsed;
    renderCollapsedState();
  });

  list.addEventListener('click', (event) => {
    const action = event.target.closest('[data-connection-action]');
    if (!action || action.disabled) return;

    onAction?.({
      type: action.dataset.connectionAction,
      thoughtId: action.dataset.thoughtId,
    });
  });

  function clear() {
    list.replaceChildren();
    count.textContent = '';
    section.hidden = true;
  }

  function render(items, { disabled = false } = {}) {
    if (!items.length) {
      clear();
      return;
    }

    const fragment = document.createDocumentFragment();

    CONNECTION_GROUPS.forEach((group) => {
      const groupItems = items.filter(
        ({ direction }) => direction === group.direction,
      );
      if (!groupItems.length) return;

      const groupElement = document.createElement('div');
      groupElement.className = 'thought-connection-group';
      groupElement.dataset.direction = group.direction;

      groupItems.forEach((item) => {
        groupElement.append(createConnectionRow(item, group, disabled));
      });

      fragment.append(groupElement);
    });

    list.replaceChildren(fragment);
    count.textContent = String(items.length);
    section.hidden = false;
    renderCollapsedState();
  }

  return { clear, render };
}
