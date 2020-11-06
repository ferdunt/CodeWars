function findOdd(numbers) {
  // 💬 Create an new array of unique values
  const uniqueNumbers = [...new Set(numbers)];

  // 💬 Loop 'uniqueNumbers' to find the odd number
  for (let i = 0; i < uniqueNumbers.length; i++) {
    // 💬 Filter our 'numbers' array to match with 'uniqueNumber' and get the size
    const size = numbers.filter(number => number === uniqueNumbers[i]).length;
    // 💬 Evaluate if 'size' is an odd number
    if (size % 2 !== 0) return uniqueNumbers[i];
  }
}

const result = findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); // 🥚
console.log(result); // 🐣 10
