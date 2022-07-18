import './InviteUser.style.scss';

import React, {useContext} from 'react';

import {Images} from '@src/assets';

import Button from '@components/Button';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
import AssignerItem from './AssignerItem';

const InviteUser: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const handleOpenAddAssignerModal = () => {
    console.log('dispatch');
    context.dispatch(
      InviteToSignContextActions.SET_OPEN_ADD_ASSIGNER_MODAL(true),
    );
  };
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
            {signers.map((_signer) => (
              <AssignerItem />
            ))}
          </div>
          <Button
            onClick={handleOpenAddAssignerModal}
            className="InviteUser__wrapper-add-button"
            isRippleEffect
            title="Add Signer"
            icon={Images.icon_sign}
          />
        </div>
        <h2 className="InviteUser__wrapper-title">Who needs to View?</h2>
        <div className="InviteUser__wrapper-add-user">
          <div className="InviteUser__wrapper-user-list">
            {signers.map((_signer) => (
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
