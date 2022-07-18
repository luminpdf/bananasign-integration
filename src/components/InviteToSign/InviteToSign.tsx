import './InviteToSign.style.scss';

import classNames from 'classnames';
import React from 'react';

import AddSignerViewerModal from './AddSignerViewerModal';
import Footer from './Footer';
import Header from './Header';
import InviteToSignProvider from './InviteToSignProvider';
import InviteUser from './InviteUser';

const InviteToSign: React.FC = () => {
  const [open, _setOpen] = React.useState(true);

  return (
    <InviteToSignProvider>
      <div
        className={classNames('InviteToSign__container', {
          open: open,
        })}
      >
        <Header />
        <InviteUser />
        <Footer />
      </div>
      <AddSignerViewerModal />
    </InviteToSignProvider>
  );
};

export default InviteToSign;
