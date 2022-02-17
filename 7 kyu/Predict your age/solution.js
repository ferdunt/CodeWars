const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
  // 💬 Create an array of ages
  const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
  // 💬 Multiply each age by itself and add it
  const formula1 = ages.reduce((acc, cur) => (acc += cur * cur), 0);
  // 💬 Get the square root and rounded to the floor
  const formula2 = Math.floor(Math.sqrt(formula1) / 2);
  return formula2;
};

const result = predictAge(65, 60, 75, 55, 60, 63, 64, 45);
console.log(result); // 🐣 86
