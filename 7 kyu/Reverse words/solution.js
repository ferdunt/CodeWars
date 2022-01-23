const reverseWords = text => {
  // 💬 Convert text to an []
  text = text.split(' ');

  // 💬 Loop each word and reverse it
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].split('').reverse().join('');
  }

  // 💬 Convert the [] into string
  return text.join(' ');
};

const result = reverseWords('This is an example!');
console.log(result); // 🐣 "sihT si na !elpmaxe"
