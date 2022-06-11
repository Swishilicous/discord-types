/**
 * Webpack's \_\_webpack_require\_\_ instance.
 */
export default interface __webpack_require__ {
  (id: number): any;
  E: Function;
  F: { j: Function; };
  O: Function & { j: Function; };
  a: Function;
  amdD: Function;
  amdO: unknown;
  b: string;
  /**
   * This is where loaded modules are stored; and where webpack searchers do their searching.
   */
  c: {
    [id: number]: {
      id: number | string;
      loaded: boolean;
      exports: any;
    };
  };
  d: Function;
  /**
   * Loads chunks by their ID.
   */
  e: (chunkId: number) => any;
  f: {
    compat: Function;
    j: Function;
    prefetch: Function;
  };
  g: typeof globalThis & { [key: string]: any; };
  hmd: Function;
  l: Function;
  /**
   * This houses all modules that have been pushed, loaded or not.
   * 
   * This can be useful for force lazy-loading classes and other modules that haven't been instantiated yet but have been pushed.
   * 
   * @param ret The return value from the module will be `Object.assign`ed to this object.
   */
  m: (e: {
    exports: any,
    id: number,
    loaded: boolean;
  }, ret: object, req: __webpack_require__) => void;
  n: Function;
  nmd: Function;
  o: Function;
  p: string;
  r: Function;
  s: number;
  t: Function;
  u: Function;
  v: Function;
}
