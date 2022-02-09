const add = n => {
  return function (m) {
    return n + m;
  };
};

const result = add(1)(3);
console.log(result); // 🐣 4
