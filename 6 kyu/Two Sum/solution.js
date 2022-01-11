const twoSum = (arrayNumbers, target) => {
  // 💬 Loop 1 from index 0
  for (let i = 0; i < arrayNumbers.length; i++) {
    const num1 = arrayNumbers[i];
    // 💬 Loop 2 from index i + 1
    for (let j = i + 1; j < arrayNumbers.length; j++) {
      const num2 = arrayNumbers[j];
      // 💬 Sum two numbers and check if it's equal that target
      const sum = num1 + num2;
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

const a1 = [1, 2, 3];
const a2 = 4;
const result = twoSum(a1, a2);
console.log(result); // 🐣 [0, 2]
