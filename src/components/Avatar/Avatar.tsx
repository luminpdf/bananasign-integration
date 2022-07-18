import './Avatar.style.scss';

import classNames from 'classnames';
import React, {useMemo} from 'react';

import {Images} from '@src/assets';
import common from '@src/utils/common';

import {IAvatarProps} from './Avatar.interface';

const GUEST_USER = 'Guest User';
const USER_DELETED = 'Deleted';

const defaultProps = {
  classNames: '',
  user: {
    name: '',
    url: '',
  },
  style: {},
};

const Avatar: React.FC<IAvatarProps> = ({className, user, style}) => {
  const guestUser = GUEST_USER === user.name;
  const userDeleted = USER_DELETED === user.name;

  const nameAvatar = useMemo(() => {
    if (guestUser || userDeleted) {
      return (
        <img
          className="Avatar__default-user"
          src={Images.icon_person}
          alt="user default"
        />
      );
    }

    return (
      <span className="Avatar__name">
        {common.getAvatarName(user?.name || '')}
      </span>
    );
  }, [user?.name]);
  const thumbnailAvatar = useMemo(() => {
    return (
      <img
        src={user.url}
        alt="user avatar"
        onError={({currentTarget}) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = Images.icon_person;
          currentTarget.style.padding = '4px';
        }}
      />
    );
  }, [user?.url]);

  const renderAvatar = () => {
    return (user?.url && thumbnailAvatar) || (user?.name && nameAvatar) || null;
  };

  return (
    <div className="Avatar__wrapper">
      <div
        style={style}
        className={classNames(`Avatar__container ${className}`)}
      >
        {renderAvatar()}
      </div>
    </div>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
