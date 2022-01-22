const handler = (key, isCaps = false, isShift = false) => {
  const keyboard = {
    1: '!',
    2: '@',
  };

  // const regexLetters = /^[a-z]$/gm;

  if (key.length > 1 || typeof key !== 'string' || key === '') {
    return 'KeyError';
  }
  if (key === key.toUpperCase() && typeof +key === 'number') {
    return 'KeyError';
  }

  if (typeof +key === 'number' && isShift) {
    return keyboard[key];
  } else if (isCaps || isShift) {
    return key.toUpperCase();
  } else {
    return key;
  }
};

const result = handler('a', true, true);
console.log(result); // 🐣 2
