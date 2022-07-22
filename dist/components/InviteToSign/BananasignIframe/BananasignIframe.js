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

import './BananasignIframe.style.scss';

import {useContext, useEffect} from 'react';
import {jsx as _jsx} from 'react/jsx-runtime';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
var CLOSE_TASK_BANANA_SIGN_MSG = 'close_task';
var BACK_STEP_BANANA_SIGN_MSG = 'back_step';
var BananasignIframe = function () {
  var context = useContext(InviteToSignContext);
  var _a = context.state,
    openBananasignIframe = _a.openBananasignIframe,
    onClose = _a.onClose,
    bananasignUrl = _a.bananasignUrl,
    flowId = _a.flowId,
    dispatch = context.dispatch;
  var listenToBananaSign = function (e) {
    if (e.origin === bananasignUrl) {
      switch (e.data.type) {
        case CLOSE_TASK_BANANA_SIGN_MSG:
          dispatch(InviteToSignContextActions.OPEN_BANANASIGN_IFRAME(false));
          onClose();
          break;
        case BACK_STEP_BANANA_SIGN_MSG:
          dispatch(InviteToSignContextActions.OPEN_BANANASIGN_IFRAME(false));
          break;
        default:
          break;
      }
    }
  };
  useEffect(function () {
    window.addEventListener('message', listenToBananaSign, false);
    return function () {
      window.removeEventListener('message', listenToBananaSign);
    };
  }, []);
  if (!openBananasignIframe || !flowId) {
    return null;
  }
  return _jsx(
    'div',
    __assign(
      {className: 'BananasignIframe__container'},
      {
        children: _jsx('iframe', {
          width: '100%',
          height: '100%',
          src: ''.concat(bananasignUrl, '/embed/').concat(flowId),
          title: 'Iframe Upload',
          frameBorder: '0',
          allow:
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          id: 'bananaSignIframe',
          onLoad: function () {
            var elementIframe = document.getElementById('bananaSignIframe');
            if (elementIframe) {
              elementIframe.style.visibility = 'visible';
            }
            dispatch(InviteToSignContextActions.SET_LOADING(false));
          },
          style: {visibility: 'hidden'},
          allowFullScreen: true,
        }),
      },
    ),
  );
};
export default BananasignIframe;
//# sourceMappingURL=BananasignIframe.js.map
