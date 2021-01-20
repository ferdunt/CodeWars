function bmi(weight, height) {
  const calc = weight / height ** 2;
  switch (true) {
    case calc <= 18.5:
      return 'Underweight';
    case calc <= 25.0:
      return 'Normal';
    case calc <= 30.0:
      return 'Overweight';
    case calc > 30:
      return 'Obese';
  }
}

const result = bmi(80, 1.8);
console.log(result); // 🐣 "Normal"
