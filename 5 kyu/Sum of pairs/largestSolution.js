function sumPairs(numbers, total) {
    const solutions = [];

    // 💬 Get the index of possible solutions
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === total) {
                solutions.push({
                    solution: [numbers[i], numbers[j]],
                    position: j,
                });
            }
        }
    }

    // 💬 Validate if we have posible solutions
    if (solutions.length < 1) return undefined;

    // 💬 Find the solution with the minimum position
    let minPosition = solutions[0];
    for (let k = 1; k < solutions.length; k++) {
        if (solutions[k].position < minPosition.position) {
            minPosition = solutions[k];
        }
    }

    // 💬 Grab the correct solution
    const solution = minPosition.solution;

    return solution;
}

const result = sumPairs([10, 5, 2, 3, 7, 5], 10); // 🥚
console.log(result); // 🐣 [3, 7]
