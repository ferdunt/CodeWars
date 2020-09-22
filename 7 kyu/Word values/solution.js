function wordValue(words) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let values = [];

    // 💬 Loop the primary array 'words'
    for (let i = 0; i < words.length; i++) {
        // 💬 Delete empty spaces and split into a new array
        let secondaryArray = words[i].replace(" ", "").split("");
        let sum = 0;

        // 💬 Loop the secondary array to get its number values
        secondaryArray.forEach((letter, index) => {
            sum += alphabet.indexOf(secondaryArray[index]) + 1;
        });

        // 💬 Push the total 'sum' into the 'values' array
        values.push(sum);
    }

    // 💬 Loop the final 'values' and multiply each one based on its index + 1
    values.forEach((number, index) => {
        values[index] = number * (index + 1);
    });

    return values; // 🐣 values => [6, 24]
}

const result = wordValue(["abc", "abc abc"]);
console.log(result); // 🐣 [6, 24]
