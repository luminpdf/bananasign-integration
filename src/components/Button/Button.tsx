import './Button.style.scss';

import React from 'react';

import {useRippleButton} from '@src/hooks/useRippleButton';

import {ButtonProps} from './Button.interface';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    title,
    children,
    icon,
    disabled,
    onClick,
    style,
    isRippleEffect,
  } = props;
  const ripple = useRippleButton(isRippleEffect || true);

  return (
    <button
      className={`Button__Container ${className}`}
      onClick={(e) => {
        if (isRippleEffect) {
          const node = e.target as HTMLElement;
          const rect = node.getBoundingClientRect();
          ripple?.setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
        onClick && onClick();
      }}
      style={style}
      disabled={disabled}
    >
      {isRippleEffect && ripple?.isRippling && (
        <span
          className="Button__ripple"
          style={{left: ripple?.coords.x, top: ripple?.coords.y}}
        />
      )}
      {icon && (
        <div className="Button__Icon">
          <img src={icon} alt="icon button" />
        </div>
      )}
      {title}
      {children}
    </button>
  );
};

export default Button;
