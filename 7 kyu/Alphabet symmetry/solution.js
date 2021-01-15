function solve(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let positions = [];

  for (let i = 0; i < arr.length; i++) {
    const phrase = arr[i].toLowerCase();
    let counter = 0;

    for (let j = 0; j < phrase.length; j++) {
      const letter = phrase[j];
      const letterPosition = alphabet.indexOf(letter);
      if (letterPosition === j) counter++;
    }

    positions.push(counter);
  }

  return positions;
}

const result = solve(['abode', 'ABc', 'xyzD']);
console.log(result); // 🐣 [4, 3, 1]
