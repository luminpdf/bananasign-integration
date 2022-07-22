export interface Assigners {
  signers: IAssignerProps[];
  viewers: IAssignerProps[];
}
export interface IInviteToSignProps {
  /* show/hide bananasign widget */
  /* default = false */
  isOpen: boolean;
  /* Function that will be run when the widget is requested to be closed, prior to actually closing. */
  onClose: () => void;
  /* List assigners */
  signers: IAssignerProps[];
  viewers: IAssignerProps[];

  /* The name of the document used in the signing flow of Bananasign service */
  fileName: string;

  /* Bananasign service web url */
  bananasignUrl?: string;
  /* Bananasign service base url */
  bananasignBaseUrl?: string;
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
}

export interface UploadDocumentDto {
  signers: IAssignerProps[];
  viewers: IAssignerProps[];
  integrationId: string;
}

export type ModalWarning = {
  type: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};
