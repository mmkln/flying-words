const WORD_PATTERN = /[\p{L}\p{N}]+/gu;

export function searchTokens(value) {
  return String(value || '')
    .normalize('NFKC')
    .toLocaleLowerCase()
    .match(WORD_PATTERN) || [];
}

export function normalizeSearchText(value) {
  return searchTokens(value).join(' ');
}

export function matchesThoughtSearch(text, query) {
  const queryTerms = [...new Set(searchTokens(query))];
  if (!queryTerms.length) return true;

  const textTerms = searchTokens(text);
  return queryTerms.every((queryTerm) => (
    textTerms.some((textTerm) => textTerm.startsWith(queryTerm))
  ));
}
