import {INVITE_TO_SIGN_ACTION_TYPE} from './InviteToSignProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InviteToSignContextReducer = (state: any, action: any) => {
  switch (action.type) {
    case INVITE_TO_SIGN_ACTION_TYPE.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPE.SET_OPEN_ADD_ASSIGNER_MODAL:
      return {
        ...state,
        isOpenAddAssignerModal: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPE.REMOVE_SIGNER:
      const signers = [...state.signers];
      const newSigners = signers.filter(
        (item) => item.email !== action.payload,
      );
      return {
        ...state,
        signers: newSigners,
      };
    case INVITE_TO_SIGN_ACTION_TYPE.REMOVE_VIEWER:
      const viewers = [...state.viewers];
      const newViewers = viewers.filter(
        (item) => item.email !== action.payload,
      );
      return {
        ...state,
        viewers: newViewers,
      };

    default:
  }
};
