const maxRedigit = num => {
  if (num <= 99 || num >= 1000) return null;

  const newValue = num
    .toString()
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('');

  return Number(newValue);
};

const result = maxRedigit(123);
console.log(result); // 🐣 321
