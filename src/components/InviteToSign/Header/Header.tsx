import './Header.style.scss';

import React, {useContext} from 'react';

import {Images} from '@src/assets';
import {usePopup} from '@src/components/CustomModal';
import {
  ModalName,
  ModalOptions,
  ModalSettingType,
} from '@src/components/CustomModal/CustomModal';
import common from '@src/utils/common';

import InviteToSignContext from '../InviteToSignContext';

const PROGRESS_BAR_LIST_ITEM = [
  {value: 'INVITE TO SIGN', className: 'active'},
  {value: 'ADD DUE DATE', className: ''},
  {value: 'PREPARE', className: ''},
  {value: 'REVIEW', className: ''},
];

const Header: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const isMobile = common.isMobile();
  const {
    state: {onClose},
  } = context;

  const [{showModal}] = usePopup();

  const renderProgressBar = () => {
    if (isMobile) {
      return null;
    }
    return (
      <div className="Header__progressBar-container">
        <ul className="Header__progressBar-list">
          {PROGRESS_BAR_LIST_ITEM.map((item) => (
            <li className={`${item.className}`} key={item.value}>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderCancelButton = () => {
    return (
      <div className="Header__left">
        <img src={Images.icon_cancel_button} />
      </div>
    );
  };

  const renderRightLogo = () => {
    if (isMobile) {
      return null;
    }
    return (
      <div className="Header__right">
        <img src={Images.icon_sign_logo} />
      </div>
    );
  };
  const handleClose = () => {
    const modalOptions: ModalOptions = {
      modalName: ModalName.WARNING,
      settings: {
        type: ModalSettingType.CANCEL_PROGRESS,
        onConfirm: onClose,
      },
    };
    showModal(modalOptions);
  };

  return (
    <div onClick={handleClose} className="Header__container">
      {renderCancelButton()}
      {isMobile && <h2 className="Header__title-mobile">Invite to sign</h2>}
      {renderProgressBar()}
      {renderRightLogo()}
    </div>
  );
};

export default Header;
