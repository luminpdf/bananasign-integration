import './InviteToSign.style.scss';

import Dialog from '@mui/material/Dialog';
import React, {useEffect, useState} from 'react';

import {Colors} from '@src/constants/styles/Colors';

import Footer from './Footer';
import Header from './Header';
import InviteUser from './InviteUser';

const InviteToSign = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);

  return (
    <Dialog
      fullScreen
      open={open}
      maxWidth={false}
      disableEscapeKeyDown
      BackdropProps={{style: {backgroundColor: Colors.DOCUMENT_OVERLAY}}}
    >
      <Header />
      <InviteUser />
      <Footer />
    </Dialog>
  );
};

export default InviteToSign;
