import './AddSignerViewerModal.style.scss';

import React, {useContext, useState} from 'react';

import CustomModal from '@src/components/CustomModal/CustomModal';
// import classNames from 'classnames';
import ReactModalCoupleButton from '@src/components/ReactModalCoupleButton';
import common from '@src/utils/common';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
import InputAssigner from './InputAssigner';
import SearchContact from './SearchContact';

const CONTACT_TAB = {
  RECENT_CONTACTS: 'RECENT_CONTACTS',
  GOOGLE_CONTACT: 'GOOGLE_CONTACT',
};
const contactListTabs = Object.keys(CONTACT_TAB);

const AddSignerViewerModal: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {isOpenAddAssignerModal},
  } = context;
  const [currentTab, setCurrentTab] = useState(CONTACT_TAB.RECENT_CONTACTS);
  // const CONTACT_TAB_COMPONENT = {
  //   [CONTACT_TAB.GOOGLE_CONTACT]: <GoogleContactTab currentTab={currentTab} />,
  //   [CONTACT_TAB.RECENT_CONTACTS]: <RecentContacts currentTab={currentTab} />,
  // }
  const setAssignModalTabActive = (tab: string) => {
    return setCurrentTab(tab);
  };

  const onCloseModal = () => {
    context.dispatch(
      InviteToSignContextActions.SET_OPEN_ADD_ASSIGNER_MODAL(false),
    );
  };

  const onConfirm = () => {
    console.log('confirm');
  };

  return (
    <CustomModal
      isShowCloseButton={false}
      isOpen={isOpenAddAssignerModal}
      closeModal={onCloseModal}
      className="AssignModal"
    >
      <div className="AssignModal__container">
        <div className="AssignModal__header">
          <h4 className="AssignModal__title">{'Add Signer'}</h4>
          <InputAssigner
          // ref={inputRef}
          // onFocus={() => setFocusSearchView(true)}
          // isOpenSearch={isfocusSearchView}
          />
        </div>

        <div className="AssignModal__body">
          <SearchContact
          // ref={searchRef}
          // resetInput={resetInputContact}
          // active={isfocusSearchView}
          />

          <div className="AssignModal__tabs">
            {contactListTabs.map((item: string, index: number) => {
              return (
                <h5
                  key={index}
                  onClick={() => setAssignModalTabActive(item)}
                  className={`AssignModal__tab ${
                    currentTab === item && 'active'
                  }`}
                >
                  {common.capitalizeLetter(item)}
                </h5>
              );
            })}
          </div>
          {/* <div className="AssignModal__contact-list">
            {contactListTabs.map((item, index) => {
              return (
                <div
                  className={classNames('AssignModal__contact-component', {
                    active: currentTab === item,
                  })}
                  key={index}
                >
                  {CONTACT_TAB_COMPONENT[item]}
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="AssignModal__footer">
          <ReactModalCoupleButton
            onCancel={onCloseModal}
            onConfirm={onConfirm}
            primaryTitle="Done"
            // disabledConfirmButton={!isEnableConfirmButton}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default AddSignerViewerModal;
