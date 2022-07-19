import './BananasignIframe.style.scss';

import React, {useContext} from 'react';

import InviteToSignContext from '../InviteToSignContext';

const BananasignIframe: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {openBananasignIframe},
  } = context;

  if (!openBananasignIframe) {
    return null;
  }

  return (
    <div className="BananasignIframe__container">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.w3schools.com`}
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
