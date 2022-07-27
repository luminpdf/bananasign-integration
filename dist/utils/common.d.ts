import { IAssignerProps } from '@src/components/InviteToSign/InviteToSign.interface';
export declare const debounce: <F extends (...args: any[]) => any>(func: F, waitFor: number) => (...args: Parameters<F>) => ReturnType<F>;
declare function compareArrayByElement(firstArray: IAssignerProps[], secondArray: IAssignerProps[], property: string): boolean;
declare const _default: {
    isClientSide: boolean;
    isMobile: () => boolean;
    getAvatarName: (name: string) => string;
    capitalizeLetter: (string: string) => string;
    validateEmail: (email: string) => boolean;
    debounce: <F extends (...args: any[]) => any>(func: F, waitFor: number) => (...args: Parameters<F>) => ReturnType<F>;
    serializeAssigners: (assigners: IAssignerProps[], requestType: string) => {
        name: string;
        isOwner: boolean;
        id: string;
        requestType: string;
        dueTimeExpired: number;
        email: string;
        avatarRemoteId?: string | undefined;
        type?: string | undefined;
        userId?: string | undefined;
        newAssignUser?: boolean | undefined;
    }[];
    compareArrayByElement: typeof compareArrayByElement;
};
export default _default;
