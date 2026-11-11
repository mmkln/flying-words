function compareBoardReadingOrder(left, right) {
  return left.y - right.y || left.x - right.x;
}

export function buildBoardSelectionText(thoughts, selectedIds) {
  const selected = new Set(selectedIds ?? []);

  return thoughts
    .filter(({ id }) => selected.has(id))
    .sort(compareBoardReadingOrder)
    .map(({ text }) => (
      typeof text === 'string' ? text.trim() : ''
    ))
    .filter(Boolean)
    .join('\n\n');
}
