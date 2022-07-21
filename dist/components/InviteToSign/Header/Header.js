var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Header.style.scss';
import { useContext } from 'react';
import { Images } from '@src/assets';
import { MODAL_TYPES } from '@src/constants/common';
import InviteToSignContext from '../InviteToSignContext';
import { InviteToSignContextActions } from '../InviteToSignContextActions';
var PROGRESS_BAR_LIST_ITEM = [
    { value: 'INVITE TO SIGN', className: 'active' },
    { value: 'ADD DUE DATE', className: '' },
    { value: 'PREPARE', className: '' },
    { value: 'REVIEW', className: '' },
];
var Header = function () {
    var context = useContext(InviteToSignContext);
    var onClose = context.state.onClose, dispatch = context.dispatch;
    var renderProgressBar = function () { return (_jsx("div", __assign({ className: "Header__progressBar-container" }, { children: _jsx("ul", __assign({ className: "Header__progressBar-list" }, { children: PROGRESS_BAR_LIST_ITEM.map(function (item) { return (_jsx("li", __assign({ className: "".concat(item.className) }, { children: _jsx("span", { children: item.value }) }), item.value)); }) })) }))); };
    var renderCancelButton = function () {
        return (_jsx("div", __assign({ className: "Header__left" }, { children: _jsx("img", { src: Images.icon_cancel_button }) })));
    };
    var renderRightLogo = function () {
        return (_jsx("div", __assign({ className: "Header__right" }, { children: _jsx("img", { src: Images.icon_sign_logo }) })));
    };
    var handleClose = function () {
        dispatch(InviteToSignContextActions.SET_MODAL_WARNING_TYPE({
            type: MODAL_TYPES.CANCEL_PROGRESS,
            onConfirm: onClose,
        }));
    };
    return (_jsxs("div", __assign({ onClick: handleClose, className: "Header__container" }, { children: [renderCancelButton(), renderProgressBar(), renderRightLogo()] })));
};
export default Header;
//# sourceMappingURL=Header.js.map