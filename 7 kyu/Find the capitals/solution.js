const capitals = word => {
  let capitals = [];

  // 💬 Loop each letter in "word"
  [...word].forEach((letter, i) => {
    // 💬 If the letter is UpperCase push it in "capitals"
    letter === letter.toUpperCase() && capitals.push(i);
  });

  return capitals;
};

const result = capitals('CodEWaRs');
console.log(result); // 🐣 [0, 3, 4, 6]
