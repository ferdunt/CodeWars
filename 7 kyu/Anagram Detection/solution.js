const isAnagram = (test, original) => {
  const a = test.toLowerCase().split('').sort().join('');
  const b = original.toLowerCase().split('').sort().join('');
  console.log(a);
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const result = isAnagram('foefet', 'toffee');
console.log(result); // 🐣 true
