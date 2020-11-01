function iqTest(numbers) {
    let differentNumber;
    numbers = numbers.split(" ");

    // 💬 Check if all the numbers are even
    const isEven = numbers.filter(number => number % 2 === 0).length > 1;

    if (isEven) {
        // 💬 Search the odd number
        differentNumber = numbers.find(number => number % 2 !== 0);
    } else {
        // 💬 Search the even number
        differentNumber = numbers.find(number => number % 2 === 0);
    }

    // 💬 Get the position of the 'differentNumber' + 1
    const position = numbers.findIndex(x => x === differentNumber) + 1;

    return position;
}

const result = iqTest("2 4 7 8 10"); // 🥚
console.log(result); // 🐣 3
