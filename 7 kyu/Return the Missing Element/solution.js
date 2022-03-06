const getMissingElement = superImportantArray => {
  for (let i = 0; i <= 9; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    }
  }
};

const result = getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]);
console.log(result); // 🐣 8
