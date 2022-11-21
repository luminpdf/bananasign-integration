import './Loading.style.scss';

import React, { useContext } from 'react';

import { Images } from '@src/assets';
import InviteToSignContext from '../InviteToSignContext';

const Loading: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {loading},
  } = context;

  return !loading ? null : <div className="Loading__container">
  <img src={Images.loading} alt="loading..."/>
</div>
};

export default Loading;
