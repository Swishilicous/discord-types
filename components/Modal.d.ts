import { Component } from '.';

type Modal = {
  ModalCloseButton: Component;
  ModalContent: Component;
  ModalFooter: Component;
  ModalHeader: Component;
  ModalListContent: Component;
  ModalRoot: Component;
  ModalSize: {
    DYNAMIC: string;
    LARGE: string;
    MEDIUM: string;
    SMALL: string;
  };

  default: Component;
};

export default Modal;
