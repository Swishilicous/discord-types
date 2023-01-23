import { Component } from '.';

type SelectTempWrapper = Component & {
  MenuPlacements: {
    BOTTOM: string;
    TOP: string;
  };
};

export default SelectTempWrapper;
