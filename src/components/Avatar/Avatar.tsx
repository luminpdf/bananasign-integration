// const AnimatedBox: React.FC<IAnimatedBoxProps> = ({ children, className, fadeUp }) => {}
import classNames from 'classnames';
import React from 'react';

import {getAvatarName} from '@src/utils/common';

// import './Avatar.scss'
import {IAvatarProps} from './Avatar.interface';

const Avatar: React.FC<IAvatarProps> = (props) => {
  const {className, user, styles, number, ...othersProps} = props;

  return (
    <div className="Avatar__wrapper">
      <div
        className={classNames('Avatar__container', {
          className,
        })}
        style={styles}
        {...othersProps}
      >
        <span className="Avatar__name">{getAvatarName(user?.email)}</span>
      </div>
    </div>
  );
};

export default Avatar;
