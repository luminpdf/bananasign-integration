export interface Assigners {
  signers: IAssignerProps[];
  viewers: IAssignerProps[];
}
export interface IInviteToSignProps {
  /* show/hide bananasign widget */
  /* default = false */
  isOpen: boolean;
  /* Function that will be run when the widget is requested to be closed, prior to actually closing. */
  onClose?: () => void;
  /* List assigners */
  signers: IAssignerProps[];
  viewers: IAssignerProps[];

  /* The name of the document used in the signing flow of Bananasign service */
  fileName: string;

  /* Bananasign service web url */
  bananasignUrl?: string;
  /* Bananasign service base url */
  bananasignBaseUrl?: string;

  /* File for upload to s3 */
  fileData: Blob | File;

  /* Bananasign oauth2 access token */
  accessToken: string;

  /*  Custom signer/viewer search */
  search?: ISearchContact;
}

export interface IAssignerProps {
  email: string;
  name?: string;
  avatarRemoteId?: string;
  isOwner?: boolean;
  requestType?: string;
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
  accessToken: string;
  search?: ISearchContact;
}

export type ModalWarning = {
  type: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export interface IWidgetInit {
  flowId: string;
  preSignedUrl: string;
  owner: { email: string; name: string }
}

export interface BasicResponse {
  message: string;
  statusCode: number;
}

export interface ISearchChange {
  value: string;
  context: string;
}

export interface ISearchContact {
  onSearchChange?: (data: ISearchChange) => void;
  searchData: IAssignerProps[];
}
