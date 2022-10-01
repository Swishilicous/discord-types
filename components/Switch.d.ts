import { Component } from '.';

type Switch = Component & {
  value: boolean;
  disabled?: false;
  hideBorder?: false;
  key?: string | number;
  onChange: (value: boolean) => void;
  note?: string;
  tooltipNote?: string;
  helpdeskArticleId?: string;
};

export default Switch;
