const vowelIndices = word => {
  const indices = [];
  word
    .toLowerCase()
    .split('')
    .filter((item, index) => {
      if (item.match(/[aeiou]/g)) {
        indices.push(index + 1);
      }
    });
  return indices;
};

const result = vowelIndices('Super');
console.log(result); // 🐣 [2, 4]
