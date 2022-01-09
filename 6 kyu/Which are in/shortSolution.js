const inArray = (array1, array2) => {
  return array1.filter(a1 => array2.find(a2 => a2.includes(a1))).sort();
};

const a1 = ['live', 'strong', 'arp'];
const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
const result = inArray(a1, a2); // 🥚
console.log(result); // 🐣 ["arp", "live", "strong"]
