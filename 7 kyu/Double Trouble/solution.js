function trouble(x, t) {
  for (let i = 0; i < x.length - 1; i++) {
    // 💬 Get the first and second number
    const a = x[i];
    const b = x[i + 1];

    // 💬 Check if the sum is equal that "t"
    if (a + b === t) {
      // 💬 Delete the second item from "x" array
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

const result = trouble([4, 1, 1, 1, 4], 2);
console.log(result); // 🐣 [4, 1, 4]
