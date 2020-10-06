function solve(stones) {
    let counter = 0;

    // 💬 Loop over our string
    for (let i = 0; i < stones.length; i++) {
        // 💬 Get the previous and the next value
        let prev = stones[i];
        let next = stones[i + 1];

        // 💬 Evaluate the 'next' with the 'prev' value
        if (next === prev) {
            counter++;
        }
    }

    return counter;
}

const result = solve("RRGGBB"); // 🥚
console.log(result); // 🐣
