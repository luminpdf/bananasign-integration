# Bananasign-widget

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Demos](https://app.bananasign.co)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save banana-widget

## Props

| Props             | Type     | Required           | Description                                                                                                                                                                    |
| :---------------- | :------- | :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isOpen            | boolean  | :white_check_mark: | show/hide bananasign widget                                                                                                                                                    |
| fileData            | File, Blob  | :white_check_mark: | Document will be sent to Bananasign                                                                                                                                                    |
| accessToken            | boolean  | :white_check_mark: | OAuth2.0 access token for calling api to Bananasign                                                                                                                                                    |
| onClose           | function |                    | Function that will be run when the widget is requested to be closed, prior to actually closing.                                                                                |
| signers           | array    | :white_check_mark: | List assigner<br/>ex: [\{ email: 'example@gmail.com', name: 'example' \}]                                                                                                      |
| viewers           | array    | :white_check_mark: | List assigner<br/>ex: [\{ email: 'example@gmail.com', name: 'example' \}]                                                                                                      |
| fileName          | string   | :white_check_mark: | Document name to display on upload doument steps                                                                                                                               |
| bananasignUrl (development only)     | string   |                    | The URL that is used to open Bananasign iframe. We only need to specify this for testing purpose only. For testing, we can use https://app-dev.bananasign.co                   |
| bananasignBaseUrl (development only) | string   |                    | The URL that is used to call Bananasign server endpoints. We only need to specify this for testing purpose only. For testing, we can use https://app-dev.bananasign.co/api/web |

## Examples

Here is a simple example of widget being used in an app:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import BananasignWidget from 'banana-widget';

function App() {
  const [isOpenWidget, setIsOpenWidget] = React.useState(false);

  function openWidget() {
    setIsOpenWidget(true);
  }

  function closeWidget() {
    setIsOpenWidget(false);
  }

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

  return (
    <div>
      <button onClick={openWidget}>Open Widget</button>
      <BananasignWidget
        isOpen={isOpenWidget}
        onClose={closeWidget}
        signers={signers}
        viewers={viewers}
        fileName={file.name}
        fileData={file}
        accessToken={token}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
```
