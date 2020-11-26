function cleanString(text) {
  // 💬 Create my own regex
  const myRegex = /([a-zA-Z0-9@*/-/(]#)/g;

  // 💬 Replace '.#'
  while (myRegex.test(text)) {
    text = text.replace(myRegex, '');
  }

  // 💬 Replace '#'
  for (const item of text) {
    text = text.replace('#', '');
  }
  return text;
}

const result = cleanString('abc#d##c');
console.log(result); // 🐣 "ac"
