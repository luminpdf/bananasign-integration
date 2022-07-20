// import {InviteToSign} from 'banana-widget';
import {Suspense} from 'react';
import ReactDom from 'react-dom';

import InviteToSign from './components/InviteToSign';

const assigners = {
  signers: [
    {email: 'example1@gmail.com', name: 'example 1'},
    {email: 'example2@gmail.com', name: 'example 2'},
    {email: 'example3@gmail.com', name: 'example 3'},
  ],
  viewers: [
    {email: 'example4@gmail.com', name: 'example 4'},
    {email: 'example5@gmail.com', name: 'example 5'},
    {email: 'example6@gmail.com', name: 'example 6'},
  ],
};

ReactDom.render(
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <InviteToSign
        isOpen={true}
        onClose={() => console.log('onClose')}
        assigners={assigners}
        onNext={async (payload) => {
          console.log({payload});
          // TODO: service put contract temporary
          return {identify: ''};
        }}
        integrationId="abc"
      />
    </Suspense>
  </>,
  document.getElementById('root'),
);
