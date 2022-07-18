import React from 'react';

import {initialState} from './InviteToSignProvider';

interface ContextType {
  state: IState;
  dispatch: React.Dispatch<{type: string}>;
}

export interface IState {
  loading: boolean;
  isOpenAddAssignerModal: boolean;
}

const InviteToSignContext = React.createContext<ContextType>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

export default InviteToSignContext;
