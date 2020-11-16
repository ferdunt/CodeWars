function isIsogram(str) {
  // 💬 Convert all the string to lower case
  str = str.toLowerCase();

  // 💬 Create an array of unique values and get its length
  const uniqueString = [...new Set(str)].length;

  // 💬 Get the length of string
  const sizeString = str.length;

  // 💬 Check if 'uniqueString' and 'sizeString' are equal
  if (uniqueString === sizeString) {
    return true;
  } else {
    return false;
  }
}

const result = isIsogram('aba');
console.log(result); // 💬 false
