import React from 'react';
import { IState, PayloadPutDocumentInfo } from './InviteToSign.interface';
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
    saveDocumentInfo: (_payload: PayloadPutDocumentInfo) => Promise<{
        identify: string;
    }>;
    identify: string;
    bananasignUrl: string;
};
declare const InviteToSignContext: React.Context<ContextType>;
export default InviteToSignContext;
