function arrayDiff(numbersA, numbersB) {
  // 💬 Loop numbersB
  for (let i = 0; i < numbersB.length; i++) {
    // 💬 Loop numbersA
    for (let j = 0; j < numbersA.length; j++) {
      // 💬 If a number from B is present in A so...
      if (numbersB[i] === numbersA[j]) {
        // 💬 Delete the number in numbers A
        numbersA.splice(j, 1);
        // 💬 Step back in the array numbers A
        j--;
      }
    }
  }

  return numbersA;
}

const result = arrayDiff([1, 2], [1]); // 🥚
console.log(result); // 🐣 [2]
