type Flex = JSX.Element & {
  Align: {
    START: string;
    END: string;
    CENTER: string;
    STRETCH: string;
    BASELINE: string;
  };

  Child: JSX.Element & {
    defaultProps: {
      basis: 'auto';
      grow: 1;
      shrink: 1;
      wrap: false;
    };

    displayName: 'FlexChild';
  };

  Direction: {
    VERTICAL: string,
    HORIZONTAL: string;
  };

  Justify: {
    START: string;
    END: string;
    CENTER: string;
    BETWEEN: string;
    AROUND: string;
  };

  Wrap: {
    NO_WRAP: string;
    WRAP: string;
    WRAP_REVERSE: string;
  };

  defaultProps: {
    shrink: 1,
    grow: 1,
    basis: 'auto';
  };

  displayName: 'Flex';
};

export default Flex; 
