function sayMeOperations(text) {
    // 💬 Convert the text into an array of numbers
    text = text.split(" ").map(Number);

    // 💬 Create a 'message' to store our operations
    let message = [];

    // 💬 Create index1 and index2 to start evaluating the 2 first values
    let index1 = 0;
    let index2 = 1;

    // 💬 Loop inside the 'text' array starting at position 2
    for (let i = 2; i < text.length; i++) {
        let first = text[index1];
        let second = text[index2];

        // 💬 Create a true switch to evaluate the possible operations
        switch (true) {
            case first + second === text[i]:
                message.push("addition");
                break;
            case first - second === text[i]:
                message.push("subtraction");
                break;
            case first * second === text[i]:
                message.push("multiplication");
                break;
            case parseInt(first / second) === text[i]:
                message.push("division");
                break;
        }

        // 💬 Increase the index to move along the total array
        index1++;
        index2++;
    }

    // 💬 Concatenate the string with ','
    message = message.join(", ");

    return message;
}

const result = sayMeOperations("9 4 5 20 25"); // 🥚
console.log(result); // 🐣 "subtraction, multiplication, addition"
