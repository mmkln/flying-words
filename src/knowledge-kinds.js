export const KnowledgeKind = Object.freeze({
  THOUGHT: 'thought',
  OBSERVATION: 'observation',
  EXCERPT: 'excerpt',
  QUESTION: 'question',
  HYPOTHESIS: 'hypothesis',
  QUOTE: 'quote',
  LINK: 'link',
  RESEARCH_RESULT: 'research_result',
});

export const KnowledgeKindOptions = Object.freeze([
  { value: KnowledgeKind.THOUGHT, label: 'Thought', icon: 'lightbulb' },
  { value: KnowledgeKind.OBSERVATION, label: 'Observation', icon: 'eye' },
  { value: KnowledgeKind.EXCERPT, label: 'Text excerpt', icon: 'document' },
  { value: KnowledgeKind.QUESTION, label: 'Question', icon: 'question' },
  { value: KnowledgeKind.HYPOTHESIS, label: 'Hypothesis', icon: 'flask' },
  { value: KnowledgeKind.QUOTE, label: 'Quote', icon: 'quote' },
  { value: KnowledgeKind.LINK, label: 'Link', icon: 'link' },
  { value: KnowledgeKind.RESEARCH_RESULT, label: 'Research result', icon: 'chart' },
]);

const knowledgeKindValues = new Set(Object.values(KnowledgeKind));
const knowledgeKindLabels = new Map(
  KnowledgeKindOptions.map(({ value, label }) => [value, label]),
);

export function normalizeKnowledgeKind(value) {
  return knowledgeKindValues.has(value) ? value : KnowledgeKind.THOUGHT;
}

export function createKnowledgeMeta(value) {
  return {
    version: 1,
    kind: normalizeKnowledgeKind(value),
  };
}

export function getThoughtKnowledgeKind(thought) {
  return normalizeKnowledgeKind(thought?.meta?.knowledge?.kind);
}

export function getKnowledgeKindLabel(value) {
  return knowledgeKindLabels.get(normalizeKnowledgeKind(value));
}

export function setThoughtKnowledgeKind(thought, value) {
  thought.meta = {
    ...(thought.meta || {}),
    knowledge: createKnowledgeMeta(value),
  };
}
