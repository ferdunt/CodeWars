const arithmetic = (a, b, operator) => {
  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
  return operations[operator];
};

const result = arithmetic(1, 2, 'add');
console.log(result); // 🐣 3
