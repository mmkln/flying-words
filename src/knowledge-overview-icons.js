import { createKnowledgeKindIcon } from './knowledge-kind-picker.js';
import { KnowledgeKind } from './knowledge-kinds.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

const unlinkedIconDefinition = Object.freeze([
  ['path', { d: 'M9 17H7A5 5 0 0 1 7 7h2' }],
  ['path', { d: 'M15 7h2a5 5 0 1 1 0 10h-2' }],
]);

function createUnlinkedIcon() {
  const svg = document.createElementNS(SVG_NAMESPACE, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  unlinkedIconDefinition.forEach(([tagName, attributes]) => {
    const element = document.createElementNS(SVG_NAMESPACE, tagName);
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
    svg.append(element);
  });

  return svg;
}

const attentionIconCreators = Object.freeze({
  question: () => createKnowledgeKindIcon(KnowledgeKind.QUESTION),
  unlinked: createUnlinkedIcon,
});

export function renderKnowledgeOverviewAttentionIcons(root) {
  root.querySelectorAll('[data-overview-attention-icon]').forEach((container) => {
    const createIcon = attentionIconCreators[container.dataset.overviewAttentionIcon];

    if (!createIcon) return;
    const icon = createIcon();
    container.replaceChildren(icon);
  });
}
