function sumFracts(fractions) {
  // 💬 Check there is an array
  if (fractions.length <= 0) return null;

  let calc = fractions[0];

  // 💬 Calculate the sum of all fractions
  for (let i = 1; i < fractions.length; i++) {
    calc = add(calc, fractions[i]);
  }
  return calc;
}

// 💬 Function to sum fractions
const add = (fraction1, fraction2) => {
  const [num1, denom1] = fraction1;
  const [num2, denom2] = fraction2;

  let a = num1 * denom2 + num2 * denom1;
  let b = denom1 * denom2;

  if (Number.isInteger(a / b)) return a / b;

  return reduce(a, b);
};

// 💬 Function to reduce a fraction
const reduce = (numerator, denominator) => {
  const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
  };
  const myCalc = gcd(numerator, denominator);
  return [numerator / myCalc, denominator / myCalc];
};

const result = sumFracts([
  [1, 2],
  [1, 3],
  [1, 4],
]);
console.log(result); // 🐣 [13, 12]
