function sakuraFall(v) {
    // 💬 Calculate the distance from branch to ground
    const distance = 5 * 80;

    // 💬 If is not positive return 0 otherwise calculate the time
    return v >= 1 ? distance / v : 0;
}

const result = sakuraFall(10); // 🥚
console.log(result); // 🐣 40
