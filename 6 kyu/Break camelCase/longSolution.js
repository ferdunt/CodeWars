function solution(string) {
    const regex = /([A-Z])/g;

    // 💬 Use 'replace' to add a comma before an UpperCase letter
    const phrase = string.replace(regex, ",$1");

    // 💬 Split our 'phrase' and join it
    return phrase.split(",").join(" ");
}

const result = solution("camelCasingTest"); // 🥚
console.log(result); // 🐣 "camel Casing Test"
