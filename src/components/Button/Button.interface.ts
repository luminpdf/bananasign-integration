import {MouseEvent} from 'react';

export interface IButtonProps {
  isRippleEffect: boolean;
  className?: string;
  title?: string;
  icon?: string;
  icomoon?: string;
  color?: string;
  icomoonSize?: number;
  onClick?: (e: MouseEvent) => void;
  style?: object;
  isElementDisabled?: boolean;
  buttonType?: string;
  iconRight?: string;
  disabled?: boolean;
}
