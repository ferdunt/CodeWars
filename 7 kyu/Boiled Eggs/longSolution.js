const cookingTime = eggs => {
  let calculation = 0;

  while (eggs >= 1) {
    eggs -= 8;
    calculation += 5;
  }

  return calculation;
};

const result = cookingTime(10);
console.log(result); // 🐣 10
