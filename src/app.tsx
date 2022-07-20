import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {Assigners} from './components/InviteToSign/InviteToSign.interface';

const InviteToSign = React.lazy(() => import('@components/InviteToSign'));
const assigners: Assigners = {
  signers: [
    {email: 'hatn1@gmail.com', name: 'hatn1'},
    {email: 'hatn2@gmail.com', name: 'hatn2'},
    {email: 'hatn3@gmail.com', name: 'hatn3'},
  ],
  viewers: [
    {email: 'hatn4@gmail.com', name: 'hatn4'},
    {email: 'hatn5@gmail.com', name: 'hatn5'},
    {email: 'hatn6@gmail.com', name: 'hatn6'},
  ],
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <React.Suspense fallback={<div>Loading...</div>}>
      <InviteToSign
        isOpen={true}
        onClose={() => console.log('onClose')}
        assigners={assigners}
        onNext={(_payload) => {
          // TODO: service put contract temporary
          return {identify: ''};
        }}
      />
    </React.Suspense>
  </>,
);
