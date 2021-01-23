function nbDig(n, d) {
  let squared = [];

  // 💬 Squared from 0 to n
  for (let i = 0; i <= n; i++) {
    squared.push(i ** 2);
  }

  // 💬 Filter all the numbers that includes 'd'
  const digits = squared.filter(num => num.toString().indexOf(d) > -1).join('');

  // 💬 Join all the number and count each 'd'
  const counter = digits.split('').filter(n => n === d.toString()).length;

  return counter;
}

const result = nbDig(10, 1);
console.log(result); // 🐣 4
