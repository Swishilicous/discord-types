import { NamedComponent } from '.';

type Modal = {
  ModalCloseButton: NamedComponent<'ModalCloseButton'>;
  ModalContent: NamedComponent<'ModalContent'>;
  ModalFooter: NamedComponent<'ModalFooter'>;
  ModalHeader: NamedComponent<'ModalHeader'>;
  ModalListContent: NamedComponent<'ModalListContent'>;
  ModalRoot: NamedComponent<'ModalRoot'>;
  ModalSize: {
    DYNAMIC: string;
    LARGE: string;
    MEDIUM: string;
    SMALL: string;
  };

  default: JSX.Element;
};

export default Modal;
