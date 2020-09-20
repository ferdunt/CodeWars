function fakeBin(stringNumber) {
    // 💬 Split the array and map inside each item, finally join into a string
    return stringNumber.split('').map(n => n >= 5 ? 1 : 0).join('');
}

const result = fakeBin('45385593107843568') // 🥚
console.log(result); // 🐣 '01011110001100111' 