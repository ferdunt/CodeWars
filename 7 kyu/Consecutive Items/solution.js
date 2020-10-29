function consecutive(arr, a, b) {
    // 💬 Get the index reference of the 'a' value
    const first = arr.findIndex(number => number === a);

    // 💬 Check if the 'b' value is in front or behind the 'first'
    if (arr[first + 1] === b || arr[first - 1] === b) {
        return true;
    } else {
        return false;
    }
}

const result = consecutive([1, 3, 5, 7], 3, 7); // 🥚
console.log(result); // 🐣 false
