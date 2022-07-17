type Message = {
  message: string;
  type: string;
};
export interface IAssignUserProps {
  type: string;
  isDisabled?: boolean;
  error?: Message;
  onPress?: () => void;
}
