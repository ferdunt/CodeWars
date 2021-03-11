function dontGiveMeFive(start, end) {
  let counter = 0;

  // 💬 Loop from "start" to "end"
  for (let i = start; i <= end; i++) {
    // 💬 Check that there isn't a "5"
    if (!`${i}`.includes(5)) counter++;
  }

  return counter;
}

const result = dontGiveMeFive(1, 9);
console.log(result); // 🐣 8
