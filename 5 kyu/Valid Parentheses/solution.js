function validParentheses(parens) {
  // 💬 Create a regex to match a pair ()
  const myRegex = /(\()\)/g;

  // 💬 While there is a pair of ()
  while (myRegex.test(parens)) {
    // 💬 Update parens
    parens = parens.replace(myRegex, '');
  }

  // 💬 Check if there is not parenthesis left
  if (!parens) {
    return true;
  } else {
    return false;
  }
}

const result = validParentheses('(())((()())())');
console.log(result); // 🐣 true
