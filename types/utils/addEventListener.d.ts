export declare type UnlistenFunction = () => void;
export declare function addEventListener<F extends ((...args: any[]) => unknown)>(element: HTMLElement, event: string, callback: F, options?: AddEventListenerOptions): UnlistenFunction;
