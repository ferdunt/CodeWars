function divisors(integer) {
  let numbers = [];

  // 💬 Loop from 2 to "integer - 1"
  for (let i = 2; i < integer; i++) {
    // 💬 Check if "i" is divisible
    integer % i === 0 && numbers.push(i);
  }

  // 💬 Return "numbers" or "prime"
  return numbers.length > 0 ? numbers : `${integer} is prime`;
}

const result = divisors(12);
console.log(result); // 🐣 [2, 3, 4, 6]
