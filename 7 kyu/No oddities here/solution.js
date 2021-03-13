const noOdds = values => values.filter(num => num % 2 === 0);

const result = noOdds([0, 1, 2, 3]);
console.log(result); // 🐣 [0, 2]
