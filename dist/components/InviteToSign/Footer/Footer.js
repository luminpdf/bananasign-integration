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
import './Footer.style.scss';
import {Images} from '@src/assets';
import common from '@src/utils/common';
var Footer = function () {
  var isMobile = common.isMobile();
  return isMobile
    ? null
    : _jsxs(
        'div',
        __assign(
          {className: 'Footer__container'},
          {
            children: [
              _jsx('h6', {children: 'Powered by\u00A0'}),
              _jsx('img', {
                src: Images.icon_bananasign_logo,
                alt: 'logo bananasign',
              }),
            ],
          },
        ),
      );
};
export default Footer;
//# sourceMappingURL=Footer.js.map
