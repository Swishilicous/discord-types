import { Component } from '.';

type HeaderBar = Component & {
  Caret: Component;
  Divider: Component<'Divider'>;
  Icon: Component<'Icon'>;
  Title: Component<'Title'>;

  displayName: 'HeaderBar';
};

export default HeaderBar; 
