import { Component } from '.';

type FormSection = Component & {
  // h5 by default
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label' | 'legend';
  title: string;
  titleClassName?: string;
  icon?: Component;
  disabled?: boolean;
};

export default FormSection;
