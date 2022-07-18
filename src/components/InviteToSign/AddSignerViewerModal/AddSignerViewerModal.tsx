import './AddSignerViewerModal.style.scss';

import React, {useContext} from 'react';

import Modal from '@src/components/Modal/Modal';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';

const AddSignerViewerModal: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {isOpenAddAssignerModal},
  } = context;

  const onCloseModal = () => {
    context.dispatch(
      InviteToSignContextActions.SET_OPEN_ADD_ASSIGNER_MODAL(false),
    );
  };

  return (
    <Modal isOpen={isOpenAddAssignerModal} closeModal={onCloseModal}>
      <div>aaaaaa</div>
    </Modal>
  );
};

export default AddSignerViewerModal;
