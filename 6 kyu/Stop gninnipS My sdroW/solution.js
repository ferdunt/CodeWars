function spinWords(phrase) {
  // 💬 Split the phrase
  phrase = phrase.split(' ');

  // 💬 Loop the phrase
  phrase.forEach((word, i) => {
    // 💬 Check if each word has >=5 letters
    if (word.length >= 5) {
      // 💬 Convert the word into array, reverse then join
      phrase[i] = word.split('').reverse().join('');
    }
  });

  // 💬 Join the array
  phrase = phrase.join(' ');

  return phrase;
}

const result = spinWords('Hey fellow warriors'); // 🥚
console.log(result); // 🐣 'Hey wollef sroirraw'
