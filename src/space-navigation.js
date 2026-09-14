export const SPACE_QUERY_PARAMETER = 'space';

export function readSpaceIdFromSearch(search) {
  const params = new URLSearchParams(search);
  return params.get(SPACE_QUERY_PARAMETER)?.trim() || null;
}

export function buildSpaceUrl(href, spaceId) {
  const url = new URL(href);
  url.searchParams.set(SPACE_QUERY_PARAMETER, spaceId);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function resolveSpaceId({
  requestedSpaceId,
  rememberedSpaceId,
  isValid,
  fallbackSpaceId,
}) {
  if (requestedSpaceId && isValid(requestedSpaceId)) {
    return requestedSpaceId;
  }

  if (rememberedSpaceId && isValid(rememberedSpaceId)) {
    return rememberedSpaceId;
  }

  return fallbackSpaceId;
}
