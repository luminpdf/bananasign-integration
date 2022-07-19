import {IAssignerProps} from './InviteToSign.interface';
import {INVITE_TO_SIGN_ACTION_TYPES} from './InviteToSignProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InviteToSignContextReducer = (state: any, action: any) => {
  switch (action.type) {
    case INVITE_TO_SIGN_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.SET_OPEN_ADD_ASSIGNER_MODAL:
      return {
        ...state,
        isOpenAddAssignerModal: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.REMOVE_SIGNER:
      const signers = [...state.signers];
      const newSigners = signers.filter(
        (item) => item.email !== action.payload.email,
      );
      return {
        ...state,
        signers: newSigners,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.REMOVE_VIEWER:
      const viewers = [...state.viewers];
      const newViewers = viewers.filter(
        (item) => item.email !== action.payload.email,
      );
      return {
        ...state,
        viewers: newViewers,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.SET_WORD_SEARCH_CONTACT:
      return {
        ...state,
        keyWordSearchContact: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.SET_SEARCH_CONTACTS:
      return {
        ...state,
        searchContacts: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.ADD_VIEWER:
      const viewerIndex = state.viewers.findIndex(
        (viewer: IAssignerProps) => viewer.email === action.payload.email,
      );
      if (viewerIndex > -1) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        viewers: [...state.viewers, action.payload],
      };
    case INVITE_TO_SIGN_ACTION_TYPES.ADD_SIGNER:
      const signerIndex = state.signers.findIndex(
        (signer: IAssignerProps) => signer.email === action.payload.email,
      );
      if (signerIndex > -1) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        signers: [...state.signers, action.payload],
      };
    case INVITE_TO_SIGN_ACTION_TYPES.SET_REQUEST_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.CANCEL_ADD_ASSIGNERS:
      return {
        ...state,
        cancelAddAssigners: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.SET_SIGNERS:
      return {
        ...state,
        signers: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.SET_VIEWERS:
      return {
        ...state,
        viewers: action.payload,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.CLOSE_AND_RESET_MODAL_SEARCH:
      return {
        ...state,
        searchContacts: [],
        keyWordSearchContact: '',
        isOpenAddAssignerModal: false,
      };
    case INVITE_TO_SIGN_ACTION_TYPES.OPEN_BANANASIGN_IFRAME:
      return {
        ...state,
        openBananasignIframe: action.payload,
      };

    default:
      return;
  }
};
