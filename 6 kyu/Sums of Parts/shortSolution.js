function partsSums(numbers) {
  // 💬 Insert 0 at the beginning
  numbers.unshift(0);

  // 💬 Get the total sum of "numbers"
  let total = numbers.reduce((acc, cur) => acc + cur, 0);

  // 💬 Create a new array based on "numbers"
  const sums = numbers.map(number => (total -= number));

  return sums;
}

const result = partsSums([0, 1, 3, 6, 10]);
console.log(result); // 🐣 [20, 20, 19, 16, 10, 0]
