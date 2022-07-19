import React, {ReactNode, useReducer} from 'react';

import InviteToSignContext, {initialState} from './InviteToSignContext';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';

// import {REQUEST_TYPE} from '@src/constants/common';

interface IInviteToSignProps {
  children: ReactNode;
}

const InviteToSignProvider: React.FC<IInviteToSignProps> = (props) => {
  const {children} = props;
  const [state, dispatch] = useReducer(InviteToSignContextReducer, {
    ...initialState,
  });

  return (
    <InviteToSignContext.Provider value={{state, dispatch}}>
      {children}
    </InviteToSignContext.Provider>
  );
};

const defaultProps = {
  children: null,
};

InviteToSignProvider.defaultProps = defaultProps;

export default InviteToSignProvider;
