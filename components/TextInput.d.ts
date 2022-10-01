import { Component } from '.';

type TextInput = Component & {
  Sizes: {
    DEFAULT: string;
    MINI: string;
  };

  autoFocus?: false;
  disabled?: false;
  maxLength?: 999;
  name?: string;
  placeholder?: string;
  size: string; // TextInput.Sizes.DEFAULT
  type: 'text';

  contextType: any; // react context
};

export default TextInput;
