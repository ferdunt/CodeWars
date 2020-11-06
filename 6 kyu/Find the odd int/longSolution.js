function findOdd(numbers) {
  // 💬 Create an new array of unique values
  const uniqueNumbers = [...new Set(numbers)];
  let numberTimes = [];

  // 💬 Loop 'uniqueNumbers' to get an new object
  for (let i = 0; i < uniqueNumbers.length; i++) {
    let size = numbers.filter(number => number === uniqueNumbers[i]);
    numberTimes.push({
      number: uniqueNumbers[i],
      times: size.length,
    });
  }

  // 💬 Search inside our object to find the odd number
  for (const result of numberTimes) {
    if (result.times % 2 !== 0) {
      return result.number;
    }
  }
}

const result = findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); // 🥚
console.log(result); // 🐣 10
