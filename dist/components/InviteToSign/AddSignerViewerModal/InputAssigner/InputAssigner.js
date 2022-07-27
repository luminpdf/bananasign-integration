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
  Fragment as _Fragment,
  jsxs as _jsxs,
} from 'react/jsx-runtime';
import './InputAssigner.style.scss';
import classNames from 'classnames';
import React, {useContext, useImperativeHandle, useRef, useState} from 'react';
import {Images} from '@src/assets';
import CustomInput from '@src/components/CustomInput';
import {CONTACT_TYPE, GUEST_USER, REQUEST_TYPE} from '@src/constants/common';
import common from '@src/utils/common';
import InviteToSignContext from '../../InviteToSignContext';
import {InviteToSignContextActions} from '../../InviteToSignContextActions';
import AssignerListInput from './AssignerListInput/AssignerListInput';
var InputAssigner = React.forwardRef(function (props, ref) {
  var _a = useContext(InviteToSignContext),
    _b = _a.state,
    searchContacts = _b.searchContacts,
    signers = _b.signers,
    viewers = _b.viewers,
    type = _b.type,
    dispatch = _a.dispatch;
  var onFocus = props.onFocus,
    onBlur = props.onBlur,
    isOpenSearch = props.isOpenSearch;
  var _c = useState(''),
    email = _c[0],
    setEmail = _c[1];
  var customInputRef = useRef(null);
  var assignUsers = type === REQUEST_TYPE.SIGNER ? signers : viewers;
  var assignUsersAdded = assignUsers.filter(function (user) {
    return !user.isOwner;
  });
  useImperativeHandle(ref, function () {
    return {
      unFocusInput: function () {
        var _a;
        return (_a =
          customInputRef === null || customInputRef === void 0
            ? void 0
            : customInputRef.current) === null || _a === void 0
          ? void 0
          : _a.unFocus();
      },
      resetInput: function () {
        var _a;
        (_a =
          customInputRef === null || customInputRef === void 0
            ? void 0
            : customInputRef.current) === null || _a === void 0
          ? void 0
          : _a.reset();
        setEmail('');
        dispatch(InviteToSignContextActions.SET_SEARCH_CONTACTS([]));
        dispatch(InviteToSignContextActions.SET_WORD_SEARCH_CONTACT(''));
      },
    };
  });
  var handleSearchContactByEmail = common.debounce(function (keyWords) {
    if (!common.validateEmail(keyWords)) {
      return false;
    }
    var contactList = [
      {
        name: GUEST_USER,
        avatarRemoteId: '',
        email: keyWords,
        type: CONTACT_TYPE.GUEST,
        userId: '',
      },
    ];
    dispatch(InviteToSignContextActions.SET_SEARCH_CONTACTS(contactList));
    dispatch(InviteToSignContextActions.SET_WORD_SEARCH_CONTACT(keyWords));
    return true;
  }, 300);
  var isEmptyAssignUsers =
    Array.isArray(assignUsersAdded) && assignUsersAdded.length === 0;
  var _handleInputChange = function (value) {
    dispatch(InviteToSignContextActions.SET_WORD_SEARCH_CONTACT(value));
    handleSearchContactByEmail(value);
  };
  var handleChangeInput = function (e) {
    setEmail(e.target.value || '');
    _handleInputChange(e.target.value || '');
    if (searchContacts.length > 0) {
      dispatch(InviteToSignContextActions.SET_SEARCH_CONTACTS([]));
    }
  };
  return _jsxs(
    'div',
    __assign(
      {
        className: classNames('InputAssigner__container', {
          isOpenSearch: isOpenSearch,
          EmptyAssignUsers: isEmptyAssignUsers,
        }),
      },
      {
        children: [
          !isEmptyAssignUsers &&
            _jsxs(_Fragment, {
              children: [
                _jsx(AssignerListInput, {}),
                _jsx('div', {className: 'InputAssigner__divider'}),
              ],
            }),
          _jsx(CustomInput, {
            ref: customInputRef,
            name: 'name',
            fullWidth: true,
            value: email,
            icon: Images.icon_search,
            type: 'email',
            onChange: handleChangeInput,
            placeholder: 'Enter email address',
            minLength: 1,
            maxLength: 254,
            onFocus: onFocus,
            onBlur: onBlur,
            classWrapper: 'InputAssigner__wrapper--input',
            className: 'InputAssigner__input',
            showClearButton: true,
          }),
        ],
      },
    ),
  );
});
InputAssigner.displayName = 'InputAssigner';
InputAssigner.defaultProps = {
  onFocus: function () {
    return undefined;
  },
  onBlur: function () {
    return undefined;
  },
  isOpenSearch: false,
};
export default InputAssigner;
//# sourceMappingURL=InputAssigner.js.map
