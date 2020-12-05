function nbYear(p0, percent, aug, p) {
  let habitants = 0;
  let years = 0;

  // 💬 Loop until habitants are less that 'p'
  while (habitants < p) {
    // 💬 Calculate based on formula
    habitants = p0 + p0 * (percent / 100) + aug;
    console.log(habitants);
    // 💬 Update p0
    p0 = habitants;

    // 💬 Increase by 1 year
    years++;
  }

  return years;
}

const result = nbYear(1500, 5, 100, 5000);
console.log(result); // 🐣 15
