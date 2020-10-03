function solve(numbers) {
    let array2D = [];

    // 💬 Create a new array of unique values
    let uniqueValues = new Set(numbers);

    // 💬 Loop inside the 'uniqueValues' array and create a 2D array
    uniqueValues.forEach(number => {
        let singleArray = [];
        // 💬 Store the quantity of each number and push to the 2D array
        let quantity = numbers.filter(n => n === number);
        singleArray.push(quantity.length, number);
        array2D.push(singleArray);
    });

    let finalArray = [];

    // 💬 Sort Rules
    // 1. < 0 => 'a' first
    // 2. 0   => nothing happens
    // 3. > 0 => 'b' first

    // 💬 First order by frequency then Second order from < to >
    array2D.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

    // 💬 Loop our 'array2D' and push the numbers in order
    array2D.forEach(array => {
        for (let i = 0; i < array[0]; i++) {
            finalArray.push(array[1]);
        }
    });

    return finalArray;
}

const result = solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]); // 🥚
console.log(result); // 🐣 [9,9,9,9,4,4,5,5,6,6]
