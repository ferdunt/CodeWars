function hello(name) {
    let newName;
    if (name) {
        // 💬 Convert to lowerCase and split into an array
        newName = name.toLowerCase().split("");
        // 💬 Delete the first character and replace with a upperCase
        newName.splice(0, 1, name.charAt(0).toUpperCase());
        // 💬 Join our array and concatenate with a message
        newName = "Hello, " + newName.join("") + "!";
    } else {
        newName = "Hello, World!";
    }
    return newName;
}

const result = hello("johN"); // 🥚
console.log(result); // 🐣 "Hello, John!"
