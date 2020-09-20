function checkExam(array1, array2) {
    // 💬 Declare and initialize a variable to store the final note
    let total = 0;

    // 💬 Loop based in the size of any array
    for (let i = 0; i < array1.length; i++) {
        // 💬 Check if both arrays based in index have a value
        if (array1[i] && array2[i]) {
            // 💬 Check if both arrays are equal => +4 else -1
            if (array1[i] === array2[i]) {
                total += 4;
            } else if (array1[i] !== array2[i]) {
                total -= 1;
            }
        }
    }

    // 💬 Check if total is not negative and return the 'total'
    return total >= 1 ? total : 0;

}

const result = checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) // 🥚
console.log(result); // 🐣 7