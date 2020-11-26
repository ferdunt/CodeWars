function cleanString(text) {
  let newText = [];

  // 💬 Loop all the text
  for (const letter of text) {
    // 💬 Check each letter if has '#'
    if (letter === '#') {
      newText.pop();
    } else {
      newText.push(letter);
    }
  }

  return newText.join('');
}

const result = cleanString('abc#d##c');
console.log(result); // 🐣 "ac"
