import { Component } from '.';

type Modal = {
  ModalCloseButton: Component<'ModalCloseButton'>;
  ModalContent: Component<'ModalContent'>;
  ModalFooter: Component<'ModalFooter'>;
  ModalHeader: Component<'ModalHeader'>;
  ModalListContent: Component<'ModalListContent'>;
  ModalRoot: Component<'ModalRoot'>;
  ModalSize: {
    DYNAMIC: string;
    LARGE: string;
    MEDIUM: string;
    SMALL: string;
  };

  default: Component;
};

export default Modal;
