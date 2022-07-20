export declare type Assigners = {
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
};
export interface IInviteToSignProps {
    isOpen: boolean;
    onClose: () => void;
    assigners: Assigners;
    onNext: (payload: PayloadOnNext) => IGetIdentify;
}
export interface IGetIdentify {
    identify: string;
}
export interface IAssignerProps {
    email: string;
    name?: string;
    avatarRemoteId?: string;
    type?: string;
    userId?: string;
    isOwner?: boolean;
    newAssignUser?: boolean;
    id?: string;
    requestType?: string;
    dueTimeExpired?: number;
}
export interface IState {
    loading: boolean;
    isOpenAddAssignerModal: boolean;
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    type: string;
    keyWordSearchContact: string;
    searchContacts: IAssignerProps[];
    cancelAddAssigners: boolean;
    openBananasignIframe: boolean;
    modalWarningData: ModalWarning;
    onClose: () => void;
    assigners: IAssignerProps[];
    onNext: (payload: PayloadOnNext) => IGetIdentify;
}
export interface PayloadOnNext {
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    integrationId: string;
}
export declare type ModalWarning = {
    type: string;
    onConfirm?: () => void;
    onCancel?: () => void;
};
