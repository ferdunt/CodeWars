function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = i;
    let leftSide = 0;
    let rightSide = 0;

    // 💬 Update values at Left
    for (let k = 0; k < i; k++) {
      leftSide += arr[k];
    }

    // 💬 Update values at Right
    for (let j = i + 1; j < arr.length; j++) {
      rightSide += arr[j];
    }

    // 💬 Check if Left and Right are the same
    if (leftSide === rightSide) {
      return index;
    }
  }

  return -1;
}

const result = findEvenIndex([1, 2, 3, 4, 3, 2, 1]); // 🥚
console.log(result); // 🐣 3
