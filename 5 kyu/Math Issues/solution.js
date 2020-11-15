Math.round = function (number) {
  // 💬 Convert 'number' into array
  number = number.toString().split('.');
  let [left, right] = number;

  // 💬 Add 1 number to the right to be 2 digits
  if (right <= 9) right = right + 0;

  // 💬 Reduce the number to be 2 digits
  if (right >= 100) right = right[0] + right[1];

  // 💬 Check right side
  if (right >= 50) left++;

  return +left;
};

Math.ceil = function (number) {
  // 💬 Convert 'number' into array
  number = number.toString().split('.');
  let [left, right] = number;

  // 💬 Check if there is a right value
  if (right) left++;

  return +left;
};

Math.floor = function (number) {
  // 💬 Convert 'number' into array
  number = number.toString().split('.');
  let [left, right] = number;
  return +left;
};

const result1 = Math.round(20.5);
const result2 = Math.ceil(0.4);
const result3 = Math.floor(0.4);

console.log(result1); // 🐣 21
console.log(result2); // 🐣 1
console.log(result3); // 🐣 0
