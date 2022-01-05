const incrementer = nums => {
  return nums.map((num, index) => {
    const calc = num + ++index;
    if (calc >= 10) {
      return calc % 10;
    } else {
      return calc;
    }
  });
};

const result = incrementer([1, 2, 3]);
console.log(result); // 🐣 [2, 4, 6]
