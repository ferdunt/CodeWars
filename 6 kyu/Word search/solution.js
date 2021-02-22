let indexOf = (words, target) => {
  // 💬 Start position "left" and "right"
  let left = 0;
  let right = words.length - 1;

  // 💬 Loop until we get the last left
  while (left <= right) {
    // 💬 Calculate the middle of the array
    const middle = Math.floor((right + left) / 2);

    // 💬 Check the current word with the target
    if (target.length > words[middle].length) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // 💬 Return the target position based on the last "left"
  return words.indexOf(target, left);
};

const words = [
  'JaCk',
  'Jack',
  'jack',
  'jackk',
  'COdewars',
  'codeWars',
  'abcdefgh',
  'codewars',
];
const target = 'codewars';

const result = indexOf(words, target);
console.log(result); // 🐣 7
