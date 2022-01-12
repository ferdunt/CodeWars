const isPangram = text => {
  // 💬 Clean the text from special characters and numbers
  const cleanText = text
    .replace(/\W|\d/g, '')
    .split('')
    .map(i => i.toLowerCase())
    .sort();

  // 💬 Get unique values from a to z
  const letters = [...new Set(cleanText)].length;

  // 💬 Check if letters is equal to alphabet
  if (letters === 26) {
    return true;
  } else {
    return false;
  }
};

const result = isPangram('The quick brown fox jumps over the lazy dog.');
console.log(result); // 🐣 true
