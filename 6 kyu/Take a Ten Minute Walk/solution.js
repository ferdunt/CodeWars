function isValidWalk(walks) {
  // 💬 Create an empty object
  const directions = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  // 💬 Check if the 'walks' array is 10
  if (walks.length !== 10) return false;

  // 💬 Update the count in 'directions' object
  walks.forEach(walk => directions[walk]++);

  // 💬 Destructure our object
  const { n, s, w, e } = directions;

  // 💬 Check the rules of the problem
  return n - s === 0 && w - e === 0 ? true : false;
}

const result = isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
console.log(result);
