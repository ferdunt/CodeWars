const number = array => {
  return array.map((item, index) => `${index + 1}: ${item}`);
};

const result = number(['a', 'b', 'c']);
console.log(result); // 🐣 ["1: a", "2: b", "3: c"]
