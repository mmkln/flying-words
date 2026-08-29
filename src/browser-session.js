export function parseAccountHint(serializedValue) {
  try {
    const value = JSON.parse(serializedValue);
    if (!value || typeof value.id !== 'string' || typeof value.email !== 'string') {
      return null;
    }
    return { id: value.id, email: value.email };
  } catch {
    return null;
  }
}

function parseAccount(value) {
  if (!value || typeof value.id !== 'string' || typeof value.email !== 'string') {
    return null;
  }
  return { id: value.id, email: value.email };
}

export function parseTokenSession(value) {
  const account = parseAccount(value?.user);
  if (
    !account
    || typeof value.access !== 'string'
    || !value.access
    || typeof value.refresh !== 'string'
    || !value.refresh
  ) {
    return null;
  }

  return {
    account,
    accessToken: value.access,
    refreshToken: value.refresh,
  };
}

export function parseIdentityResponse(value) {
  return parseAccount(value?.user);
}

export function parseRefreshResponse(value) {
  if (!value || typeof value.access !== 'string' || !value.access) return null;
  if (value.refresh !== undefined && (
    typeof value.refresh !== 'string' || !value.refresh
  )) {
    return null;
  }
  return {
    accessToken: value.access,
    refreshToken: value.refresh || null,
  };
}

export function parseSsoFragment(fragment) {
  const parameters = new URLSearchParams(String(fragment || '').replace(/^#/, ''));
  return {
    code: parameters.get('sso_code'),
    error: parameters.get('sso_error'),
  };
}

export function buildBearerHeaders({ accessToken = null, hasBody = false } = {}) {
  const headers = { Accept: 'application/json' };
  if (hasBody) headers['Content-Type'] = 'application/json';
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  return headers;
}
