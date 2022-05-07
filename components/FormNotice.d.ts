import { Component } from '.';

type FormNotice = Component & {
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

export default FormNotice;
