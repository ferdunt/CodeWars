function arrayDiff(numbersA, numbersB) {
  // 💬 Filter A and check if each number IS NOT in B
  const diff = numbersA.filter(number => !numbersB.includes(number));

  // 💬 Return the diff above
  return diff;
}

const result = arrayDiff([1, 2], [1]); // 🥚
console.log(result); // 🐣 [2]
