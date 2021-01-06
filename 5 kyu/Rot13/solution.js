function rot13(message) {
  let ciphered = '';

  // 💬 Loop at each character in message
  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    let ascii = 0;
    // 💬 Check that 'letter' is a letter
    if (!isAlpha(letter)) {
      ciphered += letter;
      continue;
    }

    // 💬 Check the current letter is is lowercase or uppercase
    if (letter.toUpperCase() === letter) {
      ascii = 65;
    } else {
      ascii = 97;
    }

    // 💬 Calculate based on formula Caesar cipher
    let pi = letter.charCodeAt(0) - ascii;
    let ci = (pi + 13) % 26;
    let cipher = ci + ascii;

    // 💬 Convert from ascii to a string
    ciphered += String.fromCharCode(cipher);
  }
  return ciphered;
}

// 💬 Check if it's a letter
function isAlpha(letter) {
  const asciiCode = letter.charCodeAt(0);
  // 💬 A-Z(65-90) and a-z(97-122)
  if (
    (asciiCode >= 65 && asciiCode <= 90) ||
    (asciiCode >= 97 && asciiCode <= 122)
  ) {
    return true;
  } else {
    return false;
  }
}

const result = rot13('test');
console.log(result); // 🐣 "grfg"
