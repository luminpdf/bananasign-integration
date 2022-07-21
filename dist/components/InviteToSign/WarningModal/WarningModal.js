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
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './WarningModal.style.scss';
import { useContext } from 'react';
import { Images } from '@src/assets';
import CustomModal from '@src/components/CustomModal';
import ReactModalCoupleButton from '@src/components/ReactModalCoupleButton';
import { MODAL_TYPES } from '@src/constants/common';
import InviteToSignContext from '../InviteToSignContext';
import { InviteToSignContextActions } from '../InviteToSignContextActions';
var MODAL_WARNING_TYPES = (_a = {},
    _a[MODAL_TYPES.ONLY_ONE_SIGNER_IS_OWNER] = {
        TITLE: 'Only you will be able to sign',
        CONTENT: '',
        FIRST_BTN: 'Cancel',
        SECOND_BTN: 'Continue',
        ICON: Images.icon_info,
    },
    _a[MODAL_TYPES.CANCEL_PROGRESS] = {
        TITLE: 'Discard Changes',
        CONTENT: 'Do you want to cancel this progress? This will clear data you input before.',
        FIRST_BTN: 'No, Thanks',
        SECOND_BTN: 'Discard',
        ICON: Images.icon_warning,
    },
    _a);
var WarningModal = function () {
    var context = useContext(InviteToSignContext);
    var modalWarningData = context.state.modalWarningData, dispatch = context.dispatch;
    var onCloseModal = function () {
        dispatch(InviteToSignContextActions.SET_MODAL_WARNING_TYPE({ type: '' }));
        if (modalWarningData.onCancel &&
            typeof modalWarningData.onCancel === 'function') {
            modalWarningData.onCancel();
        }
    };
    var onConfirm = function () {
        dispatch(InviteToSignContextActions.SET_MODAL_WARNING_TYPE({ type: '' }));
        if (modalWarningData.onConfirm &&
            typeof modalWarningData.onConfirm === 'function') {
            modalWarningData.onConfirm();
        }
    };
    if (!modalWarningData.type) {
        return null;
    }
    var modalContent = MODAL_WARNING_TYPES[modalWarningData.type];
    return (_jsx(CustomModal, __assign({ isShowCloseButton: false, isOpen: true, closeModal: onCloseModal }, { children: _jsxs("div", __assign({ className: "WarningModal__container" }, { children: [_jsx("img", { src: modalContent.ICON, alt: "icon modal" }), _jsx("p", __assign({ className: "WarningModal__container-title" }, { children: modalContent.TITLE })), _jsx("p", __assign({ className: "WarningModal__container-content" }, { children: modalContent.CONTENT })), _jsx(ReactModalCoupleButton, { onCancel: onCloseModal, onConfirm: onConfirm, secondaryTitle: modalContent.FIRST_BTN, primaryTitle: modalContent.SECOND_BTN })] })) })));
};
export default WarningModal;
//# sourceMappingURL=WarningModal.js.map