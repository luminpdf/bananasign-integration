export interface IAssignerProps {
  email?: string;
  name?: string;
  avatarRemoteId?: string;
  type?: string;
  userId?: string;
  isOwner?: boolean;
  newAssignUser?: boolean;
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
}

export type ModalWarning = {
  type: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};
