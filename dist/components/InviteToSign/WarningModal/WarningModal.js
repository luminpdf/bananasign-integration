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
var _a;
import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';
import './WarningModal.style.scss';
import {Images} from '@src/assets';
import AnimatedModal from '@src/components/AnimatedModal';
import {usePopup} from '@src/components/CustomModal';
import ReactModalCoupleButton from '@src/components/ReactModalCoupleButton';
import {MODAL_TYPES} from '@src/constants/common';
var MODAL_WARNING_TYPES =
  ((_a = {}),
  (_a[MODAL_TYPES.ONLY_ONE_SIGNER_IS_OWNER] = {
    TITLE: 'Only you will be able to sign',
    CONTENT: '',
    FIRST_BTN: 'Cancel',
    SECOND_BTN: 'Continue',
    ICON: Images.icon_info,
  }),
  (_a[MODAL_TYPES.CANCEL_PROGRESS] = {
    TITLE: 'Discard Changes',
    CONTENT:
      'Do you want to cancel this progress? This will clear data you input before.',
    FIRST_BTN: 'No, Thanks',
    SECOND_BTN: 'Discard',
    ICON: Images.icon_warning,
  }),
  _a);
var WarningModal = function () {
  var _a;
  var _b = usePopup()[0],
    hideModal = _b.hideModal,
    componentProps = _b.componentProps;
  var warningType =
    (_a =
      componentProps === null || componentProps === void 0
        ? void 0
        : componentProps.settings) === null || _a === void 0
      ? void 0
      : _a.type;
  var onCloseModal = function () {
    var _a, _b;
    hideModal();
    (_b =
      (_a =
        componentProps === null || componentProps === void 0
          ? void 0
          : componentProps.settings) === null || _a === void 0
        ? void 0
        : _a.onCancel) === null || _b === void 0
      ? void 0
      : _b.call(_a);
  };
  var onConfirm = function () {
    var _a, _b;
    hideModal();
    (_b =
      (_a =
        componentProps === null || componentProps === void 0
          ? void 0
          : componentProps.settings) === null || _a === void 0
        ? void 0
        : _a.onConfirm) === null || _b === void 0
      ? void 0
      : _b.call(_a);
  };
  if (!warningType) {
    return null;
  }
  var modalContent = MODAL_WARNING_TYPES[warningType];
  return _jsxs(
    AnimatedModal,
    __assign(
      {className: 'WarningModal__container AssignModal__custom-modal'},
      {
        children: [
          _jsx('img', {src: modalContent.ICON, alt: 'icon modal'}),
          _jsx(
            'p',
            __assign(
              {className: 'WarningModal__container-title'},
              {children: modalContent.TITLE},
            ),
          ),
          _jsx(
            'p',
            __assign(
              {className: 'WarningModal__container-content'},
              {children: modalContent.CONTENT},
            ),
          ),
          _jsx(ReactModalCoupleButton, {
            onCancel: onCloseModal,
            onConfirm: onConfirm,
            secondaryTitle: modalContent.FIRST_BTN,
            primaryTitle: modalContent.SECOND_BTN,
          }),
        ],
      },
    ),
  );
};
export default WarningModal;
//# sourceMappingURL=WarningModal.js.map
