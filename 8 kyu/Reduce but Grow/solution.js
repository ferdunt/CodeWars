const grow = numbers => numbers.reduce((acc, cur) => acc * cur);

const result = grow([1, 2, 3]);
console.log(result); // 🐣 6
