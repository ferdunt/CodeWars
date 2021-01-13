function narcissistic(value) {
  // 💬 Create an array of numbers of 'value'
  const numbers = value.toString().split('').map(Number);

  // 💬 Get the size of 'value'
  const size = numbers.length;
  let sum = 0;

  // 💬 Loop 'numbers'
  for (let i = 0; i < size; i++) {
    const currentNumber = numbers[i];
    // 💬 Calculate each number and sum it
    sum += currentNumber ** size;
  }

  // 💬 Check if the original value is equal to 'sum'
  if (value === sum) {
    return true;
  } else {
    return false;
  }
}

const result = narcissistic(153);
console.log(result); // 🐣 true
