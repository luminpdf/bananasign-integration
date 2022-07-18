import './InviteToSign.style.scss';

import classNames from 'classnames';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import InviteUser from './InviteUser';

const InviteToSign: React.FC = () => {
  const [open, _setOpen] = React.useState(true);

  return (
    <div
      className={classNames('InviteToSign__container', {
        open: open,
      })}
    >
      <Header />
      <InviteUser />
      <Footer />
    </div>
  );
};

export default InviteToSign;
