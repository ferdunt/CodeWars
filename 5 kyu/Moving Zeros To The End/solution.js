const moveZeros = numbers => {
  let zeroValues = 0;
  // 💬 Loop in 'numbers' array
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // 💬 Check if current number is 0
    if (currentNumber === 0) {
      // 💬 Increase zeroValues by 1
      zeroValues++;

      // 💬 Delete the 0 found
      numbers.splice(i, 1);

      // 💬 Step back because we removed a item
      i--;
    }
  }

  // 💬 Loop how many times we need to add 0
  for (let j = 0; j < zeroValues; j++) {
    // 💬 Push 0 to 'numbers' array
    numbers.push(0);
  }

  return numbers;
};

const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
console.log(result); // 🐣 [false,1,1,2,1,3,"a",0,0]
