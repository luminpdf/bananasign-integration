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
var _a;
import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';
import './AddSignerViewerModal.style.scss';
import {useContext, useMemo, useRef, useState} from 'react';
import AnimatedModal from '@src/components/AnimatedModal';
import {usePopup} from '@src/components/CustomModal';
import ReactModalCoupleButton from '@src/components/ReactModalCoupleButton';
import {REQUEST_TYPE} from '@src/constants/common';
import useOnClickOutside from '@src/hooks/useOnClickOutside';
import common from '@src/utils/common';
import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
import InputAssigner from './InputAssigner';
// import RecentContacts from './RecentContacts';
import SearchContact from './SearchContact';
var REQUEST_TYPE_TO_STRING =
  ((_a = {}),
  (_a[REQUEST_TYPE.SIGNER] = 'Add Signer'),
  (_a[REQUEST_TYPE.VIEWER] = 'Add Viewer'),
  _a);
var AddSignerViewerModal = function () {
  var context = useContext(InviteToSignContext);
  var _a = context.state,
    type = _a.type,
    signers = _a.signers,
    viewers = _a.viewers,
    dispatch = context.dispatch;
  var prevAssigners = useMemo(function () {
    return {
      SIGNER: signers,
      VIEWER: viewers,
    };
  }, []);
  var _b = useState(false),
    isFocusSearchView = _b[0],
    setFocusSearchView = _b[1];
  var searchRef = useRef(null);
  var inputRef = useRef(null);
  var hideModal = usePopup()[0].hideModal;
  useOnClickOutside(searchRef, function () {
    var _a;
    (_a =
      inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) ===
      null || _a === void 0
      ? void 0
      : _a.unFocusInput();
    setFocusSearchView(false);
  });
  var resetInputContact = function () {
    var _a;
    (_a =
      inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) ===
      null || _a === void 0
      ? void 0
      : _a.resetInput();
  };
  var onCloseModal = function () {
    dispatch(InviteToSignContextActions.CANCEL_ADD_ASSIGNERS(true));
    dispatch(InviteToSignContextActions.CLOSE_AND_RESET_MODAL_SEARCH());
    hideModal();
  };
  var onConfirm = function () {
    dispatch(InviteToSignContextActions.CLOSE_AND_RESET_MODAL_SEARCH());
    hideModal();
  };
  var isEnableConfirmButton = useMemo(
    function () {
      var _a;
      var signersList =
        ((_a = {}),
        (_a[REQUEST_TYPE.SIGNER] = signers),
        (_a[REQUEST_TYPE.VIEWER] = viewers),
        _a);
      var isChanged = !common.compareArrayByElement(
        signersList[type],
        prevAssigners[type],
        'email',
      );
      return isChanged;
    },
    [type, signers, viewers],
  );
  return _jsx(
    AnimatedModal,
    __assign(
      {className: 'AssignModal AssignModal__custom-modal'},
      {
        children: _jsxs(
          'div',
          __assign(
            {className: 'AssignModal__container'},
            {
              children: [
                _jsxs(
                  'div',
                  __assign(
                    {className: 'AssignModal__header'},
                    {
                      children: [
                        _jsx(
                          'h4',
                          __assign(
                            {className: 'AssignModal__title'},
                            {children: REQUEST_TYPE_TO_STRING[type]},
                          ),
                        ),
                        _jsx(InputAssigner, {
                          ref: inputRef,
                          onFocus: function () {
                            return setFocusSearchView(true);
                          },
                          isOpenSearch: isFocusSearchView,
                        }),
                      ],
                    },
                  ),
                ),
                _jsxs(
                  'div',
                  __assign(
                    {className: 'AssignModal__body'},
                    {
                      children: [
                        _jsx(SearchContact, {
                          ref: searchRef,
                          resetInput: resetInputContact,
                          active: isFocusSearchView,
                        }),
                        _jsx(
                          'div',
                          __assign(
                            {className: 'AssignModal__contact-list'},
                            {
                              children: _jsx('div', {
                                className:
                                  'AssignModal__contact-component active',
                              }),
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
                _jsx(
                  'div',
                  __assign(
                    {className: 'AssignModal__footer'},
                    {
                      children: _jsx(ReactModalCoupleButton, {
                        onCancel: onCloseModal,
                        onConfirm: onConfirm,
                        primaryTitle: 'Done',
                        disabledConfirmButton: !isEnableConfirmButton,
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        ),
      },
    ),
  );
};
export default AddSignerViewerModal;
//# sourceMappingURL=AddSignerViewerModal.js.map
