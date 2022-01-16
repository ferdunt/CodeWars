function solve(text) {
  // 💬 Clean "text" from vowels
  text = text.split(/a|e|i|o|u/g).reduce((acc, cur) => {
    if (cur !== '') {
      acc.push(cur);
    }
    return acc;
  }, []);

  // 💬 Create an object for alphabet with  values
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((acc, cur, i) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = i + 1);
      return acc;
    }, {});

  const numbers = [];

  for (let i = 0; i < text.length; i++) {
    const value = text[i];

    // 💬 Check for single values
    if (alphabet[value]) {
      numbers.push(alphabet[value]);
    }

    // 💬 Check for multiple values
    if (value.length > 1) {
      let local = 0;
      for (let j = 0; j < value.length; j++) {
        const subValue = value[j];
        if (alphabet[subValue]) {
          local += alphabet[subValue];
        }
      }
      numbers.push(local);
    }
  }
  // 💬 Sort the array of numbers
  numbers.sort((a, b) => a - b);

  // 💬 Return the greatest value
  return numbers[numbers.length - 1];
}

const result = solve('zodiacs');
console.log(result); // 🐣 26
