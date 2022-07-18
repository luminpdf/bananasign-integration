import {ReactNode} from 'react';

export interface IModalProps {
  children?: ReactNode;
  isOpen: boolean;
  closeModal?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  isShowCloseButton?: boolean;
  onCancel?: () => void;
  className?: string;
}
