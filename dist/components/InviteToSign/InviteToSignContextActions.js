import {INVITE_TO_SIGN_ACTION_TYPES} from './InviteToSignContextTypes';
export var InviteToSignContextActions = {
  SET_OPENED_WIDGET: function (isOpen) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_OPENED_WIDGET,
      payload: isOpen,
    };
  },
  SET_LOADING: function (isLoading) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_LOADING,
      payload: isLoading,
    };
  },
  SET_OPEN_ADD_ASSIGNER_MODAL: function (isOpen) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_OPEN_ADD_ASSIGNER_MODAL,
      payload: isOpen,
    };
  },
  REMOVE_SIGNER: function (contact) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.REMOVE_SIGNER,
      payload: contact,
    };
  },
  REMOVE_VIEWER: function (contact) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.REMOVE_VIEWER,
      payload: contact,
    };
  },
  SET_WORD_SEARCH_CONTACT: function (text) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_WORD_SEARCH_CONTACT,
      payload: text,
    };
  },
  SET_SEARCH_CONTACTS: function (contact) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_SEARCH_CONTACTS,
      payload: contact,
    };
  },
  ADD_VIEWER: function (contact) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.ADD_VIEWER,
      payload: contact,
    };
  },
  ADD_SIGNER: function (contact) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.ADD_SIGNER,
      payload: contact,
    };
  },
  SET_REQUEST_TYPE: function (type) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_REQUEST_TYPE,
      payload: type,
    };
  },
  CANCEL_ADD_ASSIGNERS: function (isCancel) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.CANCEL_ADD_ASSIGNERS,
      payload: isCancel,
    };
  },
  SET_SIGNERS: function (signers) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_SIGNERS,
      payload: signers,
    };
  },
  SET_VIEWERS: function (viewers) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_VIEWERS,
      payload: viewers,
    };
  },
  CLOSE_AND_RESET_MODAL_SEARCH: function () {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.CLOSE_AND_RESET_MODAL_SEARCH,
      payload: {},
    };
  },
  OPEN_BANANASIGN_IFRAME: function (isOpen) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.OPEN_BANANASIGN_IFRAME,
      payload: isOpen,
    };
  },
  SET_DOCUMENT_SIGNING: function (documentSigning) {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPES.SET_DOCUMENT_SIGNING,
      payload: documentSigning,
    };
  },
};
//# sourceMappingURL=InviteToSignContextActions.js.map
