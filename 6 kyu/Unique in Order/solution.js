const uniqueInOrder = iterable => {
  let lastItem = '';
  let unique = [];

  // 💬 Loop all the items in 'iterable'
  for (let i = 0; i < iterable.length; i++) {
    const currentItem = iterable[i];

    // 💬 Check if the current item was equal to the last item
    if (currentItem !== lastItem) {
      // 💬 Push it and update last item
      unique.push(currentItem);
      lastItem = currentItem;
    }
  }

  return unique;
};
const result = uniqueInOrder('ABBCcAD');
console.log(result); // 🐣 ['A', 'B', 'C', 'c', 'A', 'B']
