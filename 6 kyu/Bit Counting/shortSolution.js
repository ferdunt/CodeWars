var countBits = function (number) {
  // 💬 Convert to byte, split in '0', join  and take the final length
  const ones = number.toString(2).split(0).join('').length;

  return ones;
};

const result = countBits(1234); // 🥚
console.log(result); // 🐣 5
