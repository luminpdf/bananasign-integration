import React from 'react';

import {IIcomoonProps} from './Icomoon.inteface';

// import './Icomoon.scss';

const defaultProps = {
  className: '',
  color: '',
  onClick: () => ({}),
  size: 16,
  style: {},
  disabled: false,
};

export const Icomoon = React.forwardRef<
  HTMLAnchorElement & HTMLDivElement,
  IIcomoonProps
>((props, ref) => {
  const {className, color, onClick, size, style, disabled, ...otherProps} =
    props;
  const filter =
    color &&
    (color === 'rgba(255, 255, 255, 1)' || color === 'rgb(255, 255, 255)')
      ? 'rgba(192, 208, 223, 1)'
      : undefined;
  const hanldeActionClick = () => {
    if (disabled) {
      return false;
    }
    if (onClick && typeof onClick === 'function') {
      return onClick();
    }
    return false;
  };
  return (
    <i
      className={`icon-${className} icon__${size}`}
      style={{
        color,
        filter,
        fontSize: size,
        ...style,
      }}
      onClick={hanldeActionClick}
      ref={ref}
      {...otherProps}
    />
  );
});

Icomoon.defaultProps = defaultProps;
