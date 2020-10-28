function accum(myString) {
    let myArray = [];
    let finalString = "";

    // 💬 Convert to lowerCase
    myString = myString.toLowerCase();

    // 💬 We create a new array with 'myString'
    for (let i = 0; i < myString.length; i++) {
        myArray.push(myString[i].repeat(i + 1));
    }

    // 💬 Change the first letter to upperCase
    for (let j = 0; j < myArray.length; j++) {
        myArray[j] = myArray[j].charAt(0).toUpperCase() + myArray[j].slice(1);
    }

    finalString = myArray.join("-");

    return finalString;
}

const result = accum("abcd"); // 🥚
console.log(result); // 🐣 "A-Bb-Ccc-Dddd"
