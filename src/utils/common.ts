import {IAssignerProps} from '@src/components/InviteToSign/InviteToSign.interface';
import {GUEST_USER, REQUEST_TYPE} from '@src/constants/common';

const isClientSide = typeof window !== 'undefined';

const isMobile = () => isClientSide && window.innerWidth < 640;

const getAvatarName = (name: string) => {
  if (!name) return null;
  const nameArray = name.split(' ');
  if (nameArray.length > 1) {
    const firstCharacter = nameArray[0].charAt(0);
    const lastCharacter = nameArray[nameArray.length - 1].charAt(0);
    return firstCharacter + lastCharacter;
  }
  return name.slice(0, 1);
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

const serializeAssigners = (
  assigners: IAssignerProps[],
  requestType: string,
) => {
  const serializeSigners = assigners.map(
    (assigner: IAssignerProps, index: number) => {
      return {
        ...assigner,
        name: assigner?.name || GUEST_USER,
        isOwner: requestType === REQUEST_TYPE.SIGNER && index === 0, // default the first signer is owner
        id: assigner?.id || '',
        requestType,
        dueTimeExpired: 0,
      };
    },
  );
  return serializeSigners;
};

function compareArrayByElement(
  firstArray: IAssignerProps[],
  secondArray: IAssignerProps[],
  property: string,
) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  // check object by property
  if (property) {
    return firstArray.every(
      (element: IAssignerProps) =>
        secondArray.findIndex((assigner) => element.email === assigner.email) >
        -1,
    );
  }

  return firstArray.every((element, index) => element === secondArray[index]);
}

export default {
  isClientSide,
  isMobile,
  getAvatarName,
  capitalizeLetter,
  validateEmail,
  debounce,
  serializeAssigners,
  compareArrayByElement,
};
