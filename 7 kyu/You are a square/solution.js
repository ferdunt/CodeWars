const isSquare = function (n) {
  // 💬 Get the root value of n
  const rootValue = Math.sqrt(n);

  // 💬 Check if is divisible by 1
  if (rootValue % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

const result = isSquare(25);
console.log(result); // 🐣 true
