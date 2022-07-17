export type User = {
  email: string;
  name?: string;
  avatarRemoteId?: string;
};
export interface IAvatarProps {
  className?: string;
  user: User;
  styles?: object;
  number?: number;
}
