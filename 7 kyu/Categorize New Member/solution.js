function openOrSenior(members) {
    // 💬 Create a new array with map()
    const categorize = members.map(([age, handicap]) => {
        // 💬 Check the rules
        if (age >= 55 && handicap > 7) {
            return "Senior";
        } else {
            return "Open";
        }
    });

    // 💬 Return the new array of strings
    return categorize;
}

const result = openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [54, 23],
]);

console.log(result); // 🐣 ['Open', 'Open', 'Open', 'Open']
