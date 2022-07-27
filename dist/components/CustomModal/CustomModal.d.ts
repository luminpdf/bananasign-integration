import './CustomModal.style.scss';
import React, { ReactNode } from 'react';
export declare enum AnimationType {
    FADE_IN = "fadeIn",
    FADE_IN_UP = "fadeInUp",
    FLASH = "flash",
    HEART_BEAT = "heartBeat",
    SLIDE_IN_LEFT = "slideInLeft",
    SLIDE_IN_RIGHT = "slideInRight",
    SLIDE_IN_UP = "slideInUp",
    SWING = "swing",
    ZOOM_IN = "zoomIn"
}
export declare enum OutAnimationType {
    FADE_OUT = "fadeOut",
    SLIDE_OUT_LEFT = "slideOutLeft",
    SLIDE_OUT_RIGHT = "slideOutRight",
    SLIDE_OUT_UP = "slideOutUp",
    ZOOM_OUT = "zoomOut"
}
export declare enum ModalType {
    WARNING = "warning",
    INFO = "info",
    DANGER = "danger",
    SUCCESS = "success",
    CUSTOM = "custom"
}
export interface OptionDialogButton {
    name: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    type?: 'confirm' | 'cancel';
}
export declare enum ModalName {
    WARNING = "WARNING",
    ADD_VIEWERS_SIGNERS = "ADD_VIEWERS_SIGNERS"
}
export declare enum ModalActions {
    OPEN = "OPEN",
    CLOSE = "CLOSE"
}
export declare enum ModalSettingType {
    ONLY_ONE_SIGNER_IS_OWNER = "ONLY_ONE_SIGNER_IS_OWNER",
    CANCEL_PROGRESS = "CANCEL_PROGRESS"
}
export interface ModalSettings {
    type: ModalSettingType;
    onConfirm?: () => void;
    onCancel?: () => void;
}
export interface ModalOptions {
    type?: ModalType;
    modalName?: ModalName;
    animationType?: AnimationType;
    outAnimationType?: OutAnimationType;
    timeoutDuration?: number;
    allowOutsideClick?: boolean;
    allowCloseOnEscKey?: boolean;
    settings?: ModalSettings;
}
declare type IModalState = {
    componentProps?: ModalOptions;
    showModal: (options: ModalOptions) => void;
    hideModal: () => void;
};
export declare type ActionPayloadMap = {
    OPEN: ModalOptions;
    CLOSE: undefined;
};
export declare type IModalActions = {
    [Key in keyof ActionPayloadMap]: {
        type: Key;
        payload: ActionPayloadMap[Key];
    };
}[keyof ActionPayloadMap];
export declare type Dispatcher = <Type extends IModalActions['type'], Payload extends ActionPayloadMap[Type]>(type: Type, ...payload: Payload extends undefined ? [undefined?] : [Payload]) => void;
declare type ModalContextInterface = readonly [IModalState, Dispatcher];
declare const ModalConsumer: React.Consumer<ModalContextInterface>;
declare const PopupProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const usePopup: () => ModalContextInterface;
export { ModalConsumer, PopupProvider, usePopup };
