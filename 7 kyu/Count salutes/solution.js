function countSalutes(hallway) {
  // 💬 Delete "-"
  hallway = hallway.replace(/-/g, '').split('');
  let counter = 0;

  // 💬 Loop all the array
  for (let i = 0; i < hallway.length; i++) {
    const left = hallway[i];
    if (left === '>') {
      // 💬 Loop from "i+1" ahead
      for (let j = i + 1; j < hallway.length; j++) {
        const right = hallway[j];
        // 💬 Check if there is "<" so increase counter
        right === '<' && counter++;
      }
    }
  }

  return counter * 2;
}

const result = countSalutes('<---->---<---<-->');
console.log(result); // 🐣 4
