const paintLetterboxes = function (start, end) {
  // 💬 Create a new object to store numbers from 0 to 9
  const numbersObject = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  let values = '';
  let frequency = [];

  // 💬 First grab the numbers from 'start' to 'end'
  for (let i = start; i <= end; i++) {
    const currentNumber = i;
    values += currentNumber;
  }

  // 💬 Loop each digit and increase in 'numbersObject'
  for (let j = 0; j < values.length; j++) {
    const currentValue = values[j];
    numbersObject[currentValue]
      ? numbersObject[currentValue]++
      : (numbersObject[currentValue] = 1);
  }

  // 💬 Loop the 'numbersObject' and push into a new array
  for (const key in numbersObject) {
    frequency.push(numbersObject[key]);
  }
  console.log(values);
  return frequency;
};

const result = paintLetterboxes(125, 132);
console.log(result); // 🐣 [1, 9, 6, 3, 0, 1, 1, 1, 1, 1]
