import './BananasignIframe.style.scss';

import React, {useContext, useEffect} from 'react';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';

const CLOSE_TASK_BANANA_SIGN_MSG = 'close_task';
const BACK_STEP_BANANA_SIGN_MSG = 'back_step';

const BananasignIframe: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {openBananasignIframe, onClose, identify, bananasignUrl},
    dispatch,
  } = context;

  const listenToBananaSign = (e: MessageEvent) => {
    if (e.origin === bananasignUrl) {
      switch (e.data.type) {
        case CLOSE_TASK_BANANA_SIGN_MSG:
          dispatch(InviteToSignContextActions.OPEN_BANANASIGN_IFRAME(false));
          onClose();
          break;
        case BACK_STEP_BANANA_SIGN_MSG:
          dispatch(InviteToSignContextActions.OPEN_BANANASIGN_IFRAME(false));
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('message', listenToBananaSign, false);
    return () => {
      window.removeEventListener('message', listenToBananaSign);
    };
  }, []);

  if (!openBananasignIframe || !identify) {
    return null;
  }

  return (
    <div className="BananasignIframe__container">
      <iframe
        width="100%"
        height="100%"
        src={`${bananasignUrl}/embed/${identify}`}
        title="Iframe Upload"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        id="bananaSignIframe"
        onLoad={() => {
          const elementIframe = document.getElementById('bananaSignIframe');
          if (elementIframe) {
            elementIframe.style.visibility = 'visible';
          }
          dispatch(InviteToSignContextActions.SET_LOADING(false));
        }}
        style={{visibility: 'hidden'}}
        allowFullScreen
      />
    </div>
  );
};

export default BananasignIframe;
