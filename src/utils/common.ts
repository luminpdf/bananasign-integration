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

export default {
  getAvatarName,
  capitalizeLetter,
};
