import { Component } from '.';

type SearchBar = Component & {
  Sizes: {
    LARGE: string;
    MEDIUM: string;
    SMALL: string;
  };

  autoFocus: false;
  disabled: false;
  gridResults: false;
  preventEscapePropagation: true;
  query: string;
  sections: [];
  selectedColumn: -1;
  selectedRow: -1;
  selectedSection: 0;
  size: string; // SearchBar.Sizes.SMALL
  useKeyboardNavigation: true;
};

export default SearchBar;
