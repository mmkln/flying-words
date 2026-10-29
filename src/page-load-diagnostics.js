const DEFAULT_PREFIX = '[Flying Thoughts][page-load]';

function roundedMilliseconds(value) {
  return Math.round(value * 10) / 10;
}

/**
 * Structured page-load diagnostics with both wall-clock and monotonic timing.
 * Callers provide only safe aggregate metadata; thought content, account data,
 * and credentials must never be included in these logs.
 */
export function createPageLoadDiagnostics({
  logger = (message, details) => console.info(message, details),
  wallClock = () => new Date(),
  monotonicClock = () => performance.now(),
  pageStartedAt = 0,
  prefix = DEFAULT_PREFIX,
} = {}) {
  function emit(stage, details, now) {
    const payload = {
      timestamp: wallClock().toISOString(),
      elapsedMs: roundedMilliseconds(now - pageStartedAt),
      ...details,
    };
    logger(`${prefix} ${payload.timestamp} +${payload.elapsedMs}ms ${stage}`, payload);
    return payload;
  }

  function mark(stage, details = {}) {
    return emit(stage, details, monotonicClock());
  }

  function begin(stage, details = {}) {
    const stageStartedAt = monotonicClock();
    emit(`${stage}:start`, details, stageStartedAt);
    let finished = false;

    return (status = 'complete', completionDetails = {}) => {
      if (finished) return null;
      finished = true;
      const finishedAt = monotonicClock();
      return emit(`${stage}:${status}`, {
        ...completionDetails,
        durationMs: roundedMilliseconds(finishedAt - stageStartedAt),
      }, finishedAt);
    };
  }

  return { begin, mark };
}
