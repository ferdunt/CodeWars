function rgb(r, g, b) {
  r = validateValue(r);
  g = validateValue(g);
  b = validateValue(b);

  let rgb = '';
  rgb += convertToHex(r);
  rgb += convertToHex(g);
  rgb += convertToHex(b);
  return rgb;
}

// 💬 Validate if the current value is between 0 and 255
const validateValue = value => {
  if (value > 255) return 255;

  if (value < 0) return 0;

  return value;
};

// 💬 Store hexadecimal values in an array
const valuesHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// 💬 Convert a decimal to hexadecimal
const convertToHex = value => {
  // 💬 If value is 0 return '00'
  if (value === 0) return '00';

  let hex = '';

  // 💬 Loop until value is different that 0
  while (value !== 0) {
    // 💬 Loop 2 times in case there is 1 hexadecimal
    for (let i = 1; i <= 2; i++) {
      // 💬 Check if value is 0
      if (value === 0) {
        hex = 0 + hex;
        break;
      }
      const remainder = value % 16;
      hex = valuesHex[remainder] + hex;
      value = parseInt(value / 16);
    }
  }

  return hex;
};

const result = rgb(7, 91, 298);
console.log(result); // 🐣 "075BFF"
