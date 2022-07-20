import {
  Assigners,
  IAssignerProps,
} from '@src/components/InviteToSign/InviteToSign.interface';
import {GUEST_USER} from '@src/constants/common';

const getAvatarName = (name: string) => {
  let words = '';
  if (name && name.split(' ').length > 0) {
    name.split(' ').length = 2;
    const arrName = name.split(' ');
    words = arrName[0].charAt(0);
    words = words.toUpperCase();
  }
  return words;
};

const capitalizeLetter = (string: string) =>
  string
    .toLowerCase()
    .replace('_', ' ')
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

const serializeAssigners = (assigners: Assigners) => {
  const {signers, viewers} = assigners;
  const serializeSigners = signers.map(
    (assigner: IAssignerProps, index: number) => {
      return {
        ...assigner,
        name: assigner?.name || GUEST_USER,
        isOwner: index === 0,
        id: '',
        requestType: 'SIGNER',
        dueDateExpired: 0,
      };
    },
  );
  const serializeViewers = viewers.map((assigner: IAssignerProps) => {
    return {
      ...assigner,
      name: assigner?.name || GUEST_USER,
      isOwner: false,
      id: '',
      requestType: 'VIEWER',
      dueDateExpired: 0,
    };
  });
  return {signers: serializeSigners, viewers: serializeViewers};
};

export default {
  getAvatarName,
  capitalizeLetter,
  validateEmail,
  debounce,
  serializeAssigners,
};
