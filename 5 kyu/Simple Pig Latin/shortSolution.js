function pigIt(phrase) {
  // 💬 Slipt into an array and loop it
  const newPhrase = phrase
    .split(' ')
    .map(word => {
      // 💬 Check if is a character otherwise follow the rules
      if (!word.match(/[a-zA-Z]/g)) return word;
      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');

  return newPhrase;
}

const result = pigIt('O tempora o mores !'); // 🥚
console.log(result); // 🐣 'Oay emporatay oay oresmay !'
