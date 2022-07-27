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
import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from 'react/jsx-runtime';
import './RecentContact.style.scss';
import {Images} from '@src/assets';
// import AssignerItem from '../../InviteUser/AssignerItem';
var EmptyContacts = function () {
  return _jsxs(
    'div',
    __assign(
      {className: 'RecentContacts__no-contacts'},
      {
        children: [
          _jsx('img', {
            alt: 'image_empty_contacts',
            src: Images.image_empty_contracts,
          }),
          _jsx('span', {children: 'No recent contacts'}),
        ],
      },
    ),
  );
};
var RecentContacts = function () {
  return _jsxs(_Fragment, {
    children: [
      _jsx(EmptyContacts, {}),
      _jsx('div', {className: 'RecentContacts__list-contacts'}),
    ],
  });
};
export default RecentContacts;
//# sourceMappingURL=RecentContacts.js.map
