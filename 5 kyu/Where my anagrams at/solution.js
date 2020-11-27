function anagrams(word, words) {
  let validAnagrams = [];
  // 💬 Convert the first word to an object
  const keyWord = getObject(word);

  // 💬 Loop in 'words' array
  for (let i = 0; i < words.length; i++) {
    // 💬 Covert each word in 'words' array to an object
    const currentWord = getObject(words[i]);
    let valid = true;

    // 💬 Compare items from 'keyWord' and 'currentWord'
    for (const item in keyWord) {
      // 💬 If any item is not equal change 'valid' to false
      if (keyWord[item] !== currentWord[item]) {
        valid = false;
      }
    }

    // 💬 Check if it's valid then push the current word
    if (valid) {
      validAnagrams.push(words[i]);
    }
  }
  return validAnagrams;
}

// 💬 This function convert a string to an object
function getObject(word) {
  const objWord = word.split('').reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
  return objWord;
}

const result = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
console.log(result); // 🐣 ['aabb', 'bbaa']
