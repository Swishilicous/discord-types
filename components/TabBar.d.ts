import { Component } from '.';

declare enum Looks {
  GREY,
  BRAND,
  CUSTOM,
}

type TabBar = Component & {
  Header: Component;
  Item: Component & {
    disableItemStyles?: false;
    disabled?: false;
    look: 0;
  };

  Looks: typeof Looks;
  Panel: Component;
  Separator: Component;
  Types: {
    SIDE: string;
    TOP: string;
    TOP_PILL: string;
  };
};

export default TabBar;
