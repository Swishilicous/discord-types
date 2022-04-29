type Tooltip = JSX.Element & {
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

  defaultProps: {
    allowOverflow: false;
    color: string; // Tooltip.Colors.PRIMARY
    disableTooltipPointerEvents: true;
    forceOpen: false;
    hideOnClick: true;
    position: string; // Tooltip.Positions.TOP
    shouldShow: true;
    spacing: number;
  };

  displayName: 'Tooltip';
};

export default Tooltip; 
