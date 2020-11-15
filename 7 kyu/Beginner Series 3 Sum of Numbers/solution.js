function getSum(a, b) {
  let sum = 0;

  // 💬 Get the min and max numbers
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  // 💬 Loop between 'min' and 'max'
  for (let i = min; i <= max; i++) {
    // 💬 Add the current 'i'
    sum += i;
  }

  return sum;
}

const result = getSum(0, -1); // 🥚
console.log(result); // 🐣 -1
