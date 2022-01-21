const stray = numbers => {
  // 💬 Create an object from a list of numbers
  const objectNumbers = numbers.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  // 💬 Loop the object to find the unique value
  for (const key in objectNumbers) {
    const element = objectNumbers[key];
    if (element === 1) {
      return +key;
    }
  }
};

const result = stray([1, 1, 1, 2]);
console.log(result); // 🐣 2
