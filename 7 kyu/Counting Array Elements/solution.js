const count = array => {
  return array.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
};

const result = count(['james', 'james', 'john']);
console.log(result); // 🐣 { 'james': 2, 'john': 1}
