const findLongest = array => {
  return array.reduce((acc, cur) =>
    `${cur}`.length > `${acc}`.length ? cur : acc
  );
};

const result = findLongest([1, 10, 100]);
console.log(result); // 🐣 100
