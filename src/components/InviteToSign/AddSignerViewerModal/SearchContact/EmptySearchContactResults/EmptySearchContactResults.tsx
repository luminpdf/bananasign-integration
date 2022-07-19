import './EmptySearchContactResults.style.scss';

import React from 'react';

import {Images} from '@src/assets';

import {IEmptySearchContactResultsProps} from './EmptySearchContactResults.interface';

const EmptySearchContactResults: React.FC<IEmptySearchContactResultsProps> = ({
  keyWords,
}) => {
  return (
    <div className="EmptyResults__container">
      <div className="EmptyResults__banner">
        <img
          src={Images.image_empty_search_contact}
          alt="EmptyResults__banner"
        />
      </div>
      <h4 className="EmptyResults__title">No results for {keyWords}</h4>
      <p className="EmptyResults__message">
        Please try again or use another keyword
      </p>
    </div>
  );
};

export default EmptySearchContactResults;
