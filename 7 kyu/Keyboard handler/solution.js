const handler = (key, isCaps = false, isShift = false) => {
  // 💬 Create an object store characters
  const keyboard = {
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    ';': ':',
    "'": '"',
    '\\': '|',
    '/': '?',
    '.': '>',
    ',': '<',
    '`': '~',
  };

  // 💬 Create 3 regex to match
  const regexLetters = /^[a-z]$/gm;
  const regexNumbers = /^[0-9]$/gm;
  const regexCharacters = /[-!$%^&*()_+|~='"\\`{}\[\]:\/;<>?,.@#]/gm;

  // 💬 If it's differente from string return error
  if (typeof key !== 'string') return 'KeyError';

  // 💬 Check letters, numbers and characters
  if (key.match(regexLetters)) {
    if ((isCaps && !isShift) || (isShift && !isCaps)) {
      return key.toUpperCase();
    } else {
      return key;
    }
  } else if (key.match(regexNumbers) || key.match(regexCharacters)) {
    if (isShift) {
      return keyboard[key];
    } else {
      return key;
    }
  } else {
    return 'KeyError';
  }
};

const result = handler('\\', false, true);
console.log(result); // 🐣 2
