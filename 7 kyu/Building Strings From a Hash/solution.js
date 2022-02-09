const solution = pairs => {
  let objectString = [];

  for (const key in pairs) {
    objectString.push(`${key} = ${pairs[key]}`);
  }

  return objectString.join(',');
};

const result = solution({ a: 1, b: '2' });
console.log(result); // 🐣 "a = 1,b = 2"
