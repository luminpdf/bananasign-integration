export interface Assigners {
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
}
export interface IInviteToSignProps {
    isOpen: boolean;
    onClose: () => void;
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    onPutDocumentInfo: (payload: PayloadPutDocumentInfo) => Promise<IGetIdentify>;
    integrationId: string;
    bananasignUrl?: string;
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
    onPutDocumentInfo: (payload: PayloadPutDocumentInfo) => Promise<IGetIdentify>;
    integrationId: string;
    identify: string;
    bananasignUrl: string;
}
export interface PayloadPutDocumentInfo {
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    integrationId: string;
}
export declare type ModalWarning = {
    type: string;
    onConfirm?: () => void;
    onCancel?: () => void;
};
