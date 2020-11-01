function encrypt(text, n) {
    // 💬 Validation 1
    if (text === "") {
        return "";
    }

    // 💬 Validation 2
    if (text === null) {
        return null;
    }

    // 💬 Validation 3
    if (n <= 0) {
        return text;
    }
    let decryptedText = "";

    // 💬 Loop 'n' times
    for (let i = 0; i < n; i++) {
        // 💬 Encrypt the odd index
        for (let j = 1; j < text.length; j += 2) {
            decryptedText += text[j];
        }

        // 💬 Encrypt the even index
        for (let k = 0; k < text.length; k += 2) {
            decryptedText += text[k];
        }
    }

    return decryptedText;
}

const resultEncrypt = encrypt("This is a test!", 1); // 🥚
console.log(resultEncrypt); // 🐣 "hsi  etTi sats!"

function decrypt(encryptedText, n) {
    // 💬 Validation 1
    if (encryptedText === "") {
        return "";
    }

    // 💬 Validation 2
    if (encryptedText === null) {
        return null;
    }

    // 💬 Validation 3
    if (n <= 0) {
        return encryptedText;
    }

    // 💬 Create an empty array with the size of the 'encryptedText'
    let decryptedArray = new Array(encryptedText.length);

    // 💬 Loop 'n' times
    for (let i = 0; i < n; i++) {
        let increment = 0;

        // 💬 Decrypt the odd index of the 'encryptedText'
        for (let j = 1; j < encryptedText.length; j += 2) {
            decryptedArray[j] = encryptedText[increment];
            increment++;
        }

        // 💬 Decrypt the even index of the 'encryptedText'
        for (let k = 0; k < encryptedText.length; k += 2) {
            decryptedArray[k] = encryptedText[increment];
            increment++;
        }

        // 💬 Concatenate the 'decryptedArray' into a single string
        encryptedText = decryptedArray.join("");
    }

    return encryptedText;
}

const resultDecrypt = decrypt("hsi  etTi sats!", 1); // 🥚
console.log(resultDecrypt); // 🐣 "This is a test!"
