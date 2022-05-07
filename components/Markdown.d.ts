import { Component } from '.';

type Markdown = Component & {
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

export default Markdown; 
