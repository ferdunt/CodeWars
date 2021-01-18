function solve(arr) {
  return arr.find(number => !arr.includes(-number));
}

const result = solve([1, -1, 2, -2, 3]);
console.log(result); // 🐣 3
