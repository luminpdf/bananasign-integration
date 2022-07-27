import React, {ReactNode, useEffect, useReducer} from 'react';

import {
  BANANASIGN_BASE_URL,
  BANANASIGN_WEB_URL,
  REQUEST_TYPE,
} from '@src/constants/common';
import common from '@src/utils/common';

import {
  IAssignerProps,
  IWidgetInit,
  UploadDocumentDto,
} from './InviteToSign.interface';
import InviteToSignContext, {initialState} from './InviteToSignContext';
import {InviteToSignContextActions} from './InviteToSignContextActions';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';

interface IInviteToSignProviderProps {
  children: ReactNode;
  onClose?: () => void;
  signers: IAssignerProps[];
  viewers: IAssignerProps[];
  bananasignUrl?: string;
  bananasignBaseUrl?: string;
  fileName: string;
  onUploadDocument: (args: UploadDocumentDto) => void;
  isOpen: boolean;
}

const InviteToSignProvider: React.FC<IInviteToSignProviderProps> = ({
  children,
  onClose,
  signers,
  viewers,
  bananasignUrl = BANANASIGN_WEB_URL,
  bananasignBaseUrl = BANANASIGN_BASE_URL,
  fileName,
  onUploadDocument,
  isOpen,
}) => {
  const signersData: IAssignerProps[] = common.serializeAssigners(
    signers,
    REQUEST_TYPE.SIGNER,
  );
  const viewersData: IAssignerProps[] = common.serializeAssigners(
    viewers,
    REQUEST_TYPE.VIEWER,
  );
  const context = {
    signers: signersData,
    viewers: viewersData,
    onClose,
    bananasignUrl,
    bananasignBaseUrl,
    fileName,
    isOpen,
  };

  const [state, dispatch] = useReducer(InviteToSignContextReducer, {
    ...initialState,
    ...context,
  });

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({fileName}),
    };
    if (isOpen) {
      dispatch(InviteToSignContextActions.SET_OPENED_WIDGET(isOpen));

      fetch(`${bananasignBaseUrl}/v1/document-signing`, requestOptions)
        .then((response) => response.json())
        .then((data: IWidgetInit) => {
          onUploadDocument({uploadUrl: data.uploadDocumentUrl});
          dispatch(InviteToSignContextActions.SET_DOCUMENT_SIGNING(data));
        })
        .catch((error) => console.log(error));
    }
  }, [isOpen]);

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
