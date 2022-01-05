const cookingTime = eggs => {
  return Math.ceil(eggs / 8) * 5;
};

const result = cookingTime(10);
console.log(result); // 🐣 10
