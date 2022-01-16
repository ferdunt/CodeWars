function solve(text) {
  const consonantRegex = /[aeiou]+/g;

  // 💬 Get just the consonants in an []
  const consonants = text.split(consonantRegex);

  // 💬 Get the values for each consonant
  const values = consonants.map(item =>
    [...item].reduce((acc, cur) => acc + cur.charCodeAt() - 96, 0)
  );

  // 💬 Return the max value
  return Math.max(...values);
}

const result = solve('zodiacs');
console.log(result); // 🐣 26
