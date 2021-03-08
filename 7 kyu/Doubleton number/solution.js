function doubleton(num) {
  let arrayNumbers;

  // 💬 Loop until we find the next number
  do {
    num++;
    // 💬 Convert the actual number to an array
    arrayNumbers = num.toString().split('').map(Number);
  } while ([...new Set(arrayNumbers)].length !== 2);

  return num;
}

const result = doubleton(120);
console.log(result); // 🐣 121
