export { default as Layers } from './Layers';
export { default as Constants } from './Constants';
export { default as FluxDispatcher } from './FluxDispatcher';

export interface ModalEvent {
  onClose: () => Promise<void>,
  transitionState: number;
}
