function solution(str, ending) {
  const size = ending.length;
  if (size === 0) return true;

  return str.slice(-size) === ending;
}

const result = solution('abcde', 'cde');
console.log(result); // 🐣 true
