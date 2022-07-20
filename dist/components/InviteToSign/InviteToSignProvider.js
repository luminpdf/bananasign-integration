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

import common from '@src/utils/common';

import InviteToSignContext, {initialState} from './InviteToSignContext';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';

var InviteToSignProvider = function (_a) {
  var children = _a.children,
    onClose = _a.onClose,
    assigners = _a.assigners;
  var _b = common.serializeAssigners(assigners),
    signers = _b.signers,
    viewers = _b.viewers;
  var _c = useReducer(
      InviteToSignContextReducer,
      __assign(__assign({}, initialState), {
        signers: signers,
        viewers: viewers,
        onClose: onClose,
      }),
    ),
    state = _c[0],
    dispatch = _c[1];
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
