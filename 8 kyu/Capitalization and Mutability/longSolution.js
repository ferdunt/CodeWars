function capitalizeWord(word) {
    // 💬 Convert our string 'word' to an array
    let wordArray = word.split("");

    // 💬 Delete the 1st character and replace with a new Upper character
    wordArray.splice(0, 1, wordArray[0].toUpperCase());

    // 💬 Concatenate our array into a string
    wordArray = wordArray.join("");

    return wordArray;
}

const result = capitalizeWord("fernando"); // 🥚
console.log(result); // 🐣 Fernando
