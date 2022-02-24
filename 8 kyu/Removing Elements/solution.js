const removeEveryOther = arr => {
  return arr.filter((item, index) => index % 2 === 0);
};

const result = removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);
console.log(result); // 🐣 ['Hello', 'Hello Again']
