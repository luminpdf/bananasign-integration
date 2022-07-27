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
import './AssignerItem.style.scss';
import classNames from 'classnames';
import {useContext, useEffect, useRef, useState} from 'react';
import {Images} from '@src/assets';
import Avatar from '@src/components/Avatar';
import {GUEST_USER} from '@src/constants/common';
import common from '@src/utils/common';
import InviteToSignContext from '../../InviteToSignContext';
var TOOLTIP_CONTENT = {
  signer: 'Change my role to viewer',
  viewer: 'Change my role to signer',
};
var OFFSET_POSITION_TOOLTIP_OWNER = 75;
var OFFSET_POSITION_TOOLTIP = 35;
var AssignerItem = function (props) {
  var isMobile = common.isMobile();
  var user = props.user,
    className = props.className,
    showIconTrash = props.showIconTrash,
    onClick = props.onClick,
    onRemoveUser = props.onRemoveUser,
    role = props.role,
    disabled = props.disabled;
  var isOpen = useContext(InviteToSignContext).state.isOpen;
  var isGuestUser =
    (user === null || user === void 0 ? void 0 : user.name) === GUEST_USER;
  var isOwner = user === null || user === void 0 ? void 0 : user.isOwner;
  // const invalidStatus = user.newAssignUser;
  var handleClick = function () {
    if (onClick && typeof onClick === 'function') {
      onClick(user);
    }
  };
  var handleRemoveUser = function () {
    if (onRemoveUser && typeof onRemoveUser === 'function') {
      onRemoveUser(user);
    }
  };
  var dataToolTip = isOwner
    ? TOOLTIP_CONTENT[role] || 'signer'
    : 'Remove '.concat(role);
  var _a = useState({top: 0, left: 0}),
    offset = _a[0],
    setOffset = _a[1];
  var trashRef = useRef(null);
  var signersContainer = document.querySelector('.signers-list');
  var viewersContainer = document.querySelector('.viewers-list');
  var container = {
    viewer: viewersContainer,
    signer: signersContainer,
  };
  useEffect(
    function () {
      var assignerRole = role || 'viewer';
      var elContainer = container[assignerRole];
      var onScroll = function () {
        var _a;
        var trashRect =
          (_a =
            trashRef === null || trashRef === void 0
              ? void 0
              : trashRef.current) === null || _a === void 0
            ? void 0
            : _a.getBoundingClientRect();
        var trashLeft =
          trashRect === null || trashRect === void 0 ? void 0 : trashRect.x;
        var elContainerRect = elContainer.getBoundingClientRect();
        var top =
          (trashRect === null || trashRect === void 0
            ? void 0
            : trashRect.bottom) || 0;
        var y = Math.min(elContainerRect.bottom, top);
        var offset = isOwner
          ? OFFSET_POSITION_TOOLTIP_OWNER
          : OFFSET_POSITION_TOOLTIP;
        setOffset({
          left: trashLeft - offset,
          top: y,
        });
      };
      elContainer === null || elContainer === void 0
        ? void 0
        : elContainer.addEventListener('scroll', onScroll);
      elContainer === null || elContainer === void 0
        ? void 0
        : elContainer.addEventListener('transitionstart', onScroll);
      return function () {
        elContainer === null || elContainer === void 0
          ? void 0
          : elContainer.removeEventListener('scroll', onScroll);
        elContainer === null || elContainer === void 0
          ? void 0
          : elContainer.removeEventListener('transitionstart', onScroll);
      };
    },
    [trashRef, role, isOpen],
  );
  return _jsxs(
    'div',
    __assign(
      {
        onClick: handleClick,
        className: classNames('AssignerItem__container '.concat(className), {
          disabled: disabled,
        }),
      },
      {
        children: [
          _jsxs(
            'div',
            __assign(
              {className: 'AssignerItem__wrapper'},
              {
                children: [
                  _jsx(Avatar, {
                    user: user,
                    className: 'AssignerItem__wrapper-avatar',
                  }),
                  _jsxs(
                    'div',
                    __assign(
                      {className: 'AssignerItem__wrapper-name'},
                      {
                        children: [
                          _jsxs('p', {
                            children: [
                              isGuestUser ? 'Guest User' : user.name,
                              ' ',
                              isOwner && '(Owner)',
                            ],
                          }),
                          _jsx('p', {children: user.email}),
                        ],
                      },
                    ),
                  ),
                ],
              },
            ),
          ),
          showIconTrash &&
            _jsxs(
              'div',
              __assign(
                {
                  ref: trashRef,
                  onClick: handleRemoveUser,
                  'data-tip': dataToolTip,
                  className: 'AssignerItem__delete-button',
                },
                {
                  children: [
                    _jsx('img', {
                      src: isOwner ? Images.icon_repeat : Images.icon_trash,
                      alt: 'delete icon',
                    }),
                    !isMobile &&
                      _jsx(
                        'div',
                        __assign(
                          {
                            className: 'AssignerItem__tooltip place-bottom',
                            style: {
                              top: ''.concat(offset.top, 'px'),
                              left: ''.concat(offset.left, 'px'),
                            },
                          },
                          {children: dataToolTip},
                        ),
                      ),
                  ],
                },
              ),
            ),
          disabled &&
            _jsx(
              'span',
              __assign(
                {className: 'AssignerItem__user-info-text--added'},
                {children: 'Added'},
              ),
            ),
        ],
      },
    ),
  );
};
AssignerItem.defaultProps = {
  className: '',
  showIconTrash: true,
  onClick: function () {
    return undefined;
  },
  role: 'viewer',
  disabled: false,
};
export default AssignerItem;
//# sourceMappingURL=AssignerItem.js.map
