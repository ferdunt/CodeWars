function solution(string) {
    const regex = /([A-Z])/g;

    // 💬 Use 'replace' to add a comma before an UpperCase letter
    return string.replace(regex, " $1");
}

const result = solution("camelCasingTest"); // 🥚
console.log(result); // 🐣 "camel Casing Test"
