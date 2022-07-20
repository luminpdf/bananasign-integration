import React, {ReactNode, useReducer} from 'react';

import common from '@src/utils/common';

import {Assigners, PayloadOnNext} from './InviteToSign.interface';
import InviteToSignContext, {initialState} from './InviteToSignContext';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';

// import {REQUEST_TYPE} from '@src/constants/common';

interface IInviteToSignProviderProps {
  children: ReactNode;
  onClose: () => void;
  assigners: Assigners;
  onNext: (payload: PayloadOnNext) => void;
}

const InviteToSignProvider: React.FC<IInviteToSignProviderProps> = ({
  children,
  onClose,
  assigners,
}) => {
  const {signers, viewers} = common.serializeAssigners(assigners);
  const [state, dispatch] = useReducer(InviteToSignContextReducer, {
    ...initialState,
    signers,
    viewers,
    onClose,
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
