type NamedComponent<T> = JSX.Element & { displayName: T; };

export type DropdownButton = JSX.Element & {
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

  displayName: 'DropdownButton';
};

export type Card = JSX.Element & {
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

  displayName: 'Card';
};

export type Caret = JSX.Element & {
  Directions: {
    DOWN: string;
    LEFT: string;
    RIGHT: string;
    UP: string;
  };

  displayName: 'Caret';
};

export type Checkbox = JSX.Element & {
  Aligns: {
    CENTER: string;
    TOP: string;
  };

  Shapes: {
    BOX: string;
    ROUND: string;
  };

  Types: {
    DEFAULT: string;
    GHOST: string;
    INVERTED: string;
    ROW: string;
  };

  defaultProps: {
    align: string; // Checkbox.Aligns.CENTER
    color: string;
    disabled: false;
    displayOnly: false;
    onChange: () => {};
    readOnly: false;
    reverse: false;
    shape: string;
    size: 24;
    type: string; // Checkbox.Types.DEFAULT;
    value: false;
  };

  displayName: 'Checkbox';
};

export type Clickable = JSX.Element & {
  contextType: any; // React context
  defaultProps: {
    tag: 'div',
    role: 'button',
    tabIndex: 0;
  };

  displayName: 'Clickable';
};

export type Flex = JSX.Element & {
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

export type FormItem = JSX.Element & {
  Tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
  };

  displayName: 'FormItem';
};

export type FormNotice = JSX.Element & {
  Types: {
    BRAND: string;
    CUSTOM: string;
    DANGER: string;
    PRIMARY: string;
    SUCCESS: string;
    WARNING: string;
  };

  displayName: 'FormNotice';
};

export type FormText = JSX.Element & {
  Types: {
    DEFAULT: string;
    DESCRIPTION: string;
    ERROR: string;
    INPUT_PLACEHOLDER: string;
    LABEL_BOLD: string;
    LABEL_DESCRIPTOR: string;
    LABEL_SELECTED: string;
    SUCCESS: string;
  };

  displayName: 'FormText';
};

export type FormTitle = JSX.Element & {
  Tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
  };

  displayName: 'FormTitle';
};

export type HeaderBar = JSX.Element & {
  Caret: JSX.Element;
  Divider: NamedComponent<'Divider'>;
  Icon: NamedComponent<'Icon'>;
  Title: NamedComponent<'Title'>;

  displayName: 'HeaderBar';
};

export type Markdown = JSX.Element & {
  defaultProps: {
    output: Function;
    parser: Function;
  };

  rules: Record<string, {
    html: Function | undefined;
    match: Function | undefined;
    order: number;
    parse: Function | undefined;
    quality?: Function;
    react: Function | undefined;
  }>;

  displayName: 'Markdown';
};

export type Menu = JSX.Element & {
  Menu: NamedComponent<'Menu'>;
  MenuCheckboxItem: JSX.Element;
  MenuControlItem: JSX.Element;
  MenuGroup: JSX.Element;
  MenuItem: JSX.Element;
  MenuRadioItem: JSX.Element;
  MenuSeparat: JSX.Element;
  MenuSpinner: NamedComponent<'MenuSpinner'>;
  MenuStyle: {
    FIXED: string;
    FLEXIBLE: string;
  };
};

export type Modal = {
  ModalCloseButton: NamedComponent<'ModalCloseButton'>;
  ModalContent: NamedComponent<'ModalContent'>;
  ModalFooter: NamedComponent<'ModalFooter'>;
  ModalHeader: NamedComponent<'ModalHeader'>;
  ModalListContent: NamedComponent<'ModalListContent'>;
  ModalRoot: NamedComponent<'ModalRoot'>;
  ModalSize: {
    DYNAMIC: string;
    LARGE: string;
    MEDIUM: string;
    SMALL: string;
  };

  default: JSX.Element;
};

export type Notice = {
  Notice: NamedComponent<'Notice'>;
  NoticeButton: NamedComponent<'NoticeButton'>;
  NoticeButtonAnchor: NamedComponent<'NoticeButtonAnchor'>;
  NoticeCloseButton: NamedComponent<'NoticeCloseButton'>;
  PrimaryCTANoticeButton: NamedComponent<'PrimaryCTANoticeButton'>;
  NoticeColors: {
    BRAND: string;
    CUSTOM: string;
    DANGER: string;
    DARK: string;
    DEFAULT: string;
    INFO: string;
    NEUTRAL: string;
    PLAYSTATION: string;
    PREMIUM_TIER_1: string;
    PREMIUM_TIER_2: string;
    SPOTIFY: string;
    STREAMER_MODE: string;
    WARNING: string;
  };
};

export type Popout = JSX.Element & {
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

export type RadioGroup = JSX.Element & {
  Sizes: {
    MEDIUM: string;
    NONE: string;
    NOT_SET: string;
    SMALL: string;
  };

  displayName: 'RadioGroup';
};

export type Tooltip = JSX.Element & {
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

export type Scrollers = {
  AdvancedScrollerAuto: JSX.Element;
  AdvancedScrollerNone: JSX.Element;
  AdvancedScrollerThin: JSX.Element;
};

export type SearchBar = JSX.Element & {
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

export type SelectTempWrapper = JSX.Element & {
  MenuPlacements: {
    BOTTOM: string;
    TOP: string;
  };

  displayName: 'SelectTempWrapper';
};

export type Slider = JSX.Element & {
  defaultProps: {
    disabled: false;
    fillStyles: {};
    handleSize: 10;
    initialValue: 10;
    keyboardStep: 1;
    maxValue: 100;
    minValue: 0;
    stickToMarkers: false;
  };

  displayName: 'Slider';
};

export type Spinner = JSX.Element & {
  Type: {
    CHASING_DOTS: string;
    LOW_MOTION: string;
    PULSING_ELLIPSIS: string;
    SPINNING_CIRCLE: string;
    WANDERING_CUBES: string;
  };


  displayName: 'Spinner';
};

declare enum Looks {
  GREY,
  BRAND,
  CUSTOM
}

export type TabBar = JSX.Element & {
  Header: NamedComponent<'Header'>;
  Item: NamedComponent<'Item'> & {
    defaultProps: {
      disableItemStyles: false;
      disabled: false;
      look: 0;
    };
  };

  Looks: typeof Looks;
  Panel: JSX.Element;
  Separator: NamedComponent<'Separator'>;
  Types: {
    SIDE: string;
    TOP: string;
  };

  displayName: 'TabBar';
};

export type Text = JSX.Element & {
  Colors: {
    ALWAYS_WHITE: string;
    BRAND: string;
    CUSTOM: string | undefined;
    ERROR: string;
    HEADER_PRIMARY: string;
    HEADER_SECONDARY: string;
    INTERACTIVE_ACTIVE: string;
    INTERACTIVE_NORMAL: string;
    LINK: string;
    MUTED: string;
    STANDARD: string;
    STATUS_GREEN: string;
    STATUS_RED: string;
    STATUS_YELLOW: string;
  };

  Sizes: {
    SIZE_10: string;
    SIZE_12: string;
    SIZE_14: string;
    SIZE_16: string;
    SIZE_20: string;
    SIZE_24: string;
    SIZE_32: string;
  };

  displayName: 'Text';
};

export type TextInput = JSX.Element & {
  Sizes: {
    DEFAULT: string;
    MINI: string;
  };

  defaultProps: {
    autoFocus: false;
    disabled: false;
    maxLength: 999;
    name: '';
    placeholder: '';
    size: string; // TextInput.Sizes.DEFAULT
    type: 'text';
  };

  contextType: any;
  displayName: 'TextInput';
};
