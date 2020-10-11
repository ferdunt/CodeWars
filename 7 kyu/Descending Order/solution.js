function descendingOrder(number) {
    // 💬 Convert to string, array, sort them and finally join them
    let newValue = number
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join("");

    // 💬 Return the value converting from String to Number
    return Number(newValue);
}

const result = descendingOrder(123456789); // 987654321;
console.log(result);
