function stringTransformer(text) {
  const reverseText = text
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(letter =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join('');

  return reverseText;
}

const result = stringTransformer('Example string');
console.log(result); // 🐣 "STRING eXAMPLE"
