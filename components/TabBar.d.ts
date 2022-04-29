import { NamedComponent } from '.';

declare enum Looks {
  GREY,
  BRAND,
  CUSTOM
}

type TabBar = JSX.Element & {
  Header: NamedComponent<'Header'>;
  Item: NamedComponent<'Item'> & {
    defaultProps: {
      disableItemStyles: false;
      disabled: false;
      look: 0;
    };
  };

  Looks: typeof Looks;
  Panel: JSX.Element;
  Separator: NamedComponent<'Separator'>;
  Types: {
    SIDE: string;
    TOP: string;
  };

  displayName: 'TabBar';
};

export default TabBar;
