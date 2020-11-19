function toCamelCase(str) {
  // 💬 Create a regex to match '-' or '_' follow by a letter
  const myRegex = /(-|_)([a-z]{1})/g;

  // 💬 Replace the regex match with the same but in UpperCase
  const upperLetter = str.replace(myRegex, value => {
    return value.toUpperCase();
  });

  // 💬 Take the string split and join
  return upperLetter.split(/[-|_]/).join('');
}

const result = toCamelCase('the-stealth-warrior');
console.log(result); // 🐣 "theStealthWarrior"
