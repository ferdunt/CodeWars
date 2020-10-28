function accum(myString) {
    let finalString = "";

    // 💬 Convert to lowerCase
    myString = myString.toLowerCase();

    // 💬 Loop in each letter and repeat it based in its index
    finalString = myString
        .split("")
        .map((letter, index) => letter.toUpperCase() + letter.repeat(index))
        .join("-");

    return finalString;
}

const result = accum("abcd"); // 🥚
console.log(result); // 🐣 "A-Bb-Ccc-Dddd"
