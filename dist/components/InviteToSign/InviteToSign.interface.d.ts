export interface Assigners {
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
}
export interface IInviteToSignProps {
    isOpen: boolean;
    onClose?: () => void;
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    fileName: string;
    bananasignUrl?: string;
    bananasignBaseUrl?: string;
    onUploadDocument: (payload: UploadDocumentDto) => void;
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
    onClose: () => void;
    bananasignUrl: string;
    bananasignBaseUrl: string;
    flowId: string;
    uploadDocumentUrl: string;
    isOpen: boolean;
}
export interface UploadDocumentDto {
    uploadUrl: string;
}
export declare type ModalWarning = {
    type: string;
    onConfirm?: () => void;
    onCancel?: () => void;
};
export interface IWidgetInit {
    flowId: string;
    uploadDocumentUrl: string;
}
export interface BasicResponse {
    message: string;
    statusCode: number;
}
