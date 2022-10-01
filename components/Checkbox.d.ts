import React from 'react';

interface Checkbox {
  disabled?: boolean;
  readOnly?: boolean;
  value?: boolean;
  shape?: string;
  align?: string;
  className?: string;
  children?: React.ReactNode;
  // default is 24
  size?: number;
  reverse?: boolean;
  checkboxColor?: string;
  displayOnly?: boolean;
  type?: string;
  onClick?: React.InputHTMLAttributes<HTMLInputElement>['onClick'];
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;

  Aligns: {
    CENTER: string;
    TOP: string;
  };

  Shapes: {
    BOX: string;
    ROUND: string;
    SMALL_BOX: string;
  };

  Types: {
    DEFAULT: string;
    GHOST: string;
    INVERTED: string;
    ROW: string;
  };
}

export default Checkbox;
