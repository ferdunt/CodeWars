const incrementer = nums => {
  return nums.map((num, index) => (num + ++index) % 10);
};

const result = incrementer([1, 2, 3]);
console.log(result); // 🐣 [2, 4, 6]
