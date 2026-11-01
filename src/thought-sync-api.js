function isIdList(value) {
  return Array.isArray(value) && value.every((id) => typeof id === 'string');
}

export function parseThoughtSyncReceipt(payload) {
  if (
    !isIdList(payload?.created_ids)
    || !isIdList(payload?.already_present_ids)
  ) {
    return null;
  }

  return {
    createdIds: payload.created_ids,
    alreadyPresentIds: payload.already_present_ids,
  };
}
