import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

const Button = React.lazy(() => import('@components/Button'));

ReactDom.render(
  <>
    <Button />
  </>,
  document.getElementById('root'),
);
