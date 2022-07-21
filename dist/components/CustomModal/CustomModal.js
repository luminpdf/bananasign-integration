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
import './CustomModal.style.scss';
import ReactModal from 'react-modal';
import { Images } from '@src/assets';
ReactModal.setAppElement('#root');
var CustomModal = function (props) {
    var children = props.children, isOpen = props.isOpen, closeModal = props.closeModal, shouldCloseOnOverlayClick = props.shouldCloseOnOverlayClick, onCancel = props.onCancel, className = props.className, isShowCloseButton = props.isShowCloseButton;
    return (_jsxs(ReactModal, __assign({ isOpen: isOpen, ariaHideApp: false, shouldCloseOnOverlayClick: shouldCloseOnOverlayClick, onRequestClose: closeModal, onAfterClose: onCancel, overlayClassName: "ReactModal__Overlay--custom", className: "ReactModal__Content--custom ".concat(className) }, { children: [isShowCloseButton && (_jsx("div", __assign({ className: "ReactModal__ButtonClose", onClick: closeModal }, { children: _jsx("img", { src: Images.icon_cancel_button, alt: "icon close" }) }))), children] })));
};
CustomModal.defaultProps = {
    children: null,
    isOpen: false,
    shouldCloseOnOverlayClick: false,
    isShowCloseButton: true,
    onCancel: undefined,
    className: '',
};
export default CustomModal;
//# sourceMappingURL=CustomModal.js.map