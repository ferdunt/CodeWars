// 💬 Solve the problem with recursion
const sequenceSum = (begin, end, step) =>
  begin > end ? 0 : begin + sequenceSum(begin + step, end, step);

const result = sequenceSum(2, 6, 2);
console.log(result); // 🐣 12
