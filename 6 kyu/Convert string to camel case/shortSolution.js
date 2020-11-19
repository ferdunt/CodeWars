function toCamelCase(str) {
  // 💬 Create a regex to match '-' or '_' follow by a letter
  const myRegex = /(-|_)([a-z]{1})/g;

  // 💬 Replace the regex match with the same but in UpperCase
  const upperLetter = str.replace(myRegex, letter => {
    return letter[1].toUpperCase();
  });

  return upperLetter;
}

const result = toCamelCase('the-stealth-warrior');
console.log(result); // 🐣 "theStealthWarrior"
