import { Component } from '.';

type Slider = Component & {
  disabled: false;
  fillStyles: {};
  handleSize: 10;
  initialValue: 10;
  keyboardStep: 1;
  maxValue: 100;
  minValue: 0;
  stickToMarkers: false;
};

export default Slider;
