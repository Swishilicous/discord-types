import { Component } from '.';

type LegacyText = Component & {
  Colors: {
    ALWAYS_WHITE: string;
    BRAND: string;
    CUSTOM?: string;
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
};

export default LegacyText;
