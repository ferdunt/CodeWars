const isTriangle = (a, b, c) => {
  // 💬 Need to check every pair is > than the 3rd side
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  } else {
    return false;
  }
};

const result = isTriangle(1, 2, 2);
console.log(result); // 🐣 true
