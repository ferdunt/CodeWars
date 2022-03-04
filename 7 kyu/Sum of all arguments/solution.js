const sum = (...args) => {
  return args.reduce((acc, cur) => (acc += cur), 0);
};

const result = sum(5, 7, 9);
console.log(result); // 🐣 21
