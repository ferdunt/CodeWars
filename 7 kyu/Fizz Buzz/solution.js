function fizzbuzz(n) {
  const values = [];

  // 💬 Loop from 1 to 'n'
  for (let i = 1; i <= n; i++) {
    let text = '';
    // 💬 Check if the current 'i' is multiple of 3 or 5
    if (i % 3 === 0) text += 'Fizz';
    if (i % 5 === 0) text += 'Buzz';

    // 💬 Check there is no 'text'
    if (text !== '') {
      values.push(text);
    } else {
      values.push(i);
    }
  }

  return values;
}

const result = fizzbuzz(3);
console.log(result); // 🐣 [1, 2, "Fizz"]
