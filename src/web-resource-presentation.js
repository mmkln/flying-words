function comparableLabel(value) {
  return value
    .trim()
    .replace(/^www\./i, '')
    .replace(/\/$/, '')
    .toLowerCase();
}

function hostnameFromUrl(value) {
  try {
    return new URL(value).hostname.replace(/^www\./i, '');
  } catch {
    return '';
  }
}

export function getWebResourcePresentation({
  url = '',
  title = '',
} = {}) {
  const href = typeof url === 'string' ? url.trim() : '';
  const hostname = hostnameFromUrl(href);
  const explicitTitle = typeof title === 'string' ? title.trim() : '';
  const hasDistinctTitle = Boolean(
    explicitTitle
    && comparableLabel(explicitTitle) !== comparableLabel(hostname),
  );
  const displayTitle = hasDistinctTitle
    ? explicitTitle
    : hostname || explicitTitle || href || 'Web link';
  const displaySubtitle = hasDistinctTitle && hostname ? hostname : '';

  return {
    href,
    hostname,
    explicitTitle,
    displayTitle,
    displaySubtitle,
    cardLabel: hostname || displayTitle,
    accessibleLabel: displaySubtitle
      ? `${displayTitle}, ${displaySubtitle}`
      : displayTitle,
  };
}
