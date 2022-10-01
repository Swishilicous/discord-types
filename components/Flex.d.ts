import { Component } from '.';

type Flex = Component & {
  Align: {
    START: string;
    END: string;
    CENTER: string;
    STRETCH: string;
    BASELINE: string;
  };

  Child: Component & {
    basis: 'auto';
    grow: 1;
    shrink: 1;
    wrap: false;
  };

  Direction: {
    VERTICAL: string;
    HORIZONTAL: string;
  };

  Justify: {
    START: string;
    END: string;
    CENTER: string;
    BETWEEN: string;
    AROUND: string;
  };

  Wrap: {
    NO_WRAP: string;
    WRAP: string;
    WRAP_REVERSE: string;
  };

  defaultProps: {
    shrink: 1;
    grow: 1;
    basis: 'auto';
  };
};

export default Flex;
