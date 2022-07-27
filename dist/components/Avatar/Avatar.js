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
import {jsx as _jsx} from 'react/jsx-runtime';
import './Avatar.style.scss';
import classNames from 'classnames';
import {useMemo} from 'react';
import {Images} from '@src/assets';
import common from '@src/utils/common';
var GUEST_USER = 'Guest User';
var USER_DELETED = 'Deleted';
var defaultProps = {
  classNames: '',
  style: {},
};
var Avatar = function (_a) {
  var className = _a.className,
    user = _a.user,
    style = _a.style;
  var guestUser = GUEST_USER === user.name;
  var userDeleted = USER_DELETED === user.name;
  var nameAvatar = useMemo(
    function () {
      if (guestUser || userDeleted) {
        return _jsx('img', {
          className: 'Avatar__default-user',
          src: Images.icon_person,
          alt: 'user default',
        });
      }
      return _jsx(
        'span',
        __assign(
          {className: 'Avatar__name'},
          {
            children: common.getAvatarName(
              (user === null || user === void 0 ? void 0 : user.name) || '',
            ),
          },
        ),
      );
    },
    [user === null || user === void 0 ? void 0 : user.name],
  );
  var thumbnailAvatar = useMemo(
    function () {
      return _jsx('img', {
        src: user.avatarRemoteId,
        alt: 'user avatar',
        onError: function (_a) {
          var currentTarget = _a.currentTarget;
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = Images.icon_person;
          currentTarget.style.padding = '4px';
        },
      });
    },
    [user === null || user === void 0 ? void 0 : user.avatarRemoteId],
  );
  var renderAvatar = function () {
    return (
      ((user === null || user === void 0 ? void 0 : user.avatarRemoteId) &&
        thumbnailAvatar) ||
      ((user === null || user === void 0 ? void 0 : user.name) && nameAvatar) ||
      null
    );
  };
  return _jsx(
    'div',
    __assign(
      {className: 'Avatar__wrapper'},
      {
        children: _jsx(
          'div',
          __assign(
            {
              style: style,
              className: classNames('Avatar__container '.concat(className)),
            },
            {children: renderAvatar()},
          ),
        ),
      },
    ),
  );
};
Avatar.defaultProps = defaultProps;
export default Avatar;
//# sourceMappingURL=Avatar.js.map
