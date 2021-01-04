function findShort(s) {
  // 💬 Convert to an array and get the size of each text
  const size = s.split(' ').map(text => text.length);
  // 💬 Get the min value
  const short = Math.min(...size);

  return short;
}

const result = findShort('bitcoin take over the world maybe who knows perhaps');
console.log(result); // 🐣 3
