import './InviteToSign.style.scss';

import classNames from 'classnames';
import React from 'react';

import AddSignerViewerModal from './AddSignerViewerModal';
import BananasignIframe from './BananasignIframe';
import Footer from './Footer';
import Header from './Header';
import {IInviteToSignProps} from './InviteToSign.interface';
import InviteToSignProvider from './InviteToSignProvider';
import InviteUser from './InviteUser';
import Loading from './Loading';
import WarningModal from './WarningModal';

const InviteToSign: React.FC<IInviteToSignProps> = (props) => {
  const {isOpen, onClose, signers, viewers, saveDocumentInfo, bananasignUrl} =
    props;
  return (
    <InviteToSignProvider
      onClose={onClose}
      signers={signers}
      viewers={viewers}
      saveDocumentInfo={saveDocumentInfo}
      bananasignUrl={bananasignUrl}
    >
      <div
        className={classNames('InviteToSign__container', {
          open: isOpen,
        })}
      >
        <Header />
        <InviteUser />
        <Footer />
        <AddSignerViewerModal />
        <Loading />
        <BananasignIframe />
        <WarningModal />
      </div>
    </InviteToSignProvider>
  );
};

export default InviteToSign;
