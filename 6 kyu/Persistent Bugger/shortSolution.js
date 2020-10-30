function persistence(num) {
    let counter = 0;

    // 💬 Convert 'num' to String
    num = String(num);

    // 💬 Loop until 'num' length gets only 1 digit
    while (num.length >= 2) {
        counter++;

        num = num
            .split("") // 💬 Convert to array
            .map(Number) // 💬 Convert to Number
            .reduce((acc, cur) => acc * cur) // 💬 Multiply each digit
            .toString(); // 💬 Convert ot String
        console.log(num);
    }
}

const result = persistence(999); // 🥚
console.log(result); // 🐣 4
