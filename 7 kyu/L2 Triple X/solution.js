function tripleX(text) {
    let isFollow = false;

    // 💬 Find the index of the first 'x'
    const firstX = text.indexOf("x");

    // 💬 Get the section after 'firstX'
    const sectionX = text.slice(firstX, firstX + 2);

    // 💬 Check if there is 'xx' after the 'firstX'
    if (sectionX === "xx") {
        isFollow = true;
    }

    return isFollow;
}

const result = tripleX("abraxxxas"); // 🥚
console.log(result); // 🐣 true
