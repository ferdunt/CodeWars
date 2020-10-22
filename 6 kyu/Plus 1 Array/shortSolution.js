function upArray(numbers) {
    // 💬 Validate 'numbers' array
    if (!numbers || numbers.length === 0) {
        return null;
    }

    // 💬 Validate digits from 'numbers' array
    for (let i = 0; i < numbers.length; i++) {
        if (
            numbers[i] < 0 ||
            typeof numbers[i] !== "number" ||
            numbers[i] > 9
        ) {
            return null;
        }
    }

    // 💬 Sum +1 starting to the last digit
    for (let j = numbers.length - 1; j >= 0; j--) {
        // 💬 If the number is different that 9 we make +1
        if (numbers[j] !== 9) {
            numbers[j] += 1;
            break;
        } else {
            // 💬 If the number is 9 we replace with 0
            numbers[j] = 0;
        }

        // 💬 If we reach the last digit attact '1' at the beginning
        if (j === 0) {
            numbers[i].unshift(1);
        }
    }

    return numbers;
}

const result = upArray([2, 3, 9]); // 🥚
console.log(result); // 🐣 [2,4,0]
