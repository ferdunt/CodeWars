function titleCase(title, minorWords = "") {
    // 💬 Check if title is empty
    if (!title) return "";

    // 💬 Convert 'minorWords' to LowerCase and into an array
    minorWords = minorWords.toLowerCase().split(" ");

    // 💬 Convert 'title' to LowerCase and into an array
    title = title.toLowerCase().split(" ");

    // 💬 Convert the first word to UpperCase
    title[0] = title[0].charAt(0).toUpperCase() + title[0].slice(1);

    // 💬 Check 'minorWords' with 'title' and convert to UpperCase
    for (let i = 1; i < title.length; i++) {
        if (!minorWords.includes(title[i])) {
            title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
        }
    }

    // 💬 Convert our 'title' array into a string
    title = title.join(" ");

    return title;
}

const result = titleCase("THE WIND IN THE WILLOWS", "The In"); // 🥚
console.log(result); // 🐣 'The Wind in the Willows'
