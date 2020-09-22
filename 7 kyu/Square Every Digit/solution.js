function squareDigits(num) {
    // 💬 Take the 'num' and convert to an array of integers
    const numbers = num
        .toString()
        .split("")
        .map((number) => Number(number)); // 🐣 numbers => [9,1,1,9]
    let result = [];

    // 💬 Loop through 'numbers' array and push to result
    numbers.forEach((element) => {
        result.push(element * element);
    });

    // 💬 Join our array and convert to integer
    result = Number(result.join(""));
    return result; // 🐣 result => 811181
}

const result = squareDigits(9119);
