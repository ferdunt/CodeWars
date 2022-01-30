const greet = name => {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};

const greet = greet('riley');
console.log(greet); // 🐣 "Hello Riley!"
