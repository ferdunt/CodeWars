// 💬 NUMBERS
function zero(operation) {
  const currentNumber = 0;
  return verify(currentNumber, operation);
}
function one(operation) {
  const currentNumber = 1;
  return verify(currentNumber, operation);
}
function two(operation) {
  const currentNumber = 2;
  return verify(currentNumber, operation);
}
function three(operation) {
  const currentNumber = 3;
  return verify(currentNumber, operation);
}
function four(operation) {
  const currentNumber = 4;
  return verify(currentNumber, operation);
}
function five(operation) {
  const currentNumber = 5;
  return verify(currentNumber, operation);
}
function six(operation) {
  const currentNumber = 6;
  return verify(currentNumber, operation);
}
function seven(operation) {
  const currentNumber = 7;
  return verify(currentNumber, operation);
}
function eight(operation) {
  const currentNumber = 8;
  return verify(currentNumber, operation);
}
function nine(operation) {
  const currentNumber = 9;
  return verify(currentNumber, operation);
}

// 💬 OPERATIONS
function plus(number) {
  return ['+', number];
}
function minus(number) {
  return ['-', number];
}
function times(number) {
  return ['*', number];
}
function dividedBy(number) {
  return ['/', number];
}

// 💬 VERIFY
function verify(currentNumber, operation) {
  // 💬 If there is no operation return one number
  if (!operation) return currentNumber;
  // 💬 Destructure 'operator' and 'newNumber'
  const [operator, newNumber] = operation;

  // 💬 Else calculate
  return calculate(currentNumber, newNumber, operator);
}

// 💬 CALCULATE
function calculate(num1, num2, type) {
  switch (type) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return Math.trunc(num1 / num2);
  }
}

const result = seven(times(five()));
console.log(result); // 🐣 35
