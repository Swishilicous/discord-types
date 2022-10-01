import { Component } from '.';

type DropdownButton = Component & {
  Colors: {
    BLACK: string;
    BRAND: string;
    BRAND_NEW: string;
    GREEN: string;
    LINK: string;
    PRIMARY: string;
    RED: string;
    TRANSPARENT: string;
    WHITE: string;
    YELLOW: string;
  };

  DropdownSizes: {
    LARGE: string;
    MEDIUM: string;
    SMALL: string;
  };

  Looks: {
    BLANK: string;
    FILLED: string;
    INVERTED: string;
    LINK: string;
    OUTLINED: string;
  };

  Sizes: {
    ICON: string;
    LARGE: string;
    MAX: string;
    MEDIUM: string;
    MIN: string;
    NONE: string;
    SMALL: string;
    TINY: string;
    XLARGE: string;
  };
};

export default DropdownButton;
