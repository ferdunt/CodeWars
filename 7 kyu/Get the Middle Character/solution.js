function getMiddle(text) {
  // 💬 Get the middle of the 'text'
  const middle = Math.ceil(text.length / 2) - 1;

  // 💬 Check if the text is even
  const isEven = text.length % 2 === 0;

  // 💬 Send result based on if 'isEven'
  if (isEven) {
    return text[middle] + text[middle + 1];
  } else {
    return text[middle];
  }
}

const result = getMiddle('test'); // 🥚
console.log(result); // 🐣 'es'
