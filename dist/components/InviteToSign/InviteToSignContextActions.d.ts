import { IAssignerProps, IWidgetInit, ModalWarning } from './InviteToSign.interface';
export declare const InviteToSignContextActions: {
    SET_LOADING: (isLoading: boolean) => {
        type: string;
        payload: boolean;
    };
    SET_OPEN_ADD_ASSIGNER_MODAL: (isOpen: boolean) => {
        type: string;
        payload: boolean;
    };
    REMOVE_SIGNER: (contact: IAssignerProps) => {
        type: string;
        payload: IAssignerProps;
    };
    REMOVE_VIEWER: (contact: IAssignerProps) => {
        type: string;
        payload: IAssignerProps;
    };
    SET_WORD_SEARCH_CONTACT: (text: string) => {
        type: string;
        payload: string;
    };
    SET_SEARCH_CONTACTS: (contact: IAssignerProps[]) => {
        type: string;
        payload: IAssignerProps[];
    };
    ADD_VIEWER: (contact: IAssignerProps) => {
        type: string;
        payload: IAssignerProps;
    };
    ADD_SIGNER: (contact: IAssignerProps) => {
        type: string;
        payload: IAssignerProps;
    };
    SET_REQUEST_TYPE: (type: string) => {
        type: string;
        payload: string;
    };
    CANCEL_ADD_ASSIGNERS: (isCancel: boolean) => {
        type: string;
        payload: boolean;
    };
    SET_SIGNERS: (signers: IAssignerProps[]) => {
        type: string;
        payload: IAssignerProps[];
    };
    SET_VIEWERS: (viewers: IAssignerProps[]) => {
        type: string;
        payload: IAssignerProps[];
    };
    CLOSE_AND_RESET_MODAL_SEARCH: () => {
        type: string;
        payload: {};
    };
    OPEN_BANANASIGN_IFRAME: (isOpen: boolean) => {
        type: string;
        payload: boolean;
    };
    SET_MODAL_WARNING_TYPE: (modalType: ModalWarning) => {
        type: string;
        payload: ModalWarning;
    };
    SET_DOCUMENT_SIGNING: (documentSigning: IWidgetInit) => {
        type: string;
        payload: IWidgetInit;
    };
};
