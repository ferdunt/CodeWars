function disemvowel(str) {
  // 💬 Create a regex to find all vowels
  const myRegex = /[aeiou]/gi;

  // 💬 Replace vowels with empty space
  str = str.replace(myRegex, '');

  return str;
}

const result = disemvowel('This website is for losers LOL!');
console.log(result); // 🐣 "Ths wbst s fr lsrs LL!"
