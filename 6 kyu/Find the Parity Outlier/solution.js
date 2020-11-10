function findOutlier(numbers) {
  let outlier = 0;

  // 💬 Check if the mayority of 'numbers' are even
  const isEven = numbers.filter(number => number % 2 === 0).length;

  if (isEven === numbers.length - 1) {
    // 💬 In case if is even
    outlier = numbers.find(number => number % 2 !== 0);
  } else {
    // 💬 In case if is odd
    outlier = numbers.find(number => number % 2 === 0);
  }

  return outlier;
}

const result = findOutlier([2, 6, 8, 10, 3]); // 🥚
console.log(result); // 🐣 3
