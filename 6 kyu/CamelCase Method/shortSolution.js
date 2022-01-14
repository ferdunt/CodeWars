String.prototype.camelCase = function () {
  return this.split(' ').reduce(
    (acc, cur) => (acc += cur.substring(0, 1).toUpperCase() + cur.substring(1)),
    ''
  );
};

const result = 'hello case'.camelCase();
console.log(result); // 🐣 "HelloCase"
