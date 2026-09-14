import {
  createKnowledgeMeta,
  getThoughtKnowledgeKind,
  normalizeKnowledgeKind,
} from './knowledge-kinds.js';

export const LINK_META_VERSION = 1;
export const MAX_LINK_URL_LENGTH = 2048;
export const MAX_LINK_TITLE_LENGTH = 300;

function cleanString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function normalizeHttpUrl(value) {
  const rawUrl = cleanString(value);
  if (!rawUrl || rawUrl.length > MAX_LINK_URL_LENGTH) return null;

  try {
    const parsed = new URL(rawUrl);
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;
    if (!parsed.hostname || parsed.username || parsed.password) return null;
    return parsed.href;
  } catch {
    return null;
  }
}

export function normalizeLinkInput(value) {
  const rawUrl = cleanString(value);
  if (!rawUrl || rawUrl.length > MAX_LINK_URL_LENGTH) return null;

  const schemeMatch = rawUrl.match(/^([a-z][a-z\d+.-]*):/i);
  if (schemeMatch) {
    const schemeOrHost = schemeMatch[1].toLowerCase();
    const hostWithPort = (
      /^\d+(?:[/?#]|$)/.test(rawUrl.slice(schemeMatch[0].length))
      && (schemeOrHost === 'localhost' || schemeOrHost.includes('.'))
    );

    if (!hostWithPort) return normalizeHttpUrl(rawUrl);
  }

  return normalizeHttpUrl(`https://${rawUrl}`);
}

export function getThoughtLink(thought) {
  const link = thought?.meta?.link;
  if (!link || link.version !== LINK_META_VERSION) return null;

  const url = cleanString(link.url);
  if (!url) return null;

  return {
    url,
    title: cleanString(link.title),
  };
}

export function createLinkMeta({ url, title = '' }) {
  return {
    version: LINK_META_VERSION,
    url: cleanString(url),
    title: cleanString(title).slice(0, MAX_LINK_TITLE_LENGTH),
  };
}

export function createThoughtDraft(thought = null, { kind } = {}) {
  const link = getThoughtLink(thought);
  return {
    kind: normalizeKnowledgeKind(kind ?? getThoughtKnowledgeKind(thought)),
    text: typeof thought?.text === 'string' ? thought.text : '',
    linkUrl: link?.url || '',
    linkTitle: link?.title || '',
  };
}

export function validateThoughtDraft(draft, { maximumTextLength = 2000 } = {}) {
  const text = cleanString(draft?.text);
  if (!text) return { valid: false, message: 'A thought cannot be empty.' };
  if (text.length > maximumTextLength) {
    return {
      valid: false,
      message: `A thought can contain up to ${maximumTextLength} characters.`,
    };
  }

  const rawUrl = cleanString(draft?.linkUrl);
  const rawTitle = cleanString(draft?.linkTitle);
  if (!rawUrl && !rawTitle) return { valid: true };
  if (!rawUrl) {
    return {
      valid: false,
      message: 'Enter a URL for the attached link.',
    };
  }
  if (rawUrl.length > MAX_LINK_URL_LENGTH) {
    return {
      valid: false,
      message: `A link URL can contain up to ${MAX_LINK_URL_LENGTH} characters.`,
    };
  }
  if (!normalizeHttpUrl(rawUrl)) {
    return {
      valid: false,
      message: 'Enter a valid http or https link without credentials.',
    };
  }
  if (rawTitle.length > MAX_LINK_TITLE_LENGTH) {
    return {
      valid: false,
      message: `A link title can contain up to ${MAX_LINK_TITLE_LENGTH} characters.`,
    };
  }

  return { valid: true };
}

export function createThoughtContentPatch(draft) {
  const kind = normalizeKnowledgeKind(draft?.kind);
  const normalizedUrl = normalizeHttpUrl(draft?.linkUrl);
  const metaPatch = {
    knowledge: createKnowledgeMeta(kind),
    link: normalizedUrl
      ? createLinkMeta({
          url: normalizedUrl,
          title: draft?.linkTitle,
        })
      : null,
  };

  return {
    text: cleanString(draft?.text),
    meta_patch: metaPatch,
  };
}

export function getThoughtPresentation(thought) {
  const kind = getThoughtKnowledgeKind(thought);
  const text = typeof thought?.text === 'string' ? thought.text : '';
  const link = getThoughtLink(thought);

  if (!link) {
    return {
      kind,
      primaryText: text,
      secondaryText: '',
      hostname: '',
      href: '',
      resourceTitle: '',
    };
  }

  let hostname = '';
  try {
    hostname = new URL(link.url).hostname.replace(/^www\./, '');
  } catch {
    // Stored legacy data can still be displayed while the backend remains authoritative.
  }

  return {
    kind,
    primaryText: text,
    secondaryText: '',
    hostname,
    href: link.url,
    resourceTitle: link.title || hostname,
  };
}

export function getThoughtSearchText(thought) {
  const link = getThoughtLink(thought);
  return [thought?.text, link?.title, link?.url]
    .filter((value) => typeof value === 'string' && value)
    .join(' ');
}
