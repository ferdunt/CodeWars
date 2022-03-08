const hasUniqueChars = str => {
  return new Set(str).size === str.length;
};

const result = hasUniqueChars('++-');
console.log(result); // 🐣 false
