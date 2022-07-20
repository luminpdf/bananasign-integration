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
import React, {Suspense, lazy} from 'react';
import ReactDom from 'react-dom';

import {InviteToSign} from 'banana-widget';

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
        onNext={(_payload: any) => {
          // TODO: service put contract temporary
          console.log(_payload)
          return {identify: ''};
        }}
      />
    </Suspense>
  </>,
  document.getElementById('root'),
);

```
