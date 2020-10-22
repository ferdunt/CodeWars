function upArray(numbers) {
    let newValue = 0;
    let isValid = false;

    // 💬 Validate if the number is greater that 1
    if (numbers.length > 1) {
        // 💬 Get a size of numbers with 1 digit
        const size = numbers.filter(n => n.toString().length === 1);
        // 💬 Check if each number in the array has 1 digit
        if (size.length === numbers.length) {
            // 💬 Check for numbers smaller that 16 digits
            if (numbers.length <= 16) {
                // 💬 Convert the numbers array into a single number + 1
                newValue = parseInt(numbers.join("")) + 1;
                isValid = true;

                // 💬 Convert a integer into a integer array
                newValue = newValue.toString().split("").map(Number);
            } else {
                // 💬 Check for numbers bigger that 16 digits
                let part1 = [...numbers];
                let part2 = part1.splice(-1);
                isValid = true;

                let sum = parseInt(part2.join("")) + 1;
                sum = sum.toString().split("").map(Number);
                newValue = [...part1, ...sum];
            }
        }
    }

    // 💬 If 'isValid' return the new value
    return isValid ? newValue : null;
}

const result = upArray([2, 3, 9]); // 🥚
console.log(result); // 🐣 [2,4,0]
