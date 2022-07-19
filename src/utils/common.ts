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

export default {
  getAvatarName,
  capitalizeLetter,
  validateEmail,
  debounce,
};
