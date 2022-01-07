function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    // 💬 Calculate the extra space
    const space = nFloors - i - 1;

    // 💬 Calculate the "*" times to be printed
    const times = i * 2 + 1;

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
