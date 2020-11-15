// 💬 NUMBERS
const zero = operation => (operation ? operation(0) : 0);
const one = operation => (operation ? operation(1) : 1);
const two = operation => (operation ? operation(2) : 2);
const three = operation => (operation ? operation(3) : 3);
const four = operation => (operation ? operation(4) : 4);
const five = operation => (operation ? operation(5) : 5);
const six = operation => (operation ? operation(6) : 6);
const seven = operation => (operation ? operation(7) : 7);
const eight = operation => (operation ? operation(8) : 8);
const nine = operation => (operation ? operation(9) : 9);

// 💬 OPERATIONS
const plus = number => {
  return newNumber => newNumber + number;
};
const minus = number => {
  return newNumber => newNumber - number;
};
const times = number => {
  return newNumber => newNumber * number;
};
const dividedBy = number => {
  return newNumber => newNumber / number;
};

const result = seven(times(five()));
console.log(result); // 🐣 35
