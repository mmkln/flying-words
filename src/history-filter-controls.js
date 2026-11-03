import {
  KnowledgeKindOptions,
  getKnowledgeKindLabel,
} from './knowledge-kinds.js';
import { createKnowledgeKindIcon } from './knowledge-kind-picker.js';
import {
  clearHistoryFilters,
  countHistoryFilters,
  createHistoryFilters,
  setHistoryFilterFlag,
  toggleHistoryKind,
} from './history-filters.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

function createFlagIcon(flag) {
  const svg = document.createElementNS(SVG_NAMESPACE, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  const definitions = flag === 'anchored'
    ? [
        ['circle', { cx: '12', cy: '5', r: '3' }],
        ['path', { d: 'M12 8v12' }],
        ['path', { d: 'M5 14a7 7 0 0 0 14 0' }],
      ]
    : [
        ['circle', { cx: '12', cy: '12', r: '9' }],
        ['path', { d: 'm8 12 2.5 2.5L16 9' }],
      ];

  definitions.forEach(([tagName, attributes]) => {
    const element = document.createElementNS(SVG_NAMESPACE, tagName);
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
    svg.append(element);
  });

  return svg;
}

function createToken({ label, icon, onRemove }) {
  const token = document.createElement('button');
  const text = document.createElement('span');
  const remove = document.createElement('span');

  token.type = 'button';
  token.className = 'history-filter-token';
  token.setAttribute('aria-label', `Remove ${label} filter`);
  text.textContent = label;
  remove.className = 'history-filter-token-remove';
  remove.textContent = '×';
  remove.setAttribute('aria-hidden', 'true');
  token.append(icon, text, remove);
  token.addEventListener('click', onRemove);
  return token;
}

export function createHistoryFilterControls({
  trigger,
  count,
  tokens,
  popover,
  kindOptions,
  anchoredInput,
  resolvedInput,
  clearButton,
  onChange,
}) {
  let filters = createHistoryFilters();

  const kindButtons = new Map(KnowledgeKindOptions.map((option) => {
    const button = document.createElement('button');
    const icon = document.createElement('span');
    const label = document.createElement('span');
    const check = document.createElement('span');

    button.type = 'button';
    button.className = 'history-filter-option';
    button.dataset.kind = option.value;
    button.setAttribute('aria-pressed', 'false');
    icon.className = 'history-kind-icon history-filter-option-icon';
    icon.dataset.kind = option.value;
    icon.append(createKnowledgeKindIcon(option.value));
    label.className = 'history-filter-option-label';
    label.textContent = option.label;
    check.className = 'history-filter-option-check';
    check.textContent = '✓';
    check.setAttribute('aria-hidden', 'true');
    button.append(icon, label, check);
    button.addEventListener('click', () => {
      onChange(toggleHistoryKind(filters, option.value));
    });
    kindOptions.append(button);
    return [option.value, button];
  }));

  function positionPopover() {
    if (!popover.matches(':popover-open')) return;
    if (window.matchMedia('(max-width: 600px)').matches) {
      popover.style.removeProperty('top');
      popover.style.removeProperty('left');
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const padding = 8;
    const gap = 8;
    const preferredLeft = triggerRect.right - popoverRect.width;
    const left = Math.min(
      Math.max(padding, preferredLeft),
      window.innerWidth - popoverRect.width - padding,
    );
    const canOpenBelow = (
      window.innerHeight - triggerRect.bottom
      >= popoverRect.height + gap + padding
    );
    const top = canOpenBelow
      ? triggerRect.bottom + gap
      : triggerRect.top - popoverRect.height - gap;

    popover.style.left = `${left}px`;
    popover.style.top = `${Math.max(padding, top)}px`;
  }

  function render(nextFilters) {
    filters = createHistoryFilters(nextFilters);
    const activeCount = countHistoryFilters(filters);

    trigger.classList.toggle('is-active', activeCount > 0);
    count.hidden = activeCount === 0;
    count.textContent = String(activeCount);
    clearButton.disabled = activeCount === 0;
    anchoredInput.checked = filters.anchored;
    resolvedInput.checked = filters.resolved;

    kindButtons.forEach((button, kind) => {
      const selected = filters.kinds.includes(kind);
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    tokens.replaceChildren();
    filters.kinds.forEach((kind) => {
      const icon = document.createElement('span');
      icon.className = 'history-kind-icon history-filter-token-icon';
      icon.dataset.kind = kind;
      icon.append(createKnowledgeKindIcon(kind));
      tokens.append(createToken({
        label: getKnowledgeKindLabel(kind),
        icon,
        onRemove: () => onChange(toggleHistoryKind(filters, kind)),
      }));
    });

    if (filters.anchored) {
      const icon = document.createElement('span');
      icon.className = 'history-filter-token-icon is-anchor';
      icon.append(createFlagIcon('anchored'));
      tokens.append(createToken({
        label: 'Anchored',
        icon,
        onRemove: () => onChange(setHistoryFilterFlag(filters, 'anchored', false)),
      }));
    }

    if (filters.resolved) {
      const icon = document.createElement('span');
      icon.className = 'history-filter-token-icon is-resolved';
      icon.append(createFlagIcon('resolved'));
      tokens.append(createToken({
        label: 'Resolved',
        icon,
        onRemove: () => onChange(setHistoryFilterFlag(filters, 'resolved', false)),
      }));
    }

    tokens.hidden = activeCount === 0;
  }

  anchoredInput.addEventListener('change', () => {
    onChange(setHistoryFilterFlag(filters, 'anchored', anchoredInput.checked));
  });
  resolvedInput.addEventListener('change', () => {
    onChange(setHistoryFilterFlag(filters, 'resolved', resolvedInput.checked));
  });
  clearButton.addEventListener('click', () => onChange(clearHistoryFilters()));
  popover.addEventListener('toggle', (event) => {
    const open = event.newState === 'open';
    trigger.setAttribute('aria-expanded', String(open));
    if (open) requestAnimationFrame(positionPopover);
  });
  window.addEventListener('resize', positionPopover, { passive: true });

  render(filters);

  return {
    close() {
      if (popover.matches(':popover-open')) popover.hidePopover();
    },
    render,
  };
}
