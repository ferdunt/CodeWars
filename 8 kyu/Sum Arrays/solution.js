const sum = numbers => numbers.reduce((acc, cur) => acc + cur, 0);

const result = sum([1, 5.2, 4, 0, -1]);
console.log(result); // 🐣 9.2
