function dup(words) {
  const cleanArray = [];
  // 💬 Loop all words
  for (let i = 0; i < words.length; i++) {
    const singleWord = words[i];
    // 💬 Create a new variable for the new word
    let newWord = '';
    // 💬 Loop each letter in a word
    for (let j = 0; j < singleWord.length; j++) {
      const firstLetter = singleWord[j];
      const secondLetter = singleWord[j + 1];

      // 💬 Check if the last word is not repeating the next one
      if (newWord[newWord.length - 1] !== firstLetter) {
        newWord += firstLetter;
        // 💬 If so jump to the next word
        if (firstLetter === secondLetter) {
          j++;
        }
      }
    }
    // 💬 Push the new word
    cleanArray.push(newWord);
  }
  return cleanArray;
}

const result = dup(['abracadabra', 'allottee', 'assessee']);
console.log(result); // 🐣 ["abracadabra","alote","asese"]
