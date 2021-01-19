function solve(a, b) {
  let results = [];

  // 💬 Loop the second array
  for (let i = 0; i < b.length; i++) {
    // 💬 Filter each loop to get the length and push it
    results.push(a.filter(item => item === b[i]).length);
  }

  return results;
}

const result = solve(
  ['abc', 'abc', 'xyz', 'abcd', 'cde'],
  ['abc', 'cde', 'uap']
);
console.log(result); // 🐣 [2, 1, 0]
