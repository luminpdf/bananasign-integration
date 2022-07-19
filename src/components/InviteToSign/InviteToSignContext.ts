import React from 'react';

import {IState} from './InviteToSign.interface';
import {initialState} from './InviteToSignProvider';

interface ContextType {
  state: IState;
  dispatch: React.Dispatch<{type: string}>;
}

const InviteToSignContext = React.createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export default InviteToSignContext;
