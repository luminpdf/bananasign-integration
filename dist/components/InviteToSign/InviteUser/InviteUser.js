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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = {next: verb(0), throw: verb(1), return: verb(2)}),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {value: op[1], done: false};
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return {value: op[0] ? op[1] : void 0, done: true};
    }
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

import './InviteUser.style.scss';

import classNames from 'classnames';
import {useContext, useEffect, useState} from 'react';
import {jsx as _jsx, jsxs as _jsxs} from 'react/jsx-runtime';

import {Images} from '@src/assets';
import {REQUEST_TYPE} from '@src/constants/common';

import Button from '@components/Button';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
import AssignerItem from './AssignerItem';
var InviteUser = function () {
  var context = useContext(InviteToSignContext);
  var _a = context.state,
    signers = _a.signers,
    viewers = _a.viewers,
    isOpenAddAssignerModal = _a.isOpenAddAssignerModal,
    cancelAddAssigners = _a.cancelAddAssigners,
    saveDocumentInfo = _a.saveDocumentInfo,
    loading = _a.loading,
    dispatch = context.dispatch;
  var _b = useState([]),
    signersState = _b[0],
    setSignersState = _b[1];
  var _c = useState([]),
    viewersState = _c[0],
    setViewersState = _c[1];
  useEffect(
    function () {
      if (isOpenAddAssignerModal) {
        return;
      }
      if (cancelAddAssigners) {
        dispatch(InviteToSignContextActions.SET_SIGNERS(signersState));
        dispatch(InviteToSignContextActions.SET_VIEWERS(viewersState));
        dispatch(InviteToSignContextActions.CANCEL_ADD_ASSIGNERS(false));
      } else {
        setSignersState(signers);
        setViewersState(viewers);
      }
    },
    [isOpenAddAssignerModal, signers, viewers],
  );
  var handleOpenAddAssignerModal = function (type) {
    dispatch(InviteToSignContextActions.SET_REQUEST_TYPE(type));
    dispatch(InviteToSignContextActions.SET_OPEN_ADD_ASSIGNER_MODAL(true));
  };
  var handleRemoveSigner = function (user) {
    dispatch(InviteToSignContextActions.REMOVE_SIGNER(user));
    if (user === null || user === void 0 ? void 0 : user.isOwner) {
      dispatch(
        InviteToSignContextActions.SET_VIEWERS(
          __spreadArray([user], viewers, true),
        ),
      );
    }
  };
  var handleRemoveViewer = function (user) {
    dispatch(InviteToSignContextActions.REMOVE_VIEWER(user));
    if (user === null || user === void 0 ? void 0 : user.isOwner) {
      dispatch(
        InviteToSignContextActions.SET_SIGNERS(
          __spreadArray([user], signers, true),
        ),
      );
    }
  };
  var handleNext = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var result, identify, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (loading) {
              return [2 /*return*/];
            }
            dispatch(InviteToSignContextActions.SET_LOADING(true));
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [
              4 /*yield*/,
              saveDocumentInfo({
                signers: signers,
                viewers: viewers,
              }),
            ];
          case 2:
            result = _a.sent();
            identify = result.identify;
            if (identify) {
              dispatch(InviteToSignContextActions.SET_IDENTIFY(identify));
              dispatch(InviteToSignContextActions.OPEN_BANANASIGN_IFRAME(true));
            }
            return [3 /*break*/, 4];
          case 3:
            error_1 = _a.sent();
            console.warn('Cannot load bananasign service');
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  return _jsxs(
    'div',
    __assign(
      {className: 'InviteUser__container'},
      {
        children: [
          _jsx(
            'h1',
            __assign(
              {className: 'InviteUser__title'},
              {children: 'Invite people'},
            ),
          ),
          _jsxs(
            'div',
            __assign(
              {className: 'InviteUser__wrapper'},
              {
                children: [
                  _jsxs(
                    'h2',
                    __assign(
                      {className: 'InviteUser__wrapper-title'},
                      {
                        children: [
                          'Who needs to Sign?',
                          _jsx('span', {children: ' *'}),
                        ],
                      },
                    ),
                  ),
                  _jsxs(
                    'div',
                    __assign(
                      {className: 'InviteUser__wrapper-add-user'},
                      {
                        children: [
                          _jsx(
                            'div',
                            __assign(
                              {
                                className: classNames(
                                  'InviteUser__wrapper-user-list',
                                  {
                                    hide_border: !signersState.length,
                                  },
                                ),
                              },
                              {
                                children: signersState.map(function (
                                  signer,
                                  index,
                                ) {
                                  return _jsx(
                                    AssignerItem,
                                    {
                                      user: signer,
                                      onRemoveUser: handleRemoveSigner,
                                      role: 'signer',
                                    },
                                    (signer === null || signer === void 0
                                      ? void 0
                                      : signer.email) +
                                      '' +
                                      index,
                                  );
                                }),
                              },
                            ),
                          ),
                          _jsx(Button, {
                            onClick: function () {
                              return handleOpenAddAssignerModal(
                                REQUEST_TYPE.SIGNER,
                              );
                            },
                            className: 'InviteUser__wrapper-add-button',
                            isRippleEffect: true,
                            title: 'Add Signer',
                            icon: Images.icon_sign,
                          }),
                        ],
                      },
                    ),
                  ),
                  _jsx(
                    'h2',
                    __assign(
                      {className: 'InviteUser__wrapper-title'},
                      {children: 'Who needs to View?'},
                    ),
                  ),
                  _jsxs(
                    'div',
                    __assign(
                      {className: 'InviteUser__wrapper-add-user'},
                      {
                        children: [
                          _jsx(
                            'div',
                            __assign(
                              {
                                className: classNames(
                                  'InviteUser__wrapper-user-list',
                                  {
                                    hide_border: !viewersState.length,
                                  },
                                ),
                              },
                              {
                                children: viewersState.map(function (
                                  viewer,
                                  index,
                                ) {
                                  return _jsx(
                                    AssignerItem,
                                    {
                                      user: viewer,
                                      onRemoveUser: handleRemoveViewer,
                                      role: 'viewer',
                                    },
                                    (viewer === null || viewer === void 0
                                      ? void 0
                                      : viewer.email) +
                                      '' +
                                      index,
                                  );
                                }),
                              },
                            ),
                          ),
                          _jsx(Button, {
                            onClick: function () {
                              return handleOpenAddAssignerModal(
                                REQUEST_TYPE.VIEWER,
                              );
                            },
                            className: 'InviteUser__wrapper-add-button',
                            isRippleEffect: true,
                            title: 'Add Viewer',
                            icon: Images.icon_show,
                          }),
                        ],
                      },
                    ),
                  ),
                  _jsx(Button, {
                    className: 'InviteUser__next-button',
                    isRippleEffect: true,
                    title: 'Next',
                    onClick: handleNext,
                  }),
                ],
              },
            ),
          ),
        ],
      },
    ),
  );
};
export default InviteUser;
//# sourceMappingURL=InviteUser.js.map
