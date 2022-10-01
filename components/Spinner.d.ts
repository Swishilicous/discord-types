import { Component } from '.';

type Spinner = Component & {
  Type: {
    CHASING_DOTS: string;
    LOW_MOTION: string;
    PULSING_ELLIPSIS: string;
    SPINNING_CIRCLE: string;
    WANDERING_CUBES: string;
  };
};

export default Spinner;
