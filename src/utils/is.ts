// Extracted from lodash

export function isFunction(value: unknown): boolean {
  return typeof value === 'function'
}

export function isObject(value: unknown): boolean {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function')
}

export function isObjectLike(value: unknown): boolean {
  const type = typeof value;
  return value != null && type === 'object';
}