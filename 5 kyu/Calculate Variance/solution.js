const variance = function (numbers) {
  let sum = 0;
  // 💬 Calculate the mean of 'numbers'
  let mean = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;

  // 💬 Loop over 'numbers'
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // 💬 Sum based on rules
    sum += (currentNumber - mean) ** 2;
  }
  // 💬 Divide by the length of 'numbers'
  sum = sum / numbers.length;

  return sum;
};

const result = variance([1, 2, 2, 3]);
console.log(result); // 🐣 0.5
