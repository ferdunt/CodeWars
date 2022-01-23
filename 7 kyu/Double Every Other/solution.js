const doubleEveryOther = numbers => {
  return numbers.map((n, i) => (i % 2 == 0 ? n : n + n));
};

const result = doubleEveryOther([1, 2, 3, 4]);
console.log(result); // 🐣 [1, 4, 3, 8]
