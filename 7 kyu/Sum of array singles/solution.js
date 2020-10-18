function repeats(arr) {
    // 💬 Create a new array to store unique values
    const uniqueValues = [...new Set(arr)];
    const onceValue = [];

    // 💬 Loop 'uniqueValues' times
    for (let i = 0; i < uniqueValues.length; i++) {
        // 💬 Check how many times a number repeats
        let counter = arr.filter(n => n === uniqueValues[i]).length;

        // 💬 If counter is less that 2 we push the value into another array
        if (counter < 2) {
            onceValue.push(uniqueValues[i]);
        }
    }

    // 💬 Loop over 'onceValue' to sum all the unique values
    const sum = onceValue.reduce((acc, cur) => (acc += cur));

    return sum;
}
const result = repeats([4, 5, 7, 5, 4, 8]); // 🥚
console.log(result); // 🐣 15
