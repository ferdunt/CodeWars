const capitalize = text => {
  const result = [];
  // 💬 Call the function and alternate 1 and 0
  result.push(convertUpper(0, text));
  result.push(convertUpper(1, text));
  return result;
};

// 💬 Create a reusable function to convert letters to UpperCase based on position
const convertUpper = (position, text) => {
  return text
    .split('')
    .map((letter, i) => (i % 2 === position ? letter.toUpperCase() : letter))
    .join('');
};

const result = capitalize('abcdef');
console.log(result); // 🐣 ["AbCdEf", "aBcDeF"]
