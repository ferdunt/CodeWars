'use strict';
function DNAStrand(dna) {
  // 💬 Create an object of complementary side for each symbol
  const complementary = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  // 💬 Loop 'dna' and match with 'complementary' object
  const newDNA = dna.split('').map(dna => {
    // 💬 Return the new symbol of the dna
    return complementary[dna];
  });

  // 💬 Convert our 'newDNA' array into string
  return newDNA.join('');
}

const result = DNAStrand('AAAA'); // 🥚
console.log(result); // 🐣 'TTTT'
