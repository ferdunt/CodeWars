function pairs(numbers) {
    let consecutive = 0;

    // 💬 Loop only on even index from 'numbers' array [0,2,4.....]
    for (let i = 0; i < numbers.length; i += 2) {
        // 💬 Take the first number from a pair number 'a' [a,b]
        let firstElement = numbers[i];

        // 💬 Check if (a+1)-b === 1 OR b-(a+1) === 1
        if (
            numbers[i + 1] - firstElement === 1 ||
            firstElement - numbers[i + 1] === 1
        ) {
            consecutive++;
        }
    }
    return consecutive;
}

const result = pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]); // 🥚
console.log(result); // 🐣 3
