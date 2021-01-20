const positiveSum = arr =>
  arr.filter(n => n > 0).reduce((acc, cur) => acc + cur, 0);

const result = positiveSum([1, -4, 7, 12]);
console.log(result); // 🐣 20
