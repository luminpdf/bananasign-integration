import {INVITE_TO_SIGN_ACTION_TYPE} from './InviteToSignProvider';

export const InviteToSignContextActions = {
  SET_LOADING: (isLoading: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPE.SET_LOADING,
      payload: isLoading,
    };
  },
  SET_OPEN_ADD_ASSIGNER_MODAL: (isOpen: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPE.SET_OPEN_ADD_ASSIGNER_MODAL,
      payload: isOpen,
    };
  },
  REMOVE_SIGNER: (email: string) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPE.REMOVE_SIGNER,
      payload: email,
    };
  },
  REMOVE_VIEWER: (email: string) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPE.REMOVE_VIEWER,
      payload: email,
    };
  },
};
