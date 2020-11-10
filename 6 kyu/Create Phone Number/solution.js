function createPhoneNumber(numbers) {
  // 💬 Join all the numbers into a string
  numbers = numbers.join('');

  // 💬 Create a regex to match the format
  const myRegex = /^(\d{3})(\d{3})(\d{4})/;

  // 💬 Replace the numbers with our regex format
  const phone = numbers.replace(myRegex, '($1) $2-$3');

  return phone;
}

const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // 🥚
console.log(result); // 🐣 '(123) 456-7890'
