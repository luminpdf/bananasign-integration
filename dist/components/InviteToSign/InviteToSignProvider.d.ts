import React, { ReactNode } from 'react';
import { IAssignerProps, UploadDocumentDto } from './InviteToSign.interface';
interface IInviteToSignProviderProps {
    children: ReactNode;
    onClose: () => void;
    signers: IAssignerProps[];
    viewers: IAssignerProps[];
    bananasignUrl?: string;
    bananasignBaseUrl?: string;
    fileName: string;
    onUploadDocument: (args: UploadDocumentDto) => void;
}
declare const InviteToSignProvider: React.FC<IInviteToSignProviderProps>;
export default InviteToSignProvider;
