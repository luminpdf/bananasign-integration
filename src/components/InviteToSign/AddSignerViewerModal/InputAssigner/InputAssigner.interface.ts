export interface IInputAssignerProps {
  onFocus?: () => void;
  onBlur?: () => void;
  isOpenSearch?: boolean;
}

export interface IInputAssignerRef {
  unFocusInput: () => void;
  resetInput: () => void;
}
