import './InviteToSign.style.scss';

import classNames from 'classnames';
import React from 'react';

import {PopupProvider} from '@src/components/CustomModal';
import BananasignIframe from '@src/components/InviteToSign/BananasignIframe';
import Footer from '@src/components/InviteToSign/Footer';
import Header from '@src/components/InviteToSign/Header';
import InviteUser from '@src/components/InviteToSign/InviteUser';
import Loading from '@src/components/InviteToSign/Loading';
import Modal from '@src/components/Modal';

import {IInviteToSignProps} from './InviteToSign.interface';
import InviteToSignProvider from './InviteToSignProvider';

const InviteToSign: React.FC<IInviteToSignProps> = (props) => {
  return (
    <InviteToSignProvider {...props}>
      <PopupProvider>
        <div
          className={classNames('InviteToSign__container', {
            open: props.isOpen,
          })}
        >
          <Header />
          <InviteUser />
          <Footer />
          <Loading />
          <BananasignIframe />
          <Modal />
        </div>
      </PopupProvider>
    </InviteToSignProvider>
  );
};

export default InviteToSign;
