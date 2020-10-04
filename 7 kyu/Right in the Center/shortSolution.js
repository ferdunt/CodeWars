function isInMiddle(text) {
    // 💬 Loop with a while if the text is >=5
    while (text.length >= 5) {
        // 💬 Delete the first and last character
        text = text.slice(1, -1);
    }

    // 💬 Return true if the 'text' has 'abc' otherwise false
    return text.includes("abc");
}

const result = isInMiddle("AabcBB"); // 🥚
console.log(result); // 🐣 true
