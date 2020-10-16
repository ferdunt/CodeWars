function validateWord(word) {
    // 💬 Convert the string into lowerCase() and split() it
    const myArray = word.toLowerCase().split("");

    // 💬 Create a new array with unique values
    const uniqueValues = [...new Set(myArray)];

    // 💬 Create an array for each character with its size
    const counterArray = uniqueValues.reduce((acc, cur) => {
        acc.push(myArray.filter(digit => digit === cur).length);
        return acc;
    }, []);

    // 💬 Evaluate if every character has the same size
    const isPair = counterArray.every(number => number === counterArray[0]);

    return isPair;
}

const result = validateWord("abcabc"); // 🥚
console.log(result); // 🐣 true
