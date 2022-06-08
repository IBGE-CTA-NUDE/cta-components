type UnlistenFunction = () => void;

export function addEventListener<F extends ((...args: any[]) => unknown)>(
  element: HTMLElement,
  event: string,
  callback: F,
  options: AddEventListenerOptions = {},
): UnlistenFunction {
  
  element.addEventListener(event, callback, options);

  return () => {
    element.removeEventListener(event, callback, options);
  }
}