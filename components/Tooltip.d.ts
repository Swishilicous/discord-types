import { Component } from '.';

type Tooltip = Component & {
  Colors: {
    BLACK: string;
    BRAND: string;
    CUSTOM: string;
    GREEN: string;
    GREY: string;
    PRIMARY: string;
    RED: string;
    YELLOW: string;
  };

  Positions: {
    BOTTOM: string;
    CENTER: string;
    LEFT: string;
    RIGHT: string;
    TOP: string;
  };

  allowOverflow: false;
  color: string; // Tooltip.Colors.PRIMARY
  disableTooltipPointerEvents: true;
  forceOpen: false;
  hideOnClick: true;
  position: string; // Tooltip.Positions.TOP
  shouldShow: true;
  spacing: number;
};

export default Tooltip;
