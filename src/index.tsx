import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

import Button from '@components/Button';

ReactDom.render(
  <>
    <Button />
  </>,
  document.getElementById('root'),
);
