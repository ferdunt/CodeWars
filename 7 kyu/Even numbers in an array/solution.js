function evenNumbers(array, number) {
  return array.filter(num => num % 2 === 0).slice(-number);
}

const result = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log(result); // 🐣 [4, 6, 8]
