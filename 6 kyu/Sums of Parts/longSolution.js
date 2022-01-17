function partsSums(numbers) {
  const sums = [];

  // 💬 Get the total sum of "numbers"
  let total = numbers.reduce((acc, cur) => acc + cur, 0);
  sums.push(total);

  // 💬 Loop the entire array of "numbers"
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // 💬 Substract the current number from "total"
    total -= currentNumber;
    // 💬 Push it to "sums"
    sums.push(total);
  }

  return sums;
}

const result = partsSums([0, 1, 3, 6, 10]);
console.log(result); // 🐣 [20, 20, 19, 16, 10, 0]
