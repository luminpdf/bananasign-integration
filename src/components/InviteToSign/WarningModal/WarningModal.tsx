import './WarningModal.style.scss';

import React, {useContext} from 'react';

import {Images} from '@src/assets';
import CustomModal from '@src/components/CustomModal';
import ReactModalCoupleButton from '@src/components/ReactModalCoupleButton';
import {MODAL_TYPES} from '@src/constants/common';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';

const MODAL_WARNING_TYPES = {
  [MODAL_TYPES.ONLY_ONE_SIGNER_IS_OWNER]: {
    TITLE: 'Only you will be able to sign',
    CONTENT: '',
    FIRST_BTN: 'Cancel',
    SECOND_BTN: 'Continue',
    ICON: Images.icon_info,
  },
  [MODAL_TYPES.CANCEL_PROGRESS]: {
    TITLE: 'Discard Changes',
    CONTENT:
      'Do you want to cancel this progress? This will clear data you input before.',
    FIRST_BTN: 'No, Thanks',
    SECOND_BTN: 'Discard',
    ICON: Images.icon_warning,
  },
};

const WarningModal: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {modalWarningData},
    dispatch,
  } = context;

  const onCloseModal = () => {
    dispatch(InviteToSignContextActions.SET_MODAL_WARNING_TYPE({type: ''}));
    if (
      modalWarningData.onCancel &&
      typeof modalWarningData.onCancel === 'function'
    ) {
      modalWarningData.onCancel();
    }
  };

  const onConfirm = () => {
    dispatch(InviteToSignContextActions.SET_MODAL_WARNING_TYPE({type: ''}));
    if (
      modalWarningData.onConfirm &&
      typeof modalWarningData.onConfirm === 'function'
    ) {
      modalWarningData.onConfirm();
    }
  };

  if (!modalWarningData.type) {
    return null;
  }

  const modalContent = MODAL_WARNING_TYPES[modalWarningData.type];

  return (
    <CustomModal
      isShowCloseButton={false}
      isOpen={true}
      closeModal={onCloseModal}
    >
      <div className="WarningModal__container">
        <img src={modalContent.ICON} alt="icon modal" />
        <p className="WarningModal__container-title">{modalContent.TITLE}</p>
        <p className="WarningModal__container-content">
          {modalContent.CONTENT}
        </p>
        <ReactModalCoupleButton
          onCancel={onCloseModal}
          onConfirm={onConfirm}
          secondaryTitle={modalContent.FIRST_BTN}
          primaryTitle={modalContent.SECOND_BTN}
        />
      </div>
    </CustomModal>
  );
};

export default WarningModal;
