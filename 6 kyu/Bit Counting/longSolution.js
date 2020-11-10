var countBits = function (number) {
  // 💬 Convert the number to a byte
  const byte = number.toString(2);
  // 💬 Create a counter to store '1'
  let ones = 0;

  // 💬 Loop inside the byte representation
  for (let i = 0; i < byte.length; i++) {
    // 💬 Check if every bit is 1
    if (byte[i] === '1') ones++;
  }

  return ones;
};

const result = countBits(1234); // 🥚
console.log(result); // 🐣 5
