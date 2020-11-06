function digital_root(number) {
  // 💬 Declare our base-case
  if (number.toString().length <= 1) {
    return number;
  } else {
    // 💬 Calculate the new number to be send
    const sum = number
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + cur);

    // 💬 Call our function
    return digital_root(sum);
  }
}

const result = digital_root(456); // 🥚
console.log(result); // 🐣 6
