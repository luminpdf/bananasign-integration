import './CustomInput.style.scss';

import classNames from 'classnames';
import React, {useImperativeHandle, useRef, useState} from 'react';

import {Images} from '@src/assets';

import {ICustomInputProps, ICustomInputRef} from './CustomInput.interface';

const CustomInput = React.forwardRef<ICustomInputRef, ICustomInputProps>(
  (props, ref) => {
    const {
      classWrapper,
      className,
      onFocus,
      onBlur,
      label,
      name,
      errorMessage,
      labelClassName,
      fullWidth,
      hideValidationIcon,
      showClearButton,
      type,
      value,
      readOnly,
      disabled,
      icon,
      onChange,
      isErrorBorder,
      showErrorMessageOnFocus,
      ...otherProps
    } = props;
    const [isFocus, setFocus] = useState(false);
    const error = Boolean(errorMessage);
    const isActive = !readOnly && !disabled;
    const inputRef = useRef<HTMLInputElement>(null);

    const shouldShowErrorIcon =
      error && !isFocus && !hideValidationIcon && isActive;
    const shouldShowClearButton =
      showClearButton && isActive && Boolean(value?.length);

    const focus = isFocus || (!error && Boolean(value && !isErrorBorder));
    const shouldShowErrorMessage = !focus || showErrorMessageOnFocus;

    const renderIcon = () => {
      return (
        icon && (
          <img
            src={icon}
            alt="icon input"
            className={classNames('CustomInput__left-icon', {
              'CustomInput__left-icon__focused': focus,
            })}
          />
        )
      );
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClearInput = (e: any) => {
      inputRef?.current?.focus();
      onChange && onChange(e);
    };

    useImperativeHandle(ref, () => ({
      focus: () => inputRef?.current?.focus(),
      unFocus: () => inputRef?.current?.blur(),
      reset: () => {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      },
    }));

    return (
      <div
        className={classNames(`CustomInput-container ${classWrapper}`, {
          fullWidth,
        })}
      >
        {label && (
          <label
            className={`CustomInput__label ${labelClassName}`}
            htmlFor="input"
          >
            {label}
          </label>
        )}
        <div className="CustomInput__wrapper">
          {renderIcon()}
          <input
            id="input"
            className={classNames(`CustomInput__input ${className}`, {
              'CustomInput__input--focus': focus,
              'CustomInput__input--error':
                (shouldShowErrorMessage && error) || isErrorBorder,
              'CustomInput__input--hasIcon':
                shouldShowErrorIcon || shouldShowClearButton,
              'CustomInput__input--hasLeftIcon': Boolean(icon),
              'CustomInput__input--disable': disabled,
            })}
            ref={inputRef}
            onFocus={(e) => {
              setFocus(true);
              onFocus && onFocus(e);
            }}
            onBlur={(e) => {
              setFocus(false);
              onBlur && onBlur(e);
            }}
            onChange={handleChangeInput}
            value={value}
            type={type}
            disabled={disabled}
            readOnly={readOnly}
            name={name}
            {...otherProps}
          />
          {shouldShowClearButton && (
            <div onClick={handleClearInput}>
              <img
                src={Images.icon_close}
                alt="icon input"
                className="CustomInput__icon CustomInput__icon--clickable"
              />
            </div>
          )}
        </div>
        {shouldShowErrorMessage && errorMessage && (
          <p className="CustomInput__error-message">{errorMessage}</p>
        )}
      </div>
    );
  },
);

// CustomInput.defaultProps = {
//   className: '',
//   labelClassName: '',
//   errorMessage: '',
//   label: '',
//   name: '',
//   onBlur: () => undefined,
//   onFocus: () => undefined,
//   onChange: () => undefined,
//   fullWidth: false,
//   hideValidationIcon: false,
//   showClearButton: false,
//   type: 'text',
//   disabled: false,
//   readOnly: false,
//   classWrapper: '',
//   icon: '',
//   postfix: null,
//   isErrorBorder: false,
//   onPress: () => undefined,
//   buttonName: '',
//   showErrorMessageOnFocus: false,
// };

CustomInput.displayName = 'CustomInput';

export default CustomInput;
