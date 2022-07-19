import {IAssignerProps} from '../../InviteToSign.interface';

export interface IAssignerItemProps {
  className?: string;
  user: IAssignerProps;
  showIconTrash?: boolean;
  onClick?: (contact: IAssignerProps) => void;
  onRemoveUser?: (contact: IAssignerProps) => void;
  role?: string;
  disabled?: boolean;
}
