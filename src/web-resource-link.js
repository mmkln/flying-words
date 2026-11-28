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

export function renderWebResourceLinks(
  container,
  resources,
  {
    maxVisible = Infinity,
    linkClass = 'thought-resource-host',
    countClass = 'thought-resource-count',
  } = {},
) {
  const visibleResources = Array.isArray(resources)
    ? resources.filter(({ href } = {}) => href).slice(0, maxVisible)
    : [];
  const fragment = document.createDocumentFragment();

  for (const resource of visibleResources) {
    const link = document.createElement('a');
    link.className = linkClass;
    renderWebResourceLink(link, resource);
    fragment.append(link);
  }

  const hiddenCount = Math.max(0, (resources?.length || 0) - visibleResources.length);
  if (hiddenCount > 0) {
    const count = document.createElement('span');
    count.className = countClass;
    count.textContent = `+${hiddenCount}`;
    count.title = `${hiddenCount} more web ${hiddenCount === 1 ? 'link' : 'links'}`;
    count.setAttribute('aria-label', count.title);
    fragment.append(count);
  }

  container.replaceChildren(fragment);
  container.hidden = visibleResources.length === 0;
}
