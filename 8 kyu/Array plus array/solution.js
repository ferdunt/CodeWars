function arrayPlusArray(arr1, arr2) {
    // 💬 Concatenate our 2 arrays and reduce it to get the sum
    return [...arr1, ...arr2].reduce((acc, cur) => (acc += cur));
}

const result = arrayPlusArray([1, 2, 3], [4, 5, 6]); // 🥚
console.log(result); // 🐣 21
