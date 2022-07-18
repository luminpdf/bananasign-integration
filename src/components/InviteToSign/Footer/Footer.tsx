import './Footer.style.scss';

import React from 'react';

import {Images} from '@src/assets';

const Footer = () => {
  return (
    <div className="Footer__container">
      <h6>Powered by&nbsp;</h6>
      <img src={Images.icon_bananasign_logo} alt="logo bananasign" />
    </div>
  );
};

export default Footer;
