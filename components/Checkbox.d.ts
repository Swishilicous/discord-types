import React from 'react';

interface Checkbox {
  (props: {
    disabled?: boolean;
    readOnly?: boolean;
    value?: boolean;
    shape?: string;
    align?: string;
    className?: string;
    children?: React.ReactNode;
    size?: number;
    reverse?: boolean;
    checkboxColor?: string;
    displayOnly?: boolean;
    type?: string;
    onClick?: React.InputHTMLAttributes<HTMLInputElement>['onClick'];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  }): JSX.Element;

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
}

export default Checkbox; 
