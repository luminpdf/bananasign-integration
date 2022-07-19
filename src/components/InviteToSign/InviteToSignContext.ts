import React from 'react';

import {REQUEST_TYPE} from '@src/constants/common';

import {IState} from './InviteToSign.interface';

interface ContextType {
  state: IState;
  dispatch: React.Dispatch<{type: string}>;
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
  openBananasignIframe: false,
};

const InviteToSignContext = React.createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export default InviteToSignContext;
