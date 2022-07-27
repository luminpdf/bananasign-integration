import './AddSignerViewerModal.style.scss';

import React, {useContext, useMemo, useRef, useState} from 'react';

import AnimatedModal from '@src/components/AnimatedModal';
import {usePopup} from '@src/components/CustomModal';
import ReactModalCoupleButton from '@src/components/ReactModalCoupleButton';
import {REQUEST_TYPE} from '@src/constants/common';
import useOnClickOutside from '@src/hooks/useOnClickOutside';
import common from '@src/utils/common';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
import InputAssigner from './InputAssigner';
import {IInputAssignerRef} from './InputAssigner/InputAssigner.interface';
// import RecentContacts from './RecentContacts';
import SearchContact from './SearchContact';

const REQUEST_TYPE_TO_STRING = {
  [REQUEST_TYPE.SIGNER]: 'Add Signer',
  [REQUEST_TYPE.VIEWER]: 'Add Viewer',
};

const AddSignerViewerModal: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {type, signers, viewers},
    dispatch,
  } = context;
  const prevAssigners = useMemo(() => {
    return {
      SIGNER: signers,
      VIEWER: viewers,
    };
  }, []);
  const [isFocusSearchView, setFocusSearchView] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef<IInputAssignerRef>(null);
  const [{hideModal}] = usePopup();

  useOnClickOutside(searchRef, () => {
    inputRef?.current?.unFocusInput();
    setFocusSearchView(false);
  });

  const resetInputContact = () => {
    inputRef?.current?.resetInput();
  };

  const onCloseModal = () => {
    dispatch(InviteToSignContextActions.CANCEL_ADD_ASSIGNERS(true));
    dispatch(InviteToSignContextActions.CLOSE_AND_RESET_MODAL_SEARCH());
    hideModal();
  };

  const onConfirm = () => {
    dispatch(InviteToSignContextActions.CLOSE_AND_RESET_MODAL_SEARCH());
    hideModal();
  };

  const isEnableConfirmButton = useMemo(() => {
    const signersList = {
      [REQUEST_TYPE.SIGNER]: signers,
      [REQUEST_TYPE.VIEWER]: viewers,
    };
    const isChanged = !common.compareArrayByElement(
      signersList[type],
      prevAssigners[type],
      'email',
    );
    return isChanged;
  }, [type, signers, viewers]);

  return (
    <AnimatedModal className="AssignModal AssignModal__custom-modal">
      <div className="AssignModal__container">
        <div className="AssignModal__header">
          <h4 className="AssignModal__title">{REQUEST_TYPE_TO_STRING[type]}</h4>
          <InputAssigner
            ref={inputRef}
            onFocus={() => setFocusSearchView(true)}
            isOpenSearch={isFocusSearchView}
          />
        </div>

        <div className="AssignModal__body">
          <SearchContact
            ref={searchRef}
            resetInput={resetInputContact}
            active={isFocusSearchView}
          />
          <div className="AssignModal__contact-list">
            <div className="AssignModal__contact-component active">
              {/* <RecentContacts /> */}
            </div>
          </div>
        </div>
        <div className="AssignModal__footer">
          <ReactModalCoupleButton
            onCancel={onCloseModal}
            onConfirm={onConfirm}
            primaryTitle="Done"
            disabledConfirmButton={!isEnableConfirmButton}
          />
        </div>
      </div>
    </AnimatedModal>
  );
};

export default AddSignerViewerModal;
