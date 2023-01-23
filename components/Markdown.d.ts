import { Component } from '.';

type Markdown = Component & {
  output: Function;
  parser: Function;

  rules: Record<string, {
    html?: Function;
    match?: Function;
    order: number;
    parse?: Function;
    quality?: Function;
    react?: Function;
  }>;
};

export default Markdown;
