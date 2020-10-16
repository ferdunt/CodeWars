function duplicateCount(text) {
    // 💬 Convert the 'text' into lowerCase() and split() it
    const letters = text.toLowerCase().split("");

    // 💬 Create an array of unique values
    const uniqueValues = [...new Set(letters)];

    // 💬 Create an array if each value has > 1 characters
    let arrayPlusOne = uniqueValues.reduce((acc, cur) => {
        acc.push(letters.filter(x => x === cur).length > 1);
        return acc;
    }, []);

    // 💬 Filter all the > 1 and return as a number
    let isPlusOne = arrayPlusOne.filter(value => value === true).length;

    return isPlusOne;
}

const result = duplicateCount("aabbcde"); // 🥚
console.log(result); // 🐣 2
