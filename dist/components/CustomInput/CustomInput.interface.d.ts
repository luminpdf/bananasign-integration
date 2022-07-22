import React, { ReactNode } from 'react';
export interface ICustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    labelClassName?: string;
    label?: string;
    name?: string;
    errorMessage?: ReactNode;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fullWidth?: boolean;
    hideValidationIcon?: boolean;
    showClearButton?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    value: string;
    postfix?: ReactNode;
    type?: string;
    classWrapper?: string;
    icon?: string;
    onPress?: () => void;
    isErrorBorder?: boolean;
    showErrorMessageOnFocus?: boolean;
}
export interface ICustomInputRef {
    focus: () => void;
    unFocus: () => void;
    reset: () => void;
}
