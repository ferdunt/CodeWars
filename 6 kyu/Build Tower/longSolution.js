function towerBuilder(nFloors) {
  const tower = [];
  let space = nFloors;
  let start = 1;

  for (let i = 0; i < nFloors; i++) {
    // 💬 Calculate the extra space
    space -= 1;

    // 💬 Calculate the "*" times to be printed
    const times = i + start;
    start++;

    // 💬 Create a string based on "space" and "times"
    const floor = `${' '.repeat(space)}${'*'.repeat(times)}${' '.repeat(
      space
    )}`;

    // 💬 Push it to the "tower arrau"
    tower.push(floor);
  }
  return tower;
}

const result = towerBuilder(3); // 🥚
console.log(result); // 🐣 '["  *  "," *** ","*****"]'
