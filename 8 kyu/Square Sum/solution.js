const squareSum = numbers => numbers.reduce((acc, cur) => acc + cur ** 2, 0);

const result = squareSum([1, 2]);
console.log(result); // 🐣 5
