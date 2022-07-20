# Bananasign-widget

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Demos](https://app.bananasign.co)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save banana-widget

## Examples

Here is a simple example of widget being used in an app:

```jsx
import React, {Suspense} from 'react';
import ReactDom from 'react-dom';

import BananasignWidget from 'banana-widget';

const assigners = {
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

ReactDom.render(
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <BananasignWidget
        isOpen={true}
        onClose={() => console.log('onClose')}
        assigners={assigners}
        signers={assigners.signers}
        viewers={assigners.viewers}
        onPutDocumentInfo={(_payload: any) => {
          // TODO: service put contract temporary
          console.log(_payload)
          return {identify: ''};
        }}
        integrationId="abc"
      />
    </Suspense>
  </>,
  document.getElementById('root'),
);

```
