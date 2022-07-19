import React, {ReactNode, useReducer} from 'react';

import {REQUEST_TYPE} from '@src/constants/common';

import InviteToSignContext from './InviteToSignContext';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';

export const INVITE_TO_SIGN_ACTION_TYPES = {
  SET_LOADING: 'SET_LOADING',
  SET_OPEN_ADD_ASSIGNER_MODAL: 'SET_OPEN_ADD_ASSIGNER_MODAL',
  SET_SIGNERS: 'SET_SIGNERS',
  SET_VIEWERS: 'SET_VIEWERS',
  REMOVE_SIGNER: 'REMOVE_SIGNER',
  REMOVE_VIEWER: 'REMOVE_VIEWER',
  ADD_VIEWER: 'ADD_VIEWER',
  ADD_SIGNER: 'ADD_SIGNER',
  SET_WORD_SEARCH_CONTACT: 'SET_WORD_SEARCH_CONTACT',
  SET_SEARCH_CONTACTS: 'SET_SEARCH_CONTACTS',
  SET_REQUEST_TYPE: 'SET_REQUEST_TYPE',
  CANCEL_ADD_ASSIGNERS: 'CANCEL_ADD_ASSIGNERS',
  CLOSE_AND_RESET_MODAL_SEARCH: 'CLOSE_AND_RESET_MODAL_SEARCH',
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
      isOwner: true,
    },
  ],
  viewers: [],
  type: REQUEST_TYPE.SIGNER,
  keyWordSearchContact: '',
  searchContacts: [],
  cancelAddAssigners: false,
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
