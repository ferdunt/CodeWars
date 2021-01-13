function narcissistic(value) {
  // 💬 Convert to array, calculate and sum
  const calc = value
    .toString()
    .split('')
    .map((n, i, arr) => n ** arr.length)
    .reduce((acc, cur) => acc + cur, 0);

  // 💬 Check if the original value is equal to 'calc'
  return calc === value ? true : false;
}

const result = narcissistic(153);
console.log(result); // 🐣 true
