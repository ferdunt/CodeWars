// 💬 Create a function declaration then we return the string (old school style) 👴🏻
function longGreet(name) {
    return "Hello, " + name + " how are you doing today?";
}

let longResult = longGreet("Ryan"); // 🥚
console.log(longResult); // 🐣 "Hello, Ryan how are you doing today?"

// 💬 Create a arrow function with template literals 😉
const shortGreet = (name) => `Hello, ${name} how are you doing today?`;

let shortResult = shortGreet("Ryan"); // 🥚
console.log(shortResult); // 🐣 "Hello, Ryan how are you doing today?"
