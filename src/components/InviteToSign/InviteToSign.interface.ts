// An enum with all the types of actions to use in our reducer
export enum InviteToSignActionKind {}

// An interface for our actions
export interface IInviteToSignAction {
  type: InviteToSignActionKind;
  payload: object;
}

type Contract = {
  name: string;
  size: number;
};

export enum MetaDocument {
  UPLOAD = 'UPLOAD',
}

export enum DocumentOrigin {
  BANANASIGN = 'BANANASIGN',
  LUMIN = 'LUMIN',
}

export enum ContractType {
  ME = 'ME',
  OTHERS = 'OTHERS',
  MEANDOTHERS = 'MEANDOTHERS',
  DRAFT = 'DRAFT',
}

// An interface for our state
export interface IInviteToSignState {
  loading: boolean;
  documentType: ContractType;
  documentOrigin: DocumentOrigin;
  meta: MetaDocument;
  signers?: Array<object>;
  viewes?: Array<object>;
  dueTimeExpired?: number;
  contract?: Contract;
  identify?: string;
}
