function seven(m) {
  // 💬 Validate that "m" isn't null
  if (!m) return [0, 0];

  let isCalculating = true;
  let counter = 0;
  let result = [];

  // 💬 Loop until the calculation finish
  while (isCalculating) {
    counter++;

    // 💬 Get the values based on the formula
    const value = m.toString().split('').map(Number);
    const x = +value.slice(0, -1).join('');
    const y = +value.slice(-1).join('');
    const f = x - 2 * y;
    const size = x.toString().length;
    m = f;

    // 💬 Check if there are 2 digits and if it's multiple of 7
    if (f % 7 === 0 && size <= 2) {
      result.push(f, counter);
      isCalculating = false;
    }

    // 💬 Check if there are 2 digits and there is no result
    if (size === 2 && result.length === 0) {
      result.push(f, counter);
      isCalculating = false;
    }
  }
  return result;
}

const result = seven(1603);
console.log(result); // 🐣 [7, 2]
