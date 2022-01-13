const wave = text => {
  const result = [];

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    // 💬 Get the orinial text and convert to an array
    let person = text.split('');

    // 💬 Check if the current letter is different of ' '
    if (letter !== ' ') {
      // 💬 Replace the current letter to UpperCase
      person.splice(i, 1, letter.toUpperCase());
      // 💬 Convert to string
      person = person.join('');
      // 💬 Push it to the final result
      result.push(person);
    }
  }

  return result;
};

const result = wave(' gap ');
console.log(result); // 🐣 [ ' Gap ', ' gAp ', ' gaP ' ]
