import './Modal.style.scss';

import React from 'react';
import ReactModal from 'react-modal';

import {Images} from '@src/assets';

import {IModalProps} from './Modal.interface';

ReactModal.setAppElement('#root');

const Modal: React.FC<IModalProps> = (props) => {
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
          <img src={Images.icon_cancel_button} alt="icons_close" />
        </div>
      )}

      {children}
    </ReactModal>
  );
};

Modal.defaultProps = {
  children: null,
  isOpen: false,
  shouldCloseOnOverlayClick: true,
  isShowCloseButton: true,
  onCancel: undefined,
  className: '',
};

export default Modal;
