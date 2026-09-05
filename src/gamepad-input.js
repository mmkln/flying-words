export const STANDARD_GAMEPAD_BUTTON = Object.freeze({
  SELECT: 0,
  BACK: 1,
  FOCUS: 2,
  FIT_ALL: 3,
  LEFT_TRIGGER: 6,
  RIGHT_TRIGGER: 7,
});

export const GAMEPAD_STICK_DEAD_ZONE = 0.14;
export const GAMEPAD_TRIGGER_DEAD_ZONE = 0.05;

function finiteAxis(value) {
  return Number.isFinite(value) ? value : 0;
}

function buttonValue(button) {
  if (!button) return 0;
  if (Number.isFinite(button.value)) return button.value;
  return button.pressed ? 1 : 0;
}

function normalizeTriggerDifference(value) {
  const absolute = Math.abs(value);
  if (absolute <= GAMEPAD_TRIGGER_DEAD_ZONE) return 0;
  return Math.sign(value) * (
    (absolute - GAMEPAD_TRIGGER_DEAD_ZONE)
    / (1 - GAMEPAD_TRIGGER_DEAD_ZONE)
  );
}

export function normalizeGamepadStick(
  rawX,
  rawY,
  deadZone = GAMEPAD_STICK_DEAD_ZONE,
) {
  const x = finiteAxis(rawX);
  const y = finiteAxis(rawY);
  const length = Math.hypot(x, y);
  if (length <= deadZone) return { x: 0, y: 0 };

  const normalizedLength = Math.min(
    1,
    (length - deadZone) / Math.max(0.0001, 1 - deadZone),
  );

  return {
    x: (x / length) * normalizedLength,
    y: (y / length) * normalizedLength,
  };
}

export function readSpatialGamepad(gamepads, previousButtons = []) {
  const gamepad = Array.from(gamepads || []).find(
    (item) => item?.connected && item.mapping === 'standard',
  );
  if (!gamepad) return null;

  const buttons = Array.from(gamepad.buttons || []).map(
    (button) => Boolean(button?.pressed || buttonValue(button) > 0.5),
  );
  const pressedOnce = (index) => Boolean(
    buttons[index] && !previousButtons[index],
  );

  return {
    index: gamepad.index,
    leftStick: normalizeGamepadStick(gamepad.axes?.[0], gamepad.axes?.[1]),
    rightStick: normalizeGamepadStick(gamepad.axes?.[2], gamepad.axes?.[3]),
    zoom: normalizeTriggerDifference(
      buttonValue(gamepad.buttons?.[STANDARD_GAMEPAD_BUTTON.RIGHT_TRIGGER])
        - buttonValue(gamepad.buttons?.[STANDARD_GAMEPAD_BUTTON.LEFT_TRIGGER]),
    ),
    selectPressed: pressedOnce(STANDARD_GAMEPAD_BUTTON.SELECT),
    backPressed: pressedOnce(STANDARD_GAMEPAD_BUTTON.BACK),
    focusPressed: pressedOnce(STANDARD_GAMEPAD_BUTTON.FOCUS),
    fitAllPressed: pressedOnce(STANDARD_GAMEPAD_BUTTON.FIT_ALL),
    buttons,
  };
}
