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
  const {isOpen, onClose, signers, viewers, onPutDocumentInfo, integrationId} =
    props;
  const show = Boolean(isOpen && integrationId);
  return (
    <InviteToSignProvider
      onClose={onClose}
      signers={signers}
      viewers={viewers}
      onPutDocumentInfo={onPutDocumentInfo}
      integrationId={integrationId}
    >
      <div
        className={classNames('InviteToSign__container', {
          open: show,
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
