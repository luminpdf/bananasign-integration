import React, {
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';

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
import InviteToSignContext, { initialState } from './InviteToSignContext';
import {InviteToSignContextActions} from './InviteToSignContextActions';
import {InviteToSignContextReducer} from './InviteToSignContextReducer';
import Loading from './Loading';

interface IInviteToSignProviderProps {
  children: ReactNode;
  onClose?: () => void;
  signers: IAssignerProps[];
  viewers: IAssignerProps[];
  bananasignUrl?: string;
  bananasignBaseUrl?: string;
  fileName: string;
  fileData: Blob | File;
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
  const [prepare, setPrepare] = useState(true);
  const signersData: IAssignerProps[] = common.serializeAssigners(
    signers,
    REQUEST_TYPE.SIGNER,
  );
  const viewersData: IAssignerProps[] = common.serializeAssigners(
    viewers,
    REQUEST_TYPE.VIEWER,
  );

  const endPoint = `${bananasignBaseUrl}/${API_VERSION}/${API_HANDLER}`;

  const defaultState = {
    ...initialState,
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


  const [state, dispatch] = useReducer(InviteToSignContextReducer, defaultState);

  useEffect(() => {
    if (isOpen) {
      fetch(`${endPoint}/init`, {
        method: 'POST',
        body: JSON.stringify({
          fileName,
        }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => {
          const data: IWidgetInit = await response.json();
          await fetch(data.preSignedUrl, {
            method: 'PUT',
            body: fileData,
            headers: {
              'Content-Type': 'application/pdf',
            },
          })
          dispatch(InviteToSignContextActions.SET_UP({
            ...defaultState,
            ...data,
            isOpen,
            signers: [
              {
                email: data.owner.email,
                name:  data.owner.name,
              },
              ...signers,
            ]
          }))
          setPrepare(false);
        })
        .catch((error) => console.log(error));
    }
  }, [isOpen]);

  return prepare ? <Loading /> : (
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
