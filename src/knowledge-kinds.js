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
  {
    value: KnowledgeKind.THOUGHT,
    label: 'Thought',
    icon: 'lightbulb',
    placeholder: 'Enter a thought…',
  },
  {
    value: KnowledgeKind.OBSERVATION,
    label: 'Observation',
    icon: 'eye',
    placeholder: 'Enter an observation…',
  },
  {
    value: KnowledgeKind.EXCERPT,
    label: 'Text excerpt',
    icon: 'document',
    placeholder: 'Enter a text excerpt…',
  },
  {
    value: KnowledgeKind.QUESTION,
    label: 'Question',
    icon: 'question',
    placeholder: 'Enter a question…',
  },
  {
    value: KnowledgeKind.HYPOTHESIS,
    label: 'Hypothesis',
    icon: 'flask',
    placeholder: 'Enter a hypothesis…',
  },
  {
    value: KnowledgeKind.QUOTE,
    label: 'Quote',
    icon: 'quote',
    placeholder: 'Enter a quote…',
  },
  {
    value: KnowledgeKind.LINK,
    label: 'Link',
    icon: 'link',
    placeholder: 'Enter a link…',
  },
  {
    value: KnowledgeKind.RESEARCH_RESULT,
    label: 'Research result',
    icon: 'chart',
    placeholder: 'Enter a research result…',
  },
]);

const knowledgeKindValues = new Set(Object.values(KnowledgeKind));
const knowledgeKindLabels = new Map(
  KnowledgeKindOptions.map(({ value, label }) => [value, label]),
);
const knowledgeKindPlaceholders = new Map(
  KnowledgeKindOptions.map(({ value, placeholder }) => [value, placeholder]),
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

export function getKnowledgeKindPlaceholder(value) {
  return knowledgeKindPlaceholders.get(normalizeKnowledgeKind(value));
}

export function setThoughtKnowledgeKind(thought, value) {
  thought.meta = {
    ...(thought.meta || {}),
    knowledge: createKnowledgeMeta(value),
  };
}
