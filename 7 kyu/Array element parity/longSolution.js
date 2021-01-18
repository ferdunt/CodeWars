function solve(arr) {
  // 💬 Create 2 array from + and - values
  let positive = arr.filter(num => num >= 0);
  let negative = arr.filter(num => num < 0);

  // 💬 Loop positive values
  for (let i = 0; i < positive.length; i++) {
    const number = positive[i];
    // 💬 Check if theres is a negative value of number
    if (negative.includes(-number)) {
      // 💬 Update the array from + and - values
      positive.splice(i, 1);
      negative.splice(negative.indexOf(-number), 1);
      // 💬 Restart 'i'
      i = -1;
    }
  }

  // 💬 Joing 2 arrays and get the first value
  const [unique] = [...positive, ...negative];

  return unique;
}

const result = solve([1, -1, 2, -2, 3]);
console.log(result); // 🐣 3
