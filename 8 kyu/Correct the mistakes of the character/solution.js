function correct(string) {
  // 💬 Convert to an array and map to match and change a number into a letter
  const word = string.split('').map(letter => {
    if (letter === '0') return 'O';
    if (letter === '5') return 'S';
    if (letter === '1') return 'I';
    return letter;
  });

  return word.join('');
}

const result = correct('L0ND0N');
console.log(result); // 🐣 "LONDON"
