const breakChocolate = (n, m) => {
  // 💬 Calculate the chocolate bar and substract 1
  const size = n * m;
  return size >= 1 ? size - 1 : 0;
};

const result = breakChocolate(3, 1);
console.log(result); // 🐣 2
