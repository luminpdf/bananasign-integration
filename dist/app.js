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

// import {InviteToSign} from 'banana-widget';
import React from 'react';
import ReactDOM from 'react-dom';
import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';

import BananasignWidget from '.';

function App() {
  var _a = React.useState(false),
    isOpenWidget = _a[0],
    setIsOpenWidget = _a[1];
  function openWidget() {
    setIsOpenWidget(true);
  }
  function closeWidget() {
    setIsOpenWidget(false);
  }
  var signers = [
    {email: 'example1@gmail.com', name: 'example 1'},
    {email: 'example2@gmail.com', name: 'example 2'},
    {email: 'example3@gmail.com', name: 'example 3'},
  ];
  var viewers = [
    {email: 'example4@gmail.com', name: 'example 4'},
    {email: 'example5@gmail.com', name: 'example 5'},
    {email: 'example6@gmail.com', name: 'example 6'},
  ];
  return _jsxs('div', {
    children: [
      _jsx(
        'button',
        __assign({onClick: openWidget}, {children: 'Open Widget'}),
      ),
      _jsx(BananasignWidget, {
        isOpen: isOpenWidget,
        onClose: closeWidget,
        // signers={signers}
        signers: __spreadArray(
          [
            {
              id: '62cd383adfae8a3bc209b224',
              name: 'Tung Pham',
              email: 'tungp+0402@dgroup.co',
              requestType: 'SIGNER',
              dueTimeExpired: 0,
            },
          ],
          signers,
          true,
        ),
        viewers: viewers,
        fileName: 'document name',
        bananasignUrl: 'http://localhost:5000',
        bananasignBaseUrl: 'http://localhost:3000',
        onUploadDocument: function (_a) {
          var _ = _a.uploadUrl;
          // TODO: Use url to upload document
        },
      }),
    ],
  });
}
ReactDOM.render(_jsx(App, {}), document.getElementById('root'));
//# sourceMappingURL=app.js.map
