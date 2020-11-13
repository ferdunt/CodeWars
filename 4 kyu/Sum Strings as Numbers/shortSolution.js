function sumStrings(num1, num2) {
  // 💬 Complement with 0 if the sizes does not match in both arrays
  if (num1.length < num2.length) {
    const difference = num2.length - num1.length;
    for (let j = 0; j < difference; j++) {
      num1 = '0' + num1;
    }
  } else if (num2.length < num1.length) {
    const difference = num1.length - num2.length;
    for (let j = 0; j < difference; j++) {
      num2 = '0' + num2;
    }
  }

  let sumString = '';
  let left = 0;
  let rigth = 0;

  // 💬 Loop over the num1
  for (let i = num1.length - 1; i >= 0; i--) {
    // 💬 Grab the last number of num1
    let lastNumber1 = Number(num1[i]);
    // 💬 Grab the last number of num2
    let lastNumber2 = Number(num2[i]);

    // 💬 Calculate the addition then convert to array of Strings
    let addition = lastNumber1 + lastNumber2 + left;

    // 💬 Check if the addition is > 9
    if (addition > 9) {
      rigth = addition % 10;
      left = Math.trunc(addition / 10);
    } else {
      rigth = addition;
      left = 0;
    }

    // 💬 Concatenate the 'right' number
    sumString = rigth + sumString;
  }

  sumString = left + sumString;

  return sumString;
}

const result = sumStrings('999', '1'); // 🥚
console.log(result); // 🐣 '1000'
