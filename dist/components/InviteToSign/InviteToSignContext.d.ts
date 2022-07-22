import React from 'react';
import { IState } from './InviteToSign.interface';
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
    bananasignUrl: string;
    bananasignBaseUrl: string;
    flowId: string;
    uploadDocumentUrl: string;
};
declare const InviteToSignContext: React.Context<ContextType>;
export default InviteToSignContext;
