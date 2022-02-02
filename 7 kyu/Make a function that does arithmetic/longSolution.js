const arithmetic = (a, b, operator) => {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
};

const result = arithmetic(1, 2, 'add');
console.log(result); // 🐣 3
