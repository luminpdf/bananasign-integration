import './Header.style.scss';

import React from 'react';

import {Images} from '@src/assets';

const PROGRESS_BAR_LIST_ITEM = [
  {value: 'INVITE TO SIGN', className: 'active'},
  {value: 'ADD DUE DATE', className: ''},
  {value: 'PREPARE', className: ''},
  {value: 'REVIEW', className: ''},
];

const Header: React.FC = () => {
  const renderProgressBar = () => (
    <div className="Header__progressBar-container">
      <ul className="Header__progressBar-list">
        {PROGRESS_BAR_LIST_ITEM.map((item) => (
          <li className={`${item.className}`} key={item.value}>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderCancelButton = () => {
    return (
      <div className="Header__left">
        <img src={Images.icon_cancel_button} />
      </div>
    );
  };

  const renderRightLogo = () => {
    return (
      <div className="Header__right">
        <img src={Images.icon_sign_logo} />
      </div>
    );
  };
  return (
    <div className="Header__container">
      {renderCancelButton()}
      {renderProgressBar()}
      {renderRightLogo()}
    </div>
  );
};

export default Header;
