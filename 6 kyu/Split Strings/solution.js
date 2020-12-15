function solution(text) {
  let pairString = [];

  // 💬 Convert the text into an array
  text = text.split('');

  // 💬 Loop until there is no letters in 'text'
  while (text.length > 0) {
    // 💬 Get 2 letters, join them and check that there are 2 letters
    let pair = text.splice(0, 2).join('').padEnd(2, '_');

    // 💬 Push the new pair
    pairString.push(pair);
  }

  return pairString;
}

const result = solution('abc');
console.log(result); // 🐣 ["ab", "c_"]
