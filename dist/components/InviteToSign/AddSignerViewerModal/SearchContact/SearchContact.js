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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };

import './SearchContact.style.scss';

import classNames from 'classnames';
import React, {useCallback, useContext} from 'react';
import {jsx as _jsx} from 'react/jsx-runtime';

import {GUEST_USER, REQUEST_TYPE} from '@src/constants/common';

import InviteToSignContext from '../../InviteToSignContext';
import {InviteToSignContextActions} from '../../InviteToSignContextActions';
import AssignerItem from '../../InviteUser/AssignerItem';
// import EmptySearchContactResults from './EmptySearchContactResults';
// import SearchContactEmptyKeyWords from './SearchContactEmptyKeyWords';
var SearchContact = React.forwardRef(function (props, ref) {
  var active = props.active,
    resetInput = props.resetInput;
  var _a = useContext(InviteToSignContext),
    _b = _a.state,
    searchContacts = _b.searchContacts,
    signers = _b.signers,
    viewers = _b.viewers,
    type = _b.type,
    dispatch = _a.dispatch;
  var existedUser = useCallback(
    function (contact) {
      return (
        __spreadArray(
          __spreadArray([], signers, true),
          viewers,
          true,
        ).findIndex(function (user) {
          return user.email === contact.email;
        }) > -1
      );
    },
    [signers, viewers],
  );
  var addContactAssignUser = function (assignUser) {
    if (existedUser(assignUser)) {
      return false;
    }
    var newAssignUser = {newAssignUser: true};
    if (type === REQUEST_TYPE.VIEWER) {
      dispatch(
        InviteToSignContextActions.ADD_VIEWER(
          __assign(__assign(__assign({}, assignUser), newAssignUser), {
            name:
              (assignUser === null || assignUser === void 0
                ? void 0
                : assignUser.name) || GUEST_USER,
            id: '',
            requestType: 'VIEWER',
            dueTimeExpired: 0,
          }),
        ),
      );
    } else if (type === REQUEST_TYPE.SIGNER) {
      dispatch(
        InviteToSignContextActions.ADD_SIGNER(
          __assign(__assign(__assign({}, assignUser), newAssignUser), {
            name:
              (assignUser === null || assignUser === void 0
                ? void 0
                : assignUser.name) || GUEST_USER,
            id: '',
            requestType: 'SIGNER',
            dueTimeExpired: 0,
          }),
        ),
      );
    }
    if (resetInput && typeof resetInput === 'function') {
      resetInput();
    }
    return true;
  };
  var renderContent = function () {
    // if (!keyWordSearchContact) {
    //   return <SearchContactEmptyKeyWords />;
    // }
    // if (Boolean(keyWordSearchContact) && searchContacts.length === 0) {
    //   return <EmptySearchContactResults keyWords={keyWordSearchContact} />;
    // }
    if (searchContacts.length > 0) {
      return _jsx(
        'div',
        __assign(
          {className: 'SearchContact__list'},
          {
            children: searchContacts.map(function (contact, index) {
              return _jsx(
                AssignerItem,
                {
                  onClick: addContactAssignUser,
                  user: contact,
                  showIconTrash: false,
                  className: 'SearchContact__item',
                  disabled: existedUser(contact),
                },
                index,
              );
            }),
          },
        ),
      );
    }
    return null;
  };
  return _jsx(
    'div',
    __assign(
      {
        className: classNames('SearchContact__container', {active: active}),
        ref: ref,
      },
      {children: renderContent()},
    ),
  );
});
SearchContact.displayName = 'SearchContact';
SearchContact.defaultProps = {
  active: false,
  resetInput: function () {
    return undefined;
  },
};
export default SearchContact;
//# sourceMappingURL=SearchContact.js.map
