import './WarningModal.style.scss';

import React from 'react';

import {Images} from '@src/assets';
import AnimatedModal from '@src/components/AnimatedModal';
import {usePopup} from '@src/components/CustomModal';
import ReactModalCoupleButton from '@src/components/ReactModalCoupleButton';
import {MODAL_TYPES} from '@src/constants/common';

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
  const [{hideModal, componentProps}] = usePopup();
  const warningType = componentProps?.settings?.type;

  const onCloseModal = () => {
    hideModal();
    componentProps?.settings?.onCancel?.();
  };

  const onConfirm = () => {
    hideModal();
    componentProps?.settings?.onConfirm?.();
  };

  if (!warningType) {
    return null;
  }

  const modalContent = MODAL_WARNING_TYPES[warningType];

  return (
    <AnimatedModal className="WarningModal__container AssignModal__custom-modal">
      <img src={modalContent.ICON} alt="icon modal" />
      <p className="WarningModal__container-title">{modalContent.TITLE}</p>
      <p className="WarningModal__container-content">{modalContent.CONTENT}</p>
      <ReactModalCoupleButton
        onCancel={onCloseModal}
        onConfirm={onConfirm}
        secondaryTitle={modalContent.FIRST_BTN}
        primaryTitle={modalContent.SECOND_BTN}
      />
    </AnimatedModal>
  );
};

export default WarningModal;
