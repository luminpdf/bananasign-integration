import classNames from 'classnames';
import React from 'react';

// import './AnimatedBox.scss';
import useMountTransition from '@src/hook/useMountTransition';

import {IAnimatedBoxProps} from './AnimatedBox.interface';

const AnimatedBox: React.FC<IAnimatedBoxProps> = ({
  children,
  className,
  fadeUp,
}) => {
  const hasTransitionedIn = useMountTransition(true, 1000);

  return (
    <div
      className={classNames('AnimateWrapperComponent', {
        className,
        fadeUp: fadeUp,
        visible: hasTransitionedIn,
      })}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
