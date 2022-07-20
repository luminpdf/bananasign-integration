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

import './InviteToSign.style.scss';

import classNames from 'classnames';
import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';

import AddSignerViewerModal from './AddSignerViewerModal';
import BananasignIframe from './BananasignIframe';
import Footer from './Footer';
import Header from './Header';
import InviteToSignProvider from './InviteToSignProvider';
import InviteUser from './InviteUser';
import Loading from './Loading';
import WarningModal from './WarningModal';
var InviteToSign = function (props) {
  var isOpen = props.isOpen,
    onClose = props.onClose,
    signers = props.signers,
    viewers = props.viewers,
    onPutDocumentInfo = props.onPutDocumentInfo,
    integrationId = props.integrationId,
    bananasignUrl = props.bananasignUrl;
  var show = Boolean(isOpen && integrationId);
  return _jsx(
    InviteToSignProvider,
    __assign(
      {
        onClose: onClose,
        signers: signers,
        viewers: viewers,
        onPutDocumentInfo: onPutDocumentInfo,
        integrationId: integrationId,
        bananasignUrl: bananasignUrl,
      },
      {
        children: _jsxs(
          'div',
          __assign(
            {
              className: classNames('InviteToSign__container', {
                open: show,
              }),
            },
            {
              children: [
                _jsx(Header, {}),
                _jsx(InviteUser, {}),
                _jsx(Footer, {}),
                _jsx(AddSignerViewerModal, {}),
                _jsx(Loading, {}),
                _jsx(BananasignIframe, {}),
                _jsx(WarningModal, {}),
              ],
            },
          ),
        ),
      },
    ),
  );
};
export default InviteToSign;
//# sourceMappingURL=InviteToSign.js.map
