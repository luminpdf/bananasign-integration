export interface ICoupleButtonProps {
    onCancel: () => void;
    onConfirm: () => void;
    disabledConfirmButton?: boolean;
    className?: string;
    secondaryTitle?: string;
    primaryTitle?: string;
    buttonType?: string;
}
