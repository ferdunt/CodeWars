const solve = (s, k) => {
  const text = s.split('');

  // 💬 Check that 'k' is bigger that the s.length
  if (k > text.length) return '';

  // 💬 Get the letters to delete and replace with ''
  const reducedText = text
    .sort()
    .slice(0, k)
    .reduce((acc, cur) => acc.replace(cur, ''), s);

  return reducedText;
};

const result = solve('abracadabra', 1);
console.log(result); // 🐣 "bracadabra"
