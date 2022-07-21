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
import './AssignerItem.style.scss';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';
import { Images } from '@src/assets';
import Avatar from '@src/components/Avatar';
import { GUEST_USER } from '@src/constants/common';
var getTooltipContent = function (role) {
    return ({
        signer: 'Change my role to viewer',
        viewer: 'Change my role to signer',
    }[role]);
};
var AssignerItem = function (props) {
    var user = props.user, className = props.className, showIconTrash = props.showIconTrash, onClick = props.onClick, onRemoveUser = props.onRemoveUser, role = props.role, disabled = props.disabled;
    var isGuestUser = (user === null || user === void 0 ? void 0 : user.name) === GUEST_USER;
    var isOwner = user === null || user === void 0 ? void 0 : user.isOwner;
    // const invalidStatus = user.newAssignUser;
    var handleClick = function () {
        if (onClick && typeof onClick === 'function') {
            onClick(user);
        }
    };
    var handleRemoveUser = function () {
        ReactTooltip.hide();
        if (onRemoveUser && typeof onRemoveUser === 'function') {
            onRemoveUser(user);
        }
    };
    var dataToolTip = isOwner
        ? getTooltipContent(role || 'signer')
        : "Remove ".concat(role);
    return (_jsxs("div", __assign({ onClick: handleClick, className: classNames("AssignerItem__container ".concat(className), {
            disabled: disabled,
        }) }, { children: [_jsxs("div", __assign({ className: "AssignerItem__wrapper" }, { children: [_jsx(Avatar, { user: user, className: "AssignerItem__wrapper-avatar" }), _jsxs("div", __assign({ className: "AssignerItem__wrapper-name" }, { children: [_jsxs("p", { children: [isGuestUser ? 'Guest User' : user.name, " ", isOwner && '(Owner)'] }), _jsx("p", { children: user.email })] }))] })), showIconTrash && (_jsxs("div", __assign({ onClick: handleRemoveUser, "data-tip": dataToolTip, className: "AssignerItem__delete-button" }, { children: [_jsx("img", { src: isOwner ? Images.icon_repeat : Images.icon_trash, alt: "delete icon" }), _jsx(ReactTooltip, { offset: { top: 4 }, effect: "solid", arrowColor: "transparent", place: "bottom", className: "AssignerItem__tooltip" })] }))), disabled && (_jsx("span", __assign({ className: "AssignerItem__user-info-text--added" }, { children: "Added" })))] })));
};
AssignerItem.defaultProps = {
    className: '',
    showIconTrash: true,
    onClick: function () { return undefined; },
    role: '',
    disabled: false,
};
export default AssignerItem;
//# sourceMappingURL=AssignerItem.js.map