const oddOrEven = array => {
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
};

const result = oddOrEven([0, 1, 5]);
console.log(result); // 🐣 "even"
