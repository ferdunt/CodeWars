const lastSurvivor = (letters, coords) => {
  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
    const position = coords[i];
    letters.splice(position, 1);
  }
  return letters.join('');
};

const result = lastSurvivor('zbk', [2, 1]);
console.log(result); // 🐣 "z"
