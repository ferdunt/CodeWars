const isPangram = text => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // 💬 Based on alphabet check every letter from text
  return alphabet
    .split('')
    .every(letter => text.toLowerCase().includes(letter));
};

const result = isPangram('The quick brown fox jumps over the lazy dog.');
console.log(result); // 🐣 true
