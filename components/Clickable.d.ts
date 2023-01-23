import { Component } from '.';

type Clickable = Component & {
  contextType: import('react').Context<any>;
  tag: 'div';
  role?: 'button';
  tabIndex: 0;
};

export default Clickable;
