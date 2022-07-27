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
import {jsx as _jsx} from 'react/jsx-runtime';
import './CustomModal.style.scss';
import {createContext, useCallback, useContext, useReducer} from 'react';
export var AnimationType;
(function (AnimationType) {
  AnimationType['FADE_IN'] = 'fadeIn';
  AnimationType['FADE_IN_UP'] = 'fadeInUp';
  AnimationType['FLASH'] = 'flash';
  AnimationType['HEART_BEAT'] = 'heartBeat';
  AnimationType['SLIDE_IN_LEFT'] = 'slideInLeft';
  AnimationType['SLIDE_IN_RIGHT'] = 'slideInRight';
  AnimationType['SLIDE_IN_UP'] = 'slideInUp';
  AnimationType['SWING'] = 'swing';
  AnimationType['ZOOM_IN'] = 'zoomIn';
})(AnimationType || (AnimationType = {}));
export var OutAnimationType;
(function (OutAnimationType) {
  OutAnimationType['FADE_OUT'] = 'fadeOut';
  OutAnimationType['SLIDE_OUT_LEFT'] = 'slideOutLeft';
  OutAnimationType['SLIDE_OUT_RIGHT'] = 'slideOutRight';
  OutAnimationType['SLIDE_OUT_UP'] = 'slideOutUp';
  OutAnimationType['ZOOM_OUT'] = 'zoomOut';
})(OutAnimationType || (OutAnimationType = {}));
export var ModalType;
(function (ModalType) {
  ModalType['WARNING'] = 'warning';
  ModalType['INFO'] = 'info';
  ModalType['DANGER'] = 'danger';
  ModalType['SUCCESS'] = 'success';
  ModalType['CUSTOM'] = 'custom';
})(ModalType || (ModalType = {}));
export var ModalName;
(function (ModalName) {
  ModalName['WARNING'] = 'WARNING';
  ModalName['ADD_VIEWERS_SIGNERS'] = 'ADD_VIEWERS_SIGNERS';
})(ModalName || (ModalName = {}));
export var ModalActions;
(function (ModalActions) {
  ModalActions['OPEN'] = 'OPEN';
  ModalActions['CLOSE'] = 'CLOSE';
})(ModalActions || (ModalActions = {}));
export var ModalSettingType;
(function (ModalSettingType) {
  ModalSettingType['ONLY_ONE_SIGNER_IS_OWNER'] = 'ONLY_ONE_SIGNER_IS_OWNER';
  ModalSettingType['CANCEL_PROGRESS'] = 'CANCEL_PROGRESS';
})(ModalSettingType || (ModalSettingType = {}));
var DefaultPopupActions = {
  showModal: function (_options) {
    return null;
  },
  hideModal: function () {
    return null;
  },
};
var reducer = function (state, action) {
  switch (action.type) {
    case ModalActions.OPEN:
      return __assign(__assign({}, state), {
        componentProps: __assign(
          __assign({}, state.componentProps),
          action.payload,
        ),
      });
    case ModalActions.CLOSE:
      return __assign(__assign({}, state), {
        componentProps: __assign(__assign({}, state.componentProps), {
          modalName: undefined,
        }),
      });
    default:
      return __assign({}, state);
  }
};
var ModalContext = createContext([
  DefaultPopupActions,
  function () {
    return {};
  },
]);
var Provider = ModalContext.Provider,
  ModalConsumer = ModalContext.Consumer;
var PopupProvider = function (_a) {
  var children = _a.children;
  var initialState = {
    componentProps: {
      type: ModalType.CUSTOM,
      outAnimationType: OutAnimationType.FADE_OUT,
      animationType: AnimationType.FADE_IN,
    },
    showModal: function (options) {
      dispatch(ModalActions.OPEN, __assign({}, options));
    },
    hideModal: function () {
      dispatch(ModalActions.CLOSE);
    },
  };
  var _b = useReducer(reducer, initialState),
    state = _b[0],
    _dispatch = _b[1];
  var dispatch = useCallback(function (type) {
    var payload = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      payload[_i - 1] = arguments[_i];
    }
    _dispatch({type: type, payload: payload[0]});
  }, []);
  return _jsx(
    Provider,
    __assign({value: [state, dispatch]}, {children: children}),
  );
};
var usePopup = function () {
  return useContext(ModalContext);
};
export {ModalConsumer, PopupProvider, usePopup};
//# sourceMappingURL=CustomModal.js.map
