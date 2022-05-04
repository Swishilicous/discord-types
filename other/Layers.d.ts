import Constants from './Constants';

export default interface Layers {
  popLayer(): void;
  popAllLayers(): void;
  PushLayer(layer: keyof Constants['Layers']): void;
}
