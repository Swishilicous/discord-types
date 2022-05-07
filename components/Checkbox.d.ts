import { Component } from '.';

type Checkbox = Component & {
  Aligns: {
    CENTER: string;
    TOP: string;
  };

  Shapes: {
    BOX: string;
    ROUND: string;
  };

  Types: {
    DEFAULT: string;
    GHOST: string;
    INVERTED: string;
    ROW: string;
  };

  defaultProps: {
    align: string; // Checkbox.Aligns.CENTER
    color: string;
    disabled: false;
    displayOnly: false;
    onChange: () => {};
    readOnly: false;
    reverse: false;
    shape: string;
    size: 24;
    type: string; // Checkbox.Types.DEFAULT;
    value: false;
  };

  displayName: 'Checkbox';
};

export default Checkbox; 
