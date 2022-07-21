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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './CustomInput.style.scss';
import classNames from 'classnames';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { Images } from '@src/assets';
var CustomInput = React.forwardRef(function (props, ref) {
    var classWrapper = props.classWrapper, className = props.className, onFocus = props.onFocus, onBlur = props.onBlur, label = props.label, name = props.name, errorMessage = props.errorMessage, labelClassName = props.labelClassName, fullWidth = props.fullWidth, hideValidationIcon = props.hideValidationIcon, showClearButton = props.showClearButton, type = props.type, value = props.value, readOnly = props.readOnly, disabled = props.disabled, icon = props.icon, onChange = props.onChange, isErrorBorder = props.isErrorBorder, showErrorMessageOnFocus = props.showErrorMessageOnFocus, otherProps = __rest(props, ["classWrapper", "className", "onFocus", "onBlur", "label", "name", "errorMessage", "labelClassName", "fullWidth", "hideValidationIcon", "showClearButton", "type", "value", "readOnly", "disabled", "icon", "onChange", "isErrorBorder", "showErrorMessageOnFocus"]);
    var _a = useState(false), isFocus = _a[0], setFocus = _a[1];
    var error = Boolean(errorMessage);
    var isActive = !readOnly && !disabled;
    var inputRef = useRef(null);
    var shouldShowErrorIcon = error && !isFocus && !hideValidationIcon && isActive;
    var shouldShowClearButton = showClearButton && isActive && Boolean(value === null || value === void 0 ? void 0 : value.length);
    var focus = isFocus || (!error && Boolean(value && !isErrorBorder));
    var shouldShowErrorMessage = !focus || showErrorMessageOnFocus;
    var renderIcon = function () {
        return (icon && (_jsx("img", { src: icon, alt: "icon input", className: classNames('CustomInput__left-icon', {
                'CustomInput__left-icon__focused': focus,
            }) })));
    };
    var handleChangeInput = function (e) {
        onChange && onChange(e);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var handleClearInput = function (e) {
        var _a;
        (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        onChange && onChange(e);
    };
    useImperativeHandle(ref, function () { return ({
        focus: function () { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        unFocus: function () { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.blur(); },
        reset: function () {
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        },
    }); });
    return (_jsxs("div", __assign({ className: classNames("CustomInput-container ".concat(classWrapper), {
            fullWidth: fullWidth,
        }) }, { children: [label && (_jsx("label", __assign({ className: "CustomInput__label ".concat(labelClassName), htmlFor: "input" }, { children: label }))), _jsxs("div", __assign({ className: "CustomInput__wrapper" }, { children: [renderIcon(), _jsx("input", __assign({ id: "input", className: classNames("CustomInput__input ".concat(className), {
                            'CustomInput__input--focus': focus,
                            'CustomInput__input--error': (shouldShowErrorMessage && error) || isErrorBorder,
                            'CustomInput__input--hasIcon': shouldShowErrorIcon || shouldShowClearButton,
                            'CustomInput__input--hasLeftIcon': Boolean(icon),
                            'CustomInput__input--disable': disabled,
                        }), ref: inputRef, onFocus: function (e) {
                            setFocus(true);
                            onFocus && onFocus(e);
                        }, onBlur: function (e) {
                            setFocus(false);
                            onBlur && onBlur(e);
                        }, onChange: handleChangeInput, value: value, type: type, disabled: disabled, readOnly: readOnly, name: name }, otherProps)), shouldShowClearButton && (_jsx("div", __assign({ onClick: handleClearInput }, { children: _jsx("img", { src: Images.icon_close, alt: "icon input", className: "CustomInput__icon CustomInput__icon--clickable" }) })))] })), shouldShowErrorMessage && errorMessage && (_jsx("p", __assign({ className: "CustomInput__error-message" }, { children: errorMessage })))] })));
});
CustomInput.defaultProps = {
    className: '',
    labelClassName: '',
    errorMessage: '',
    label: '',
    name: '',
    onBlur: function () { return undefined; },
    onFocus: function () { return undefined; },
    onChange: function () { return undefined; },
    fullWidth: false,
    hideValidationIcon: false,
    showClearButton: false,
    type: 'text',
    disabled: false,
    readOnly: false,
    classWrapper: '',
    icon: '',
    isErrorBorder: false,
    showErrorMessageOnFocus: false,
};
CustomInput.displayName = 'CustomInput';
export default CustomInput;
//# sourceMappingURL=CustomInput.js.map