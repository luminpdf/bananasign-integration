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
  signers: [],
  viewers: [],
  type: REQUEST_TYPE.SIGNER,
  keyWordSearchContact: '',
  searchContacts: [],
  cancelAddAssigners: false,
  openBananasignIframe: false,
  onClose: () => undefined,
  bananasignUrl: '',
  bananasignBaseUrl: '',
  //
  flowId: '',
  uploadDocumentUrl: '',

  isOpen: false,
  accessToken: '',
  search: undefined,
};

const InviteToSignContext = React.createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export default InviteToSignContext;
