const addLetters = (...letters) => {
  // 💬 Get the sum of all letters
  let sum = letters.reduce((acc, cur) => (acc += cur.charCodeAt(0) - 96), 0);

  // 💬 Special Validations
  if (sum === 0) return 'z';

  while (sum >= 27) {
    sum = sum - 26;
  }

  // 💬 Convert from ascii to code value
  const charCode = String.fromCharCode(sum + 96);

  return charCode;
};

const result = addLetters('a', 'b', 'c');
console.log(result); // 🐣 "f"
