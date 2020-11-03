const fatFingers = function (text) {
    // 💬 Validate input
    if (text === null) return null;

    // 💬 This variable will store if 'CapsLock' is enabled
    let isCapsEnabled = false;

    // 💬 Convert our 'text' to an array and loop it
    const typedText = text
        .split("")
        .map(letter => {
            // 💬 For each letter check if it is an 'a' or 'A'
            if (letter === "a" || letter === "A") {
                // 💬 Change 'isCapsEnabled' to true or false
                isCapsEnabled = !isCapsEnabled;
                // 💬 Return so we ommit the letter 'a' or 'A'
                return;
            }

            // 💬 Check if 'isCapsEnabled' is enabled
            if (isCapsEnabled) {
                if (letter === letter.toUpperCase()) {
                    // 💬 If the current letter is 'UpperCase' change to 'LowerCase'
                    letter = letter.toLowerCase();
                } else {
                    // 💬 If the current letter is 'LowerCase' change to 'UpperCase'
                    letter = letter.toUpperCase();
                }
            }

            return letter;
        })
        .join("");

    return typedText;
};

const result = fatFingers("AaVakA"); // 🥚
console.log(result); // 🐣 "Vk"
