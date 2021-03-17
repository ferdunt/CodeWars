const lovefunc = (flower1, flower2) => {
  const r1 = flower1 % 2;
  const r2 = flower2 % 2;

  return r1 !== r2;
};

const result = lovefunc(1, 4);
console.log(result); // 🐣 true
