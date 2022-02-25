const capitalize = (s, arr) => {
  return s
    .split('')
    .map((letter, i) => {
      if (arr.includes(i)) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    })
    .join('');
};

const result = capitalize('abcdef', [1, 2, 5]);
console.log(result); // 🐣 "aBCdeF"
