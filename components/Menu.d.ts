import { NamedComponent } from '.';

type Menu = JSX.Element & {
  Menu: NamedComponent<'Menu'>;
  MenuCheckboxItem: JSX.Element;
  MenuControlItem: JSX.Element;
  MenuGroup: JSX.Element;
  MenuItem: JSX.Element;
  MenuRadioItem: JSX.Element;
  MenuSeparat: JSX.Element;
  MenuSpinner: NamedComponent<'MenuSpinner'>;
  MenuStyle: {
    FIXED: string;
    FLEXIBLE: string;
  };
};

export default Menu; 
