import { Component } from '.';

type TextInput = Component & {
  Sizes: {
    DEFAULT: string;
    MINI: string;
  };

  defaultProps: {
    autoFocus: false;
    disabled: false;
    maxLength: 999;
    name: '';
    placeholder: '';
    size: string; // TextInput.Sizes.DEFAULT
    type: 'text';
  };

  contextType: any;
  displayName: 'TextInput';
};

export default TextInput;
