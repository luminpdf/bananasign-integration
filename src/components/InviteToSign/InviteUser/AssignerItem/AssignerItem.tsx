import './AssignerItem.style.scss';

import React from 'react';

import Avatar from '@src/components/Avatar';

const AssignerItem: React.FC = () => {
  const user = {
    name: 'Ha Thuy',
  };
  return (
    <div className="AssignerItem__container">
      <div className="AssignerItem__wrapper">
        {/* avatar */}
        <Avatar user={user} className="AssignerItem__wrapper-avatar" />
        <div className="AssignerItem__wrapper-name">
          <p>{'Guest User'}</p>
          <p>{'user.email'}</p>
        </div>
      </div>
      <div className="AssignerItem__delete-button">aaa</div>
    </div>
  );
};

export default AssignerItem;
