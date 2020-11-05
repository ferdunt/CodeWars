function sumPairs(numbers, total) {
    const solutions = [];

    // 💬 Get the index of possible solutions
    for (let i = 0; i < numbers.length; i++) {
        let arrayResized = numbers.slice(i + 1);

        let firstNumber = numbers[i];
        let desiredNumber = total - firstNumber;

        let isNumberIn = arrayResized.includes(desiredNumber);
        if (isNumberIn) {
            solutions.push({
                solution: [firstNumber, desiredNumber],
                position: arrayResized.indexOf(desiredNumber),
            });
        }
    }

    // 💬 Validate if we have posible solutions
    if (solutions.length < 1) return undefined;

    // 💬 Find the solution with the minimum position
    let minPosition = solutions[0];
    for (let j = 1; j < solutions.length; j++) {
        if (solutions[j].position < minPosition.position) {
            minPosition = solutions[j];
        }
    }

    // 💬 Grab the correct solution
    const solution = minPosition.solution;

    return solution;
}

const result = sumPairs([10, 5, 2, 3, 7, 5], 10); // 🥚
console.log(result); // 🐣 [3, 7]
