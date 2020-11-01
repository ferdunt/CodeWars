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

    // 💬 Convert 'text' to 'array'
    let textArray = text.split("");
    let encryptedText = "";

    // 💬 Loop 'n' times
    for (let i = 0; i < n; i++) {
        // 💬 Initialize 'encryptedText'
        encryptedText = "";

        // 💬 Create an array to store index used to avoid repeat
        const indexUsed = [];

        // 💬 Loop the [textArray] with jumps of 2
        for (let j = 1; j < textArray.length; j += 2) {
            // 💬 Check if the current 'j' is not included in [indexUsed]
            if (!indexUsed.includes(j)) {
                // 💬 Concatenate the letter in [textArray] at position 'j'
                encryptedText += textArray[j];

                // 💬 Push the current 'j' in [indexUsed]
                indexUsed.push(j);

                // 💬 Check if the next iteration ends to restart 'j'
                const nextIteration = j + 2;
                if (nextIteration >= textArray.length) {
                    j = -2;
                }
            }
        }

        // 💬 Update [textArray] with the last encryption
        textArray = indexUsed.map(index => textArray[index]);
    }
    return encryptedText;
}

const resultEncrypt = encrypt("This is a test!", 1);
console.log(resultEncrypt);

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

    // 💬 Convert 'text' to 'array'
    let textArray = encryptedText.split("");
    let decrypedText = "";

    // 💬 Loop 'n' times
    for (let i = 0; i < n; i++) {
        // 💬 Initialize 'decrypedText'
        decrypedText = "";

        // 💬 Create an array to store index used to avoid repeat
        let indexUsed = [];

        // 💬 Calculate the first item to start decrypt
        const startIndex = Math.floor(textArray.length / 2);

        // 💬 Calculate the jump and iterations to decryp in the loops
        const jumps = startIndex + 1;
        let iterations = -1 * jumps;

        // 💬 Loop the [textArray] with the jumps calculated above
        for (let j = startIndex; j < textArray.length; j += jumps) {
            // 💬 Check if the current 'j' is not included in [indexUsed]
            if (!indexUsed.includes(j)) {
                // 💬 Concatenate the letter in [textArray] at position 'j'
                decrypedText += textArray[j];

                // 💬 Push the current 'j' in [indexUsed]
                indexUsed.push(j);

                // 💬 Check if the next iteration ends to restart 'j'
                const nextIteration = j + jumps;
                if (nextIteration >= textArray.length) {
                    j = iterations;
                    iterations = iterations + 1;
                }
            }
        }

        // 💬 Update [textArray] with the last encryption
        textArray = indexUsed.map(index => textArray[index]);
    }
    return decrypedText;
}

const resultDecrypt = decrypt(" Tah itse sits!", 3);
console.log(resultDecrypt);
