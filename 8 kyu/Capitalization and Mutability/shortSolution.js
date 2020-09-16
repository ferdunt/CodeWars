function capitalizeWord(word) {
    // 💬 First we capitalize the 1st letter and concatenate with the rest of characters
    return word[0].toUpperCase() + word.slice(1);
}

const result = capitalizeWord('fernando'); // 🥚
console.log(result); // 🐣 Fernando