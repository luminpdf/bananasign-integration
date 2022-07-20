import React, { ReactNode } from 'react';
import { Assigners, PayloadOnNext } from './InviteToSign.interface';
interface IInviteToSignProviderProps {
    children: ReactNode;
    onClose: () => void;
    assigners: Assigners;
    onNext: (payload: PayloadOnNext) => void;
}
declare const InviteToSignProvider: React.FC<IInviteToSignProviderProps>;
export default InviteToSignProvider;
