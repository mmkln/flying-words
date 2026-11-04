export function renderWebResourceLink(element, resource) {
  if (!resource?.href) {
    element.hidden = true;
    element.textContent = '';
    element.removeAttribute('href');
    element.removeAttribute('title');
    element.removeAttribute('aria-label');
    return;
  }

  element.hidden = false;
  element.href = resource.href;
  element.target = '_blank';
  element.rel = 'noopener noreferrer';
  element.textContent = resource.cardLabel;
  element.title = resource.displaySubtitle
    ? `${resource.displayTitle} — ${resource.displaySubtitle}`
    : resource.displayTitle;
  element.setAttribute(
    'aria-label',
    `Open web link: ${resource.accessibleLabel}`,
  );
}
