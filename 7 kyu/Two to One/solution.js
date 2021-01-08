function longest(s1, s2) {
  // 💬 Concat the 2 strings
  const s3 = s1 + s2;

  // 💬 Get unique letters
  const uniqueLetters = [...new Set(s3)].sort().join('');

  return uniqueLetters;
}

const result = longest('aretheyhere', 'yestheyarehere');
console.log(result); // 🐣 "aehrsty"
