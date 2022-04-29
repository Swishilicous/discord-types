type Popout = JSX.Element & {
  Align: {
    BOTTOM: string;
    CENTER: string;
    LEFT: string;
    RIGHT: string;
    TOP: string;
  };

  Animation: {
    NONE: string;
    TRANSLATE: string;
    SCALE: string;
    FADE: string;
  };

  Positions: {
    TOP: string;
    LEFT: string;
    RIGHT: string;
    BOTTOM: string;
    CENTER: string;
  };

  defaultProps: {
    animation: string; // Popout.Animation.TRANSLATE
    autoInvert: true;
    nudgeAlignIntoViewport: true;
    position: string; // Popout.Positions.RIGHT
    positionKey: undefined;
    spacing: 8;
  };

  displayName: 'Popout';
};

export default Popout; 
