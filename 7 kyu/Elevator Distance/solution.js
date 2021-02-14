function elevatorDistance(array) {
  let distance = 0;

  for (let i = 0; i < array.length - 1; i++) {
    // 💬 Get the first and the next value
    const currentNumber = array[i];
    const nextNumber = array[i + 1];

    // 💬 Calculate 2 numbers and get the absolute value
    distance += Math.abs(currentNumber - nextNumber);
  }

  return distance;
}

const result = elevatorDistance([5, 2, 8]);
console.log(result); // 🐣 9
