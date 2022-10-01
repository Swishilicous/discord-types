import { Component } from '.';

type Card = Component & {
  Types: {
    BRAND: string;
    CUSTOM: string;
    DANGER: string;
    PRIMARY: string;
    SUCCESS: string;
    WARNING: string;
  };

  defaultProps: {
    editable: false;
    outline: false;
    type: string; // Card.Types.PRIMARY
  };
};

export default Card;
