type SearchBar = JSX.Element & {
  Sizes: {
    LARGE: string;
    MEDIUM: string;
    SMALL: string;
  };

  defaultProps: {
    autoFocus: false;
    disabled: false;
    gridResults: false;
    preventEscapePropagation: true;
    query: '';
    sections: [];
    selectedColumn: -1;
    selectedRow: -1;
    selectedSection: 0;
    size: string; // SearchBar.Sizes.SMALL
    useKeyboardNavigation: true;
  };

  displayName: 'SearchBar';
};

export default SearchBar; 
