function XO(text) {
    // 💬 Match 'x' and 'o' with regex otherwise with '0'
    const x = text.match(/x/gi) || 0;
    const o = text.match(/o/gi) || 0;

    // 💬 Check if the length of both are equal
    if (x.length === o.length) {
        return true;
    } else {
        return false;
    }
}

const result = XO("ooxx"); // 🥚
console.log(result); // 🐣 true
