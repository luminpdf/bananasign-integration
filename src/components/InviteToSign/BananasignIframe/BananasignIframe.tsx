import './BananasignIframe.style.scss';

import React, {useContext, useEffect} from 'react';

import {BANANA_SIGN_WEB_URL} from '@src/constants/common';

import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';

const CLOSE_TASK_BANANA_SIGN_MSG = 'close_task';
const BACK_STEP_BANANA_SIGN_MSG = 'back_step';

const BananasignIframe: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {openBananasignIframe, onClose},
    dispatch,
  } = context;

  const listenToBananaSign = (e: MessageEvent) => {
    if (e.origin === BANANA_SIGN_WEB_URL) {
      switch (e.data.type) {
        case CLOSE_TASK_BANANA_SIGN_MSG:
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
    const fetchData = async () => {
      // TODO: handle put contract temporary;
    };

    fetchData().then((_result) => {
      // if (result === 200) {
      //   setIsRedirecting(false);
      // } else {
      //   logger.logError({
      //     reason: LOGGER.Service.NETWORK_ERROR,
      //     error: result,
      //   });
      //   onClose();
      // }
    });

    window.addEventListener('message', listenToBananaSign, false);
    return () => {
      window.removeEventListener('message', listenToBananaSign);
    };
  }, []);

  if (!openBananasignIframe) {
    return null;
  }

  return (
    <div className="BananasignIframe__container">
      <iframe
        width="100%"
        height="100%"
        src="localhost:5000"
        title="Iframe Upload"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        id="bananaSignIframe"
        onLoad={() => {
          // document.getElementById('bananaSignIframe').style.visibility =
          //   'visible';
          // setBananasignLoading(false);
        }}
        // style={{ visibility: 'hidden' }}
        allowFullScreen
      />
    </div>
  );
};

export default BananasignIframe;
