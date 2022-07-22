import { ReactNode } from 'react';
export interface ICustomModalProps {
    children?: ReactNode;
    isOpen: boolean;
    closeModal?: () => void;
    shouldCloseOnOverlayClick?: boolean;
    isShowCloseButton?: boolean;
    onCancel?: () => void;
    className?: string;
}
