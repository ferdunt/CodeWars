function isPrime(num) {
  // 💬 Check if is greater that 1
  if (num <= 1) return false;

  // 💬 Calculate the root of 'num'
  const myRoot = Math.sqrt(num);

  // 💬 Loop from 2 to myRoot
  for (let i = 2; i <= myRoot; i++) {
    // 💬 Calculate if there is a third divisible number
    if (num % i === 0) return false;
  }

  // 💬 Return true at the end
  return true;
}

const result = isPrime(4);
console.log(result); // 🐣 false
