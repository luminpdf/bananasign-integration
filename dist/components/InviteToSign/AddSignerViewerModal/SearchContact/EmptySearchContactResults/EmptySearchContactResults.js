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

import './EmptySearchContactResults.style.scss';

import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';

import {Images} from '@src/assets';

var EmptySearchContactResults = function (_a) {
  var keyWords = _a.keyWords;
  return _jsxs(
    'div',
    __assign(
      {className: 'EmptyResults__container'},
      {
        children: [
          _jsx(
            'div',
            __assign(
              {className: 'EmptyResults__banner'},
              {
                children: _jsx('img', {
                  src: Images.image_empty_search_contact,
                  alt: 'EmptyResults__banner',
                }),
              },
            ),
          ),
          _jsxs(
            'h4',
            __assign(
              {className: 'EmptyResults__title'},
              {children: ['No results for ', keyWords]},
            ),
          ),
          _jsx(
            'p',
            __assign(
              {className: 'EmptyResults__message'},
              {children: 'Please try again or use another keyword'},
            ),
          ),
        ],
      },
    ),
  );
};
export default EmptySearchContactResults;
//# sourceMappingURL=EmptySearchContactResults.js.map
