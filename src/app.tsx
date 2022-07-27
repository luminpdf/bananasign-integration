import React from 'react';
import ReactDOM from 'react-dom';

import BananasignWidget from '.';

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
        fileName="document name"
        bananasignUrl="http://localhost:5000"
        bananasignBaseUrl="http://localhost:3000"
        onUploadDocument={({uploadUrl: _}) => {
          // TODO: Use url to upload document
        }}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
