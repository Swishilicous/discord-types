import Constants from '../other/Constants';

export default interface LayerActions {
  popLayer(): void;
  popAllLayers(): void;
  pushLayer(layer: keyof Constants['Layers'] | (() => JSX.Element)): void;
}
