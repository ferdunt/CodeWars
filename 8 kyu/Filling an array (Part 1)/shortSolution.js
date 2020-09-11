/** SHORT SOLUTION */
// 💬 First we check if 'n' is a number 
// 💬 Second create a new Array and get the keys for each index
const arrayShort = n => n ? [...Array(n).keys()] : [];

let shortResult = arrayShort(5); // 🥚
console.log(shortResult); // 🐣 [0, 1, 2, 3, 4]
