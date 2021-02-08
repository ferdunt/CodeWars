const gordon = a => {
  let finalPhrase = [];

  a.split(' ').forEach(phrase => {
    phrase = phrase.replace(/[a]/g, '@');
    phrase = phrase.replace(/[eiou]/g, '*');
    phrase = phrase.toUpperCase() + '!!!!';
    finalPhrase.push(phrase);
  });

  return finalPhrase.join(' ');
};

const result = gordon('What feck damn cake');
console.log(result); // 🐣 "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
