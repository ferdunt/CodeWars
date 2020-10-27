function reverse(number) {
    let lastDigit = 0;
    let newNumber = 0;

    // 💬 Loop the number until it is !== 0
    while (number !== 0) {
        // 💬 Get the last number with %
        lastDigit = number % 10;

        // 💬 Update the number with /
        number = parseInt(number / 10);

        // 💬 Concatenate the 'lastDigit' to 'newNumber'
        newNumber = newNumber * 10 + lastDigit;
    }

    return newNumber;
}

const result = reverse(1234); // 🥚
console.log(result); // 🐣 4321
