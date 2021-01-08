function longestConsec(strarr, k) {
  // 💬 Validate inputs
  if (!strarr.length || k < 0 || k > strarr.length) return '';

  const consecutiveStrings = [];
  let bigLength = 0;
  let longest = '';

  // 💬 Loop the 'strarr' array
  for (let i = 0; i < strarr.length; i++) {
    // 💬 Check the last item in array
    if (i + k > strarr.length) continue;

    // 💬 Cut between 'i' and 'i+k' from the array
    const stringJoined = strarr.slice(i, i + k).join('');

    // 💬 Push the new string into a new array
    consecutiveStrings.push(stringJoined);
  }

  // 💬 Calculate the max value based on length
  bigLength = Math.max(...consecutiveStrings.map(num => num.length));

  // 💬 Get the first element that has the bigLength
  longest = consecutiveStrings.find(text => text.length === bigLength);

  return longest;
}

const result = longestConsec(
  ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'],
  2
);

console.log(result); // 🐣 "folingtrashy"
