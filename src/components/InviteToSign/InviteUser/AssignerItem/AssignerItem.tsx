import './AssignerItem.style.scss';

import React from 'react';
import ReactTooltip from 'react-tooltip';

import {Images} from '@src/assets';
import Avatar from '@src/components/Avatar';

const AssignerItem: React.FC = () => {
  const user = {
    name: 'Ha Thuy',
  };
  return (
    <div className="AssignerItem__container">
      <div className="AssignerItem__wrapper">
        <Avatar user={user} className="AssignerItem__wrapper-avatar" />
        <div className="AssignerItem__wrapper-name">
          <p>{'Guest User'}</p>
          <p>{'user.email'}</p>
        </div>
      </div>
      <div data-tip="Remove signer" className="AssignerItem__delete-button">
        <img src={Images.icon_trash} alt="delete icon" />
        <ReactTooltip
          offset={{top: 4, right: 40}}
          effect="solid"
          arrowColor="transparent"
          place="bottom"
          className="AssignerItem__tooltip"
        />
      </div>
    </div>
  );
};

export default AssignerItem;
