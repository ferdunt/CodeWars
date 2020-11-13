const maxSequence = numbers => {
  let currentSum = 0;
  let bestSum = 0;

  // 💬 Loop in 'numbers' array
  numbers.forEach(currentNumber => {
    // 💬 Check the 'currentNumber'
    currentSum = Math.max(currentSum + currentNumber, 0);

    // 💬 Evaluate 'currentSum' with 'bestSum'
    bestSum = Math.max(currentSum, bestSum);
  });

  return bestSum;
};

const result = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 🥚
console.log(result); // 🐣 6
