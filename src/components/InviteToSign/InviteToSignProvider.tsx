import React, {ReactNode, useReducer} from 'react';

import {REQUEST_TYPE} from '@src/constants/common';

import InviteToSignContext from './InviteToSignContext';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';

export const INVITE_TO_SIGN_ACTION_TYPE = {
  SET_LOADING: 'SET_LOADING',
  SET_OPEN_ADD_ASSIGNER_MODAL: 'SET_OPEN_ADD_ASSIGNER_MODAL',
  REMOVE_SIGNER: 'REMOVE_SIGNER',
  REMOVE_VIEWER: 'REMOVE_VIEWER',
};

interface IInviteToSignProps {
  children: ReactNode;
}

export const initialState = {
  loading: false,
  isOpenAddAssignerModal: false,
  signers: [
    {
      name: 'ha thuy',
      email: 'hahah@gmail.com',
    },
  ],
  viewers: [],
  type: REQUEST_TYPE.SIGNER,
};

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
