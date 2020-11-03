String.prototype.toJadenCase = function () {
    // 💬 Convert our text to an array
    const words = this.split(" ");
    let newWords = [];

    // 💬 Loop each letter
    words.forEach(word => {
        // 💬 Take the first letter and convert to UpperCase
        const x1 = word.slice(0, 1).toUpperCase();

        // 💬 Take the rest of the word
        const x2 = word.slice(1);

        // 💬 Push them the a new array
        newWords.push(x1 + x2);
    });

    // 💬 Convert the array to string
    return newWords.join(" ");
};

const myString = "How can mirrors be real if our eyes aren't real";
const result = myString.toJadenCase();

// 🐣 "How Can Mirrors Be Real If Our Eyes Aren't Real"
console.log(result);
