import './InviteUser.style.scss';

import React from 'react';

import {Images} from '@src/assets';

import Button from '@components/Button';

import AssignerItem from './AssignerItem';

const InviteUser = () => {
  const signers = [1, 2];
  return (
    <div className="InviteUser__container">
      <h1 className="InviteUser__title">Invite people</h1>
      <div className="InviteUser__wrapper">
        <h2 className="InviteUser__wrapper-title">
          Who needs to Sign?<span> *</span>
        </h2>
        <div className="InviteUser__wrapper-add-user">
          <div className="InviteUser__wrapper-user-list">
            {signers.map((signer) => (
              <AssignerItem />
            ))}
          </div>
          <Button
            className="InviteUser__wrapper-add-button"
            isRippleEffect
            title="Add Signer"
            icon={Images.icon_sign}
          />
        </div>
        <h2 className="InviteUser__wrapper-title">
          Who needs to Sign?<span> *</span>
        </h2>
        <div className="InviteUser__wrapper-add-user">
          <div className="InviteUser__wrapper-user-list">
            {signers.map((signer) => (
              <AssignerItem />
            ))}
          </div>
          <Button
            className="InviteUser__wrapper-add-button"
            isRippleEffect
            title="Add Viewer"
            icon={Images.icon_show}
          />
        </div>
        <Button
          className="InviteUser__next-button"
          isRippleEffect
          title="Next"
        />
      </div>
    </div>
  );
};

export default InviteUser;
