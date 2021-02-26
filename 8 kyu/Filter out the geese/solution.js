function gooseFilter(birds) {
  const geese = ['African', 'Pilgrim'];
  return birds.filter(bird => !geese.includes(bird));
}

const result = gooseFilter(['Mallard', 'African']);
console.log(result); // 🐣 ["Mallard"]);
