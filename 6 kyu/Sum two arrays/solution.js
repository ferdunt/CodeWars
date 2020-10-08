function addArrays(array1, array2) {
    // 💬 Convert each array into a single number
    const arrayToNumber1 = convertNumber(array1);
    const arrayToNumber2 = convertNumber(array2);

    // 💬 Add both numbers
    let sum = arrayToNumber1 + arrayToNumber2;

    // 💬 If the 'sum' is 0 return []
    if (sum === 0) return [];

    // 💬 Create a regex to match + and - numbers
    let myRegex = /-?[0-9]/gm;

    // 💬 Convert our sum into a string and match our regex and convert each string into a number
    let addArray = sum.toString().match(myRegex).map(Number);

    return addArray;
}

function convertNumber(array) {
    // 💬 Check if there is a number in each array otherwise asign 0
    return array.length > 0 ? parseInt(array.join("")) : 0;
}

const result = addArrays([6, 7], [6, 7]); // 🥚
console.log(result); // 🐣 [1, 3, 4]
