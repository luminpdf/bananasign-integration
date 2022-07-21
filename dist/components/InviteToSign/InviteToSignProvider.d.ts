import React, { ReactNode } from 'react';
import { IAssignerProps, IGetIdentify, PayloadPutDocumentInfo } from './InviteToSign.interface';
interface IInviteToSignProviderProps {
    children: ReactNode;
    onClose: () => void;
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    saveDocumentInfo: (payload: PayloadPutDocumentInfo) => Promise<IGetIdentify>;
    bananasignUrl?: string;
}
declare const InviteToSignProvider: React.FC<IInviteToSignProviderProps>;
export default InviteToSignProvider;
