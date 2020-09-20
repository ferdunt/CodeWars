function fakeBin(stringNumber) {

    // 💬 Convert 'stringNumber' into an array
    let numbers = stringNumber.split('');

    // 💬 Loop inside the 'numbers' array
    for (let i = 0; i < numbers.length; i++) {
        // 💬 Check if current number is greater than 5
        if (numbers[i] >= 5) {
            numbers[i] = 1;
        } else {
            numbers[i] = 0;
        }
    }

    // 💬 Join the 'numbers' array into a single string
    return numbers.join('');
}

const result = fakeBin('45385593107843568') // 🥚
console.log(result); // 🐣 '01011110001100111' 