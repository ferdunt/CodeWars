function removeParentheses(word) {
    // 💬 Create a regex to match any ()
    const myRegex = /\(([^()]*)\)/g;

    // 💬 Loop until there is more () in the 'word'
    do {
        // 💬 Replace () with an empty space
        word = word.replace(myRegex, "");
    } while (myRegex.test(word));

    return word;
}

const result = removeParentheses("a(b(c))"); // 🥚
console.log(result); // 🐣 "a"
