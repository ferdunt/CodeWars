function stringTransformer(text) {
  const reverseText = [];
  text = text.split(' ');

  // 💬 Loop each word
  for (let i = 0; i < text.length; i++) {
    const word = text[i];
    let newWord = '';
    // 💬 Loop each letter
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      // 💬 Check if it's uppercase or lowercase
      letter =
        letter === letter.toUpperCase()
          ? letter.toLowerCase()
          : letter.toUpperCase();
      // 💬 Create the new word
      newWord += letter;
    }
    // 💬 Push the new word
    reverseText.unshift(newWord);
  }
  return reverseText.join(' ');
}

const result = stringTransformer('Example string');
console.log(result); // 🐣 "STRING eXAMPLE"
