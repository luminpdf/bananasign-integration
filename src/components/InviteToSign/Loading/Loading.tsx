import './Loading.style.scss';

import React, {useContext} from 'react';
import Lottie from 'react-lottie-player';

import {Lotties} from '@src/assets';

import InviteToSignContext from '../InviteToSignContext';

const Loading: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {loading},
  } = context;

  return !loading ? null : (
    <div className="Loading__container">
      <Lottie
        loop
        animationData={Lotties.bananasign_loading}
        play
        style={{width: 209, height: 209}}
        rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}}
      />
    </div>
  );
};

export default Loading;
