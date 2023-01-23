interface Directions {
  DOWN: string;
  LEFT: string;
  RIGHT: string;
  UP: string;
}

interface Caret {
  /**
   * A className alias.
   * @default Directions.DOWN
   */
  direction?: string;

  /**
   * @default 24
   */
  width?: number;

  /**
   * @default 24
   */
  height?: number;

  /**
   * @default "currentColor"
   */
  color?: string;

  /**
   * A className alias.
   */
  transition?: string;

  /**
   * A className alias for the path.
   */
  foreground?: string;

  /**
   * If true the arrow orientation will be forced to DOWN; if false, it will be forced to RIGHT, if undefined nothing changes.
   */
  expanded?: boolean;

  className?: string;
  'aria-label'?: string;

  Directions: Directions;
}

export default Caret;
