function isInMiddle(text) {
    // 💬 Create a regex to find 'abc'
    let regex = /(abc)/;
    let answer = false;

    // 💬 Check if there is at least 1 'abc' otherwise return false
    if (regex.test(text) === false) return answer;

    // 💬 Split the text based in the regex
    let myArray = text.split(regex);

    // 💬 Get all the 'abc' into an 'counter' array
    let counter = myArray.filter(n => n === "abc");

    // 💬 Check if the 'counter' array length is odd
    if (counter.length % 2 !== 0) {
        // 💬 Get the left and right values from 'myArray'
        const left = myArray[0].length;
        const right = myArray[myArray.length - 1].length;

        // 💬 Check some rules for the left and right values
        if (left === right || left - right === 1 || right - left === 1) {
            answer = true;
        }
    }

    return answer;
}

const result = isInMiddle("AabcBB"); // 🥚
console.log(result); // 🐣 true
