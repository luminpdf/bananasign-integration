import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

const InviteToSign = React.lazy(() => import('@components/InviteToSign'));

ReactDom.render(
  <>
    <React.Suspense fallback={<div>Loading...</div>}>
      <InviteToSign />
    </React.Suspense>
  </>,
  document.getElementById('root'),
);
