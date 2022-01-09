function inArray(array1, array2) {
  array1 = array1.sort();
  let myArray = [];

  for (let i = 0; i < array1.length; i++) {
    const element1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      const element2 = array2[j];
      if (element2.includes(element1)) {
        myArray.push(element1);
        break;
      }
    }
  }
  return myArray;
}

const a1 = ['live', 'strong', 'arp'];
const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
const result = inArray(a1, a2); // 🥚
console.log(result); // 🐣 ["arp", "live", "strong"]
