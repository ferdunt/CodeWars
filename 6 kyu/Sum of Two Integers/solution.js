function add(x, y) {
  while (y != 0) {
    // 💬 Bitwise AND
    let carry = x & y;

    // 💬 Update 'x' with Bitwise XOR
    x = x ^ y;

    // 💬 Update 'y' with LEFT SHIFT
    y = carry << 1;
  }

  return x;
}

const result = add(5, 3);
console.log(result); // 🐣 8
