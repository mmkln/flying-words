const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export const ConnectionActionState = Object.freeze({
  IDLE: 'idle',
  SOURCE: 'source',
  AVAILABLE: 'available',
  SELECTED: 'selected',
});

const iconDefinitions = Object.freeze({
  link: [
    ['circle', { cx: '5', cy: '12', r: '3' }],
    ['circle', { cx: '19', cy: '12', r: '3' }],
    ['path', { d: 'M8 12h8' }],
  ],
  plus: [
    ['path', { d: 'M12 5v14M5 12h14' }],
  ],
  check: [
    ['path', { d: 'm5 12 4 4L19 6' }],
  ],
});

export function getConnectionActionState({
  editing = false,
  source = false,
  selected = false,
} = {}) {
  if (!editing) return ConnectionActionState.IDLE;
  if (source) return ConnectionActionState.SOURCE;
  if (selected) return ConnectionActionState.SELECTED;
  return ConnectionActionState.AVAILABLE;
}

function createIcon(name) {
  const svg = document.createElementNS(SVG_NAMESPACE, 'svg');
  svg.classList.add(
    'connection-action-icon',
    `connection-action-icon-${name}`,
  );
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', name === 'check' ? '2.2' : '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  iconDefinitions[name].forEach(([tagName, attributes]) => {
    const element = document.createElementNS(SVG_NAMESPACE, tagName);
    Object.entries(attributes).forEach(([attribute, value]) => {
      element.setAttribute(attribute, value);
    });
    svg.append(element);
  });

  return svg;
}

function initializeConnectionActionButton(button) {
  if (button.dataset.connectionActionReady === 'true') return;

  button.replaceChildren(
    createIcon('link'),
    createIcon('plus'),
    createIcon('check'),
  );
  button.dataset.connectionActionReady = 'true';
}

export function renderConnectionActionButton(button, {
  state,
  title,
  ariaLabel = title,
}) {
  initializeConnectionActionButton(button);

  button.dataset.connectionActionState = state;
  button.title = title;
  button.setAttribute('aria-label', ariaLabel);
  button.setAttribute('aria-pressed', String(
    state === ConnectionActionState.SOURCE
    || state === ConnectionActionState.SELECTED,
  ));
}
