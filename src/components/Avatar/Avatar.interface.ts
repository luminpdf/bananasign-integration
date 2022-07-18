import React from 'react';

export interface AvatarProps {
  className?: string;
  user: UserProps;
  style?: React.CSSProperties;
}

interface UserProps {
  name?: string;
  url?: string;
}
