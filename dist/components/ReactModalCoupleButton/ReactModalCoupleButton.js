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

import './ReactModalCoupleButton.style.scss';

import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';

import Button from '@src/components/Button';
import {BUTTON_TYPE} from '@src/constants/common';
var ReactModalCoupleButton = function (props) {
  var onCancel = props.onCancel,
    onConfirm = props.onConfirm,
    primaryTitle = props.primaryTitle,
    secondaryTitle = props.secondaryTitle,
    disabledConfirmButton = props.disabledConfirmButton,
    className = props.className;
  return _jsxs(
    'div',
    __assign(
      {className: 'ReactModalCoupleButton__container '.concat(className)},
      {
        children: [
          _jsx(Button, {
            className: 'ReactModal__Button',
            isRippleEffect: true,
            title: secondaryTitle,
            onClick: onCancel,
            buttonType: BUTTON_TYPE.TERTIARY,
          }),
          _jsx(Button, {
            className: 'ReactModal__Button',
            isRippleEffect: true,
            title: primaryTitle,
            onClick: onConfirm,
            disabled: disabledConfirmButton,
            buttonType: BUTTON_TYPE.PRIMARY_YELLOW,
          }),
        ],
      },
    ),
  );
};
ReactModalCoupleButton.defaultProps = {
  disabledConfirmButton: false,
  primaryTitle: 'Done',
  secondaryTitle: 'Cancel',
  className: '',
};
export {ReactModalCoupleButton};
//# sourceMappingURL=ReactModalCoupleButton.js.map
