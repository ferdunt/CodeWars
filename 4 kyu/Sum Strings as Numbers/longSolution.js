function sumStrings(a, b) {
  // 💬 Convert the number in array of numbers
  const num1 = a.split('').map(Number);
  const num2 = b.split('').map(Number);

  // 💬 Check the biggest size of both arrays
  const size = Math.max(num1.length, num2.length);

  // 💬 Complement with 0 if the sizes does not match in both arrays
  if (num1.length !== size) {
    const difference = size - num1.length;
    for (let j = 0; j < difference; j++) {
      num1.unshift(0);
    }
  }

  let sumString = '';
  let left = 0;
  let rigth = 0;
  let sizeNum2 = num2.length - 1;

  // 💬 Loop over the num1
  for (let i = num1.length - 1; i >= 0; i--) {
    // 💬 Grab the last number of num1
    let lastNumber1 = num1[i];
    // 💬 Grab the last number of num2, if there is no one then take 0
    let lastNumber2 = num2[sizeNum2] || 0;

    // 💬 Calculate the addition then convert to array of Strings
    let addition = String(lastNumber1 + lastNumber2 + left).split('');

    // 💬 Check if the addition is > 9
    if (addition.length === 2) {
      // 💬 We have a left and right number
      left = Number(addition[0]);
      rigth = addition[1];
    } else {
      // 💬 We have a right number
      left = 0;
      rigth = addition[0];
    }

    // 💬 Check if the last addition is 0 then break
    if (i === 0 && rigth === '0' && left === 0) {
      break;
    }

    // 💬 Concatenate the 'right' number
    sumString = rigth + sumString;

    // 💬 Decrease the num2
    sizeNum2--;
  }

  // 💬 Check if there is a 'left' value
  if (left) sumString = left + sumString;

  return sumString;
}

const result = sumStrings('8797', '45'); // 🥚
console.log(result); // 🐣 '8842'
