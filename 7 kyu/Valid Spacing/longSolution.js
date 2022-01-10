const validSpacing = s => {
  const a = s.trim();
  console.log(a);
  const check = s.split(' ').filter(i => i === '');
  if (check.length === 0 || s === '') {
    return true;
  } else {
    return false;
  }
};

const result = validSpacing(' Hello world');
console.log(result); // 🐣 false
