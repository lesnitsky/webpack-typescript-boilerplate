export function expectDefined(value: any, message?: string) {
  if (typeof value === 'undefined') throw new Error(message || 'unexpected undefined');
  if (value === null) throw new Error(message || 'unexpected null');
}

const NOT_EMPTY_STRING_ERROR = 'expected not empty string';

export function expectNonEmptyString(value: string) {
  expectDefined(value, NOT_EMPTY_STRING_ERROR);
  if (value.length == 0) {
    throw new Error(NOT_EMPTY_STRING_ERROR);
  }
}
