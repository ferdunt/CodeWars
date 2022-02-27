const solve = s => {
  let numberLowerCase;
  let numberUpperCase;

  if (s.match(/[a-z]/g)) {
    numberLowerCase = s.match(/[a-z]/g).length;
  }

  if (s.match(/[A-Z]/g)) {
    numberUpperCase = s.match(/[A-Z]/g).length;
  }

  if (numberUpperCase > numberLowerCase) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
};

const result = solve('CODe');
console.log(result); // 🐣 "CODE"
