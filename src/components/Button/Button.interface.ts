export interface ButtonProps {
  className?: string;
  title?: string;
  children?: Node;
  icon?: string;
  onClick?: () => void;
  style?: object;
  disabled?: boolean;
  isRippleEffect?: boolean;
}
