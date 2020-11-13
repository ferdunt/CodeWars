const palindromeChainLength = n => {
  let counter = 0;

  // 💬 Loop until 'n' is Palindrome
  while (!isPalindrome(n)) {
    n = newValue(n);
    counter++;
  }

  return counter;
};

// 💬 Function returns number reversed
const reverse = number => {
  let numberReversed = 0;

  while (number >= 1) {
    numberReversed = numberReversed * 10;
    numberReversed = numberReversed + (number % 10);
    number = Math.trunc(number / 10);
  }
  return numberReversed;
};

// 💬 Function returns true or false
const isPalindrome = number => {
  const numberReversed = reverse(number);
  return numberReversed === number ? true : false;
};

// 💬 Function returns a new value based on rules
const newValue = number => {
  const numberReversed = reverse(number);
  return number + numberReversed;
};

const result = palindromeChainLength(87); // 4;
console.log(result);
