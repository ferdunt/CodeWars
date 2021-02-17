const findMissingLetter = array => {
  // 💬 Loop all the array
  for (let i = 0; i < array.length; i++) {
    // 💬 Get the first and second ascii code
    const letter = array[i].charCodeAt(0);
    const nextLetter = array[i + 1].charCodeAt(0);

    // 💬 Check the missing letter
    if (letter + 1 !== nextLetter) {
      return String.fromCharCode(letter + 1);
    }
  }
};

const result = findMissingLetter(['a', 'b', 'c', 'd', 'f']);
console.log(result); // 🐣 "e"
