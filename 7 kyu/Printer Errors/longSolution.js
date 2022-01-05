const printerError = colors => {
  // 💬 Get the arraz length
  const size = colors.length;

  // 💬 Create a regex to match letters from "a" to "m"
  const regexGood = /[a-m]/;

  // 💬 Convert to array, filter letters based on regex
  const errors = colors.split('').filter(item => !item.match(regexGood)).length;

  return `${errors}/${size}`;
};

const label = 'aaaxbbbbyyhwawiwjjjwwm';
const result = printerError(label);
console.log(result); // 🐣 "8/22"
