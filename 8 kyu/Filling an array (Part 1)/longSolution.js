/** LONG SOLUTION */

const arrayLong = (n) => {
    // 💬 Create an empty array
    let myArray = [];

    // 💬 In each 'n' iteration we push the index into 'myArray'
    for (let i = 0; i < n; i++) {
        myArray.push(i);
    }
    return myArray;
};

let longResult = arrayLong(5); // 🥚
console.log(longResult); // 🐣 [0, 1, 2, 3, 4]
