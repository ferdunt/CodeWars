function persistence(num) {
    let counter = 0;
    let myArray = num.toString().split("").map(Number);

    // 💬 Loop until 'myArray' gets only 1 digit
    while (myArray.length >= 2) {
        // 💬 Update 'num' with reduce() to multiply each value of 'myArray'
        num = myArray.reduce((acc, cur) => {
            acc = acc * cur;
            return acc;
        }, 1);

        // 💬 Update 'myArray' with the new 'num'
        myArray = num.toString().split("").map(Number);

        // 💬 Increment the counter
        counter++;
    }

    return counter;
}

const result = persistence(999); // 🥚
console.log(result); // 🐣 4
