const divisibleBy = (numbers, divisor) =>
  numbers.filter(n => n % divisor === 0);

const result = divisibleBy([1, 2, 3, 4, 5, 6], 2);
console.log(result); // 🐣 [2, 4, 6]
