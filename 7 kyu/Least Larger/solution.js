function leastLarger(numbers, index) {
    // 💬 Get a copy of numbers and sort it
    let numbersOrdered = [...numbers].sort((a, b) => a - b);

    // 💬 Get the value at position 'index'
    let value = numbers[index];

    // 💬 Use find() to get the first number greater that 'value'
    let larger = numbersOrdered.find(n => n > value);

    // 💬 Find the index based on 'larger'
    let indexLarger = numbers.indexOf(larger);

    return indexLarger;
}

const result = leastLarger([1, 3, 5, 2, 4], 0); // 🥚
console.log(result); // 🐣 3
