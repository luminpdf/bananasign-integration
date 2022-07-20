var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };

import {INVITE_TO_SIGN_ACTION_TYPES} from './InviteToSignContextTypes';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var InviteToSignContextReducer = function (state, action) {
  switch (action.type) {
    case INVITE_TO_SIGN_ACTION_TYPES.SET_LOADING:
      return __assign(__assign({}, state), {loading: action.payload});
    case INVITE_TO_SIGN_ACTION_TYPES.SET_OPEN_ADD_ASSIGNER_MODAL:
      return __assign(__assign({}, state), {
        isOpenAddAssignerModal: action.payload,
      });
    case INVITE_TO_SIGN_ACTION_TYPES.REMOVE_SIGNER:
      var signers = __spreadArray([], state.signers, true);
      var newSigners = signers.filter(function (item) {
        return item.email !== action.payload.email;
      });
      return __assign(__assign({}, state), {signers: newSigners});
    case INVITE_TO_SIGN_ACTION_TYPES.REMOVE_VIEWER:
      var viewers = __spreadArray([], state.viewers, true);
      var newViewers = viewers.filter(function (item) {
        return item.email !== action.payload.email;
      });
      return __assign(__assign({}, state), {viewers: newViewers});
    case INVITE_TO_SIGN_ACTION_TYPES.SET_WORD_SEARCH_CONTACT:
      return __assign(__assign({}, state), {
        keyWordSearchContact: action.payload,
      });
    case INVITE_TO_SIGN_ACTION_TYPES.SET_SEARCH_CONTACTS:
      return __assign(__assign({}, state), {searchContacts: action.payload});
    case INVITE_TO_SIGN_ACTION_TYPES.ADD_VIEWER:
      var viewerIndex = state.viewers.findIndex(function (viewer) {
        return viewer.email === action.payload.email;
      });
      if (viewerIndex > -1) {
        return __assign({}, state);
      }
      return __assign(__assign({}, state), {
        viewers: __spreadArray(
          __spreadArray([], state.viewers, true),
          [action.payload],
          false,
        ),
      });
    case INVITE_TO_SIGN_ACTION_TYPES.ADD_SIGNER:
      var signerIndex = state.signers.findIndex(function (signer) {
        return signer.email === action.payload.email;
      });
      if (signerIndex > -1) {
        return __assign({}, state);
      }
      return __assign(__assign({}, state), {
        signers: __spreadArray(
          __spreadArray([], state.signers, true),
          [action.payload],
          false,
        ),
      });
    case INVITE_TO_SIGN_ACTION_TYPES.SET_REQUEST_TYPE:
      return __assign(__assign({}, state), {type: action.payload});
    case INVITE_TO_SIGN_ACTION_TYPES.CANCEL_ADD_ASSIGNERS:
      return __assign(__assign({}, state), {
        cancelAddAssigners: action.payload,
      });
    case INVITE_TO_SIGN_ACTION_TYPES.SET_SIGNERS:
      return __assign(__assign({}, state), {signers: action.payload});
    case INVITE_TO_SIGN_ACTION_TYPES.SET_VIEWERS:
      return __assign(__assign({}, state), {viewers: action.payload});
    case INVITE_TO_SIGN_ACTION_TYPES.CLOSE_AND_RESET_MODAL_SEARCH:
      return __assign(__assign({}, state), {
        searchContacts: [],
        keyWordSearchContact: '',
        isOpenAddAssignerModal: false,
      });
    case INVITE_TO_SIGN_ACTION_TYPES.OPEN_BANANASIGN_IFRAME:
      return __assign(__assign({}, state), {
        openBananasignIframe: action.payload,
      });
    case INVITE_TO_SIGN_ACTION_TYPES.SET_MODAL_WARNING_TYPE:
      return __assign(__assign({}, state), {modalWarningData: action.payload});
    default:
      return;
  }
};
//# sourceMappingURL=InviteToSignContextReducer.js.map
