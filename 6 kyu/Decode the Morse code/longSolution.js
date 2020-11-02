const MORSE_CODE = {
    "-.-.--": "!",
    ".-..-.": '"',
    "...-..-": "$",
    ".-...": "&",
    ".----.": "'",
    "-.--.": "(",
    "-.--.-": ")",
    ".-.-.": "+",
    "--..--": ",",
    "-....-": "-",
    ".-.-.-": ".",
    "-..-.": "/",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    "..--..": "?",
    ".--.-.": "@",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "..--.-": "_",
    "...---...": "SOS",
};

const decodeMorse = morseCode => {
    const text = morseCode
        // 💬 First split with 3 spaces to get words
        .split("   ")
        // 💬 Loop each word
        .map(word =>
            word
                // 💬 Second split with 1 space to get letters
                .split(" ")
                // 💬 Loop each letter to get the 'MORSE_CODE'
                .map(letter => MORSE_CODE[letter])
                // 💬 Join our letters array
                .join("")
        )
        // 💬 Join our word array
        .join(" ")
        // 💬 Delete extra spaces
        .trim();

    return text;
};

const result = decodeMorse(".... . -.--   .--- ..- -.. ."); // 🥚
console.log(result); // 🐣 "HEY JUDE"
