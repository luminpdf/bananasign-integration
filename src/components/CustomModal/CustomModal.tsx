import './CustomModal.style.scss';

import React from 'react';
import ReactModal from 'react-modal';

import {Images} from '@src/assets';

import {ICustomModalProps} from './CustomModal.interface';

ReactModal.setAppElement('#root');

const CustomModal: React.FC<ICustomModalProps> = (props) => {
  const {
    children,
    isOpen,
    closeModal,
    shouldCloseOnOverlayClick,
    onCancel,
    className,
    isShowCloseButton,
  } = props;
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={closeModal}
      onAfterClose={onCancel}
      overlayClassName="ReactModal__Overlay--custom"
      className={`ReactModal__Content--custom ${className}`}
    >
      {isShowCloseButton && (
        <div className="ReactModal__ButtonClose" onClick={closeModal}>
          <img src={Images.icon_cancel_button} alt="icon close" />
        </div>
      )}

      {children}
    </ReactModal>
  );
};

CustomModal.defaultProps = {
  children: null,
  isOpen: false,
  shouldCloseOnOverlayClick: false,
  isShowCloseButton: true,
  onCancel: undefined,
  className: '',
};

export default CustomModal;
