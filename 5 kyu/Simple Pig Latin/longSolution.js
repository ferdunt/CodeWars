function pigIt(phrase) {
  let newPhrase = '';
  const myRegex = /[a-zA-Z]/g;

  // 💬 Split our phrase into an array
  phrase = phrase.split(' ');

  for (let i = 0; i < phrase.length; i++) {
    let word = phrase[i];
    let firstLetter = word[0];
    let endWord = word.slice(1);

    // 💬 Check if the current word is a letter
    if (word.match(myRegex)) {
      // 💬 Construct our new phrase based on the rules
      newPhrase += endWord + firstLetter + 'ay ';
    } else {
      // 💬 If it isn't a letter return the current character
      newPhrase += word;
    }
  }

  return newPhrase.trim();
}

const result = pigIt('O tempora o mores !'); // 🥚
console.log(result); // 🐣 'Oay emporatay oay oresmay !'
