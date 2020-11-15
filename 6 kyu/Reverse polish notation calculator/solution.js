function calc(notation) {
  const operators = ['+', '-', '*', '/'];
  let stack = [];

  // 💬 Convert notation into an array of items
  notation = notation.split(' ');

  // 💬 Loop the 'notation' array
  for (let i = 0; i < notation.length; i++) {
    const currentValue = notation[i];
    // 💬 Check if the current value is an operator
    if (operators.includes(currentValue)) {
      // 💬 So we get the 1 and 2 operands from stack array
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      // 💬 Procede to calculate
      const result = calculate(operand1, operand2, currentValue);

      // 💬 Push the new result into the 'stack'
      stack.push(result);
    } else {
      // 💬 Convert the current value into a number and push it
      stack.push(+currentValue);
    }
  }

  // 💬 Return the unique value from our stack or 0
  return stack[0] || 0;
}

// 💬 Calculate given the num1, num2 and operator and return the result
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

const result = calc('1 3 -');
console.log(result); // 🐣 - 2
