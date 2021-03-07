const addLength = str => str.split(' ').map(word => `${word} ${word.length}`);

const result = addLength('apple ban');
console.log(result); // 🐣 ["apple 5", "ban 3"]
