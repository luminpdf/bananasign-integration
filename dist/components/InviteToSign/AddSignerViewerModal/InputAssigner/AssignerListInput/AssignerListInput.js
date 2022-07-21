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
import './AssignerListInput.style.scss';
import classNames from 'classnames';
import { useContext, useEffect, useRef } from 'react';
import { animated, useTransition } from 'react-spring';
import { Images } from '@src/assets';
import InviteToSignContext from '@src/components/InviteToSign/InviteToSignContext';
import { InviteToSignContextActions } from '@src/components/InviteToSign/InviteToSignContextActions';
import { REQUEST_TYPE } from '@src/constants/common';
var AssignerListInput = function () {
    var divRef = useRef(null);
    var maxSigners = useRef(0);
    var context = useContext(InviteToSignContext);
    var _a = context.state, signers = _a.signers, viewers = _a.viewers, type = _a.type, dispatch = context.dispatch;
    var assignUsers = type === REQUEST_TYPE.SIGNER ? signers : viewers;
    var assignUsersAdded = assignUsers.filter(function (user) { return !user.isOwner; });
    var transition = useTransition(assignUsersAdded, {
        from: { x: 0, opacity: 0 },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: 0, width: 0 },
    });
    useEffect(function () {
        if (divRef.current) {
            if (maxSigners.current < assignUsersAdded.length) {
                divRef.current.scrollIntoView({ behavior: 'smooth' });
            }
            maxSigners.current = assignUsersAdded.length;
        }
    }, [assignUsersAdded]);
    var onRemoveAssigner = function (assigner) {
        if (type === REQUEST_TYPE.SIGNER) {
            dispatch(InviteToSignContextActions.REMOVE_SIGNER(assigner));
        }
        else {
            dispatch(InviteToSignContextActions.REMOVE_VIEWER(assigner));
        }
    };
    var handleRemoveClick = function (assigner) {
        onRemoveAssigner(assigner);
    };
    var assignedEmailItems = transition(function (style, item, _, index) {
        var isDisable = item === null || item === void 0 ? void 0 : item.isOwner;
        return (_jsxs(animated.div, __assign({ className: "AssignerListInput__row-email", style: style }, { children: [_jsx("span", __assign({ className: classNames('AssignerListInput__email', {
                        disabled: isDisable,
                    }) }, { children: item.email })), _jsx("div", __assign({ onClick: function () { return handleRemoveClick(item); }, className: classNames('AssignerListInput__icon-right', {
                        hidden: isDisable,
                    }) }, { children: _jsx("img", { src: Images.icon_close, alt: "icon remove" }) }))] }), index));
    });
    return (_jsxs("div", __assign({ className: "AssignerListInput__container" }, { children: [assignedEmailItems, _jsx("div", { ref: divRef })] })));
};
export default AssignerListInput;
//# sourceMappingURL=AssignerListInput.js.map