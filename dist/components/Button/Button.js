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

import './Button.style.scss';

import classNames from 'classnames';
import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';

import {useRippleButton} from '@src/hooks/useRippleButton';
var Button = function (props) {
  var className = props.className,
    title = props.title,
    children = props.children,
    icon = props.icon,
    disabled = props.disabled,
    onClick = props.onClick,
    style = props.style,
    isRippleEffect = props.isRippleEffect,
    buttonType = props.buttonType;
  var ripple = useRippleButton(isRippleEffect || true);
  return _jsxs(
    'button',
    __assign(
      {
        className: classNames(
          ''.concat(className, ' Button__Container ').concat(buttonType),
          {
            'button-disabled': disabled,
          },
        ),
        onClick: function (e) {
          if (isRippleEffect) {
            var node = e.target;
            var rect = node.getBoundingClientRect();
            ripple === null || ripple === void 0
              ? void 0
              : ripple.setCoords({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
          }
          onClick && onClick();
        },
        style: style,
        disabled: disabled,
      },
      {
        children: [
          isRippleEffect &&
            (ripple === null || ripple === void 0
              ? void 0
              : ripple.isRippling) &&
            _jsx('span', {
              className: 'Button__ripple',
              style: {
                left:
                  ripple === null || ripple === void 0
                    ? void 0
                    : ripple.coords.x,
                top:
                  ripple === null || ripple === void 0
                    ? void 0
                    : ripple.coords.y,
              },
            }),
          icon &&
            _jsx(
              'div',
              __assign(
                {className: 'Button__Icon'},
                {children: _jsx('img', {src: icon, alt: 'icon button'})},
              ),
            ),
          title,
          children,
        ],
      },
    ),
  );
};
export default Button;
//# sourceMappingURL=Button.js.map
