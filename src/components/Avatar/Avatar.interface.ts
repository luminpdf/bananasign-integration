import React from 'react';

export interface IAvatarProps {
  className?: string;
  user: IUserProps;
  style?: React.CSSProperties;
}

type IUserProps = {
  name?: string;
  url?: string;
};
