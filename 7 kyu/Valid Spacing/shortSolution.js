const validSpacing = s => {
  const word = s.trim();
  return word && !s.includes(' ');
};

const result = validSpacing(' Hello world');
console.log(result); // 🐣 false
