function scramble(word1, word2) {
  let words = {};

  // 💬 Create an object to store the word1 an quantity
  for (let i = 0; i < word1.length; i++) {
    const letter = word1[i];
    if (words[letter]) {
      words[letter]++;
    } else {
      words[letter] = 1;
    }
  }

  // 💬 Check word2 with the 'words' object
  for (let j = 0; j < word2.length; j++) {
    const letter = word2[j];
    // 💬 If the current letter exist decrease from 'words' object
    if (words[letter]) {
      words[letter]--;
    } else {
      return false;
    }
  }

  // 💬 If all the letters were right return true
  return true;
}

const result = scramble('scriptjavx', 'javascript'); // 🥚
console.log(result); // 🐣 false
