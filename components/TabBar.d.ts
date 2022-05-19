import { Component } from '.';

declare enum Looks {
  GREY,
  BRAND,
  CUSTOM
}

type TabBar = Component & {
  Header: Component<'Header'>;
  Item: Component<'Item'> & {
    defaultProps: {
      disableItemStyles: false;
      disabled: false;
      look: 0;
    };
  };

  Looks: typeof Looks;
  Panel: Component;
  Separator: Component<'Separator'>;
  Types: {
    SIDE: string;
    TOP: string;
    TOP_PILL: string;
  };

  displayName: 'TabBar';
};

export default TabBar;
