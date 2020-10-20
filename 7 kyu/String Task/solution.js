function stringTask(text) {
    // 💬 This regex will catch all the vowels
    const vowelRegex = /[a,e,i,o,u,y]/g;

    // 💬 This regex will catch all letters
    const consonantRegex = /([a-z])/g;

    // 💬 Convert to lowerCase() and delete vowels
    text = text.toLowerCase().replace(vowelRegex, "");

    // 💬 Update each letter with "."
    text = text.replace(consonantRegex, ".$1");

    return text;
}

const result = stringTask("aBAcAba"); // '.b.c.b'
console.log(result);
