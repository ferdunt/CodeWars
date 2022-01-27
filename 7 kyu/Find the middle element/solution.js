const gimme = triplet => {
  // 💬 Create a copy of the original []
  const copyTriplet = [...triplet];

  // 💬 Sort that get the middle element
  const middleElement = copyTriplet.sort((a, b) => a - b)[1];

  // 💬 Find the index of the middle element
  const position = triplet.indexOf(middleElement);

  return position;
};

const result = gimme([2, 3, 1]);
console.log(result); // 🐣 0
