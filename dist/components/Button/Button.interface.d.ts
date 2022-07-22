import { ReactNode } from 'react';
export interface IButtonProps {
    className?: string;
    title?: string;
    children?: ReactNode;
    icon?: string;
    onClick?: () => void;
    style?: object;
    disabled?: boolean;
    isRippleEffect?: boolean;
    buttonType?: string;
}
