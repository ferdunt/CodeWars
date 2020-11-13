function sumTwoSmallestNumbers(numbers) {
  // 💬 Sort the array and splice the first 2 numbers
  numbers = numbers.sort((a, b) => a - b);

  // 💬 Return the sum of the 2 numbers
  return numbers[0] + numbers[1];
}

const result = sumTwoSmallestNumbers([19, 5, 42, 2, 77]); // 🥚
console.log(result); // 🐣 7
