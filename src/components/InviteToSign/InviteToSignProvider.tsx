import React, {ReactNode, useReducer} from 'react';

import {BANANA_SIGN_WEB_URL, REQUEST_TYPE} from '@src/constants/common';
import common from '@src/utils/common';

import {
  IAssignerProps,
  IGetIdentify,
  PayloadPutDocumentInfo,
} from './InviteToSign.interface';
import InviteToSignContext, {initialState} from './InviteToSignContext';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';

interface IInviteToSignProviderProps {
  children: ReactNode;
  onClose: () => void;
  signers: IAssignerProps[];
  viewers: IAssignerProps[];
  onPutDocumentInfo: (payload: PayloadPutDocumentInfo) => Promise<IGetIdentify>;
  integrationId: string;
  bananasignUrl?: string;
}

const InviteToSignProvider: React.FC<IInviteToSignProviderProps> = ({
  children,
  onClose,
  signers,
  viewers,
  onPutDocumentInfo,
  integrationId,
  bananasignUrl,
}) => {
  const signersData = common.serializeAssigners(signers, REQUEST_TYPE.SIGNER);
  const viewersData = common.serializeAssigners(viewers, REQUEST_TYPE.VIEWER);
  const [state, dispatch] = useReducer(InviteToSignContextReducer, {
    ...initialState,
    signers: signersData,
    viewers: viewersData,
    onClose,
    onPutDocumentInfo,
    integrationId,
    bananasignUrl: bananasignUrl || BANANA_SIGN_WEB_URL,
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
