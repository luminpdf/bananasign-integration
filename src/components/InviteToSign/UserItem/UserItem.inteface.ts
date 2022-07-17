export type User = {
  email: string;
  name?: string;
  avatarRemoteId?: string;
};

export interface IUserItemProps {
  user: User;
}
