import {INVITE_TO_SIGN_ACTION_TYPE} from './InviteToSignProvider';

export const InviteToSignContextActions = {
  SET_LOADING: (isLoading: boolean) => {
    return {
      type: INVITE_TO_SIGN_ACTION_TYPE.SET_LOADING,
      payload: isLoading,
    };
  },
  SET_OPEN_ADD_ASSIGNER_MODAL: (isOpen: boolean) => {
    console.log({isOpen});
    return {
      type: INVITE_TO_SIGN_ACTION_TYPE.SET_OPEN_ADD_ASSIGNER_MODAL,
      payload: isOpen,
    };
  },
};
