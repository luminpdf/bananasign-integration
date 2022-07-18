export interface IButtonProps {
  className?: string;
  title?: string;
  children?: Node;
  icon?: string;
  onClick?: () => void;
  style?: object;
  disabled?: boolean;
  isRippleEffect?: boolean;
}
