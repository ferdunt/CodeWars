function digPow(n, p) {
  let sumDigits = 0;
  let k = 0;
  let calculation = 0;

  // 💬 Create an array of numbers from 'n'
  const numbers = n.toString().split('').map(Number);

  // 💬 Loop 'numbers'
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // 💬 Sum the currentNumber ^ p
    sumDigits += currentNumber ** p;
    // 💬 Increase 'p' by 1
    p++;
  }

  // 💬 Calculate k
  k = Math.trunc(sumDigits / n);

  // 💬 Calculate based on rules
  calculation = k * n;

  // 💬 Check if 'calculation' is equal to sumDigits
  if (calculation === sumDigits) {
    return k;
  } else {
    return -1;
  }
}

const result = digPow(695, 2);
console.log(result); // 🐣 2
