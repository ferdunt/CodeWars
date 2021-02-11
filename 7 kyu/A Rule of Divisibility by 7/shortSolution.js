function seven(m) {
  let counter = 0;

  // 💬 Loop until there are 2 digits
  while (m.toString().length > 2) {
    // 💬 Calculated based on the formula
    const x = Math.floor(m / 10);
    const y = m % 10;
    m = x - y * 2;
    counter++;
  }

  // 💬 Return the new value of "m" and "counter"
  return [m, counter];
}

const result = seven(1603);
console.log(result); // 🐣 [7, 2]
