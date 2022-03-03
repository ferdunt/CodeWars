const removeDuplicateWords = s => {
  return [...new Set(s.split(' '))].join(' ');
};

const result = removeDuplicateWords(
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
);
console.log(result); // 🐣 "alpha beta gamma delta"
