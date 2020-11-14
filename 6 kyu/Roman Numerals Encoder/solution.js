function solution(number) {
  // 💬 Define numerals and romans with their values
  const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let romanResult = '';

  // 💬 Loop all 'numerals'
  for (let i = 0; i < numerals.length; i++) {
    const currentNumeral = numerals[i];

    // 💬 Loop until 'number' is 0
    while (currentNumeral <= number) {
      romanResult += romans[i];
      number -= currentNumeral;
    }

    // 💬 If number is 0 we break the loop
    if (number <= 0) break;
  }

  return romanResult;
}

const result = solution(1990); // 🥚
console.log(result); // 🐣 'MCMXC'
