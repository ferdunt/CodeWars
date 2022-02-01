const sequenceSum = (begin, end, step) => {
  let sum = 0;

  // 💬 Loop until begin is <= that end
  while (begin <= end) {
    // 💬 Make the sum
    sum += begin;
    // 💬 Update begin with step
    begin = begin + step;
  }

  return sum;
};

const result = sequenceSum(2, 6, 2);
console.log(result); // 🐣 12
