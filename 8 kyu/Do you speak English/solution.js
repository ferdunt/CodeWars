function correctEnglish(sentence) {
    // 💬 Create a regex to match the word english case-insensitive
    const myRegex = /english/i;

    // 💬 Test our regex with the 'sentence' argument
    let isEnglish = myRegex.test(sentence);
    return isEnglish;
}

const result = correctEnglish("abcEnglishdef"); // 🥚
console.log(result); // 🐣 true
