function findNeedle(haystack) {
  const position = haystack.findIndex(item => item === 'needle');
  return `found the needle at position ${position}`;
}

const result = findNeedle([
  'hay',
  'junk',
  'hay',
  'hay',
  'moreJunk',
  'needle',
  'randomJunk',
]);
console.log(result); // 🐣 "found the needle at position 5"
