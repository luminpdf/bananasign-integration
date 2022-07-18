import React from 'react';

import {initialState} from './InviteToSignProvider';

interface ContextType {
  state: IState;
  dispatch: React.Dispatch<{type: string}>;
}

export interface IAssignerProps {
  email?: string;
  name?: string;
  url?: string;
  type?: string;
}

export interface IState {
  loading: boolean;
  isOpenAddAssignerModal: boolean;
  signers: IAssignerProps[];
  viewers: IAssignerProps[];
  type: string;
}

const InviteToSignContext = React.createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export default InviteToSignContext;
