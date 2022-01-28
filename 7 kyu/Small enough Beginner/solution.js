const smallEnough = (numbers, limit) => {
  return numbers.every(num => num <= limit);
};

const result = smallEnough([66, 101], 200);
console.log(result); // 🐣 true
