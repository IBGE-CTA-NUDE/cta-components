export function assert(
    expression: () => boolean,
    errorMessage: string,
): void {
  const assertion = expression();

  if (assertion) {
    return;
  }

  throw new Error(errorMessage || 'unknown assertion error');
}
