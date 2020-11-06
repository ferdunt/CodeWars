'use strict';
function getCount(text) {
  // 💬 Create a regex to match vowels
  const myRegex = /a|e|i|o|u/g;

  // 💬 Match our regex to get an array of vowels or [] if there is no one
  const vowelsCount = text.match(myRegex) || [];

  // 💬 Return the size of our vowels array
  return vowelsCount.length;
}

const result = getCount('abracadabra'); // 🥚
console.log(result); // 🐣 5
