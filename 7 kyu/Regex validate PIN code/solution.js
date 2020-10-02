function validatePIN(pin) {
    // 💬 Create a regex there are 3 options

    // 💬 Option 1
    // const regex = /(^[0-9]{4}$)|(^[0-9]{6}$)/;

    // 💬 Option 2
    // const regex = /(^\d{4}$)|(^\d{6}$)/;

    // 💬 Option 3
    const regex = /(^(\d{4}|\d{6})$)/;

    // 💬 Test our regex with the 'pin' parameter
    return regex.test(pin);
}

const result = validatePIN("12345"); // 🥚
console.log(result); // 🐣 false
