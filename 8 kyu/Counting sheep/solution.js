const countSheeps = arrayOfSheep => arrayOfSheep.filter(Boolean).length;

var array1 = [true, false, false, true];

const result = countSheeps(array1);
console.log(result); // 🐣 2
