import classNames from 'classnames';
import React from 'react';

import {useInviteToSignContext} from '../InviteToSign.context';
// import './Wrapper.scss';
import {IWrapperProps} from './Wrapper.interface';

export const Wrapper: React.FC<IWrapperProps> = ({children, className}) => {
  const context = useInviteToSignContext();
  console.log(context);

  return (
    <section className={classNames('Wrapper__container', {className})}>
      <div className={classNames('Wrapper__content', {viewHideMobile: false})}>
        <div className="Wrapper__content-header">
          <div className="Wrapper__content-header--title"></div>
          <h4 className="Wrapper__content-header--contract_type"></h4>
        </div>
        {children}
      </div>
    </section>
  );
};
