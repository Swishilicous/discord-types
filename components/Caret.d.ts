import { Component } from '.';

type Caret = Component & {
  Directions: {
    DOWN: string;
    LEFT: string;
    RIGHT: string;
    UP: string;
  };

  displayName: 'Caret';
};

export default Caret;
