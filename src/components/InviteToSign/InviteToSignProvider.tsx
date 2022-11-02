import React, {ReactNode, useEffect, useReducer} from 'react';
import axios from 'axios';

import {
  BANANASIGN_BASE_URL,
  BANANASIGN_WEB_URL,
  REQUEST_TYPE,
  API_VERSION,
  API_HANDLER,
} from '@src/constants/common';
import common from '@src/utils/common';

import {
  IAssignerProps,
  IWidgetInit,
  ISearchContact,
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
  fileData: ArrayBuffer | Blob | File;
  isOpen: boolean;
  accessToken: string;
  search?: ISearchContact;
}

const InviteToSignProvider: React.FC<IInviteToSignProviderProps> = ({
  children,
  onClose,
  signers,
  viewers,
  bananasignUrl = BANANASIGN_WEB_URL,
  bananasignBaseUrl = BANANASIGN_BASE_URL,
  fileName,
  fileData,
  isOpen,
  accessToken,
  search,
}) => {
  const signersData: IAssignerProps[] = common.serializeAssigners(
    signers,
    REQUEST_TYPE.SIGNER,
  );
  const viewersData: IAssignerProps[] = common.serializeAssigners(
    viewers,
    REQUEST_TYPE.VIEWER,
  );

  const endPoint = `${bananasignBaseUrl}/${API_VERSION}/${API_HANDLER}`;
  const context = {
    signers: signersData,
    viewers: viewersData,
    onClose,
    bananasignUrl,
    bananasignBaseUrl,
    fileName,
    isOpen,
    accessToken,
    search,
  };

  const [state, dispatch] = useReducer(InviteToSignContextReducer, {
    ...initialState,
    ...context,
  });

  useEffect(() => {
    if (isOpen) {
      dispatch(InviteToSignContextActions.SET_OPENED_WIDGET(isOpen));

      axios({
        method: 'POST',
        url: `${endPoint}/init`,
        data: {
          fileName,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => {
          const data: IWidgetInit = response.data;
          await axios.put(data.preSignedUrl, fileData, {
            headers: {
              'Content-Type': 'application/pdf',
            },
          });
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
