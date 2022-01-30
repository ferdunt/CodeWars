const i = word => {
  // 💬 Rule 1 - It shouldn't be empty
  if (word === '' || word === null) return 'Invalid word';

  // 💬 Rule 2 - The word cannot start with I
  if (word.charAt(0) === 'I') return 'Invalid word';

  // 💬 Rule 3 - Vowels shouldn't be >= that consonants
  const vowelsRegex = /[aeiou]/g;
  const vowelSize = word.toLowerCase().match(vowelsRegex)?.length;
  const consonantSize = word.length - vowelSize;
  if (vowelSize >= consonantSize) return 'Invalid word';

  // 💬 Rule 4 - The first letter shouldn't be lowercase
  if (word.charAt(0) === word.charAt(0).toLowerCase()) return 'Invalid word';

  return `i${word}`;
};

const result = i('Phone');
console.log(result); // 🐣 "iPhone"
