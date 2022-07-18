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
      console.log({state, action});
      return {
        ...state,
        isOpenAddAssignerModal: action.payload,
      };

    default:
  }
};
