const minMax = arr => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return [min, max];
};

const result = minMax([1, 2, 4, 3, 5]);
console.log(result); // 🐣 [1, 5]
