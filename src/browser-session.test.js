import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildBearerHeaders,
  parseAccountHint,
  parseIdentityResponse,
  parseRefreshResponse,
  parseSsoFragment,
  parseTokenSession,
} from './browser-session.js';

test('account storage keeps only the non-secret identity hint', () => {
  assert.deepEqual(
    parseAccountHint(JSON.stringify({
      id: 'user-1',
      email: 'user@example.com',
      access: 'legacy-access-token',
      refresh: 'legacy-refresh-token',
    })),
    { id: 'user-1', email: 'user@example.com' },
  );
});

test('token exchange validates identity and both app tokens', () => {
  assert.deepEqual(
    parseTokenSession({
      user: { id: 'user-1', email: 'user@example.com' },
      access: 'access-token',
      refresh: 'refresh-token',
    }),
    {
      account: { id: 'user-1', email: 'user@example.com' },
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
    },
  );
  assert.equal(parseTokenSession({ user: {}, access: 'a', refresh: 'r' }), null);
  assert.equal(parseTokenSession({ user: { id: '1', email: 'e' }, access: 'a' }), null);
});

test('refresh and identity responses have strict contracts', () => {
  assert.deepEqual(parseRefreshResponse({ access: 'next-access' }), {
    accessToken: 'next-access',
    refreshToken: null,
  });
  assert.deepEqual(
    parseRefreshResponse({ access: 'next-access', refresh: 'next-refresh' }),
    { accessToken: 'next-access', refreshToken: 'next-refresh' },
  );
  assert.equal(parseRefreshResponse({ refresh: 'next-refresh' }), null);
  assert.deepEqual(
    parseIdentityResponse({ user: { id: 'user-1', email: 'user@example.com' } }),
    { id: 'user-1', email: 'user@example.com' },
  );
});

test('SSO callback parses one-time code and cancellation', () => {
  assert.deepEqual(parseSsoFragment('#sso_code=code-1'), {
    code: 'code-1',
    error: null,
  });
  assert.deepEqual(parseSsoFragment('#sso_error=access_denied'), {
    code: null,
    error: 'access_denied',
  });
});

test('bearer headers contain no cookie or CSRF state', () => {
  assert.deepEqual(
    buildBearerHeaders({ accessToken: 'access-token', hasBody: true }),
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer access-token',
    },
  );
  assert.deepEqual(buildBearerHeaders(), { Accept: 'application/json' });
});
