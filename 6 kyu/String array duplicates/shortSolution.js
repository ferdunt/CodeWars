function dup(words) {
  const regexDuplicates = /(.)\1/g;
  const cleanArray = words.map(word => word.replace(regexDuplicates, '$1'));
  return cleanArray;
}

const result = dup(['abracadabra', 'alllottee', 'assessee']);
console.log(result); // 🐣 ["abracadabra","alote","asese"]
