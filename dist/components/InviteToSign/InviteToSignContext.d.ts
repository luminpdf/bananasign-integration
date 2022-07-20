import React from 'react';
import { IState, PayloadOnNext } from './InviteToSign.interface';
interface ContextType {
    state: IState;
    dispatch: React.Dispatch<{
        type: string;
    }>;
}
export declare const initialState: {
    loading: boolean;
    isOpenAddAssignerModal: boolean;
    signers: never[];
    viewers: never[];
    type: string;
    keyWordSearchContact: string;
    searchContacts: never[];
    cancelAddAssigners: boolean;
    openBananasignIframe: boolean;
    modalWarningData: {
        type: string;
    };
    onClose: () => undefined;
    assigners: never[];
    onNext: (_payload: PayloadOnNext) => {
        identify: string;
    };
};
declare const InviteToSignContext: React.Context<ContextType>;
export default InviteToSignContext;
