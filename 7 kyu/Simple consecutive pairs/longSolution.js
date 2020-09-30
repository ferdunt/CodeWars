function pairs(numbers) {
    let myPairs = [];
    let newArray = [];
    let consecutive = 0;

    // 💬 Create an array of pairs
    for (let i = 0; i < numbers.length; i++) {
        // 💬 Loop in each pair and order from < to >
        newArray.push(numbers[i]);
        if (newArray.length === 2) {
            newArray.sort();
            myPairs.push(newArray);
            newArray = [];
        }
    }

    // 💬 Check if they are consecutive if so we increment by 1
    for (let i = 0; i < myPairs.length; i++) {
        if (
            myPairs[i][0] + 1 === myPairs[i][1] ||
            myPairs[i][0] - 1 === myPairs[i][1]
        ) {
            consecutive++;
        }
    }
    return consecutive;
}

const result = pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]); // 🥚
console.log(result); // 🐣 3
