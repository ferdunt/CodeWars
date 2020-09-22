function add(num1, num2) {
    // 💬 Convert each integer into an array of integers
    // 💬 map(Number) is equal to map(element => Number(element)) 😉
    let array1 = num1.toString().split("").map(Number);
    let array2 = num2.toString().split("").map(Number);

    // 💬 Check if both arrays are the same size
    while (array1.length !== array2.length) {
        // 💬 Push one '0' at the beginning of the array to match both arrays
        if (array1.length < array2.length) {
            array1.unshift(0);
        } else {
            array2.unshift(0);
        }
    }

    // 💬 'sum' will add the values as Integer
    let sum = 0;

    // 💬 'total' will concatenate the sum as String
    let total = "";

    // 💬 'size' is a general size of both arrays
    const size = array1.length;

    // 💬 Add the numbers based in its position and concatenate
    for (let i = 0; i < size; i++) {
        sum = array1[i] + array2[i];
        total += sum.toString();
    }

    // 💬 Convert the 'string' into a 'Number' and return
    return Number(total);
}

const result = add(2, 11); // 🥚
console.log(result); // 🐣 13
