function isDivideBy(number, a, b) {
    // 💬 We convert our 'a' and 'b' into an array
    let numbers = [a, b];

    // 💬 Check if every digit in our 'numbers' array is divisible
    let isDivisible = numbers.every((num) => number % num === 0);

    return isDivisible;
}

const result = isDivideBy(45, 1, 6); // 🥚
console.log(result); // 🐣 false
