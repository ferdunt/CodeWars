function sumPairs(numbers, total) {
    // 💬 Create an empty objet
    const oldNumbers = {};

    // 💬 Loop all 'numbers'
    for (let i = 0; i < numbers.length; i++) {
        // 💬 Get the first number as reference
        let firstNumber = numbers[i];

        // 💬 Get the second number to match the 'total'
        let desiredNumber = total - firstNumber;

        // 💬 Check if the second number exist in 'oldNumbers' object
        if (oldNumbers[desiredNumber]) {
            // 💬 True - return the first result
            return [desiredNumber, firstNumber];
        } else {
            // 💬 False - Add the 'firstNumber' to 'oldNumbers'
            oldNumbers[firstNumber] = true;
        }
    }
}

const result = sumPairs([10, 5, 2, 3, 7, 5], 10); // 🥚
console.log(result); // 🐣 [3, 7]
