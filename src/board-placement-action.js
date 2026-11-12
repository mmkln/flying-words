import { getThoughtCardPreviewText } from './thought-content.js';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const ACCESSIBLE_TEXT_LIMIT = 80;

export function getBoardPlacementActionLabel(thoughtText) {
  const previewText = getThoughtCardPreviewText(thoughtText);
  const accessibleText = previewText.length > ACCESSIBLE_TEXT_LIMIT
    ? `${previewText.slice(0, ACCESSIBLE_TEXT_LIMIT - 3)}…`
    : previewText;

  return accessibleText
    ? `Add “${accessibleText}” to this Board`
    : 'Add thought to this Board';
}

function createPlusIcon() {
  const svg = document.createElementNS(SVG_NAMESPACE, 'svg');
  const path = document.createElementNS(SVG_NAMESPACE, 'path');

  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  path.setAttribute('d', 'M12 5v14M5 12h14');
  svg.append(path);

  return svg;
}

export function createBoardPlacementActionButton({
  thoughtText = '',
  disabled = false,
} = {}) {
  const button = document.createElement('button');
  const label = getBoardPlacementActionLabel(thoughtText);

  button.type = 'button';
  button.className = 'board-placement-action';
  button.disabled = disabled;
  button.title = 'Add to this Board';
  button.setAttribute('aria-label', label);
  button.append(createPlusIcon());

  return button;
}
