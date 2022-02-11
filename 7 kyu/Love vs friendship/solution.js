const wordsToMarks = string => {
  let total = 0;

  // 💬 Loop each letter and get its value based on unicode
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    total += letter.charCodeAt(0) - 96;
  }

  return total;
};

const result = wordsToMarks('friends');
console.log(result); // 🐣 75
