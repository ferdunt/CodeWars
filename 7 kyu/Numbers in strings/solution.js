function solve(text) {
    // 💬 Create a regex to match only letters from A to Z
    const regex = /[A-Z]/i;

    const numbers = text

        // 💬 Split the 'text' with limits in letters based in our 'regex'
        .split(regex)
        // 💬 Filter to eliminate empty spaces
        .filter(n => n)
        // 💬 Create a new array of integers
        .map(n => parseInt(n))
        // 💬 Sort our array from < to >
        .sort((a, b) => a - b);

    // 💬 Return the last item in our 'numbers' array
    return numbers[numbers.length - 1];
}

const result = solve("gh12cdy695m1"); // 695
console.log(result);
