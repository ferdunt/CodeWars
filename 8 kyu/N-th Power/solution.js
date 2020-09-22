function index(array, n) {
    // 💬 Return -1 if 'n' value is >= that 'array.length'
    if (n >= array.length) return -1;

    // 💬 Calculate with Math.pow(a,b) => Math.pow(a ^ b)
    const value = Math.pow(array[n], n);

    return value;
}

let result = index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9); // 🥚
console.log(result); // 🐣 512
