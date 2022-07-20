import { Assigners } from '@src/components/InviteToSign/InviteToSign.interface';
export declare const debounce: <F extends (...args: any[]) => any>(func: F, waitFor: number) => (...args: Parameters<F>) => ReturnType<F>;
declare const _default: {
    getAvatarName: (name: string) => string;
    capitalizeLetter: (string: string) => string;
    validateEmail: (email: string) => boolean;
    debounce: <F extends (...args: any[]) => any>(func: F, waitFor: number) => (...args: Parameters<F>) => ReturnType<F>;
    serializeAssigners: (assigners: Assigners) => {
        signers: {
            name: string;
            isOwner: boolean;
            id: string;
            requestType: string;
            dueDateExpired: number;
            email: string;
            avatarRemoteId?: string | undefined;
            type?: string | undefined;
            userId?: string | undefined;
            newAssignUser?: boolean | undefined;
            dueTimeExpired?: number | undefined;
        }[];
        viewers: {
            name: string;
            isOwner: boolean;
            id: string;
            requestType: string;
            dueDateExpired: number;
            email: string;
            avatarRemoteId?: string | undefined;
            type?: string | undefined;
            userId?: string | undefined;
            newAssignUser?: boolean | undefined;
            dueTimeExpired?: number | undefined;
        }[];
    };
};
export default _default;
