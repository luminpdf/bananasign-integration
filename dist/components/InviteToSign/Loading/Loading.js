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

import './Loading.style.scss';

import {useContext} from 'react';
import Lottie from 'react-lottie-player';
import {jsx as _jsx} from 'react/jsx-runtime';

import {Lotties} from '@src/assets';

import InviteToSignContext from '../InviteToSignContext';

var Loading = function () {
  var context = useContext(InviteToSignContext);
  var loading = context.state.loading;
  return !loading
    ? null
    : _jsx(
        'div',
        __assign(
          {className: 'Loading__container'},
          {
            children: _jsx(Lottie, {
              loop: true,
              animationData: Lotties.bananasign_loading,
              play: true,
              style: {width: 209, height: 209},
              rendererSettings: {preserveAspectRatio: 'xMidYMid slice'},
            }),
          },
        ),
      );
};
export default Loading;
//# sourceMappingURL=Loading.js.map
