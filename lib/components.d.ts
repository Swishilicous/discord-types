type NamedComponent<T> = JSX.Element & { displayName: T; };

export type Button = JSX.Element & {
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
    type: Card.Types.PRIMARY;
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
    align: Checkbox.Aligns.CENTER;
    color: string;
    disabled: false;
    displayOnly: false;
    onChange: () => {};
    readOnly: false;
    reverse: false;
    shape: string;
    size: 24;
    type: Checkbox.Types.DEFAULT;
    value: false;
  };

  displayName: 'Checkbox';
};

type Clickable = JSX.Element & {
  contextType: any; // React context
  defaultProps: {
    tag: 'div',
    role: 'button',
    tabIndex: 0;
  };
  displayName: 'Clickable';
};

type Divider = JSX.Element & {
  Directions: {
    HORIZONTAL: string;
    VERTICAL: string;
  };

  name: 'Divider';
};

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

type FormItem = JSX.Element & {
  Tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
  };

  displayName: 'FormItem';
};

type FormNotice = JSX.Element & {
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

type FormText = JSX.Element & {
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

type FormTitle = JSX.Element & {
  Tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
  };

  displayName: 'FormTitle';
};

type HeaderBar = JSX.Element & {
  Caret: JSX.Element;
  Divider: NamedComponent<'Divider'>;
  Icon: NamedComponent<'Icon'>;
  Title: NamedComponent<'Title'>;

  displayName: 'HeaderBar';
};

type Menu = JSX.Element & {
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

type Modal = {
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

type Notice = {
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
