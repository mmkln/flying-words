import { createKnowledgeKindIcon } from './knowledge-kind-picker.js';
import { getThoughtCardPreviewText } from './thought-content.js';

const directionPresentation = Object.freeze({
  incoming: { symbol: '←', label: 'Connects to this thought' },
  outgoing: { symbol: '→', label: 'Connected from this thought' },
  both: { symbol: '↔', label: 'Connected in both directions' },
});

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

export function createBoardConnectionsPopover({
  element,
  list,
  count,
  addAllButton,
  onAdd,
  onAddAll,
}) {
  let session = null;

  function render(items) {
    if (!session) return;

    count.textContent = String(items.length);
    addAllButton.hidden = items.length === 0;
    list.replaceChildren();

    items.forEach((item) => {
      const row = document.createElement('div');
      const icon = document.createElement('span');
      const text = document.createElement('span');
      const direction = document.createElement('span');
      const addButton = document.createElement('button');
      const directionView = directionPresentation[item.direction]
        || directionPresentation.outgoing;
      const previewText = getThoughtCardPreviewText(item.text);
      const accessibleText = previewText.length > 80
        ? `${previewText.slice(0, 77)}…`
        : previewText;

      row.className = 'board-connections-item';

      icon.className = 'history-kind-icon board-connections-kind';
      icon.dataset.kind = item.kind;
      icon.dataset.resolved = String(item.resolved);
      icon.append(createKnowledgeKindIcon(item.kind));

      text.className = 'board-connections-text';
      text.textContent = previewText;

      direction.className = 'board-connections-direction';
      direction.textContent = directionView.symbol;
      direction.title = directionView.label;
      direction.setAttribute('aria-label', directionView.label);

      addButton.type = 'button';
      addButton.className = 'board-connections-add';
      addButton.textContent = 'Add';
      addButton.setAttribute('aria-label', `Add “${accessibleText}” to this Board`);
      addButton.addEventListener('click', () => {
        if (!session) return;
        onAdd(session.sourceId, item.id);
      });

      row.append(icon, text, direction, addButton);
      list.append(row);
    });
  }

  function position(trigger) {
    if (window.matchMedia('(max-width: 640px)').matches) {
      element.style.removeProperty('top');
      element.style.removeProperty('left');
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const popoverRect = element.getBoundingClientRect();
    const padding = 12;
    const gap = 8;
    const left = clamp(
      triggerRect.right - popoverRect.width,
      padding,
      window.innerWidth - popoverRect.width - padding,
    );
    const below = triggerRect.bottom + gap;
    const preferredTop = below + popoverRect.height <= window.innerHeight - padding
      ? below
      : triggerRect.top - popoverRect.height - gap;

    element.style.left = `${left}px`;
    element.style.top = `${clamp(
      preferredTop,
      padding,
      window.innerHeight - popoverRect.height - padding,
    )}px`;
  }

  function open({ sourceId, trigger, items }) {
    if (session?.trigger !== trigger) {
      session?.trigger.setAttribute('aria-expanded', 'false');
    }

    session = { sourceId, trigger };
    render(items);
    trigger.setAttribute('aria-expanded', 'true');

    element.style.visibility = 'hidden';
    if (!element.matches(':popover-open')) element.showPopover();
    position(trigger);
    element.style.removeProperty('visibility');
  }

  function update(items) {
    if (!session) return;
    if (!items.length) {
      close();
      return;
    }

    render(items);
    position(session.trigger);
  }

  function close() {
    if (!session) return;
    const { trigger } = session;
    session = null;
    trigger.setAttribute('aria-expanded', 'false');
    if (element.matches(':popover-open')) element.hidePopover();
  }

  addAllButton.addEventListener('click', () => {
    if (session) onAddAll(session.sourceId);
  });

  element.addEventListener('toggle', (event) => {
    if (event.newState !== 'closed' || !session) return;
    session.trigger.setAttribute('aria-expanded', 'false');
    session = null;
  });

  return {
    open,
    update,
    close,
    isOpen: () => Boolean(session),
    getSourceId: () => session?.sourceId || null,
  };
}
