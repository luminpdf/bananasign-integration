import {IAssignerProps, IWidgetInit} from './InviteToSign.interface';
import {INVITE_TO_SIGN_ACTION_TYPES} from './InviteToSignContextTypes';

export const InviteToSignContextActions = {
  SET_OPENED_WIDGET: (isOpen: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_OPENED_WIDGET,
      payload: isOpen,
    };
  },
  SET_LOADING: (isLoading: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_LOADING,
      payload: isLoading,
    };
  },
  SET_OPEN_ADD_ASSIGNER_MODAL: (isOpen: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_OPEN_ADD_ASSIGNER_MODAL,
      payload: isOpen,
    };
  },
  REMOVE_SIGNER: (contact: IAssignerProps) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.REMOVE_SIGNER,
      payload: contact,
    };
  },
  REMOVE_VIEWER: (contact: IAssignerProps) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.REMOVE_VIEWER,
      payload: contact,
    };
  },
  SET_WORD_SEARCH_CONTACT: (text: string) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_WORD_SEARCH_CONTACT,
      payload: text,
    };
  },
  SET_SEARCH_CONTACTS: (contact: IAssignerProps[]) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_SEARCH_CONTACTS,
      payload: contact,
    };
  },
  ADD_VIEWER: (contact: IAssignerProps) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.ADD_VIEWER,
      payload: contact,
    };
  },
  ADD_SIGNER: (contact: IAssignerProps) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.ADD_SIGNER,
      payload: contact,
    };
  },
  SET_REQUEST_TYPE: (type: string) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_REQUEST_TYPE,
      payload: type,
    };
  },
  CANCEL_ADD_ASSIGNERS: (isCancel: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.CANCEL_ADD_ASSIGNERS,
      payload: isCancel,
    };
  },
  SET_SIGNERS: (signers: IAssignerProps[]) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_SIGNERS,
      payload: signers,
    };
  },
  SET_VIEWERS: (viewers: IAssignerProps[]) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_VIEWERS,
      payload: viewers,
    };
  },
  CLOSE_AND_RESET_MODAL_SEARCH: () => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.CLOSE_AND_RESET_MODAL_SEARCH,
      payload: {},
    };
  },
  OPEN_BANANASIGN_IFRAME: (isOpen: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.OPEN_BANANASIGN_IFRAME,
      payload: isOpen,
    };
  },
  SET_DOCUMENT_SIGNING: (documentSigning: IWidgetInit) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_DOCUMENT_SIGNING,
      payload: documentSigning,
    };
  },
};
