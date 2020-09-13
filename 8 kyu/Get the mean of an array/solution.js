function getAverage(notes) {
    // 💬 Loop in our 'notes' array and sum every integer, finally divide by the length of our 'notes' array
    let average = notes.reduce((acc, cur) => acc + cur, 0) / notes.length;

    // 💬 Round to floor and return
    return Math.floor(average);
}

const result = getAverage([2, 2, 2, 2]) // 🥚
console.log(result); // 🐣 2