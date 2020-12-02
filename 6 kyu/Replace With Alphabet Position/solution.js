function alphabetPosition(text) {
  // 💬 Convert to lower case
  text = text.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let traslated = '';

  // 💬 Loop the text
  for (let i = 0; i < text.length; i++) {
    const currentLetter = text[i];
    // 💬 Check every letter
    if (currentLetter.match(/[a-z]/)) {
      // 💬 Convert each letter to the position in 'alphabet'
      traslated += alphabet.indexOf(currentLetter) + 1 + ' ';
    }
  }

  return traslated.trim();
}

const result = alphabetPosition('ab');
console.log(result); // 🐣 "1 2"
