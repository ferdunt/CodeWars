function removeSmallest(numbers) {
  // 💬 Get the lowest number
  const lowest = Math.min(...numbers);

  // 💬 Create a copy of numbers
  const minNumbers = [...numbers];

  // 💬 Loop until we find the lowest number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === lowest) {
      // 💬 Delete the lowest number and exit the loop
      minNumbers.splice(i, 1);
      break;
    }
  }

  return minNumbers;
}

const result = removeSmallest([5, 3, 2, 1, 4]);
console.log(result); // 🐣 [5,3,2,4]
