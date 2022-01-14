String.prototype.camelCase = function () {
  // 💬 Remove spaces and convert to an array
  const text = this.trim().split(' ');
  let result = '';

  // 💬 Loop for each word
  for (let i = 0; i < text.length; i++) {
    const word = text[i];
    // 💬 Check if it isn't empty and convert to Uppercase
    if (word) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  }

  return result;
};

const result = 'hello case'.camelCase();
console.log(result); // 🐣 "HelloCase"
