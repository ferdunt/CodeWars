function order(phrase) {
  // 💬 Validate the phrase
  if (!phrase) return '';

  // 💬 Create an array of position numbers
  const numbers = phrase.match(/[0-9]/g).map(Number);

  // 💬 Convert the phrase into an array
  const words = phrase.split(' ');

  // 💬 Get the max value of 'numbers' array
  const maxValue = Math.max(...numbers);

  let finalPhrase = '';

  // 💬 Loop between 1 and maxValue
  for (let i = 1; i <= maxValue; i++) {
    // 💬 Check if the current number exist
    if (numbers.includes(i)) {
      // 💬 Get the index of the current number
      let index = numbers.indexOf(i);
      // 💬 Concatenate the word
      finalPhrase += words[index] + ' ';
    }
  }

  return finalPhrase.trim();
}

const result = order('is2 Thi1s T4est 3a');
console.log(result); // 🐣 'Thi1s is2 3a T4est'
