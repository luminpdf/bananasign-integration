import './SearchContactEmptyKeyWords.style.scss';

import React from 'react';

import {Images} from '@src/assets';

const SearchContactEmptyKeyWords: React.FC = () => {
  return (
    <div className="NoKeyWords__container">
      <div className="NoKeyWords__banner">
        <img src={Images.image_no_key_words} alt="NoKeyWords__banner" />
      </div>
      <h4 className="NoKeyWords__title">Search all contacts</h4>
      <p className="NoKeyWords__message">Search by email</p>
    </div>
  );
};

export default SearchContactEmptyKeyWords;
