import { Component } from '.';

type Menu = Component & {
  Menu: Component;
  MenuCheckboxItem: Component;
  MenuControlItem: Component;
  MenuGroup: Component;
  MenuItem: Component;
  MenuRadioItem: Component;
  MenuSeparat: Component;
  MenuSpinner: Component;
  MenuStyle: {
    FIXED: string;
    FLEXIBLE: string;
  };
};

export default Menu;
