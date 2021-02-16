const stringy = size => {
  let text = '';
  // 💬 Loop "size" times
  for (let i = 1; i <= size; i++) {
    text += i % 2 === 0 ? '0' : '1';
  }
  return text;
};

const result = stringy(4);
console.log(result); // 🐣 "1010"
