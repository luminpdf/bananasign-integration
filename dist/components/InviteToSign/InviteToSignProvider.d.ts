import React, { ReactNode } from 'react';
import { IAssignerProps, IGetIdentify, PayloadPutDocumentInfo } from './InviteToSign.interface';
interface IInviteToSignProviderProps {
    children: ReactNode;
    onClose: () => void;
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    onPutDocumentInfo: (payload: PayloadPutDocumentInfo) => Promise<IGetIdentify>;
    integrationId: string;
}
declare const InviteToSignProvider: React.FC<IInviteToSignProviderProps>;
export default InviteToSignProvider;
