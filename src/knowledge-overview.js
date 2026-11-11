const KNOWLEDGE_KINDS = [
  'thought',
  'observation',
  'excerpt',
  'question',
  'hypothesis',
  'quote',
  'link',
  'research_result',
];

const CHANNELS = ['web', 'telegram', 'mcp'];

function nonNegativeInteger(value) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? Math.floor(number) : 0;
}

function percentage(value) {
  return Math.min(100, nonNegativeInteger(value));
}

function normalizedCounts(source, keys) {
  const input = source && typeof source === 'object' ? source : {};
  return Object.fromEntries(keys.map((key) => [key, nonNegativeInteger(input[key])]));
}

export function normalizeKnowledgeOverview(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('The server returned an invalid knowledge overview.');
  }

  const daily = Array.isArray(payload.activity?.daily)
    ? payload.activity.daily.slice(-30).map((point) => ({
        date: typeof point?.date === 'string' ? point.date : '',
        count: nonNegativeInteger(point?.count),
      }))
    : [];

  while (daily.length < 30) daily.unshift({ date: '', count: 0 });

  return Object.freeze({
    total: nonNegativeInteger(payload.total),
    activity: Object.freeze({
      last30Days: nonNegativeInteger(payload.activity?.last_30_days),
      daily: Object.freeze(daily),
    }),
    attention: Object.freeze({
      openQuestions: nonNegativeInteger(payload.attention?.open_questions),
      withoutConnections: nonNegativeInteger(payload.attention?.without_connections),
    }),
    structure: Object.freeze({
      connectedPercent: percentage(payload.structure?.connected_percent),
    }),
    composition: Object.freeze(normalizedCounts(payload.composition, KNOWLEDGE_KINDS)),
    channels: Object.freeze(normalizedCounts(payload.channels, CHANNELS)),
  });
}

export function distributePercentages(values) {
  const safeValues = values.map(nonNegativeInteger);
  const total = safeValues.reduce((sum, value) => sum + value, 0);
  if (!total) return safeValues.map(() => 0);

  const raw = safeValues.map((value) => value * 100 / total);
  const result = raw.map(Math.floor);
  let remaining = 100 - result.reduce((sum, value) => sum + value, 0);
  const order = raw
    .map((value, index) => ({ index, fraction: value - result[index] }))
    .sort((first, second) => second.fraction - first.fraction || first.index - second.index);

  for (let index = 0; index < remaining; index += 1) {
    result[order[index].index] += 1;
  }
  return result;
}

export function createKnowledgeOverviewViewModel(overview) {
  const compositionValues = [
    overview.composition.thought,
    overview.composition.excerpt,
    overview.composition.question,
    overview.composition.observation
      + overview.composition.hypothesis
      + overview.composition.quote
      + overview.composition.link
      + overview.composition.research_result,
  ];
  const channelValues = [
    overview.channels.web,
    overview.channels.telegram,
    overview.channels.mcp,
  ];

  return Object.freeze({
    ...overview,
    compositionPercentages: Object.freeze(distributePercentages(compositionValues)),
    channelPercentages: Object.freeze(distributePercentages(channelValues)),
  });
}

function sparklinePoints(values, width = 144, height = 40) {
  const maximum = Math.max(1, ...values);
  const denominator = Math.max(1, values.length - 1);
  return values.map((value, index) => {
    const x = index * width / denominator;
    const y = height - (value * (height - 4) / maximum) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
}

function setText(root, selector, value) {
  root.querySelector(selector).textContent = String(value);
}

export function createKnowledgeOverview({ root, load, onBack }) {
  const loading = root.querySelector('[data-overview-loading]');
  const content = root.querySelector('[data-overview-content]');
  const error = root.querySelector('[data-overview-error]');
  const retry = root.querySelector('[data-overview-retry]');
  const back = root.querySelector('[data-overview-back]');
  const sparkline = root.querySelector('[data-overview-sparkline]');
  const sparklineArea = root.querySelector('[data-overview-sparkline-area]');
  const connectedBar = root.querySelector('[data-overview-connected-bar]');
  const compositionBars = [...root.querySelectorAll('[data-composition-bar]')];
  const compositionValues = [...root.querySelectorAll('[data-composition-value]')];
  const channelValues = [...root.querySelectorAll('[data-channel-value]')];
  let requestId = 0;

  function renderState(state, message = '') {
    root.dataset.state = state;
    root.setAttribute('aria-busy', String(state === 'loading'));
    loading.hidden = state !== 'loading';
    content.hidden = state !== 'ready';
    error.hidden = state !== 'error';
    if (state === 'error') error.querySelector('p').textContent = message;
  }

  function renderOverview(overview) {
    const model = createKnowledgeOverviewViewModel(overview);
    const points = sparklinePoints(model.activity.daily.map(({ count }) => count));

    setText(root, '[data-overview-total]', model.total.toLocaleString());
    setText(root, '[data-overview-recent]', model.activity.last30Days.toLocaleString());
    setText(root, '[data-overview-open-questions]', model.attention.openQuestions.toLocaleString());
    setText(root, '[data-overview-without-connections]', model.attention.withoutConnections.toLocaleString());
    setText(root, '[data-overview-connected]', `${model.structure.connectedPercent}%`);
    connectedBar.style.width = `${model.structure.connectedPercent}%`;
    connectedBar.parentElement.setAttribute('aria-valuenow', String(model.structure.connectedPercent));
    sparkline.setAttribute('points', points);
    sparklineArea.setAttribute('points', `0,40 ${points} 144,40`);

    model.compositionPercentages.forEach((value, index) => {
      compositionBars[index].style.flexGrow = String(value);
      compositionBars[index].hidden = value === 0;
      compositionValues[index].textContent = `${value}%`;
    });
    model.channelPercentages.forEach((value, index) => {
      channelValues[index].textContent = `${value}%`;
    });
    renderState('ready');
  }

  async function open() {
    const currentRequest = ++requestId;
    renderState('loading');
    try {
      const payload = await load();
      if (currentRequest !== requestId) return;
      renderOverview(normalizeKnowledgeOverview(payload));
    } catch (requestError) {
      if (currentRequest !== requestId) return;
      renderState('error', `Could not load overview: ${requestError.message}`);
    }
  }

  function close() {
    requestId += 1;
  }

  back.addEventListener('click', onBack);
  retry.addEventListener('click', () => void open());
  renderState('idle');

  return { open, close };
}
