export { default as Constants } from './Constants';
export { default as FluxDispatcher } from './FluxDispatcher';
export { default as WebpackInstance } from './WebpackInstance';

export interface ModalEvent {
  onClose: () => Promise<void>,
  transitionState: number;
}
