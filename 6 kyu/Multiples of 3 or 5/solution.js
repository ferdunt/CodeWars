function solution(number) {
  // 💬 Create an array of multiples of 3 and 5
  let multiples = [];

  // 💬 Validate if is a negative number
  if (number <= -1) return 0;

  // 💬 Loop from 0 until 'number'
  for (let i = 1; i < number; i++) {
    // 💬 Check if is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  // 💬 Sum all the items in the array and return it
  return multiples.reduce((acc, cur) => acc + cur, 0);
}

const result = solution(10);
console.log(result);
