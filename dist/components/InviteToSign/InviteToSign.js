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
import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';
import './InviteToSign.style.scss';
import classNames from 'classnames';
import {PopupProvider} from '@src/components/CustomModal';
import BananasignIframe from '@src/components/InviteToSign/BananasignIframe';
import Footer from '@src/components/InviteToSign/Footer';
import Header from '@src/components/InviteToSign/Header';
import InviteUser from '@src/components/InviteToSign/InviteUser';
import Loading from '@src/components/InviteToSign/Loading';
import Modal from '@src/components/Modal';
import InviteToSignProvider from './InviteToSignProvider';
var InviteToSign = function (props) {
  var isOpen = props.isOpen,
    onClose = props.onClose,
    signers = props.signers,
    viewers = props.viewers,
    bananasignUrl = props.bananasignUrl,
    bananasignBaseUrl = props.bananasignBaseUrl,
    fileName = props.fileName,
    onUploadDocument = props.onUploadDocument;
  return _jsx(
    InviteToSignProvider,
    __assign(
      {
        onClose: onClose,
        signers: signers,
        viewers: viewers,
        bananasignUrl: bananasignUrl,
        bananasignBaseUrl: bananasignBaseUrl,
        fileName: fileName,
        onUploadDocument: onUploadDocument,
        isOpen: isOpen,
      },
      {
        children: _jsx(PopupProvider, {
          children: _jsxs(
            'div',
            __assign(
              {
                className: classNames('InviteToSign__container', {
                  open: isOpen,
                }),
              },
              {
                children: [
                  _jsx(Header, {}),
                  _jsx(InviteUser, {}),
                  _jsx(Footer, {}),
                  _jsx(Loading, {}),
                  _jsx(BananasignIframe, {}),
                  _jsx(Modal, {}),
                ],
              },
            ),
          ),
        }),
      },
    ),
  );
};
export default InviteToSign;
//# sourceMappingURL=InviteToSign.js.map
