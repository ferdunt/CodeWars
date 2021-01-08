function dirReduc(arr) {
  // 💬 Create an object with default values
  const directions = {
    NORTH: 1,
    SOUTH: -1,
    EAST: -2,
    WEST: 2,
  };

  // 💬 Lopp over 'arr'
  for (let i = 0; i < arr.length; i++) {
    // 💬 Get the 1st and 2nd value from the array
    const first = arr[i];
    const second = arr[i + 1] || '';

    // 💬 Make an addition with 'directions' object
    const evaluation = directions[first] + directions[second];

    // 💬 Check the evaluation
    if (evaluation === 0) {
      // 💬 Delete 2 items from position 'i'
      arr.splice(i, 2);
      // 💬 Restart i
      i = -1;
    }
  }

  return arr;
}

const result = dirReduc([
  'NORTH',
  'SOUTH',
  'SOUTH',
  'EAST',
  'WEST',
  'NORTH',
  'WEST',
]);
console.log(result); // 🐣 ["WEST"]
