import '@styles/styles.css';
import '@styles/styles.less';
import '@styles/styles.scss';

import React, {Suspense, lazy} from 'react';
import ReactDom from 'react-dom';

const Button = lazy(() => import('@components/Button'));

ReactDom.render(
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Button />
    </Suspense>
  </>,
  document.getElementById('root'),
);
