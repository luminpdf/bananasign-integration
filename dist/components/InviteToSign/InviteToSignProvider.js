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

import {useReducer} from 'react';
import {jsx as _jsx} from 'react/jsx-runtime';

import {BANANA_SIGN_WEB_URL, REQUEST_TYPE} from '@src/constants/common';
import common from '@src/utils/common';

import InviteToSignContext, {initialState} from './InviteToSignContext';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';
var InviteToSignProvider = function (_a) {
  var children = _a.children,
    onClose = _a.onClose,
    signers = _a.signers,
    viewers = _a.viewers,
    onPutDocumentInfo = _a.onPutDocumentInfo,
    integrationId = _a.integrationId,
    bananasignUrl = _a.bananasignUrl;
  var signersData = common.serializeAssigners(signers, REQUEST_TYPE.SIGNER);
  var viewersData = common.serializeAssigners(viewers, REQUEST_TYPE.VIEWER);
  var _b = useReducer(
      InviteToSignContextReducer,
      __assign(__assign({}, initialState), {
        signers: signersData,
        viewers: viewersData,
        onClose: onClose,
        onPutDocumentInfo: onPutDocumentInfo,
        integrationId: integrationId,
        bananasignUrl: bananasignUrl || BANANA_SIGN_WEB_URL,
      }),
    ),
    state = _b[0],
    dispatch = _b[1];
  return _jsx(
    InviteToSignContext.Provider,
    __assign({value: {state: state, dispatch: dispatch}}, {children: children}),
  );
};
var defaultProps = {
  children: null,
};
InviteToSignProvider.defaultProps = defaultProps;
export default InviteToSignProvider;
//# sourceMappingURL=InviteToSignProvider.js.map
