import classNames from 'classnames';
import React from 'react';

import useRippleButton from '@src/hook/useRippleButton';

// import './Button.scss';
import Icomoon from '../Icomoon';
import {IButtonProps} from './Button.interface';

export const Button = React.forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  IButtonProps
>((props, ref) => {
  const {
    className,
    title,
    children,
    icon,
    icomoon,
    color,
    icomoonSize,
    onClick,
    style,
    isElementDisabled,
    disabled,
    isRippleEffect,
    iconRight,
    buttonType,
    ...otherProps
  } = props;
  const ripple = useRippleButton(props.isRippleEffect);

  return isElementDisabled ? null : (
    <button
      ref={ref}
      className={classNames(`Button__Container ${className} ${buttonType}`, {
        'button-disabled': disabled,
      })}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const node = e.target as HTMLElement;

        if (isRippleEffect) {
          const rect = node.getBoundingClientRect();
          ripple?.setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
        onClick && onClick(e);
      }}
      style={style}
      disabled={disabled}
      {...otherProps}
    >
      {isRippleEffect && ripple?.isRippling && (
        <span
          className="Button__ripple"
          style={{left: ripple?.coords.x, top: ripple?.coords.y}}
        />
      )}
      {icomoon && (
        <Icomoon
          className={`${icomoon} ${title && 'button_left-icon'}`}
          size={icomoonSize}
          color={color}
        />
      )}
      {icon && (
        <div className="Button__Icon">
          <img src={icon} alt="icon button" />
        </div>
      )}
      {title}
      {children}
      {iconRight && (
        <Icomoon
          className={`${iconRight} icon-right`}
          size={icomoonSize}
          color={color}
        />
      )}
    </button>
  );
});
