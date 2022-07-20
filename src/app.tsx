// import {InviteToSign} from 'banana-widget';
import {Suspense} from 'react';
import ReactDom from 'react-dom';

import BananasignWidget from '@src/components/InviteToSign';

const signers = [
  {email: 'example1@gmail.com', name: 'example 1'},
  {email: 'example2@gmail.com', name: 'example 2'},
  {email: 'example3@gmail.com', name: 'example 3'},
];
const viewers = [
  {email: 'example4@gmail.com', name: 'example 4'},
  {email: 'example5@gmail.com', name: 'example 5'},
  {email: 'example6@gmail.com', name: 'example 6'},
];

ReactDom.render(
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <BananasignWidget
        isOpen={true}
        onClose={() => console.log('onClose')}
        signers={signers}
        viewers={viewers}
        onPutDocumentInfo={async ({viewers, signers}) => {
          console.log({viewers, signers});
          // TODO: service put contract temporary
          return {identify: ''};
        }}
      />
    </Suspense>
  </>,
  document.getElementById('root'),
);
