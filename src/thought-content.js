import {
  createKnowledgeMeta,
  getThoughtKnowledgeKind,
  normalizeKnowledgeKind,
} from './knowledge-kinds.js';
import { getWebResourcePresentation } from './web-resource-presentation.js';

export const LINKS_META_VERSION = 1;
export const MAX_LINKS_PER_THOUGHT = 10;
export const MAX_LINK_URL_LENGTH = 2048;
export const MAX_LINK_TITLE_LENGTH = 300;
const LEGACY_LINK_META_VERSION = 1;
const MAX_LINK_ID_LENGTH = 100;

function cleanString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function getThoughtCardPreviewText(value) {
  const text = typeof value === 'string' ? value.trimStart() : '';
  return text.split(/\r?\n/, 1)[0].trimEnd();
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

function getLegacyThoughtLink(thought) {
  const link = thought?.meta?.link;
  if (!link || link.version !== LEGACY_LINK_META_VERSION) return null;

  const url = cleanString(link.url);
  if (!url) return null;

  return {
    url,
    title: cleanString(link.title),
  };
}

function getDraftLinks(draft) {
  if (Array.isArray(draft?.links)) return draft.links;

  const legacyUrl = cleanString(draft?.linkUrl);
  const legacyTitle = cleanString(draft?.linkTitle);
  return legacyUrl || legacyTitle
    ? [{ id: 'legacy-link', url: legacyUrl, title: legacyTitle }]
    : [];
}

export function normalizeThoughtLinks(value) {
  if (!Array.isArray(value)) return [];

  const normalized = [];
  const seenUrls = new Set();
  const seenIds = new Set();

  for (let index = 0; index < value.length; index += 1) {
    const item = value[index];
    const url = normalizeHttpUrl(item?.url);
    if (!url || seenUrls.has(url)) continue;

    seenUrls.add(url);
    const baseId = (
      cleanString(item?.id).slice(0, MAX_LINK_ID_LENGTH)
      || `link-${index + 1}`
    );
    let id = baseId;
    let suffix = 2;
    while (seenIds.has(id)) {
      const suffixText = `-${suffix}`;
      id = `${baseId.slice(0, MAX_LINK_ID_LENGTH - suffixText.length)}${suffixText}`;
      suffix += 1;
    }
    seenIds.add(id);
    normalized.push({
      id,
      url,
      title: cleanString(item?.title).slice(0, MAX_LINK_TITLE_LENGTH),
    });
  }

  return normalized.slice(0, MAX_LINKS_PER_THOUGHT);
}

export function getThoughtLinks(thought) {
  const collection = thought?.meta?.links;
  const canonicalLinks = (
    collection?.version === LINKS_META_VERSION
    && Array.isArray(collection.items)
  )
    ? collection.items
    : [];
  const legacyLink = getLegacyThoughtLink(thought);

  return normalizeThoughtLinks([
    ...canonicalLinks,
    ...(legacyLink
      ? [{ id: 'legacy-link', ...legacyLink }]
      : []),
  ]);
}

export function createLinksMeta(links) {
  return {
    version: LINKS_META_VERSION,
    items: normalizeThoughtLinks(links),
  };
}

export function isThoughtResolved(thought) {
  return thought?.meta?.resolved === true;
}

export function createThoughtDraft(thought = null, { kind } = {}) {
  return {
    kind: normalizeKnowledgeKind(kind ?? getThoughtKnowledgeKind(thought)),
    text: typeof thought?.text === 'string' ? thought.text : '',
    resolved: isThoughtResolved(thought),
    links: getThoughtLinks(thought),
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

  const links = getDraftLinks(draft);
  if (links.length > MAX_LINKS_PER_THOUGHT) {
    return {
      valid: false,
      message: `A thought can contain up to ${MAX_LINKS_PER_THOUGHT} web links.`,
    };
  }

  const seenUrls = new Set();
  for (const link of links) {
    const rawUrl = cleanString(link?.url);
    const rawTitle = cleanString(link?.title);
    if (!rawUrl && !rawTitle) continue;
    if (!rawUrl) {
      return {
        valid: false,
        message: 'Enter a URL for every attached web link.',
      };
    }
    if (rawUrl.length > MAX_LINK_URL_LENGTH) {
      return {
        valid: false,
        message: `A web link URL can contain up to ${MAX_LINK_URL_LENGTH} characters.`,
      };
    }

    const normalizedUrl = normalizeHttpUrl(rawUrl);
    if (!normalizedUrl) {
      return {
        valid: false,
        message: 'Enter a valid http or https link without credentials.',
      };
    }
    if (seenUrls.has(normalizedUrl)) {
      return {
        valid: false,
        message: 'The same web link is attached more than once.',
      };
    }
    seenUrls.add(normalizedUrl);

    if (rawTitle.length > MAX_LINK_TITLE_LENGTH) {
      return {
        valid: false,
        message: `A web link title can contain up to ${MAX_LINK_TITLE_LENGTH} characters.`,
      };
    }
  }

  return { valid: true };
}

export function createThoughtContentPatch(draft) {
  const kind = normalizeKnowledgeKind(draft?.kind);
  const links = normalizeThoughtLinks(getDraftLinks(draft));
  const metaPatch = {
    knowledge: createKnowledgeMeta(kind),
    resolved: draft?.resolved === true ? true : null,
    links: links.length ? createLinksMeta(links) : null,
    link: null,
  };

  return {
    text: cleanString(draft?.text),
    meta_patch: metaPatch,
  };
}

export function getThoughtPresentation(thought) {
  const kind = getThoughtKnowledgeKind(thought);
  const text = typeof thought?.text === 'string' ? thought.text : '';
  const resources = getThoughtLinks(thought).map(getWebResourcePresentation);

  return {
    kind,
    primaryText: text,
    secondaryText: '',
    resources,
  };
}

export function getThoughtSearchText(thought) {
  const linkText = getThoughtLinks(thought)
    .flatMap(({ title, url }) => [title, url]);

  return [thought?.text, ...linkText]
    .filter((value) => typeof value === 'string' && value)
    .join(' ');
}
