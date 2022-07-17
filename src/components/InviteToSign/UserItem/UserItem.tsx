import classNames from 'classnames';
import React from 'react';

// import './UserItem.scss'
import Avatar from '@src/components/Avatar';

import {IUserItemProps} from './UserItem.inteface';

const UserItem: React.FC<IUserItemProps> = ({user}) => {
  return (
    <div className={classNames('UserItem__container')}>
      <Avatar user={user} className="UserItem__avatar" />
      <div className="UserItem__user--info">
        <span className={classNames('UserItem__user--email')}>
          {user.email}
        </span>
      </div>
      <div className="UserItem__user--footer"></div>
    </div>
  );
};

export default UserItem;
