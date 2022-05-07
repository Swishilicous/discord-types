import { Component } from '.';

type Clickable = Component & {
  contextType: any; // React context
  defaultProps: {
    tag: 'div',
    role: 'button',
    tabIndex: 0;
  };

  displayName: 'Clickable';
};

export default Clickable;
