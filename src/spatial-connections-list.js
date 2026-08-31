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

function createConnectionRow(item, group, disabled) {
  const button = document.createElement('button');
  const direction = document.createElement('span');
  const kind = document.createElement('span');
  const text = document.createElement('span');

  button.type = 'button';
  button.className = 'spatial-connection-row';
  button.dataset.thoughtId = item.thoughtId;
  button.disabled = disabled;
  button.title = item.text;
  button.setAttribute('aria-label', `${group.label}: ${item.text}`);

  direction.className = 'spatial-connection-direction';
  direction.textContent = group.symbol;
  direction.setAttribute('aria-hidden', 'true');

  kind.className = 'spatial-connection-kind';
  kind.append(createKnowledgeKindIcon(item.kind));
  kind.setAttribute('aria-hidden', 'true');

  text.className = 'spatial-connection-text';
  text.textContent = item.text;

  button.append(kind, text, direction);
  return button;
}

export function createSpatialConnectionsList({
  section,
  toggle,
  list,
  count,
  onNavigate,
}) {
  let collapsed = false;

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
    const row = event.target.closest('[data-thought-id]');
    if (!row || row.disabled) return;

    onNavigate(row.dataset.thoughtId);
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
      groupElement.className = 'spatial-connection-group';

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
