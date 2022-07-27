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
import {useEffect, useMemo} from 'react';
import {ModalName, usePopup} from '@src/components/CustomModal';
import AddSignerViewerModal from '@src/components/InviteToSign/AddSignerViewerModal';
import WarningModal from '@src/components/InviteToSign/WarningModal';
var ModalWrapper = function (_a) {
  var children = _a.children;
  return _jsx(
    'div',
    __assign({className: 'ModalWrapper__container'}, {children: children}),
  );
};
var ModalBackdrop = function () {
  useEffect(function () {
    document.body.classList.add('react-custom-modal-open');
    return function () {
      document.body.classList.remove('react-custom-modal-open');
    };
  }, []);
  return _jsx('div', {className: 'ModalBackdrop__container'});
};
var Modal = function (_a) {
  var componentProps = _a.componentProps;
  var modalName = componentProps.modalName;
  if (!modalName) return null;
  var content = useMemo(
    function () {
      switch (modalName) {
        case ModalName.ADD_VIEWERS_SIGNERS:
          return _jsx(AddSignerViewerModal, {});
        case ModalName.WARNING:
          return _jsx(WarningModal, {});
        default:
          return null;
      }
    },
    [modalName],
  );
  return _jsxs(ModalWrapper, {children: [_jsx(ModalBackdrop, {}), content]});
};
var ModalHOC = function () {
  var componentProps = usePopup()[0].componentProps;
  return _jsx(Modal, {componentProps: componentProps});
};
export default ModalHOC;
//# sourceMappingURL=Modal.js.map
