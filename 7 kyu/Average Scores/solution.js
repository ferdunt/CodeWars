const average = scores => {
  // 💬 Without using (for, for/in, while, and do/while loops)
  return Math.round(
    scores.reduce((acc, cur) => (acc += cur), 0) / scores.length
  );
};

const result = average([49, 3, 5, 300, 7]);
console.log(result); // 🐣 73
