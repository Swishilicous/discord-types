interface DispatchEvent {
  type: string;
  [key: string]: any;
}

export default class FluxDispatcher {
  /**
   * I have no fucking idea what this does.
   */
  addDependencies(e: unknown, t: unknown): void;

  /**
   * Dispatches an event synchronously.
   *
   * This will error if another dispatch event is already in progress.
   */
  dispatch(event: DispatchEvent): void;

  isDispatching: boolean;

  /**
   * I assume this registers a dispatch event listener but I'm not too sure.
   *
   * @returns The callback token.
   */
  register(
    name: string,
    actionHandler: Function,
    storeDidChange: unknown
  ): string;

  setInterceptor(interceptor: Function): void;

  /**
   * Subscribes to a dispatch event.
   */
  subscribe(name: string, actionHandler: Function): void;

  /**
   * Unsubscribes from a dispatch event using the same exact arguments as the subscribe function.
   */
  unsubscribe(name: string, actionHandler: Function): void;

  /**
   * Sort of like {@link dirtyDispatch} but it doesn't dispatch anything.
   *
   * It runs the function with no arguments and you can use it to essentially log when nothing is being dispatched.
   *
   * Like a "run this when dispatcher stops dispatching" function.
   */
  wait(callback: () => any): void;
}
