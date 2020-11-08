function scramble(word1, word2) {
  // 💬 Create an object to store the word1 an quantity
  let words = word1.split('').reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

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
