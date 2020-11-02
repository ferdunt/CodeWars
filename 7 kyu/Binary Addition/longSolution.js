function addBinary(a, b) {
    // 💬 Sum a and b
    let sum = a + b;
    let binary = "";

    // 💬 Loop while sum > 0
    while (sum > 0) {
        // 💬 Get the remiander of 'sum'
        const remainder = sum % 2;
        // 💬 Construct our binary number
        binary = remainder + binary;
        // 💬 Update 'sum'
        sum = Math.floor(sum / 2);
    }

    return binary;
}

const result = addBinary(3, 4); // 🥚
console.log(result); // 🐣 '111'
