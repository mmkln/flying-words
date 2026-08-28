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

export function parseBrowserSession(value) {
  if (
    !value
    || value.authenticated !== true
    || typeof value.csrfToken !== 'string'
    || typeof value.user?.id !== 'string'
    || typeof value.user?.email !== 'string'
  ) {
    return null;
  }

  return {
    account: {
      id: value.user.id,
      email: value.user.email,
    },
    csrfToken: value.csrfToken,
  };
}

export function buildSessionHeaders({ method = 'GET', hasBody = false, csrfToken = null } = {}) {
  const headers = { Accept: 'application/json' };
  if (hasBody) headers['Content-Type'] = 'application/json';
  if (!['GET', 'HEAD', 'OPTIONS'].includes(method.toUpperCase()) && csrfToken) {
    headers['X-CSRFToken'] = csrfToken;
  }
  return headers;
}
