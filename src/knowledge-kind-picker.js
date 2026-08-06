import {
  KnowledgeKindOptions,
  normalizeKnowledgeKind,
} from './knowledge-kinds.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

const iconDefinitions = Object.freeze({
  lightbulb: [
    ['path', { d: 'M9 18h6' }],
    ['path', { d: 'M10 22h4' }],
    ['path', {
      d: 'M8.7 14.5A6 6 0 1 1 15.3 14.5C14.45 15.25 14 16.1 14 18h-4c0-1.9-.45-2.75-1.3-3.5Z',
    }],
  ],
  eye: [
    ['path', { d: 'M2.1 12s3.5-6 9.9-6 9.9 6 9.9 6-3.5 6-9.9 6-9.9-6-9.9-6Z' }],
    ['circle', { cx: '12', cy: '12', r: '3' }],
  ],
  document: [
    ['path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z' }],
    ['path', { d: 'M14 2v6h6' }],
    ['path', { d: 'M8 13h8M8 17h6' }],
  ],
  question: [
    ['path', { d: 'M8.8 8.6a3.4 3.4 0 1 1 4.7 3.15C12.45 12.3 12 13.05 12 14.4' }],
    ['path', { d: 'M12 18.5h.01' }],
  ],
  flask: [
    ['path', { d: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3' }],
    ['path', { d: 'M7.5 15h9' }],
  ],
  quote: [
    ['path', { d: 'M7 17H4a2 2 0 0 1-2-2v-3a5 5 0 0 1 5-5v3a2 2 0 0 0-2 2h2Z' }],
    ['path', { d: 'M19 17h-3a2 2 0 0 1-2-2v-3a5 5 0 0 1 5-5v3a2 2 0 0 0-2 2h2Z' }],
  ],
  link: [
    ['path', { d: 'M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1' }],
    ['path', { d: 'M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1' }],
  ],
  chart: [
    ['path', { d: 'M4 3v17h17' }],
    ['path', { d: 'm7 16 4-4 3 3 5-7' }],
    ['circle', { cx: '19', cy: '8', r: '1' }],
  ],
});

function createIcon(iconName) {
  const svg = document.createElementNS(SVG_NAMESPACE, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  iconDefinitions[iconName].forEach(([tagName, attributes]) => {
    const element = document.createElementNS(SVG_NAMESPACE, tagName);
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
    svg.append(element);
  });

  return svg;
}

export function createKnowledgeKindIcon(kind) {
  const normalizedKind = normalizeKnowledgeKind(kind);
  const option = KnowledgeKindOptions.find(
    ({ value }) => value === normalizedKind,
  );
  return createIcon(option.icon);
}

export function renderKnowledgeKindTrigger(trigger, kind) {
  const normalizedKind = normalizeKnowledgeKind(kind);
  const option = KnowledgeKindOptions.find(
    ({ value }) => value === normalizedKind,
  );
  trigger.replaceChildren(createKnowledgeKindIcon(normalizedKind));
  trigger.dataset.kind = normalizedKind;
  trigger.setAttribute('aria-label', `Knowledge type: ${option.label}`);
  trigger.title = option.label;
}

export function createKnowledgeKindPicker({
  menu,
  onClose = () => {},
}) {
  let session = null;
  const defaultMenuParent = menu.parentElement;

  const buttons = KnowledgeKindOptions.map((option) => {
    const button = document.createElement('button');
    const label = document.createElement('span');
    button.type = 'button';
    button.className = 'knowledge-picker-option';
    button.dataset.kind = option.value;
    button.setAttribute('role', 'option');
    button.setAttribute('aria-label', option.label);
    button.title = option.label;
    label.className = 'sr-only';
    label.textContent = option.label;
    button.append(createKnowledgeKindIcon(option.value), label);
    button.addEventListener('click', () => {
      if (!session) return;
      session.onSelect(option.value);
      close({ restoreFocus: true });
    });
    menu.append(button);
    return button;
  });

  function renderSelection(value) {
    buttons.forEach((button) => {
      const selected = button.dataset.kind === value;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-selected', String(selected));
    });
  }

  function positionMenu(trigger) {
    menu.style.visibility = 'hidden';
    menu.style.top = '0';
    menu.style.left = '0';
    menu.hidden = false;

    const triggerRect = trigger.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const padding = 8;
    const gap = 8;
    const canOpenAbove = triggerRect.top >= menuRect.height + gap + padding;
    const preferredTop = canOpenAbove
      ? triggerRect.top - menuRect.height - gap
      : triggerRect.bottom + gap;
    const preferredLeft = triggerRect.left + triggerRect.width / 2 - menuRect.width / 2;
    const top = Math.min(
      Math.max(padding, preferredTop),
      window.innerHeight - menuRect.height - padding,
    );
    const left = Math.min(
      Math.max(padding, preferredLeft),
      window.innerWidth - menuRect.width - padding,
    );

    menu.style.top = `${top}px`;
    menu.style.left = `${left}px`;
    menu.style.visibility = '';
  }

  function close({ restoreFocus = false } = {}) {
    if (!session) return;

    const { trigger } = session;
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    session = null;
    if (menu.parentElement !== defaultMenuParent) {
      defaultMenuParent.append(menu);
    }
    if (restoreFocus && trigger.isConnected) trigger.focus();
    onClose();
  }

  function openFor({ trigger, value, onSelect }) {
    if (session?.trigger === trigger) {
      close({ restoreFocus: true });
      return;
    }

    close();
    const normalizedValue = normalizeKnowledgeKind(value);
    session = {
      trigger,
      value: normalizedValue,
      onSelect,
    };
    const openDialog = trigger.closest('dialog[open]');
    (openDialog || defaultMenuParent).append(menu);
    renderSelection(normalizedValue);
    trigger.setAttribute('aria-expanded', 'true');
    positionMenu(trigger);
    buttons.find(
      (button) => button.dataset.kind === normalizedValue,
    )?.focus();
  }

  function moveFocus(offset) {
    const currentIndex = buttons.indexOf(document.activeElement);
    const startIndex = currentIndex >= 0 ? currentIndex : 0;
    const nextIndex = (startIndex + offset + buttons.length) % buttons.length;
    buttons[nextIndex].focus();
  }

  function handleDocumentPointerDown(event) {
    if (!session) return;
    if (menu.contains(event.target) || session.trigger.contains(event.target)) return;
    close();
  }

  function handleMenuKeyDown(event) {
    if (!session) return;
    if ([
      'Escape',
      'Enter',
      ' ',
      'ArrowRight',
      'ArrowDown',
      'ArrowLeft',
      'ArrowUp',
      'Home',
      'End',
    ].includes(event.key)) {
      event.stopPropagation();
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      close({ restoreFocus: true });
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      moveFocus(1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      buttons[0].focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      buttons[buttons.length - 1].focus();
    }
  }

  menu.addEventListener('keydown', handleMenuKeyDown);
  document.addEventListener('pointerdown', handleDocumentPointerDown);

  return {
    openFor,
    close,
    isOpenFor(trigger) {
      return session?.trigger === trigger;
    },
    destroy() {
      close();
      menu.removeEventListener('keydown', handleMenuKeyDown);
      document.removeEventListener('pointerdown', handleDocumentPointerDown);
    },
  };
}
