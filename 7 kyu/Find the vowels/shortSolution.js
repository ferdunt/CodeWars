const vowelIndices = word => {
  const indices = word
    .split('')
    .map((letter, i) => (/[aeiouy]/i.test(letter) ? i + 1 : ''))
    .filter(Boolean);
  console.log(indices);
};

const result = vowelIndices('Super');
console.log(result); // 🐣 [2, 4]
