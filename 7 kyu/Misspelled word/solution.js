const misspelled = (word1, word2) => {
    // 🚧 Return 'true' if is misspelled only by 1 character
    // 🚧 Return 'false' if is misspelled by >= 2 characters

    let counter = 0;
    let isMisspelled = false;

    // 💬 Case 1 - Check if both words differ from >= 2 characters
    if (Math.abs(word1.length - word2.length) >= 2) return false;

    // 💬 Case 2 - Check if both words differ from just 1 character
    if (Math.abs(word1.length - word2.length) === 1) {
        if (word1.includes(word2) || word2.includes(word1)) return true;
    }

    // 💬 Case 3 - Check each letter from both words
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            counter++;
        }
    }

    // 💬 Check if counter only has 1 character of difference
    isMisspelled = counter === 1 ? true : false;

    return isMisspelled;
};

const result = misspelled("versed", "aversed"); // 🥚
console.log(result); // 🐣 true
