// import { createContext, useContext, useReducer, useMemo } from "react"
import React from 'react';

import {
  ContractType,
  DocumentOrigin,
  IInviteToSignAction,
  IInviteToSignState,
  MetaDocument,
} from './InviteToSign.interface';
import {InviteToSignReducer} from './InviteToSign.Reducer';

const initValue: IInviteToSignState = {
  loading: false,
  documentType: ContractType.MEANDOTHERS,
  meta: MetaDocument.UPLOAD,
  documentOrigin: DocumentOrigin.BANANASIGN,
};

const InviteToSignContext = React.createContext<{
  state: IInviteToSignState;
  dispatch: React.Dispatch<IInviteToSignAction>;
}>({
  state: initValue,
  dispatch: () => null,
});

export const useInviteToSignContext = () =>
  React.useContext(InviteToSignContext);

export const InviteToSignProvider: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(InviteToSignReducer, {
    ...initValue,
  });

  return (
    <InviteToSignContext.Provider value={{state, dispatch}}>
      {children}
    </InviteToSignContext.Provider>
  );
};
