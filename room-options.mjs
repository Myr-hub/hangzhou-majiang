export function validateRoom(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    throw new TypeError('Expected room options');
  const keys = Object.keys(input);
  if (keys.length !== 2 || !keys.includes('rounds') || !keys.includes('dealerStart'))
    throw new TypeError('Unexpected fields');
  if (![1,4,8].includes(input.rounds))
    throw new RangeError('Unsupported rounds');
  if (!['two','three'].includes(input.dealerStart))
    throw new RangeError('Unsupported dealer start');
  return {rounds: input.rounds, dealerStart: input.dealerStart};
}
