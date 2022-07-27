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
import './Header.style.scss';
import {useContext} from 'react';
import {Images} from '@src/assets';
import {usePopup} from '@src/components/CustomModal';
import {
  ModalName,
  ModalSettingType,
} from '@src/components/CustomModal/CustomModal';
import common from '@src/utils/common';
import InviteToSignContext from '../InviteToSignContext';
var PROGRESS_BAR_LIST_ITEM = [
  {value: 'INVITE TO SIGN', className: 'active'},
  {value: 'ADD DUE DATE', className: ''},
  {value: 'PREPARE', className: ''},
  {value: 'REVIEW', className: ''},
];
var Header = function () {
  var context = useContext(InviteToSignContext);
  var isMobile = common.isMobile();
  var onClose = context.state.onClose;
  var showModal = usePopup()[0].showModal;
  var renderProgressBar = function () {
    if (isMobile) {
      return null;
    }
    return _jsx(
      'div',
      __assign(
        {className: 'Header__progressBar-container'},
        {
          children: _jsx(
            'ul',
            __assign(
              {className: 'Header__progressBar-list'},
              {
                children: PROGRESS_BAR_LIST_ITEM.map(function (item) {
                  return _jsx(
                    'li',
                    __assign(
                      {className: ''.concat(item.className)},
                      {children: _jsx('span', {children: item.value})},
                    ),
                    item.value,
                  );
                }),
              },
            ),
          ),
        },
      ),
    );
  };
  var renderCancelButton = function () {
    return _jsx(
      'div',
      __assign(
        {className: 'Header__left'},
        {children: _jsx('img', {src: Images.icon_cancel_button})},
      ),
    );
  };
  var renderRightLogo = function () {
    if (isMobile) {
      return null;
    }
    return _jsx(
      'div',
      __assign(
        {className: 'Header__right'},
        {children: _jsx('img', {src: Images.icon_sign_logo})},
      ),
    );
  };
  var handleClose = function () {
    var modalOptions = {
      modalName: ModalName.WARNING,
      settings: {
        type: ModalSettingType.CANCEL_PROGRESS,
        onConfirm: onClose,
      },
    };
    showModal(modalOptions);
  };
  return _jsxs(
    'div',
    __assign(
      {onClick: handleClose, className: 'Header__container'},
      {
        children: [
          renderCancelButton(),
          isMobile &&
            _jsx(
              'h2',
              __assign(
                {className: 'Header__title-mobile'},
                {children: 'Invite to sign'},
              ),
            ),
          renderProgressBar(),
          renderRightLogo(),
        ],
      },
    ),
  );
};
export default Header;
//# sourceMappingURL=Header.js.map
