const solve = (s, k) => {
  if (k > text.length) return '';

  // 💬 Get the letters to remove
  const letters = s
    .split('')
    .sort()
    .slice(0, k)
    .reduce((acc, cur) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {});

  // 💬 Loop the original text and match with 'letters' to replace values
  const reducedText = text.map(item => {
    if (letters[item] > 0) {
      letters[item]--;
      return '';
    } else {
      return item;
    }
  });

  return reducedText.join('');
};

const result = solve('abracadabra', 1);
console.log(result); // 🐣 "bracadabra"
