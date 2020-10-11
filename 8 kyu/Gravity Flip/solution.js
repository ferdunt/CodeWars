const flip = (d, a) => {
    // 💬 "R" if is Right otherwise Left
    if (d === "R") {
        a.sort((a, b) => a - b);
    } else {
        a.sort((a, b) => b - a);
    }

    return a;
};

const result = flip("R", [3, 2, 1, 2]); // 🥚
console.log(result); // 🐣 [1, 2, 2, 3]
