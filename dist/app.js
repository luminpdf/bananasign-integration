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

import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Fragment as _Fragment, jsx as _jsx} from 'react/jsx-runtime';
var InviteToSign = React.lazy(function () {
  return import('@components/InviteToSign');
});
var assigners = {
  signers: [
    {email: 'hatn1@gmail.com', name: 'hatn1'},
    {email: 'hatn2@gmail.com', name: 'hatn2'},
    {email: 'hatn3@gmail.com', name: 'hatn3'},
  ],
  viewers: [
    {email: 'hatn4@gmail.com', name: 'hatn4'},
    {email: 'hatn5@gmail.com', name: 'hatn5'},
    {email: 'hatn6@gmail.com', name: 'hatn6'},
  ],
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  _jsx(_Fragment, {
    children: _jsx(
      React.Suspense,
      __assign(
        {fallback: _jsx('div', {children: 'Loading...'})},
        {
          children: _jsx(InviteToSign, {
            isOpen: true,
            onClose: function () {
              return console.log('onClose');
            },
            assigners: assigners,
            onNext: function (_payload) {
              // TODO: service put contract temporary
              return {identify: ''};
            },
          }),
        },
      ),
    ),
  }),
);
//# sourceMappingURL=app.js.map
