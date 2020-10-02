function reverseLetter(text) {
    // 💬 Create a regex to find any character from A to Z
    const regex = /[A-Z]/gi;

    // 💬 Match our regex then reverse and finally join
    const reversed = text.match(regex).reverse().join("");

    return reversed;
}

const result = reverseLetter("ultr53o?n"); // 🥚
console.log(result); // 🐣 "nortlu"
